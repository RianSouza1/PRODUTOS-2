import ast
import json
import os
import sqlite3
import sys
import tempfile
import unittest
import uuid
from pathlib import Path
from unittest.mock import patch
from cryptography.fernet import Fernet

sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from store import Store
from domain import Problem, OWNER_EMAIL


class AdOperationsTests(unittest.TestCase):
    def setUp(self):
        self.env=patch.dict(os.environ,{'OFFERVAULT_ENCRYPTION_KEY':Fernet.generate_key().decode()});self.env.start()
        self.tmp=tempfile.TemporaryDirectory();self.path=Path(self.tmp.name)/'data.sqlite3'
        self.store=Store(self.path);_,self.owner=self.store.bootstrap('Rian',OWNER_EMAIL)
        self.accounts=[{'meta_id':'1'*15,'name':'Conta 1'},{'meta_id':'2'*15,'name':'Conta 2'}]
        self.payload={'name':'NATURE','languages':[{'code':'en','name':'Inglês','account_ids':['1'*15],'basis':'Nome do conjunto'},{'code':'de','name':'Alemão','account_ids':['1'*15,'2'*15],'basis':'Nome do conjunto'}], 'campaigns':[{'id':'3'*18,'name':'Nature 1','account_id':'1'*15},{'id':'4'*18,'name':'Nature 2','account_id':'2'*15}], 'reviews':[{'message':'Conjunto a conferir'}]}

    def tearDown(self):
        self.tmp.cleanup();self.env.stop()

    def state(self):return self.store.state(self.owner)
    def command(self,**body):return self.store.command(self.owner,{'command_id':str(uuid.uuid4()),**body})
    def import_data(self):
        return self.command(action='import_utmify',snapshot_id='principal-2026-10-13',observed_date='2026-10-13',dashboard='Principal',accounts=self.accounts,payload=self.payload)

    def test_import_reuses_english_and_supports_two_accounts_without_shop_or_result_inference(self):
        result=self.import_data();state=self.state()
        self.assertFalse(result['created']);self.assertEqual(result['account_links_created'],3)
        self.assertEqual(len(state['niches']),1);self.assertEqual(len([l for l in state['languages'] if l['wave']=='base']),1)
        self.assertEqual(len(state['ad_accounts']),2);self.assertEqual(len(state['language_ad_accounts']),3)
        self.assertTrue(all(l['facebook']==1 and l['operational_status']=='preparing' for l in state['languages']))
        self.assertEqual(state['launches'],[])
        detail=json.loads(state['utmify_sources'][0]['detail_json'])
        self.assertEqual(detail['reviews'],[{'message':'Conjunto a conferir'}])

    def test_unused_available_source_accounts_can_stay_out_of_matrix_until_enabled(self):
        self.accounts.append({'meta_id':'9'*15,'name':'Outra conta habilitada na consulta','active':0})
        self.import_data();state=self.state()
        self.assertEqual(len(state['ad_accounts']),3)
        self.assertEqual(sum(a['active'] for a in state['ad_accounts']),2)
        self.assertEqual(len(state['language_ad_accounts']),3)

    def test_manual_results_links_notes_and_work_are_preserved(self):
        offer=self.state()['offers'][0];shop=self.state()['shops'][0]
        created=self.command(action='configure_language',offer_id=offer['id'],code='de',values={'name':'Alemão','operational_status':'inactive','notes':'Decisão manual'},shop_ids=[shop['id']])
        self.import_data();state=self.state();language=next(l for l in state['languages'] if l['id']==created['id'])
        self.assertEqual((language['operational_status'],language['notes'],language['facebook']),('inactive','Decisão manual',1))
        self.assertEqual(len(state['launches']),1)

    def test_retry_preserves_unchecked_account_and_facebook_and_rejects_changed_snapshot(self):
        self.import_data();state=self.state();german=next(l for l in state['languages'] if l['code']=='de')
        self.command(action='configure_ad_accounts',id=german['id'],version=german['version'],ad_account_ids=[])
        german=next(l for l in self.state()['languages'] if l['id']==german['id'])
        self.command(action='update',entity='languages',id=german['id'],version=german['version'],values={'facebook':0})
        self.assertTrue(self.import_data()['skipped'])
        self.assertFalse(any(x['language_id']==german['id'] for x in self.state()['language_ad_accounts']))
        self.assertEqual(next(l for l in self.state()['languages'] if l['id']==german['id'])['facebook'],0)
        self.payload['languages'][1]['name']='Outro nome'
        with self.assertRaises(Problem) as error:self.import_data()
        self.assertEqual(error.exception.status,409)

    def test_single_account_toggle_keeps_other_and_rejects_stale_changes(self):
        self.import_data();state=self.state();german=next(l for l in state['languages'] if l['code']=='de')
        account=state['ad_accounts'][0]
        self.command(action='configure_ad_accounts',id=german['id'],version=german['version'],ad_account_id=account['id'],enabled=False)
        self.assertEqual(len([x for x in self.state()['language_ad_accounts'] if x['language_id']==german['id']]),1)
        with self.assertRaises(Problem) as error:
            self.command(action='configure_ad_accounts',id=german['id'],version=german['version'],ad_account_id=account['id'],enabled=True)
        self.assertEqual(error.exception.status,409)

    def test_language_editor_updates_accounts_and_shops_together(self):
        self.import_data();state=self.state();german=next(l for l in state['languages'] if l['code']=='de')
        self.command(action='configure_language',id=german['id'],version=german['version'],values={'facebook':0},shop_ids=[state['shops'][1]['id']],ad_account_ids=[state['ad_accounts'][1]['id']])
        state=self.state();self.assertEqual(len(state['launches']),1)
        self.assertEqual(len([x for x in state['language_ad_accounts'] if x['language_id']==german['id']]),1)

    def test_new_cycle_stays_blank_and_retains_account_history(self):
        self.import_data();state=self.state();niche=state['niches'][0];old_language=state['languages'][0]
        self.command(action='restart_niche',id=niche['id'],version=niche['version'],notes='Novo desenvolvimento')
        state=self.state();self.assertEqual(len(state['languages']),1)
        self.assertEqual(state['language_ad_accounts'],[]);self.assertEqual(state['utmify_sources'],[])
        history=self.store.historical(self.owner,state['niche_cycles'][0]['id'])
        self.assertEqual(len(history['language_ad_accounts']),3);self.assertEqual(len(history['ad_accounts']),2)
        self.assertEqual(len(history['utmify_sources']),1)
        with self.assertRaises(Problem):self.import_data()
        with self.assertRaises(Problem):self.command(action='configure_ad_accounts',id=old_language['id'],version=old_language['version'],ad_account_ids=[])

    def test_invalid_import_rolls_back_and_member_cannot_import(self):
        self.payload['name']='Novo nicho';self.payload['languages'][1]['account_ids']=['9'*15]
        with self.assertRaises(Problem):self.import_data()
        self.assertEqual(len(self.state()['niches']),1);self.assertEqual(self.state()['ad_accounts'],[])
        with self.assertRaises(Problem) as error:
            self.store.command({**self.owner,'role':'member'},{'command_id':str(uuid.uuid4()),'action':'import_utmify'})
        self.assertEqual(error.exception.status,403)

    def test_schema_upgrade_and_manual_accounts_without_meta_id(self):
        first=self.command(action='create',entity='ad_accounts',values={'name':'Manual 1','meta_id':''})
        self.command(action='create',entity='ad_accounts',values={'name':'Manual 2','meta_id':''})
        self.assertIsNone(self.store.state(self.owner)['ad_accounts'][0]['meta_id'])
        # A separate, empty v2 fixture retains its existing niche after migration 3.
        other=Store(Path(self.tmp.name)/'v2.sqlite3');_,owner=other.bootstrap('Rian',OWNER_EMAIL)
        niche=other.state(owner)['niches'][0]['id']
        with other.transaction() as db:
            db.execute('DROP TABLE language_ad_accounts');db.execute('DROP TABLE utmify_sources');db.execute('DROP TABLE ad_accounts')
            db.execute('DELETE FROM schema_migrations WHERE version=3')
        upgraded=Store(Path(self.tmp.name)/'v2.sqlite3')
        self.assertEqual(upgraded.state(owner)['niches'][0]['id'],niche)
        with upgraded.transaction() as db:self.assertEqual(db.execute('SELECT MAX(version) FROM schema_migrations').fetchone()[0],3)

    def test_additive_deploy_rollback_keeps_new_records_and_ignores_unknown_future_schema(self):
        self.import_data()
        path=Path(__file__).resolve().parents[2]/'.github/operacao/install.py'
        function=next(n for n in ast.parse(path.read_text()).body if isinstance(n,ast.FunctionDef) and n.name=='restore_additive_schema_marker')
        namespace={'sqlite3':sqlite3}
        exec(compile(ast.Module(body=[function],type_ignores=[]),str(path),'exec'),namespace)
        restore=namespace[function.name]
        restore(self.path,2)
        with self.store.transaction() as db:
            self.assertEqual(db.execute('SELECT MAX(version) FROM schema_migrations').fetchone()[0],2)
            self.assertEqual(db.execute('SELECT COUNT(*) FROM language_ad_accounts').fetchone()[0],3)
            db.execute('INSERT INTO schema_migrations VALUES(4,0)')
        restore(self.path,2)
        with self.store.transaction() as db:self.assertEqual(db.execute('SELECT MAX(version) FROM schema_migrations').fetchone()[0],4)

    def base_selection(self):
        return [{'id':t['id'],'version':t['version']} for t in self.state()['tasks'] if t['scope']=='offer' and t['template_key']]

    def test_complete_published_base_preserves_results_custom_tasks_and_materials(self):
        self.import_data();before=self.state();task=next(t for t in before['tasks'] if t['scope']=='offer')
        self.command(action='update',entity='tasks',id=task['id'],version=task['version'],values={'owner_id':self.owner['id'],'notes':'Material já produzido','result_url':'https://drive.google.com/drive/folders/base'})
        custom=self.command(action='create',entity='tasks',scope='offer',scope_id=task['offer_id'],values={'title':'Nova revisão solicitada'})
        result=self.command(action='complete_published_bases',tasks=self.base_selection());after=self.state()
        self.assertEqual(result,{'niches_completed':1,'tasks_completed':7})
        self.assertTrue(all(t['status']=='done' for t in after['tasks'] if t['scope']=='offer' and t['template_key']))
        self.assertEqual(next(t for t in after['tasks'] if t['id']==custom['id'])['status'],'todo')
        saved=next(t for t in after['tasks'] if t['id']==task['id'])
        self.assertEqual((saved['owner_id'],saved['notes'],saved['result_url']),(self.owner['id'],'Material já produzido','https://drive.google.com/drive/folders/base'))
        self.assertEqual(after['languages'],before['languages']);self.assertEqual(after['language_ad_accounts'],before['language_ad_accounts']);self.assertEqual(after['launches'],before['launches'])
        self.assertTrue(all(t['status']=='todo' for t in after['tasks'] if t['scope']=='language'))

    def test_stale_base_selection_is_atomic_and_retry_does_not_reclose_manual_work(self):
        self.import_data();selection=self.base_selection();last=selection[-1]
        self.command(action='update',entity='tasks',id=last['id'],version=last['version'],values={'notes':'Alterado pela equipe'})
        with self.assertRaises(Problem) as error:self.command(action='complete_published_bases',tasks=selection)
        self.assertEqual(error.exception.status,409);self.assertTrue(all(t['status']=='todo' for t in self.state()['tasks'] if t['scope']=='offer'))
        body={'command_id':str(uuid.uuid4()),'action':'complete_published_bases','tasks':self.base_selection()}
        result=self.store.command(self.owner,body)
        task=next(t for t in self.state()['tasks'] if t['scope']=='offer')
        self.command(action='update',entity='tasks',id=task['id'],version=task['version'],values={'status':'todo'})
        self.assertEqual(self.store.command(self.owner,body),result)
        self.assertEqual(next(t for t in self.state()['tasks'] if t['id']==task['id'])['status'],'todo')

    def test_unpublished_restarted_and_archived_bases_cannot_be_completed_in_batch(self):
        with self.assertRaises(Problem):self.command(action='complete_published_bases',tasks=self.base_selection())
        self.import_data();old=self.base_selection();niche=self.state()['niches'][0]
        self.command(action='restart_niche',id=niche['id'],version=niche['version'],notes='Novo ciclo')
        with self.assertRaises(Problem):self.command(action='complete_published_bases',tasks=old)
        with self.assertRaises(Problem):self.command(action='complete_published_bases',tasks=self.base_selection())
        self.assertTrue(all(t['status']=='todo' for t in self.state()['tasks']))
        other=Store(Path(self.tmp.name)/'archived.sqlite3');_,owner=other.bootstrap('Rian',OWNER_EMAIL)
        other.command(owner,{'command_id':str(uuid.uuid4()),'action':'import_utmify','snapshot_id':'archived-check','observed_date':'2026-10-14','dashboard':'Principal','accounts':self.accounts,'payload':self.payload})
        with other.transaction() as db:
            niche=db.execute('SELECT id FROM niches').fetchone()[0]
            db.execute('UPDATE niches SET archived=1 WHERE id=?',(niche,))
        task=other.state(owner)['tasks'][0]
        with self.assertRaises(Problem):other.command(owner,{'command_id':str(uuid.uuid4()),'action':'complete_published_bases','tasks':[{'id':task['id'],'version':task['version']}]})

    def test_base_batch_rejects_members_duplicates_and_translation_tasks(self):
        self.import_data();selection=self.base_selection()
        with self.assertRaises(Problem) as error:self.store.command({**self.owner,'role':'member'},{'command_id':str(uuid.uuid4()),'action':'complete_published_bases','tasks':selection})
        self.assertEqual(error.exception.status,403)
        with self.assertRaises(Problem):self.command(action='complete_published_bases',tasks=selection[:1]*2)
        translation=next(t for t in self.state()['tasks'] if t['scope']=='language')
        with self.assertRaises(Problem):self.command(action='complete_published_bases',tasks=[selection[0],{'id':translation['id'],'version':translation['version']}])
        self.assertTrue(all(t['status']=='todo' for t in self.state()['tasks']))
