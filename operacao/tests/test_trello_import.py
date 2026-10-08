import contextlib
import json
import os
import sys
import tempfile
import unittest
import uuid
from pathlib import Path
from unittest.mock import patch
from cryptography.fernet import Fernet

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from domain import Problem, OWNER_EMAIL
from store import Store


class TrelloImportTests(unittest.TestCase):
    def setUp(self):
        self.keys = patch.dict(os.environ, {'OFFERVAULT_ENCRYPTION_KEY': Fernet.generate_key().decode()})
        self.keys.start()
        self.tmp = tempfile.TemporaryDirectory()
        self.path = Path(self.tmp.name)/'data.db'
        self.store = Store(self.path)
        _, self.owner = self.store.bootstrap('Rian', OWNER_EMAIL)
        self.shop = next(s['id'] for s in self.state()['shops'] if s['name']=='New Library')
        self.payload = {'name': 'NATURE', 'cards': [{'id': 'a'*24, 'url': 'https://trello.com/c/Abcd1234/nature'}], 'languages': [
            {'name': 'Alemão', 'code': 'de', 'complete': True},
            {'name': 'Holandês', 'code': 'nl', 'complete': False},
            {'name': 'Inglês UK', 'code': 'en-gb', 'complete': True}]}

    def tearDown(self):
        self.tmp.cleanup()
        self.keys.stop()

    def state(self):
        return self.store.state(self.owner)

    def command(self, **body):
        return self.store.command(self.owner, {'command_id': str(uuid.uuid4()), **body})

    def import_data(self, mode='shop_only'):
        return self.command(action='import_trello', payload=self.payload, shop_id=self.shop, mode=mode)

    def test_matches_existing_niche_and_preserves_pending_meaning(self):
        result = self.import_data()
        state = self.state()
        self.assertFalse(result['created'])
        self.assertEqual(len(state['niches']), 1)
        self.assertEqual(len([l for l in state['languages'] if l['wave']=='base']), 1)
        german = next(l for l in state['languages'] if l['code']=='de')
        dutch = next(l for l in state['languages'] if l['code']=='nl')
        self.assertEqual((german['facebook'], german['operational_status']), (0, 'preparing'))
        self.assertFalse(any(x['language_id']==dutch['id'] for x in state['launches']))
        self.assertEqual(result['shops_marked'], 2)
        self.assertEqual(len(state['trello_sources']), 1)
        tasks = [t for t in state['tasks'] if t['scope_id']==german['id']]
        self.assertEqual({t['template_key']:t['status'] for t in tasks}, {'full_translation':'done', 'language_review':'todo'})
        self.assertFalse(any(t['status']=='done' and t['template_key']=='facebook_campaign' for t in state['tasks']))

    def test_duplicate_sources_retry_and_manual_edits_preserved(self):
        self.payload['cards'].append({'id':'b'*24, 'url':'https://trello.com/c/Other123/nature'})
        self.import_data('active')
        before = self.state()
        german = next(l for l in before['languages'] if l['code']=='de')
        self.assertEqual((german['facebook'], german['operational_status']), (1, 'active'))
        self.command(action='configure_language', id=german['id'], version=german['version'], values={'operational_status':'inactive'}, shop_ids=[])
        result = self.import_data('active')
        after = self.state()
        self.assertTrue(result['skipped'])
        self.assertEqual(len(after['niches']), 1)
        self.assertEqual(len(after['trello_sources']), 2)
        self.assertEqual(len(after['languages']), len(before['languages']))
        self.assertFalse(any(x['language_id']==german['id'] for x in after['launches']))
        self.assertEqual(next(l for l in after['languages'] if l['id']==german['id'])['operational_status'], 'inactive')

    def test_facebook_publication_does_not_infer_success(self):
        self.payload['name'] = 'Produto do Trello'
        self.import_data('shop_facebook')
        state = self.state()
        niche = next(n for n in state['niches'] if n['name']==self.payload['name'])
        german = next(l for l in state['languages'] if l['code']=='de')
        dutch = next(l for l in state['languages'] if l['code']=='nl')
        self.assertEqual(niche['stage'], 'testing')
        self.assertEqual((german['facebook'], german['operational_status']), (1, 'preparing'))
        self.assertEqual((dutch['facebook'], dutch['operational_status']), (0, 'preparing'))
        self.assertEqual(len([t for t in state['tasks'] if t['template_key']=='facebook_campaign' and t['status']=='done']), 2)

    def test_restarted_cycle_is_not_repopulated_and_history_keeps_source(self):
        self.import_data()
        niche = self.state()['niches'][0]
        self.command(action='restart_niche', id=niche['id'], version=niche['version'], notes='Novo desenvolvimento')
        with self.assertRaises(Problem) as error:
            self.import_data()
        self.assertEqual(error.exception.status, 409)
        self.assertEqual(len(self.state()['languages']), 1)
        self.assertEqual(self.state()['trello_sources'], [])
        history = self.store.historical(self.owner, self.state()['niche_cycles'][0]['id'])
        self.assertEqual(len(history['trello_sources']), 1)

    def test_invalid_import_rolls_back_and_member_cannot_import(self):
        self.payload['languages'][1]['code'] = 'invalid!'
        self.payload['name'] = 'Novo nicho'
        with self.assertRaises(Problem): self.import_data()
        self.assertEqual(len(self.state()['niches']), 1)
        self.assertEqual(self.state()['trello_sources'], [])
        self.payload['languages'][1]['code'] = 'nl'
        with self.assertRaises(Problem) as error:
            self.store.command({**self.owner,'role':'member'}, {'command_id':str(uuid.uuid4()),'action':'import_trello','payload':self.payload,'shop_id':self.shop})
        self.assertEqual(error.exception.status, 403)

    def test_additive_schema_upgrade_preserves_existing_data(self):
        original = self.state()['niches'][0]['id']
        with self.store.transaction() as db:
            db.execute('DROP TABLE trello_sources')
            db.execute('DELETE FROM schema_migrations WHERE version=2')
        upgraded = Store(self.path)
        self.assertEqual(upgraded.state(self.owner)['niches'][0]['id'], original)
        with contextlib.closing(upgraded.connect()) as db:
            self.assertEqual(db.execute('SELECT MAX(version) FROM schema_migrations').fetchone()[0], 2)
