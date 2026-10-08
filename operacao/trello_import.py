"""Import a reviewed Trello niche snapshot without replacing team edits."""
import hashlib
import json
import re
import unicodedata
from urllib.parse import urlsplit

from domain import Problem, PUBLICATION, TRANSLATION, identifier, now, text_value


def normalized(value):
    return ' '.join(unicodedata.normalize('NFKC', value).casefold().split())


def trello_url(value):
    value = text_value(value, 2000)
    parsed = urlsplit(value)
    if parsed.scheme != 'https' or parsed.netloc != 'trello.com' or not parsed.path.startswith('/c/'):
        raise Problem('O cartão de origem precisa ter um link Trello válido.')
    return value


def import_niche(store, db, user, body):
    if user['role'] != 'owner':
        raise Problem('Somente o responsável pode importar dados do Trello.', 403)
    payload = body.get('payload')
    if not isinstance(payload, dict):
        raise Problem('Arquivo de importação inválido.')
    name = text_value(payload.get('name', ''), 250)
    cards = payload.get('cards')
    languages = payload.get('languages')
    mode = body.get('mode', 'shop_only')
    if not name or mode not in ('shop_only', 'shop_facebook', 'active'):
        raise Problem('Nome ou interpretação do checklist inválidos.')
    if not isinstance(cards, list) or not 1 <= len(cards) <= 20:
        raise Problem('Informe os cartões de origem deste nicho.')
    if not isinstance(languages, list) or not 1 <= len(languages) <= 100:
        raise Problem('Informe os idiomas do checklist.')
    shop = store.row(db, 'shops', body.get('shop_id'))
    if not shop['active']:
        raise Problem('Selecione uma Shopify ativa.')
    source_cards = []
    for card in cards:
        if not isinstance(card, dict) or not re.fullmatch('[a-f0-9]{24}', str(card.get('id', ''))):
            raise Problem('Identificador Trello inválido.')
        source_cards.append({'id': card['id'], 'url': trello_url(card.get('url', ''))})
    if len({c['id'] for c in source_cards}) != len(source_cards):
        raise Problem('Há cartões repetidos no mesmo nicho.')
    prepared = []
    for language in languages:
        if not isinstance(language, dict):
            raise Problem('Idioma inválido no arquivo.')
        code = text_value(language.get('code', ''), 20).lower()
        title = text_value(language.get('name', ''), 100)
        if not re.fullmatch('[a-z]{2,3}(?:-[a-z0-9]{2,8})?', code) or not title or type(language.get('complete')) != bool:
            raise Problem('Código, nome ou conclusão de idioma inválidos.')
        prepared.append({'code': code, 'name': title, 'complete': language['complete']})
    if len({l['code'] for l in prepared}) != len(prepared):
        raise Problem('Agrupe os idiomas repetidos antes de importar.')
    digest = hashlib.sha256(json.dumps({'name': name, 'cards': source_cards, 'languages': prepared, 'shop_id': shop['id'], 'mode': mode}, sort_keys=True).encode()).hexdigest()
    previous = [db.execute('SELECT * FROM trello_sources WHERE card_id=?', (c['id'],)).fetchone() for c in source_cards]
    if any(previous):
        if not all(previous) or any(r['payload_hash'] != digest for r in previous):
            raise Problem('Este cartão já foi importado com outros dados. Revise o nicho existente antes de alterar sua operação.', 409)
        niche = store.row(db, 'niches', previous[0]['niche_id'])
        if any(r['cycle'] != niche['cycle'] for r in previous):
            raise Problem('Este cartão pertence a um ciclo anterior. O novo desenvolvimento deve continuar zerado.', 409)
        return {'id': niche['id'], 'name': niche['name'], 'skipped': True, 'languages_created': 0, 'shops_marked': 0}
    matches = [dict(r) for r in db.execute('SELECT * FROM niches') if normalized(r['name']) == normalized(name)]
    if len(matches) > 1:
        raise Problem('Há mais de um nicho com esse nome. Resolva a duplicidade antes de importar.', 409)
    created = not matches
    if matches:
        niche = matches[0]
        if niche['archived'] or niche['cycle'] != 1:
            raise Problem('Este nicho está arquivado ou foi reiniciado. Revise seu ciclo antes de importar.', 409)
    else:
        published = any(item['complete'] for item in prepared)
        stage = ('active' if mode == 'active' else 'testing' if mode == 'shop_facebook' else 'ready') if published else 'production'
        niche_id = store.insert(db, 'niches', {'name': name, 'stage': stage})
        store.create_base(db, niche_id, 1)
        niche = store.row(db, 'niches', niche_id)
    offers = db.execute('SELECT o.id FROM offers o JOIN languages l ON l.offer_id=o.id AND l.wave=? WHERE o.niche_id=? AND o.cycle=?', ('base', niche['id'], niche['cycle'])).fetchall()
    if len(offers) != 1:
        raise Problem('O nicho precisa ter uma única base inglesa neste ciclo.', 409)
    offer_id = offers[0]['id']
    language_count = shop_count = 0
    for item in prepared:
        existing = db.execute('SELECT * FROM languages WHERE offer_id=? AND code=?', (offer_id, item['code'])).fetchone()
        if existing:
            key = existing['id']
        else:
            note = 'Importado do checklist Trello. ' + ('Publicado em '+shop['name']+'. ' if item['complete'] else 'Publicação nesta Shopify ainda não concluída no Trello. ')
            if mode != 'active':
                note += 'Resultado do idioma a confirmar.'
            key = store.insert(db, 'languages', {'offer_id': offer_id, 'code': item['code'], 'name': item['name'], 'facebook': int(item['complete'] and mode != 'shop_only'), 'operational_status': 'active' if item['complete'] and mode == 'active' else 'preparing', 'notes': note})
            store.template(db, offer_id, 'language', key, TRANSLATION)
            if item['complete']:
                db.execute("UPDATE tasks SET status='done',notes='Tradução existente: idioma publicado conforme o checklist Trello.',version=version+1 WHERE scope='language' AND scope_id=? AND template_key='full_translation'", (key,))
            language_count += 1
        if not item['complete']:
            continue
        launch = db.execute('SELECT * FROM launches WHERE language_id=? AND shop_id=?', (key, shop['id'])).fetchone()
        # Existing shop selections and language results belong to the team and are preserved.
        if launch:
            continue
        launch_id = store.insert(db, 'launches', {'language_id': key, 'shop_id': shop['id'], 'notes': 'Publicado conforme checklist Trello; links de produto e página a preencher.'})
        store.template(db, offer_id, 'launch', launch_id, PUBLICATION)
        completed = ['shopify_product', 'shopify_page']
        if mode != 'shop_only':
            completed.append('facebook_campaign')
        placeholders = ','.join('?' for _ in completed)
        db.execute("UPDATE tasks SET status='done',notes='Conclusão importada do checklist Trello.',version=version+1 WHERE scope='launch' AND scope_id=? AND template_key IN ("+placeholders+')', (launch_id, *completed))
        shop_count += 1
    for card in source_cards:
        db.execute('INSERT INTO trello_sources VALUES(?,?,?,?,?,?,?,?,?,?)', (identifier(), card['id'], card['url'], niche['id'], niche['cycle'], shop['id'], digest, user['id'], now(), name))
    store.audit(db, user, 'niches', niche['id'], 'import_trello', 'Importou '+str(len(prepared))+' idiomas de '+name+' do Trello · '+shop['name'])
    return {'id': niche['id'], 'name': niche['name'], 'created': created, 'skipped': False, 'languages_created': language_count, 'shops_marked': shop_count}
