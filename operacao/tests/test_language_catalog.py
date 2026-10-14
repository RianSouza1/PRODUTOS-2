import os
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
from language_catalog import LANGUAGE_CATALOG


class LanguageCatalogTests(unittest.TestCase):
    def setUp(self):
        self.env=patch.dict(os.environ,{'OFFERVAULT_ENCRYPTION_KEY':Fernet.generate_key().decode()});self.env.start()
        self.tmp=tempfile.TemporaryDirectory();self.store=Store(Path(self.tmp.name)/'data.sqlite3')
        _,self.owner=self.store.bootstrap('Rian',OWNER_EMAIL)

    def tearDown(self):self.tmp.cleanup();self.env.stop()
    def state(self):return self.store.state(self.owner)
    def command(self,**body):return self.store.command(self.owner,{'command_id':str(uuid.uuid4()),**body})
    def complete(self,offer=None,**extra):
        offer=offer or self.state()['offers'][0]
        return self.command(action='complete_language_catalog',offer_id=offer['id'],version=offer['version'],cycle=offer['cycle'],**extra)

    def test_full_catalog_has_15_primary_languages_and_creates_only_pending_translations(self):
        result=self.complete();state=self.state()
        self.assertEqual(result,{'created':37,'total':38})
        self.assertEqual(len({x['code'] for x in LANGUAGE_CATALOG}),38)
        primary=[x for x in state['language_catalog'] if x['group']=='primary']
        self.assertEqual(len(primary),15);self.assertEqual(primary[0]['code'],'en')
        self.assertEqual(sum(l['wave']=='base' for l in state['languages']),1)
        self.assertTrue(all(l['operational_status']=='preparing' and l['facebook']==0 for l in state['languages']))
        self.assertEqual((state['launches'],state['language_ad_accounts']),( [], []))
        translations=[t for t in state['tasks'] if t['scope']=='language']
        self.assertEqual(len(translations),74);self.assertTrue(all(t['status']=='todo' for t in translations))

    def test_existing_publications_results_materials_and_work_are_preserved(self):
        offer=self.state()['offers'][0]
        created=self.command(action='configure_language',offer_id=offer['id'],code='de',values={'name':'Alemão','operational_status':'active','facebook':1},shop_ids=[self.state()['shops'][1]['id']])
        german=next(l for l in self.state()['languages'] if l['code']=='de')
        account=self.command(action='create',entity='ad_accounts',values={'name':'Conta Meta'})
        self.command(action='configure_ad_accounts',id=german['id'],version=german['version'],ad_account_ids=[account['id']])
        german=next(l for l in self.state()['languages'] if l['code']=='de')
        self.command(action='update',entity='languages',id=german['id'],version=german['version'],values={'notes':'Funcionou bem','deliverables_url':'https://drive.google.com/drive/folders/de'})
        task=next(t for t in self.state()['tasks'] if t['scope_id']==german['id'])
        self.command(action='update',entity='tasks',id=task['id'],version=task['version'],values={'status':'done'})
        before=self.state();self.complete();after=self.state()
        self.assertEqual(next(l for l in after['languages'] if l['id']==german['id']),next(l for l in before['languages'] if l['id']==german['id']))
        self.assertEqual(after['launches'],before['launches']);self.assertEqual(after['language_ad_accounts'],before['language_ad_accounts'])
        self.assertEqual(next(t for t in after['tasks'] if t['id']==task['id']),next(t for t in before['tasks'] if t['id']==task['id']))

    def test_completion_is_idempotent_and_stale_or_previous_cycle_is_rejected(self):
        old=self.state()['offers'][0];self.complete(old)
        counts=(len(self.state()['languages']),len(self.state()['tasks']))
        self.assertEqual(self.complete()['created'],0)
        self.assertEqual((len(self.state()['languages']),len(self.state()['tasks'])),counts)
        with self.assertRaises(Problem) as error:self.complete(old)
        self.assertEqual(error.exception.status,409)
        niche=self.state()['niches'][0]
        self.command(action='restart_niche',id=niche['id'],version=niche['version'],notes='Novo desenvolvimento')
        with self.assertRaises(Problem):self.complete(old)
        self.assertEqual(len(self.state()['languages']),1)
        self.complete();self.assertEqual(len(self.state()['languages']),38)
        self.assertTrue(all(t['status']=='todo' for t in self.state()['tasks']))
        self.assertTrue(all(l['facebook']==0 and l['operational_status']=='preparing' for l in self.state()['languages']))

    def test_catalog_completion_is_scoped_and_rejects_archived_niches(self):
        second=self.command(action='create',entity='niches',values={'name':'Crochet'})
        offer=next(o for o in self.state()['offers'] if o['niche_id']==second['id'])
        self.complete(offer)
        self.assertEqual(len([l for l in self.state()['languages'] if l['offer_id']==offer['id']]),38)
        self.assertEqual(len([l for l in self.state()['languages'] if l['offer_id']!=offer['id']]),1)
        niche=next(n for n in self.state()['niches'] if n['id']==second['id'])
        self.command(action='update',entity='niches',id=niche['id'],version=niche['version'],values={'archived':1})
        with self.assertRaises(Problem):self.complete(next(o for o in self.state()['offers'] if o['id']==offer['id']))
