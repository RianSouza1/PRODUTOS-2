"""OfferVault: shared operational records, SQLite transactions and personal-link access."""
import argparse
import contextlib
import datetime as dt
import hashlib
import http.cookies
import ipaddress
import json
import mimetypes
import math
import os
import re
import secrets
import sqlite3
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from store import Store
from domain import Problem, COOKIE, SESSION_SECONDS, OWNER_EMAIL

class Handler(BaseHTTPRequestHandler):
    server_version='OfferVault'
    def log_message(self,*args):
        # Do not log request headers, cookies, links or query strings.
        return

    def cookie(self,name=COOKIE):
        jar=http.cookies.SimpleCookie()
        try:jar.load(self.headers.get('Cookie',''))
        except http.cookies.CookieError:return ''
        return jar[name].value if name in jar else ''

    def client_ip(self):
        value=self.headers.get('X-Real-IP','') if self.client_address[0]=='127.0.0.1' else self.client_address[0]
        try:return str(ipaddress.ip_address(value))
        except ValueError:return self.client_address[0]

    def send_json(self,data,status=200,session=None):
        payload=json.dumps(data,ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header('Content-Type','application/json; charset=utf-8')
        self.send_header('Content-Length',str(len(payload)))
        self.send_header('Cache-Control','no-store')
        self.send_header('X-Content-Type-Options','nosniff')
        if session is not None:
            secure='; Secure' if self.server.origin.startswith('https:') else ''
            self.send_header('Set-Cookie',COOKIE+'='+session+'; Path=/operacao/; HttpOnly; SameSite=Lax; Max-Age='+str(SESSION_SECONDS if session else 0)+secure)
        self.end_headers();self.wfile.write(payload)

    def auth(self):
        user=self.server.store.session_user(self.cookie())
        if not user:raise Problem('Use seu link pessoal para acessar a operação.',401)
        return user

    def route(self):
        return urllib.parse.urlsplit(self.path).path.removeprefix('/operacao')

    def do_GET(self):
        try:
            route=self.route()
            if route=='/api/auth':
                user=self.server.store.session_user(self.cookie())
                return self.send_json({'signed_in':bool(user),'user':user})
            if route in ('/api/state','/api/export'):
                state=self.server.store.state(self.auth())
                if route=='/api/export':
                    state.pop('me',None)
                    state['historical_cycles']=[{'id':c['id'],'snapshot':self.server.store.historical(self.auth(),c['id'])} for c in state['niche_cycles']]
                return self.send_json(state)
            if route=='/api/credentials':
                user=self.auth();query=urllib.parse.parse_qs(urllib.parse.urlsplit(self.path).query)
                cycle=int(query['cycle'][0]) if 'cycle' in query else None
                return self.send_json(self.server.store.credentials(user,query.get('niche_id',[''])[0],cycle))
            if route=='/api/history':
                user=self.auth()
                key=urllib.parse.parse_qs(urllib.parse.urlsplit(self.path).query).get('id',[''])[0]
                return self.send_json(self.server.store.historical(user,key))
            if route=='/api/health':return self.send_json({'ok':True})
            if route.startswith('/api/'):raise Problem('Endereço não encontrado.',404)
            relative=urllib.parse.unquote(route).lstrip('/') or 'index.html'
            target=(self.server.web/relative).resolve()
            if self.server.web not in target.parents or not target.is_file():raise Problem('Página não encontrada.',404)
            data=target.read_bytes()
            if target.name=='index.html':
                version=hashlib.sha256((self.server.web/'app.js').read_bytes()+(self.server.web/'styles.css').read_bytes()).hexdigest()[:12]
                data=data.replace(b'{{ASSET_VERSION}}',version.encode())
            self.send_response(200)
            self.send_header('Content-Type',mimetypes.guess_type(str(target))[0] or 'application/octet-stream')
            self.send_header('Content-Length',str(len(data)))
            self.send_header('Cache-Control','no-cache' if target.name=='index.html' else 'public, max-age=300')
            self.end_headers();self.wfile.write(data)
        except Problem as e:self.send_json({'error':e.message},e.status)
        except Exception:self.send_json({'error':'Não foi possível carregar os dados. Tente novamente.'},503)

    def do_POST(self):
        try:
            if self.headers.get('Origin')!=self.server.origin:raise Problem('Solicitação não autorizada.',403)
            if not self.headers.get('Content-Type','').startswith('application/json'):raise Problem('Formato inválido.')
            length=int(self.headers.get('Content-Length','0'))
            if length<=0 or length>64000:raise Problem('Solicitação muito grande ou vazia.',413)
            body=json.loads(self.rfile.read(length))
            if not isinstance(body,dict):raise Problem('Solicitação inválida.')
            route=self.route()
            if route=='/api/access':
                session,user=self.server.store.access(body.get('token'),self.client_ip())
                return self.send_json({'signed_in':True,'user':user},session=session)
            if route=='/api/bootstrap':
                # The existing Ciclo40 administrator may establish this independent workspace.
                previous=self.cookie('ciclo40_session')
                if not re.fullmatch('[a-f0-9]{64}',previous):raise Problem('Abra seu acesso de administrador do Ciclo40 para iniciar este espaço.',401)
                upstream=urllib.request.Request('https://storeinfocus.com/ciclo40/api/auth',headers={'Cookie':'ciclo40_session='+previous})
                try:
                    with urllib.request.build_opener(NoRedirect()).open(upstream,timeout=10) as response:owner=json.load(response)
                except (urllib.error.URLError,ValueError):raise Problem('Abra seu painel de administrador do Ciclo40 e tente novamente.',401)
                if not owner.get('signedIn') or owner.get('user',{}).get('email','').lower()!=OWNER_EMAIL:raise Problem('Abra seu acesso de administrador do Ciclo40 para iniciar este espaço.',401)
                session,user=self.server.store.bootstrap(owner['user'].get('name') or 'Rian',OWNER_EMAIL)
                return self.send_json({'signed_in':True,'user':user},session=session)
            if route=='/api/logout':
                self.server.store.logout(self.cookie())
                return self.send_json({'signed_in':False},session='')
            if route=='/api/command':
                user=self.auth()
                result=self.server.store.command(user,body)
                session=None
                if body.get('action')=='rotate_link' and body.get('id')==user['id'] and result.get('access_token'):
                    session,user=self.server.store.access(result['access_token'],self.client_ip())
                return self.send_json({'result':result,'state':self.server.store.state(user)},session=session)
            raise Problem('Endereço não encontrado.',404)
        except Problem as e:self.send_json({'error':e.message},e.status)
        except sqlite3.IntegrityError:self.send_json({'error':'Esse vínculo ou registro já existe. Atualize a tela para continuar.'},409)
        except (ValueError,TypeError,json.JSONDecodeError):self.send_json({'error':'Solicitação inválida.'},400)
        except Exception:
            self.send_json({'error':'Não foi possível salvar. Seus campos foram preservados; tente novamente.'},503)

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*args,**kwargs):
        return None

def serve(database,web,origin,port):
    server=ThreadingHTTPServer(('127.0.0.1',port),Handler)
    server.store=Store(database);server.web=Path(web).resolve();server.origin=origin
    return server

if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--database',required=True);parser.add_argument('--web',required=True)
    parser.add_argument('--origin',default='https://storeinfocus.com');parser.add_argument('--port',type=int,default=8766)
    args=parser.parse_args()
    serve(args.database,args.web,args.origin,args.port).serve_forever()
