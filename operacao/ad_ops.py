"""Operational advertising account links and reviewed, additive Utmify imports."""
import datetime as dt
import hashlib
import json
import re

from domain import Problem, TRANSLATION, identifier, now, text_value
from trello_import import normalized


def select_accounts(store, db, language_id, selected):
    if not isinstance(selected, list) or len(selected)>100 or any(not isinstance(x,str) for x in selected) or len(set(selected))!=len(selected):
        raise Problem('Seleção de contas de anúncios inválida.')
    current=[dict(r) for r in db.execute('SELECT * FROM language_ad_accounts WHERE language_id=?',(language_id,))]
    for key in selected:
        account=store.row(db,'ad_accounts',key)
        if not account['active'] and not any(r['ad_account_id']==key for r in current):
            raise Problem('Disponibilize esta conta antes de vinculá-la.')
    for link in current:
        enabled=int(link['ad_account_id'] in selected)
        if link['enabled']!=enabled:
            db.execute('UPDATE language_ad_accounts SET enabled=?,version=version+1,updated_at=? WHERE id=?',(enabled,now(),link['id']))
    for key in selected:
        if not any(r['ad_account_id']==key for r in current):
            store.insert(db,'language_ad_accounts',{'language_id':language_id,'ad_account_id':key})


def configure_accounts(store, db, user, body):
    language=store.row(db,'languages',body.get('id'))
    store.active_record(db,'languages',language)
    if type(body.get('version'))!=int or body['version']!=language['version']:
        raise Problem('Outra pessoa alterou este idioma. Atualize a tela e tente novamente.',409)
    selected=body.get('ad_account_ids')
    if 'ad_account_id' in body:
        if type(body.get('enabled'))!=bool:raise Problem('Estado de seleção inválido.')
        selected=[r['ad_account_id'] for r in db.execute('SELECT * FROM language_ad_accounts WHERE language_id=? AND enabled=1',(language['id'],)) if r['ad_account_id']!=body['ad_account_id']]
        if body['enabled']:selected.append(body['ad_account_id'])
    select_accounts(store,db,language['id'],selected)
    db.execute('UPDATE languages SET version=version+1,updated_at=? WHERE id=?',(now(),language['id']))
    store.audit(db,user,'languages',language['id'],'ad_accounts','Atualizou as contas de anúncios de '+language['name'])
    return {'id':language['id']}


def import_snapshot(store, db, user, body):
    if user['role']!='owner':raise Problem('Somente o responsável pode importar a consulta da Utmify.',403)
    payload=body.get('payload');accounts=body.get('accounts');snapshot=text_value(body.get('snapshot_id',''),100)
    dashboard=text_value(body.get('dashboard',''),250);observed=text_value(body.get('observed_date',''),10)
    if not re.fullmatch('[a-zA-Z0-9_-]{1,100}',snapshot) or not dashboard:raise Problem('Identificação da consulta inválida.')
    try:dt.date.fromisoformat(observed)
    except ValueError:raise Problem('Data da consulta inválida.')
    if not isinstance(payload,dict) or not isinstance(accounts,list) or not 1<=len(accounts)<=100:raise Problem('Dados da consulta inválidos.')
    prepared_accounts=[]
    for account in accounts:
        if not isinstance(account,dict):raise Problem('Conta inválida.')
        key=text_value(account.get('meta_id',''),30);name=text_value(account.get('name',''),250)
        if not re.fullmatch('[0-9]{5,30}',key) or not name:raise Problem('ID Meta ou nome da conta inválidos.')
        active=account.get('active',1)
        if type(active) not in (bool,int) or active not in (0,1):raise Problem('Disponibilidade da conta inválida.')
        prepared_accounts.append({'meta_id':key,'name':name,'active':int(active)})
    known={x['meta_id'] for x in prepared_accounts}
    if len(known)!=len(prepared_accounts):raise Problem('Há contas repetidas na consulta.')
    name=text_value(payload.get('name',''),250);languages=payload.get('languages');campaigns=payload.get('campaigns');reviews=payload.get('reviews',[])
    if not name or not isinstance(languages,list) or not 1<=len(languages)<=100 or not isinstance(campaigns,list) or not 1<=len(campaigns)<=100 or not isinstance(reviews,list) or len(reviews)>100:
        raise Problem('Nicho, idiomas ou campanhas inválidos.')
    prepared_languages=[]
    for language in languages:
        if not isinstance(language,dict):raise Problem('Idioma inválido.')
        code=text_value(language.get('code',''),20).lower();title=text_value(language.get('name',''),100);basis=text_value(language.get('basis','Nome do conjunto'),250)
        selected=language.get('account_ids')
        if not re.fullmatch('[a-z]{2,3}(?:-[a-z0-9]{2,8})?',code) or not title or not isinstance(selected,list) or not selected or len(selected)>100 or any(not isinstance(x,str) or x not in known for x in selected) or len(set(selected))!=len(selected):
            raise Problem('Idioma ou conta não identificada na consulta.')
        prepared_languages.append({'code':code,'name':title,'basis':basis,'account_ids':selected})
    if len({x['code'] for x in prepared_languages})!=len(prepared_languages):raise Problem('Agrupe os idiomas repetidos antes de importar.')
    prepared_campaigns=[]
    for campaign in campaigns:
        if not isinstance(campaign,dict) or not isinstance(campaign.get('account_id'),str) or campaign['account_id'] not in known:raise Problem('Conta da campanha não identificada.')
        key=text_value(campaign.get('id',''),40);title=text_value(campaign.get('name',''),250)
        if not re.fullmatch('[0-9]{5,40}',key) or not title:raise Problem('Campanha inválida.')
        prepared_campaigns.append({'id':key,'name':title,'account_id':campaign['account_id']})
    if len({c['id'] for c in prepared_campaigns})!=len(prepared_campaigns):raise Problem('Campanha repetida na consulta.')
    prepared_reviews=[]
    for review in reviews:
        if not isinstance(review,dict):raise Problem('Observação inválida.')
        message=text_value(review.get('message',''),2000)
        if not message:raise Problem('Descreva a observação a conferir.')
        prepared_reviews.append({'message':message})
    coverage=body.get('coverage',{'enabled_accounts':len(prepared_accounts),'excluded_accounts':0})
    if not isinstance(coverage,dict) or type(coverage.get('enabled_accounts'))!=int or coverage['enabled_accounts']!=len(prepared_accounts) or type(coverage.get('excluded_accounts'))!=int or not 0<=coverage['excluded_accounts']<=10000:
        raise Problem('Cobertura da consulta inválida.')
    detail={'accounts':prepared_accounts,'languages':prepared_languages,'campaigns':prepared_campaigns,'reviews':prepared_reviews,'coverage':{'enabled_accounts':coverage['enabled_accounts'],'excluded_accounts':coverage['excluded_accounts']}}
    digest=hashlib.sha256(json.dumps({'name':name,'date':observed,'dashboard':dashboard,**detail},sort_keys=True).encode()).hexdigest()
    matches=[dict(r) for r in db.execute('SELECT * FROM niches') if normalized(r['name'])==normalized(name)]
    if len(matches)>1:raise Problem('Há nichos duplicados com este nome. Revise o cadastro antes de importar.',409)
    created=not matches
    if matches:
        niche=matches[0]
        if niche['archived'] or niche['cycle']!=1:raise Problem('Este nicho foi arquivado ou reiniciado. Preserve o novo ciclo zerado e revise a origem antes de importar.',409)
        previous=db.execute('SELECT * FROM utmify_sources WHERE niche_id=? AND cycle=? AND snapshot_id=?',(niche['id'],niche['cycle'],snapshot)).fetchone()
        if previous:
            if previous['payload_hash']!=digest:raise Problem('Esta consulta já foi importada com outros dados. Revise a operação antes de substituir a origem.',409)
            return {'id':niche['id'],'name':niche['name'],'skipped':True,'languages_created':0,'account_links_created':0}
    else:
        key=store.insert(db,'niches',{'name':name,'stage':'testing'})
        store.create_base(db,key,1);niche=store.row(db,'niches',key)
    offers=db.execute('SELECT o.id FROM offers o JOIN languages l ON l.offer_id=o.id AND l.wave=? WHERE o.niche_id=? AND o.cycle=?',('base',niche['id'],niche['cycle'])).fetchall()
    if len(offers)!=1:raise Problem('O nicho precisa ter uma única base inglesa.',409)
    offer_id=offers[0]['id'];account_ids={}
    for account in prepared_accounts:
        old=db.execute('SELECT * FROM ad_accounts WHERE meta_id=?',(account['meta_id'],)).fetchone()
        account_ids[account['meta_id']]=old['id'] if old else store.insert(db,'ad_accounts',account)
    language_count=link_count=0
    for item in prepared_languages:
        old=db.execute('SELECT * FROM languages WHERE offer_id=? AND code=?',(offer_id,item['code'])).fetchone()
        if old:
            key=old['id']
            db.execute('UPDATE languages SET facebook=1,version=version+1,updated_at=? WHERE id=?',(now(),key))
        else:
            key=store.insert(db,'languages',{'offer_id':offer_id,'name':item['name'],'code':item['code'],'facebook':1,'notes':'Facebook ON na consulta da Utmify de '+observed+'. '+item['basis']+'. Shopify e resultado a confirmar.'})
            store.template(db,offer_id,'language',key,TRANSLATION);language_count+=1
        for external_id in item['account_ids']:
            account_id=account_ids[external_id]
            old_link=db.execute('SELECT * FROM language_ad_accounts WHERE language_id=? AND ad_account_id=?',(key,account_id)).fetchone()
            if not old_link:
                store.insert(db,'language_ad_accounts',{'language_id':key,'ad_account_id':account_id});link_count+=1
    db.execute('INSERT INTO utmify_sources VALUES(?,?,?,?,?,?,?,?,?,?)',(identifier(),niche['id'],niche['cycle'],snapshot,observed,dashboard,digest,json.dumps(detail,ensure_ascii=False),user['id'],now()))
    store.audit(db,user,'niches',niche['id'],'import_utmify','Importou Facebook ON e contas de '+str(len(prepared_languages))+' idiomas de '+name+' · Utmify '+observed)
    return {'id':niche['id'],'name':niche['name'],'created':created,'skipped':False,'languages_created':language_count,'account_links_created':link_count}
