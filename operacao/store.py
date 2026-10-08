"""OfferVault: shared operational records, SQLite transactions and personal-link access."""
import argparse
import contextlib
import datetime as dt
import hashlib
import hmac
from cryptography.fernet import Fernet
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

from domain import Problem, SCHEMA, TABLES, FIELDS, PHASES, LAUNCH_STATES, STATUSES, SESSION_SECONDS, OWNER_EMAIL, NICHES_STAGES, identifier, now, text_value, url_value, token_hash, PRODUCTION, TRANSLATION, PUBLICATION
from trello_import import import_niche

class Store:
    def __init__(self, path):
        self.path=str(path)
        self.encryption_key=os.environ.get('OFFERVAULT_ENCRYPTION_KEY','').encode()
        self.cipher=Fernet(self.encryption_key)
        Path(path).parent.mkdir(parents=True,exist_ok=True)
        with contextlib.closing(self.connect()) as db:
            db.execute('CREATE TABLE IF NOT EXISTS schema_migrations(version INTEGER PRIMARY KEY,applied_at INTEGER NOT NULL)')
            version=db.execute('SELECT COALESCE(MAX(version),0) FROM schema_migrations').fetchone()[0]
            if version>2:raise RuntimeError('Database schema is newer than this application')
            db.executescript(SCHEMA)
            db.execute('INSERT OR IGNORE INTO schema_migrations VALUES(1,?)',(now(),))
            if version<2:db.execute('INSERT OR IGNORE INTO schema_migrations VALUES(2,?)',(now(),))
        with self.transaction() as db:
            if not db.execute("SELECT 1 FROM meta WHERE key='initial_seed'").fetchone():
                for name in ('Best Library','New Library','Store Today'):
                    self.insert(db,'shops',{'name':name})
                categories={name:self.insert(db,'categories',{'name':name}) for name in ('Natureza','Artesanato','Culinária','Música','Saúde e Bem-estar','Hobbies','Educação','Preparação')}
                niche=self.insert(db,'niches',{'name':'Nature','category_id':categories['Natureza'],'stage':'active','notes':'Cadastre os idiomas atuais e indique quais estão ativos para completar o mapa da operação.'})
                self.create_base(db,niche,1)
                db.execute("INSERT INTO meta VALUES('initial_seed',1)")
        if str(path) != ':memory:':
            os.chmod(path,0o600)

    def connect(self):
        db=sqlite3.connect(self.path,timeout=10,isolation_level=None)
        db.row_factory=sqlite3.Row
        db.execute('PRAGMA foreign_keys=ON')
        db.execute('PRAGMA journal_mode=WAL')
        db.execute('PRAGMA busy_timeout=10000')
        return db

    @contextlib.contextmanager
    def transaction(self):
        db=self.connect()
        try:
            db.execute('BEGIN IMMEDIATE')
            yield db
            db.commit()
        except Exception:
            db.rollback()
            raise
        finally:
            db.close()

    def row(self, db, table, key):
        if table not in TABLES:
            raise Problem('Cadastro inválido.')
        row=db.execute('SELECT * FROM '+table+' WHERE id=?',(key,)).fetchone()
        if not row:
            raise Problem('Registro não encontrado.',404)
        return dict(row)

    def audit(self,db,user,table,key,action,summary):
        db.execute('INSERT INTO activity VALUES(?,?,?,?,?,?,?)',(identifier(),user['id'],table,key,action,summary,now()))
        db.execute("UPDATE meta SET value=value+1 WHERE key='revision'")

    def state(self,user):
        with contextlib.closing(self.connect()) as db:
            db.execute('BEGIN')
            state={table:[dict(r) for r in db.execute('SELECT * FROM '+table)] for table in TABLES if table not in ('users','niche_cycles')}
            state['niche_cycles']=[dict(r) for r in db.execute('SELECT id,niche_id,cycle,notes,restarted_by,created_at FROM niche_cycles')]
            active_ids={o['id'] for o in state['offers'] if any(n['id']==o['niche_id'] and n['cycle']==o['cycle'] for n in state['niches'])}
            state['offers']=[o for o in state['offers'] if o['id'] in active_ids]
            for table in ('languages','tasks','deliverables'):state[table]=[r for r in state[table] if r['offer_id'] in active_ids]
            languages={r['id'] for r in state['languages']}
            for table in ('launches','migrations'):state[table]=[r for r in state[table] if r['language_id'] in languages]
            state['launches']=[r for r in state['launches'] if r['enabled']]
            enabled_launches={r['id'] for r in state['launches']}
            state['tasks']=[r for r in state['tasks'] if r['scope']!='launch' or r['scope_id'] in enabled_launches]
            state['niche_gamma']=[r for r in state['niche_gamma'] if any(n['id']==r['niche_id'] and n['cycle']==r['cycle'] for n in state['niches'])]
            state['trello_sources']=[r for r in state['trello_sources'] if any(n['id']==r['niche_id'] and n['cycle']==r['cycle'] for n in state['niches'])]
            state['users']=[dict(r) for r in db.execute('SELECT id,name,email,role,active,version,created_at FROM users')]
            state['activity']=[dict(r) for r in db.execute('SELECT a.*,u.name AS user_name FROM activity a JOIN users u ON u.id=a.user_id ORDER BY a.created_at DESC,a.rowid DESC LIMIT 150')]
            state['gamma_access']=[dict(r) for r in db.execute("SELECT niche_id,cycle,version,updated_at,updated_by,(encrypted_text<>'') AS has_text FROM niche_secrets")]
            state['revision']=db.execute("SELECT value FROM meta WHERE key='revision'").fetchone()[0]
            state['me']={k:user[k] for k in ('id','name','email','role')}
            state['server_now']=now()
            db.commit()
            return state

    def session_user(self,token):
        if not isinstance(token,str) or not re.fullmatch('[a-f0-9]{64}',token):
            return None
        with contextlib.closing(self.connect()) as db:
            row=db.execute('SELECT u.id,u.name,u.email,u.role FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token_hash=? AND s.expires_at>? AND u.active=1',(token_hash(token),now())).fetchone()
            return dict(row) if row else None

    def access(self,token,ip):
        # Return the same error for missing, revoked and unknown links.
        valid=isinstance(token,str) and bool(re.fullmatch('[a-f0-9]{64}',token))
        limit_key=token_hash('access:'+ip)
        with self.transaction() as db:
            limit=db.execute('SELECT * FROM login_limits WHERE key=?',(limit_key,)).fetchone()
            if limit and limit['until_at']>now() and limit['attempts']>=20:
                raise Problem('Muitas tentativas. Aguarde alguns minutos.',429)
            user=db.execute('SELECT id,name,email,role FROM users WHERE link_hash=? AND active=1',(token_hash(token) if valid else '',)).fetchone()
            if not user:
                count=(limit['attempts']+1) if limit and limit['until_at']>now() else 1
                db.execute('INSERT OR REPLACE INTO login_limits VALUES(?,?,?)',(limit_key,count,now()+600))
                failure=True
            else:
                failure=False
                db.execute('DELETE FROM login_limits WHERE key=?',(limit_key,))
                session=secrets.token_hex(32)
                db.execute('DELETE FROM sessions WHERE expires_at<=?',(now(),))
                db.execute('INSERT INTO sessions VALUES(?,?,?)',(token_hash(session),user['id'],now()+SESSION_SECONDS))
        if failure:
            raise Problem('Link inválido ou substituído. Peça um novo acesso à equipe.',401)
        return session,dict(user)

    def bootstrap(self,name,email):
        with self.transaction() as db:
            owner=db.execute("SELECT id,name,email,role FROM users WHERE role='owner' AND active=1 LIMIT 1").fetchone()
            if owner:
                user=dict(owner)
            else:
                key=identifier()
                db.execute('INSERT INTO users(id,name,email,role,created_at) VALUES(?,?,?,\'owner\',?)',(key,name,email,now()))
                user={'id':key,'name':name,'email':email,'role':'owner'}
                self.audit(db,user,'users',key,'create','Criou o espaço de operação')
            session=secrets.token_hex(32)
            db.execute('INSERT INTO sessions VALUES(?,?,?)',(token_hash(session),user['id'],now()+SESSION_SECONDS))
            return session,user

    def logout(self,token):
        with self.transaction() as db:
            db.execute('DELETE FROM sessions WHERE token_hash=?',(token_hash(token),))

    def clean(self,db,table,values):
        if table not in FIELDS or not isinstance(values,dict) or set(values)-FIELDS[table]:
            raise Problem('Campos inválidos.')
        clean={}
        for key,value in values.items():
            if key in ('owner_id','gamma_id','category_id'):
                if value is not None:
                    target={'owner_id':'users','gamma_id':'gamma_accounts','category_id':'categories'}[key]
                    self.row(db,target,value)
                clean[key]=value
            elif key in ('archived','active','facebook'):
                if type(value) not in (bool,int) or value not in (0,1):raise Problem('Estado inválido.')
                clean[key]=int(value)
            elif key=='pilot_target':
                if type(value)!=int or not 1<=value<=30:raise Problem('Informe de 1 a 30 idiomas de teste.')
                clean[key]=value
            elif key.endswith('_url') or key=='domain':
                clean[key]=url_value(value)
            elif key=='due_date':
                value=text_value(value,10)
                try:
                    if value:dt.date.fromisoformat(value)
                except ValueError:raise Problem('Prazo inválido.')
                clean[key]=value
            else:
                clean[key]=text_value(value,8000 if key in ('notes','description','blocked_reason') else 250)
        if 'name' in clean and not clean['name']:raise Problem('Informe um nome.')
        if 'title' in clean and not clean['title']:raise Problem('Informe um título.')
        if table in ('tasks','deliverables') and clean.get('status',STATUSES[0]) not in STATUSES:raise Problem('Status inválido.')
        if table=='offers' and clean.get('phase',PHASES[0]) not in PHASES:raise Problem('Fase inválida.')
        if table=='languages' and clean.get('operational_status','preparing') not in ('preparing','active','inactive'):raise Problem('Situação do idioma inválida.')
        if table=='languages' and clean.get('wave','pilot') not in ('base','pilot','expansion'):raise Problem('Etapa de idioma inválida.')
        if table=='launches' and clean.get('status',LAUNCH_STATES[0]) not in LAUNCH_STATES:raise Problem('Status de lançamento inválido.')
        if table=='deliverables' and clean.get('kind','book') not in ('book','bonus','slides','pdf','other'):raise Problem('Formato inválido.')
        if table=='gamma_accounts' and clean.get('email') and not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',clean['email']):raise Problem('E-mail inválido.')
        if table=='categories' and clean.get('color') and not re.fullmatch(r'#[0-9a-fA-F]{6}',clean['color']):raise Problem('Cor inválida.')
        if table=='niches':
            if clean.get('priority','normal') not in ('low','normal','high','urgent'):raise Problem('Prioridade inválida.')
            if clean.get('stage','idea') not in NICHES_STAGES:raise Problem('Status do nicho inválido.')
            if 'stage' in clean:clean['archived']=int(clean['stage']=='archived')
        return clean

    def insert(self,db,table,values):
        key=identifier()
        values={'id':key,**values,'created_at':now(),'updated_at':now()}
        columns=list(values)
        db.execute('INSERT INTO '+table+'('+','.join(columns)+') VALUES('+','.join('?' for _ in columns)+')',tuple(values[c] for c in columns))
        return key

    def template(self,db,offer_id,scope,scope_id,steps,owner_id=None):
        for i,(key,title) in enumerate(steps):
            self.insert(db,'tasks',{'offer_id':offer_id,'scope':scope,'scope_id':scope_id,'template_key':key,'title':title,'position':i,'owner_id':owner_id})

    def create_base(self,db,niche_id,cycle):
        offer=self.insert(db,'offers',{'niche_id':niche_id,'name':'Base em inglês','cycle':cycle})
        self.template(db,offer,'offer',offer,PRODUCTION)
        self.insert(db,'languages',{'offer_id':offer,'code':'en','name':'Inglês','wave':'base'})
        return offer

    def active_record(self,db,table,row):
        if table=='offers':offer=row
        elif table in ('languages','tasks','deliverables'):offer=self.row(db,'offers',row['offer_id'])
        elif table=='launches':offer=self.row(db,'offers',self.row(db,'languages',row['language_id'])['offer_id'])
        else:return
        if offer['cycle']!=self.row(db,'niches',offer['niche_id'])['cycle']:raise Problem('Este registro pertence a um ciclo anterior. Abra o ciclo atual do nicho.',409)

    def snapshot(self,db,niche):
        offers=[dict(r) for r in db.execute('SELECT * FROM offers WHERE niche_id=? AND cycle=?',(niche['id'],niche['cycle']))]
        ids={o['id'] for o in offers};data={'niche':niche,'offers':offers}
        for table in ('languages','tasks','deliverables'):data[table]=[dict(r) for r in db.execute('SELECT * FROM '+table) if r['offer_id'] in ids]
        languages={r['id'] for r in data['languages']}
        for table in ('launches','migrations'):data[table]=[dict(r) for r in db.execute('SELECT * FROM '+table) if r['language_id'] in languages]
        data['niche_gamma']=[dict(r) for r in db.execute('SELECT * FROM niche_gamma WHERE niche_id=? AND cycle=?',(niche['id'],niche['cycle']))]
        data['trello_sources']=[dict(r) for r in db.execute('SELECT * FROM trello_sources WHERE niche_id=? AND cycle=?',(niche['id'],niche['cycle']))]
        return data

    def historical(self,user,key):
        with contextlib.closing(self.connect()) as db:
            row=self.row(db,'niche_cycles',key)
            return json.loads(row['snapshot'])

    def credentials(self,user,niche_id,cycle=None):
        with self.transaction() as db:
            niche=self.row(db,'niches',niche_id)
            if cycle is None:cycle=niche['cycle']
            if type(cycle)!=int or not 1<=cycle<=niche['cycle']:raise Problem('Ciclo inválido.')
            row=db.execute('SELECT * FROM niche_secrets WHERE niche_id=? AND cycle=?',(niche_id,cycle)).fetchone()
            text=self.cipher.decrypt(row['encrypted_text'].encode()).decode() if row and row['encrypted_text'] else ''
            self.audit(db,user,'niches',niche_id,'view_gamma','Consultou o acesso Gamma de '+niche['name']+' · ciclo '+str(cycle))
            return {'text':text,'version':row['version'] if row else 0,'cycle':cycle}

    def command(self,user,body):
        if not isinstance(body,dict):raise Problem('Solicitação inválida.')
        command_id=body.get('command_id')
        if not isinstance(command_id,str) or not re.fullmatch(r'[a-zA-Z0-9-]{16,100}',command_id):raise Problem('Identificador de alteração inválido.')
        fingerprint=hmac.new(self.encryption_key,json.dumps(body,sort_keys=True,ensure_ascii=False).encode(),hashlib.sha256).hexdigest()
        with self.transaction() as db:
            found=db.execute('SELECT * FROM commands WHERE id=?',(command_id,)).fetchone()
            if found:
                if found['user_id']!=user['id'] or found['fingerprint']!=fingerprint:raise Problem('Esta alteração já foi utilizada.',409)
                cached=json.loads(found['result'])
                if body.get('action') in ('create_user','rotate_link'):cached['needs_new_link']=True
                return cached
            result=self.mutate(db,user,body)
            stored_result={k:v for k,v in result.items() if k!='access_token'}
            db.execute('INSERT INTO commands VALUES(?,?,?,?,?)',(command_id,user['id'],fingerprint,json.dumps(stored_result),now()))
            # Keep link-bearing command results only briefly; links themselves are stored hashed.
            db.execute('DELETE FROM commands WHERE created_at<?',(now()-600,))
            return result

    def mutate(self,db,user,body):
        action=body.get('action')
        table=body.get('entity')
        if action=='import_trello':return import_niche(self,db,user,body)
        if action=='save_credentials':
            niche=self.row(db,'niches',body.get('niche_id'))
            if niche['cycle']!=body.get('cycle'):raise Problem('Este acesso pertence a um ciclo anterior. Abra o ciclo atual.',409)
            row=db.execute('SELECT * FROM niche_secrets WHERE niche_id=? AND cycle=?',(niche['id'],niche['cycle'])).fetchone()
            if body.get('version')!=(row['version'] if row else 0):raise Problem('Outra pessoa alterou o acesso Gamma. Reabra para usar os dados atuais.',409)
            value=text_value(body.get('text',''),8000)
            encrypted=self.cipher.encrypt(value.encode()).decode() if value else ''
            version=(row['version'] if row else 0)+1
            db.execute('INSERT INTO niche_secrets VALUES(?,?,?,?,?,?) ON CONFLICT(niche_id,cycle) DO UPDATE SET encrypted_text=excluded.encrypted_text,version=excluded.version,updated_by=excluded.updated_by,updated_at=excluded.updated_at',(niche['id'],niche['cycle'],encrypted,version,user['id'],now()))
            self.audit(db,user,'niches',niche['id'],'save_gamma','Atualizou o acesso Gamma de '+niche['name'])
            return {'version':version}
        if action=='configure_language':
            key=body.get('id');values=self.clean(db,'languages',body.get('values',{}))
            if key:
                language=self.row(db,'languages',key);self.active_record(db,'languages',language)
                if language['version']!=body.get('version'):raise Problem('Outra pessoa alterou este idioma. Atualize a tela e tente novamente.',409)
                if 'wave' in values and (values['wave']=='base')!=(language['wave']=='base'):raise Problem('A base em inglês permanece como origem das traduções.')
            else:
                offer=self.row(db,'offers',body.get('offer_id'));self.active_record(db,'offers',offer)
                code=text_value(body.get('code',''),20).lower()
                if not re.fullmatch('[a-z]{2,3}(?:-[a-z0-9]{2,8})?',code):raise Problem('Código de idioma inválido.')
                if not values.get('name'):raise Problem('Informe o idioma.')
                if values.get('wave')=='base':raise Problem('A base em inglês já existe.')
                key=self.insert(db,'languages',{'offer_id':offer['id'],'code':code,**values})
                language=self.row(db,'languages',key)
                self.template(db,offer['id'],'language',key,TRANSLATION)
            current=db.execute('SELECT * FROM launches WHERE language_id=?',(key,)).fetchall()
            selected=body.get('shop_ids')
            if 'shop_id' in body:
                selected=[r['shop_id'] for r in current if r['enabled'] and r['shop_id']!=body['shop_id']]
                if body.get('enabled') is True:selected.append(body['shop_id'])
            if not isinstance(selected,list) or len(selected)>100 or len(set(selected))!=len(selected):raise Problem('Seleção de Shopifys inválida.')
            for shop_id in selected:
                shop=self.row(db,'shops',shop_id)
                if not shop['active'] and not any(r['shop_id']==shop_id for r in current):raise Problem('Selecione uma Shopify ativa.')
            for launch in current:
                enabled=int(launch['shop_id'] in selected)
                if enabled!=launch['enabled']:db.execute('UPDATE launches SET enabled=?,version=version+1,updated_at=? WHERE id=?',(enabled,now(),launch['id']))
            for shop_id in selected:
                if not any(r['shop_id']==shop_id for r in current):
                    launch=self.insert(db,'launches',{'language_id':key,'shop_id':shop_id})
                    self.template(db,language['offer_id'],'launch',launch,PUBLICATION)
            if body.get('id'):
                values.update(version=language['version']+1,updated_at=now())
                db.execute('UPDATE languages SET '+','.join(k+'=?' for k in values)+' WHERE id=?',(*values.values(),key))
            self.audit(db,user,'languages',key,'configure','Configurou '+language['name']+' e suas Shopifys')
            return {'id':key}
        if action=='create':
            if table not in FIELDS:raise Problem('Cadastro inválido.')
            values=self.clean(db,table,body.get('values',{}))
            if table in ('niches','shops','gamma_accounts','categories') and not values.get('name'):raise Problem('Informe um nome.')
            if table=='offers':
                niche=self.row(db,'niches',body.get('niche_id'))
                if niche['archived']:raise Problem('Reative o nicho para cadastrar uma oferta.')
                if not values.get('name'):raise Problem('Informe o nome da oferta.')
                if values.get('phase')=='expansion':raise Problem('Registre a validação depois de cadastrar a oferta.')
                values['niche_id']=niche['id']
                values['cycle']=niche['cycle']
            if table=='languages':
                offer=self.row(db,'offers',body.get('offer_id'))
                self.active_record(db,'offers',offer)
                code=text_value(body.get('code',''),20).lower()
                if not re.fullmatch('[a-z]{2,3}(?:-[a-z0-9]{2,8})?',code):raise Problem('Código de idioma inválido. Exemplo: de, fr, pt-br.')
                if not values.get('name'):raise Problem('Informe o idioma.')
                if values.get('wave')=='base':raise Problem('A base em inglês já foi criada para este nicho.')

                values.update(offer_id=offer['id'],code=code)
            if table=='launches':
                language=self.row(db,'languages',body.get('language_id'))
                self.active_record(db,'languages',language)
                shop=self.row(db,'shops',body.get('shop_id'))
                if not shop['active']:raise Problem('Reative a loja antes de vincular um lançamento.')
                if values.get('status') in ('ready','testing','running') and (not values.get('product_url') or not values.get('page_url')):raise Problem('Adicione os links de produto e página para este lançamento.')
                values.update(language_id=language['id'],shop_id=shop['id'])
            if table=='deliverables':
                offer=self.row(db,'offers',body.get('offer_id'))
                self.active_record(db,'offers',offer)
                language_id=body.get('language_id')
                if language_id and self.row(db,'languages',language_id)['offer_id']!=offer['id']:raise Problem('Idioma não pertence a esta oferta.')
                if not values.get('title'):raise Problem('Informe o título do entregável.')
                values.update(offer_id=offer['id'],language_id=language_id)
            if table=='tasks':
                scope=body.get('scope');scope_id=body.get('scope_id')
                target=self.scope(db,scope,scope_id)
                self.active_record(db,{'offer':'offers','language':'languages','launch':'launches'}[scope],target)
                offer_id=target['id'] if scope=='offer' else target.get('offer_id')
                if scope=='launch':offer_id=self.row(db,'languages',target['language_id'])['offer_id']
                if not values.get('title'):raise Problem('Informe a tarefa.')
                if values.get('status')=='blocked' and not values.get('blocked_reason'):raise Problem('Descreva o que está bloqueando esta tarefa.')
                values.update(offer_id=offer_id,scope=scope,scope_id=scope_id,position=db.execute('SELECT COALESCE(MAX(position),-1)+1 FROM tasks WHERE scope=? AND scope_id=?',(scope,scope_id)).fetchone()[0])
            key=self.insert(db,table,values)
            if table=='gamma_accounts' and body.get('niche_id'):
                niche=self.row(db,'niches',body['niche_id'])
                db.execute('INSERT INTO niche_gamma VALUES(?,?,?)',(niche['id'],key,niche['cycle']))
            if table=='niches':self.create_base(db,key,1)
            if table=='offers':self.template(db,key,'offer',key,PRODUCTION,values.get('owner_id'))
            if table=='languages':self.template(db,values['offer_id'],'language',key,TRANSLATION,values.get('owner_id'))
            if table=='launches':self.template(db,self.row(db,'languages',values['language_id'])['offer_id'],'launch',key,PUBLICATION,values.get('owner_id'))
            self.audit(db,user,table,key,'create','Cadastrou '+str(values.get('name') or values.get('title') or 'lançamento'))
            return {'id':key}
        if action=='update':
            if table not in FIELDS:raise Problem('Cadastro inválido.')
            row=self.row(db,table,body.get('id'))
            self.active_record(db,table,row)
            if type(body.get('version'))!=int or row['version']!=body['version']:raise Problem('Outra pessoa alterou este registro. Reabra a edição para usar os dados atuais.',409)
            values=self.clean(db,table,body.get('values',{}))
            merged={**row,**values}
            if table=='languages' and (merged['wave']=='base')!=(row['wave']=='base'):raise Problem('A base em inglês permanece como origem das traduções.')
            if table=='tasks' and merged['status']=='blocked' and not merged['blocked_reason']:raise Problem('Descreva o que está bloqueando esta tarefa.')


            if table=='launches' and merged['status'] in ('ready','testing','running'):
                if not merged['product_url'] or not merged['page_url']:raise Problem('Adicione os links de produto e página antes de marcar este lançamento como pronto.')
            if table=='tasks' and merged['status']!='blocked':values['blocked_reason']=''
            values.update(version=row['version']+1,updated_at=now())
            db.execute('UPDATE '+table+' SET '+','.join(k+'=?' for k in values)+' WHERE id=?',(*values.values(),row['id']))
            self.audit(db,user,table,row['id'],'update','Atualizou '+str(row.get('name') or row.get('title') or 'lançamento'))
            return {'id':row['id']}
        if action=='link_gamma':
            self.row(db,'niches',body.get('niche_id'));self.row(db,'gamma_accounts',body.get('gamma_id'))
            niche=self.row(db,'niches',body['niche_id'])
            db.execute('INSERT OR IGNORE INTO niche_gamma VALUES(?,?,?)',(body['niche_id'],body['gamma_id'],niche['cycle']))
            self.audit(db,user,'niche_gamma',body['niche_id'],'link','Associou uma conta Gamma ao nicho')
            return {}
        if action=='clone_language':
            original=self.row(db,'languages',body.get('id'))
            self.active_record(db,'languages',original)
            code=text_value(body.get('code',''),20).lower()
            if not re.fullmatch('[a-z]{2,3}(?:-[a-z0-9]{2,8})?',code):raise Problem('Código de idioma inválido.')
            name=text_value(body.get('name',''),100)
            if not name:raise Problem('Informe o nome do idioma.')
            offer=self.row(db,'offers',original['offer_id'])
            wave=body.get('wave','pilot')
            if wave not in ('pilot','expansion'):raise Problem('Etapa inválida.')

            key=self.insert(db,'languages',{'offer_id':offer['id'],'code':code,'name':name,'wave':wave})
            # Copy only structure; every destination starts without completed work or old links.
            self.template(db,offer['id'],'language',key,TRANSLATION)
            for doc in db.execute('SELECT * FROM deliverables WHERE language_id=?',(original['id'],)).fetchall():
                self.insert(db,'deliverables',{'offer_id':offer['id'],'language_id':key,'title':doc['title'],'kind':doc['kind']})
            self.audit(db,user,'languages',key,'clone','Criou a estrutura de '+name)
            return {'id':key}
        if action=='restart_niche':
            niche=self.row(db,'niches',body.get('id'))
            if niche['version']!=body.get('version'):raise Problem('O nicho foi atualizado. Reabra para iniciar outro ciclo.',409)
            note=text_value(body.get('notes',''),8000)
            if not note:raise Problem('Registre o motivo do novo desenvolvimento.')
            snapshot=json.dumps(self.snapshot(db,niche),ensure_ascii=False)
            key=identifier()
            db.execute('INSERT INTO niche_cycles VALUES(?,?,?,?,?,?,?)',(key,niche['id'],niche['cycle'],note,snapshot,user['id'],now()))
            db.execute("UPDATE niches SET cycle=cycle+1,stage='production',archived=0,version=version+1,updated_at=? WHERE id=?",(now(),niche['id']))
            offer=self.create_base(db,niche['id'],niche['cycle']+1)
            self.audit(db,user,'niches',niche['id'],'restart','Abriu o ciclo '+str(niche['cycle']+1)+' de '+niche['name']+' e preservou o anterior')
            return {'id':offer}
        if action=='create_migration':
            language=self.row(db,'languages',body.get('language_id'));self.active_record(db,'languages',language)
            source=self.row(db,'shops',body.get('from_shop_id'));destination=self.row(db,'shops',body.get('to_shop_id'))
            if source['id']==destination['id'] or not destination['active']:raise Problem('Selecione outra Shopify ativa para o destino.')
            if language['operational_status']!='active':raise Problem('Migre apenas idiomas marcados como ativos. Idiomas desativados não devem ser migrados.')
            if not db.execute('SELECT 1 FROM launches WHERE language_id=? AND shop_id=? AND enabled=1',(language['id'],source['id'])).fetchone():raise Problem('Vincule primeiro a Shopify de origem a este idioma.')
            owner=body.get('owner_id') or None
            if owner:self.row(db,'users',owner)
            notes=text_value(body.get('notes',''),8000)
            if not notes:raise Problem('Descreva o que deverá ser migrado.')
            launch=db.execute('SELECT * FROM launches WHERE language_id=? AND shop_id=?',(language['id'],destination['id'])).fetchone()
            if launch and launch['status']=='running':raise Problem('Este idioma já está rodando no destino.')
            if db.execute('SELECT 1 FROM migrations m JOIN tasks t ON t.id=m.task_id WHERE m.language_id=? AND m.from_shop_id=? AND m.to_shop_id=? AND t.status<>\'done\'',(language['id'],source['id'],destination['id'])).fetchone():raise Problem('Já existe uma migração pendente para este destino.',409)
            if not launch:
                launch_id=self.insert(db,'launches',{'language_id':language['id'],'shop_id':destination['id'],'owner_id':owner})
                self.template(db,language['offer_id'],'launch',launch_id,PUBLICATION,owner)
            else:
                launch_id=launch['id']
                if not launch['enabled']:db.execute('UPDATE launches SET enabled=1,version=version+1 WHERE id=?',(launch_id,))
            task=self.insert(db,'tasks',{'offer_id':language['offer_id'],'scope':'launch','scope_id':launch_id,'title':'Migrar '+language['name']+': '+source['name']+' → '+destination['name'],'owner_id':owner,'notes':notes,'position':-1})
            key=identifier()
            db.execute('INSERT INTO migrations VALUES(?,?,?,?,?,?,?,?,?)',(key,language['id'],source['id'],destination['id'],launch_id,task,notes,user['id'],now()))
            self.audit(db,user,'languages',language['id'],'migration','Planejou migração de '+language['name']+' para '+destination['name'])
            return {'id':key,'launch_id':launch_id}
        if action=='create_user':
            if user['role']!='owner':raise Problem('Somente o responsável pelos acessos pode cadastrar pessoas.',403)
            name=text_value(body.get('name',''),100)
            if not name:raise Problem('Informe o nome da pessoa.')
            email=text_value(body.get('email',''),200)
            if email and not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email):raise Problem('E-mail inválido.')
            key=identifier();token=secrets.token_hex(32)
            db.execute("INSERT INTO users(id,name,email,role,link_hash,created_at) VALUES(?,?,?,'member',?,?)",(key,name,email,token_hash(token),now()))
            self.audit(db,user,'users',key,'create','Criou acesso de '+name)
            return {'id':key,'access_token':token,'name':name}
        if action in ('rotate_link','disable_user'):
            if user['role']!='owner':raise Problem('Somente o responsável pelos acessos pode alterar links.',403)
            person=self.row(db,'users',body.get('id'))
            if action=='disable_user' and person['role']=='owner':raise Problem('O acesso principal precisa permanecer ativo.')
            db.execute('DELETE FROM sessions WHERE user_id=?',(person['id'],))
            token=secrets.token_hex(32) if action=='rotate_link' else None
            db.execute('UPDATE users SET active=?,link_hash=?,version=version+1 WHERE id=?',(1 if token else 0,token_hash(token) if token else None,person['id']))
            self.audit(db,user,'users',person['id'],action,('Gerou novo link de ' if token else 'Desativou o acesso de ')+person['name'])
            return {'access_token':token,'name':person['name']}
        raise Problem('Ação inválida.')

    def scope(self,db,scope,key):
        table={'offer':'offers','language':'languages','launch':'launches'}.get(scope)
        if not table:raise Problem('Área de tarefa inválida.')
        return self.row(db,table,key)
