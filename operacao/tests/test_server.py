import concurrent.futures
import contextlib
import http.client
import json
import sqlite3
import sys
import tempfile
import threading
import unittest
import uuid
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
import server as app
import domain
from cryptography.fernet import Fernet

class StoreTests(unittest.TestCase):
    def setUp(self):
        self.keys=patch.dict('os.environ',{'OFFERVAULT_ENCRYPTION_KEY':Fernet.generate_key().decode()});self.keys.start()
        self.tmp=tempfile.TemporaryDirectory()
        self.db=Path(self.tmp.name)/'data.sqlite3'
        self.store=app.Store(self.db)
        self.session,self.owner=self.store.bootstrap('Rian',app.OWNER_EMAIL)
        self.niche=self.state()['niches'][0]['id']
        self.offer=self.make('offers',{'name':'Oferta de teste'},niche_id=self.niche)['id']
    def tearDown(self):self.tmp.cleanup();self.keys.stop()
    def command(self,**body):return self.store.command(self.owner,{'command_id':str(uuid.uuid4()),**body})
    def make(self,table,values,**body):return self.command(action='create',entity=table,values=values,**body)
    def state(self):return self.store.state(self.owner)
    def record(self,table,key):return next(r for r in self.state()[table] if r['id']==key)
    def language(self,code='de'):return self.make('languages',{'name':code},offer_id=self.offer,code=code)['id']
    def test_seed_is_idempotent(self):
        app.Store(self.db)
        self.assertEqual([s['name'] for s in self.state()['shops']],['Best Library','New Library','Store Today'])
        self.assertEqual(len(self.state()['niches']),1)
    def test_multishop_and_independent_checklists(self):
        lang=self.language();shops=self.state()['shops']
        for shop in shops[:2]:self.make('launches',{},language_id=lang,shop_id=shop['id'])
        state=self.state()
        self.assertEqual(len(state['launches']),2)
        self.assertEqual(len([t for t in state['tasks'] if t['scope']=='launch']),8)
        self.assertEqual(len([t for t in state['tasks'] if t['scope']=='offer' and t['offer_id']==self.offer]),7)
        with self.assertRaises(sqlite3.IntegrityError):self.make('launches',{},language_id=lang,shop_id=shops[0]['id'])
    def test_optimistic_lock_with_simultaneous_edits(self):
        def edit(name):
            try:self.command(action='update',entity='offers',id=self.offer,version=1,values={'name':name});return 200
            except app.Problem as e:return e.status
        with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:results=list(pool.map(edit,['Pessoa A','Pessoa B']))
        self.assertEqual(sorted(results),[200,409])
        self.assertEqual(self.record('offers',self.offer)['version'],2)
    def test_clone_resets_links_accounts_and_completed_work(self):
        lang=self.language()
        task=next(t for t in self.state()['tasks'] if t['scope_id']==lang)
        self.command(action='update',entity='tasks',id=task['id'],version=1,values={'status':'done','result_url':'https://example.com/original'})
        gamma=self.make('gamma_accounts',{'name':'Conta Gamma'})['id']
        self.make('deliverables',{'title':'Book 1','gamma_id':gamma,'status':'done','gamma_url':'https://gamma.app/test','final_url':'https://example.com/pdf'},offer_id=self.offer,language_id=lang)
        clone=self.command(action='clone_language',id=lang,name='Francês',code='fr')['id']
        tasks=[t for t in self.state()['tasks'] if t['scope_id']==clone]
        self.assertEqual(len(tasks),2)
        self.assertTrue(all(t['status']=='todo' and not t['result_url'] and t['owner_id'] is None for t in tasks))
        doc=next(d for d in self.state()['deliverables'] if d['language_id']==clone)
        self.assertEqual((doc['status'],doc['gamma_id'],doc['final_url'],doc['gamma_url']),('todo',None,'',''))
        self.assertFalse(any(x['language_id']==clone for x in self.state()['launches']))
    def test_task_and_launch_invariants_on_creation_and_updates(self):
        with self.assertRaises(app.Problem):self.make('tasks',{'title':'Bloqueada','status':'blocked'},scope='offer',scope_id=self.offer)
        lang=self.language()
        with self.assertRaises(app.Problem):self.make('launches',{'status':'running'},language_id=lang,shop_id=self.state()['shops'][0]['id'])
        with self.assertRaises(app.Problem):self.make('offers',{'name':'Inválida','phase':'expansion'},niche_id=self.niche)
        with self.assertRaises(app.Problem):self.make('shops',{'name':'Script','domain':'javascript:alert(1)'})
    def test_deliverable_cannot_use_another_offers_language(self):
        lang=self.language();other=self.make('offers',{'name':'Outra oferta'},niche_id=self.niche)['id']
        with self.assertRaises(app.Problem):self.make('deliverables',{'title':'Book'},offer_id=other,language_id=lang)
    def test_links_revocation_members_permissions_and_export(self):
        result=self.command(action='create_user',name='Colaborador',email='')
        token=result['access_token'];session,member=self.store.access(token,'127.0.0.1')
        self.assertEqual(self.store.session_user(session)['id'],member['id'])
        self.store.command(member,{'command_id':str(uuid.uuid4()),'action':'update','entity':'offers','id':self.offer,'version':1,'values':{'description':'Alterado pela equipe'}})
        with self.assertRaises(app.Problem):self.store.command(member,{'command_id':str(uuid.uuid4()),'action':'create_user','name':'Outra pessoa'})
        serialized=json.dumps(self.state())
        self.assertNotIn(token,serialized);self.assertNotIn('link_hash',serialized)
        self.command(action='rotate_link',id=member['id'])
        self.assertIsNone(self.store.session_user(session))
        with self.assertRaises(app.Problem):self.store.access(token,'127.0.0.1')
        self.command(action='disable_user',id=member['id'])
        with self.assertRaises(app.Problem):self.command(action='disable_user',id=self.owner['id'])
    def test_idempotency_does_not_store_plaintext_link(self):
        body={'command_id':str(uuid.uuid4()),'action':'create_user','name':'Equipe'}
        first=self.store.command(self.owner,body);second=self.store.command(self.owner,body)
        self.assertEqual(first['id'],second['id']);self.assertNotIn('access_token',second)
        self.assertTrue(second['needs_new_link'])
        with contextlib.closing(self.store.connect()) as db:
            self.assertNotIn(first['access_token'],json.dumps([dict(r) for r in db.execute('SELECT * FROM commands')]))
        self.assertEqual(len([u for u in self.state()['users'] if u['role']=='member']),1)
    def test_niche_base_english_created_once_and_translations_only(self):
        state=self.state();base=next(o for o in state['offers'] if o['niche_id']==self.niche and o['id']!=self.offer)
        english=next(l for l in state['languages'] if l['offer_id']==base['id'])
        self.assertEqual((english['code'],english['wave'],english['operational_status']),('en','base','preparing'))
        translated=self.make('languages',{'name':'Alemão'},offer_id=base['id'],code='de')['id']
        tasks=[t for t in self.state()['tasks'] if t['scope_id']==translated]
        self.assertEqual([t['template_key'] for t in tasks],['full_translation','language_review'])
        self.assertEqual(len([t for t in self.state()['tasks'] if t['scope']=='offer' and t['offer_id']==base['id']]),7)
    def test_reset_is_scoped_and_preserves_history_and_blocks_stale_writes(self):
        language=self.language()
        self.command(action='update',entity='languages',id=language,version=1,values={'deliverables_url':'https://drive.google.com/example','operational_status':'active'})
        gamma=self.make('gamma_accounts',{'name':'Gamma'})['id']
        self.command(action='link_gamma',niche_id=self.niche,gamma_id=gamma)
        other=self.make('niches',{'name':'Outro nicho'})['id']
        other_before=[o for o in self.state()['offers'] if o['niche_id']==other]
        self.command(action='restart_niche',id=self.niche,version=1,notes='Novo desenvolvimento autorizado')
        state=self.state();current=[o for o in state['offers'] if o['niche_id']==self.niche]
        self.assertEqual(len(current),1);self.assertEqual(current[0]['cycle'],2)
        self.assertEqual([o for o in state['offers'] if o['niche_id']==other],other_before)
        self.assertEqual([l['code'] for l in state['languages'] if l['offer_id']==current[0]['id']],['en'])
        self.assertFalse(any(g['niche_id']==self.niche for g in state['niche_gamma']))
        self.assertFalse(any(l['id']==language for l in state['languages']))
        history=self.store.historical(self.owner,state['niche_cycles'][0]['id'])
        self.assertTrue(any(l['id']==language for l in history['languages']))
        self.assertEqual(len(history['niche_gamma']),1)
        old_language=next(l for l in history['languages'] if l['id']==language)
        self.assertEqual(old_language['deliverables_url'],'https://drive.google.com/example')
        new_language=next(l for l in state['languages'] if l['offer_id']==current[0]['id'])
        self.assertEqual((new_language['deliverables_url'],new_language['operational_status']),('','preparing'))
        with self.assertRaises(app.Problem) as e:self.command(action='update',entity='offers',id=self.offer,version=1,values={'name':'Stale'})
        self.assertEqual(e.exception.status,409)
    def test_migration_requires_active_language_and_assigns_owner(self):
        language=self.language();source,destination=self.state()['shops'][:2]
        self.make('launches',{},language_id=language,shop_id=source['id'])
        body=dict(action='create_migration',language_id=language,from_shop_id=source['id'],to_shop_id=destination['id'],owner_id=self.owner['id'],notes='Migrar página e produto existentes')
        with self.assertRaises(app.Problem):self.command(**body)
        self.command(action='update',entity='languages',id=language,version=1,values={'operational_status':'inactive'})
        with self.assertRaises(app.Problem):self.command(**body)
        self.command(action='update',entity='languages',id=language,version=2,values={'operational_status':'active'})
        migration=self.command(**body)
        record=self.record('migrations',migration['id']);task=self.record('tasks',record['task_id'])
        self.assertEqual(task['owner_id'],self.owner['id']);self.assertEqual(task['status'],'todo')
        launch=self.record('launches',record['launch_id'])
        self.assertEqual((launch['product_url'],launch['page_url']),('',''))
        self.assertEqual(len([t for t in self.state()['tasks'] if t['scope']=='language' and t['scope_id']==language]),2)
        with self.assertRaises(app.Problem):self.command(**body)
    def test_niche_metadata_categories_archiving_and_gamma_scope(self):
        category=self.make('categories',{'name':'Nova categoria','color':'#abcdef'})['id']
        self.command(action='update',entity='niches',id=self.niche,version=1,values={'category_id':category,'audience':'Público informado','priority':'high','stage':'archived','tags':'natureza, digital'})
        niche=self.record('niches',self.niche)
        self.assertEqual((niche['archived'],niche['priority']),(1,'high'))
        self.command(action='restart_niche',id=self.niche,version=2,notes='Reativação do desenvolvimento')
        self.assertEqual(self.record('niches',self.niche)['archived'],0)
        gamma=self.make('gamma_accounts',{'name':'Gamma do nicho'},niche_id=self.niche)['id']
        link=next(r for r in self.state()['niche_gamma'] if r['gamma_id']==gamma)
        self.assertEqual((link['niche_id'],link['cycle']),(self.niche,2))
        with self.assertRaises(app.Problem):self.make('categories',{'name':'Cor inválida','color':'invalid'})
    def test_gamma_credentials_are_encrypted_scoped_and_not_exported(self):
        secret='Login: demo@example.test\nSenha: senha-apenas-de-teste'
        self.command(action='save_credentials',niche_id=self.niche,cycle=1,version=0,text=secret)
        self.assertEqual(self.store.credentials(self.owner,self.niche)['text'],secret)
        self.assertNotIn(secret,json.dumps(self.state()))
        with contextlib.closing(self.store.connect()) as db:
            encrypted=db.execute('SELECT encrypted_text FROM niche_secrets').fetchone()[0]
            self.assertNotIn('senha-apenas-de-teste',encrypted)
            self.assertNotIn('senha-apenas-de-teste',json.dumps([dict(r) for r in db.execute('SELECT * FROM commands')]))
        with self.assertRaises(app.Problem):self.command(action='save_credentials',niche_id=self.niche,cycle=1,version=0,text='stale')
        self.command(action='restart_niche',id=self.niche,version=1,notes='Novo ciclo')
        self.assertEqual(self.store.credentials(self.owner,self.niche)['text'],'')
        self.assertEqual(self.store.credentials(self.owner,self.niche,1)['text'],secret)
        with self.assertRaises(app.Problem):self.command(action='save_credentials',niche_id=self.niche,cycle=1,version=1,text='stale')
    def test_shop_checkboxes_preserve_work_when_unchecked(self):
        shops=self.state()['shops']
        language=self.command(action='configure_language',offer_id=self.offer,code='it',values={'name':'Italiano','facebook':1},shop_ids=[shops[0]['id'],shops[1]['id']])['id']
        state=self.state();self.assertEqual(len([x for x in state['launches'] if x['language_id']==language]),2)
        self.assertEqual(self.record('languages',language)['facebook'],1)
        original=next(x for x in state['launches'] if x['language_id']==language and x['shop_id']==shops[0]['id'])
        self.command(action='configure_language',id=language,version=1,values={},shop_id=shops[0]['id'],enabled=False)
        self.assertFalse(any(x['id']==original['id'] for x in self.state()['launches']))
        self.assertFalse(any(t['scope']=='launch' and t['scope_id']==original['id'] for t in self.state()['tasks']))
        self.command(action='configure_language',id=language,version=2,values={},shop_id=shops[0]['id'],enabled=True)
        self.assertTrue(any(x['id']==original['id'] for x in self.state()['launches']))
        self.assertEqual(len([t for t in self.state()['tasks'] if t['scope']=='launch' and t['scope_id']==original['id']]),4)
    def test_session_expiry_and_rate_limit(self):
        with self.store.transaction() as db:db.execute('UPDATE sessions SET expires_at=0')
        self.assertIsNone(self.store.session_user(self.session))
        for _ in range(20):
            with self.assertRaises(app.Problem) as err:self.store.access('bad','192.0.2.1')
            self.assertEqual(err.exception.status,401)
        with self.assertRaises(app.Problem) as err:self.store.access('bad','192.0.2.1')
        self.assertEqual(err.exception.status,429)

class HTTPTests(unittest.TestCase):
    def setUp(self):
        self.keys=patch.dict('os.environ',{'OFFERVAULT_ENCRYPTION_KEY':Fernet.generate_key().decode()});self.keys.start()
        self.tmp=tempfile.TemporaryDirectory()
        self.web=Path(__file__).resolve().parents[1]/'web'
        self.server=app.serve(Path(self.tmp.name)/'data.db',self.web,'http://127.0.0.1',0)
        self.port=self.server.server_address[1];self.server.origin=f'http://127.0.0.1:{self.port}'
        self.thread=threading.Thread(target=self.server.serve_forever,daemon=True);self.thread.start()
        self.session,self.owner=self.server.store.bootstrap('Rian',app.OWNER_EMAIL)
    def tearDown(self):self.server.shutdown();self.server.server_close();self.tmp.cleanup();self.keys.stop()
    def request(self,path,body=None,cookie='',origin=None):
        conn=http.client.HTTPConnection('127.0.0.1',self.port,timeout=5)
        headers={'Cookie':cookie}
        if body is not None:headers.update({'Content-Type':'application/json','Origin':origin or self.server.origin})
        conn.request('POST' if body is not None else 'GET','/operacao/'+path,json.dumps(body) if body is not None else None,headers)
        response=conn.getresponse();data=response.read();status=response.status;response_headers=dict(response.getheaders());conn.close()
        return status,response_headers,data
    def test_auth_guards_origin_path_and_asset_fingerprint(self):
        self.assertEqual(self.request('api/state')[0],401)
        self.assertEqual(self.request('api/export')[0],401)
        self.assertEqual(self.request('api/credentials?niche_id=unknown')[0],401)
        self.assertEqual(self.request('api/bootstrap',{})[0],401)
        self.assertEqual(self.request('api/logout',{},origin='https://evil.example')[0],403)
        self.assertEqual(self.request('../server.py')[0],404)
        status,_,data=self.request('')
        self.assertEqual(status,200);self.assertNotIn(b'{{ASSET_VERSION}}',data)
        self.assertEqual(self.request('api/state',cookie=app.COOKIE+'='+self.session)[0],200)
    def test_self_rotation_preserves_new_session_and_revokes_old(self):
        status,headers,data=self.request('api/command',{'command_id':str(uuid.uuid4()),'action':'rotate_link','id':self.owner['id']},cookie=app.COOKIE+'='+self.session)
        self.assertEqual(status,200)
        cookie=headers['Set-Cookie'];self.assertIn('HttpOnly',cookie);self.assertIn('SameSite=Lax',cookie);self.assertIn('Path=/operacao/',cookie)
        new_cookie=cookie.split(';')[0]
        self.assertEqual(self.request('api/state',cookie=new_cookie)[0],200)
        self.assertEqual(self.request('api/state',cookie=app.COOKIE+'='+self.session)[0],401)
    def test_bootstrap_forwards_only_reserved_cookie_to_fixed_origin(self):
        response=contextlib.closing(__import__('io').BytesIO(json.dumps({'signedIn':True,'user':{'email':app.OWNER_EMAIL,'name':'Rian'}}).encode()))
        with patch('server.urllib.request.build_opener') as opener:
            opener.return_value.open.return_value=response
            self.assertEqual(self.request('api/bootstrap',{},cookie='ciclo40_session='+'a'*64+'; offervault_session=do-not-forward; other=secret')[0],200)
            request=opener.return_value.open.call_args.args[0]
            self.assertEqual(request.full_url,'https://storeinfocus.com/ciclo40/api/auth')
            self.assertEqual(request.get_header('Cookie'),'ciclo40_session='+'a'*64)
    def test_bootstrap_rejects_employee(self):
        response=contextlib.closing(__import__('io').BytesIO(json.dumps({'signedIn':True,'user':{'email':'employee@example.com'}}).encode()))
        with patch('server.urllib.request.build_opener') as opener:
            opener.return_value.open.return_value=response
            self.assertEqual(self.request('api/bootstrap',{},cookie='ciclo40_session='+'b'*64)[0],401)

if __name__=='__main__':unittest.main()
