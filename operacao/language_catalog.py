"""The operation's planned languages, independent of publication and results."""
from domain import Problem, TRANSLATION, now

PRIMARY = (
    ('en','Inglês'), ('de','Alemão'), ('fr','Francês'), ('it','Italiano'),
    ('nl','Holandês'), ('es','Espanhol'), ('pt-pt','Português PT'),
    ('da','Dinamarquês'), ('no','Norueguês'), ('sv','Sueco'),
    ('fi','Finlandês'), ('pl','Polonês'), ('cs','Tcheco'),
    ('ro','Romeno'), ('hu','Húngaro'),
)
SECONDARY = (
    ('ar','Árabe'), ('be','Bielorrusso'), ('bs','Bósnio'), ('bg','Búlgaro'),
    ('ca','Catalão'), ('zh','Chinês'), ('ko','Coreano'), ('hr','Croata'),
    ('sk','Eslovaco'), ('sl','Esloveno'), ('ka','Georgiano'), ('el','Grego'),
    ('he','Hebraico'), ('en-gb','Inglês UK'), ('ga','Irlandês'), ('ja','Japonês'),
    ('lv','Letão'), ('lt','Lituano'), ('mk','Macedônio'), ('ru','Russo'),
    ('sr','Sérvio'), ('tr','Turco'), ('uk','Ucraniano'),
)
LANGUAGE_CATALOG = [
    {'code':code,'name':name,'group':group,'position':position}
    for group,items in (('primary',PRIMARY),('secondary',SECONDARY))
    for position,(code,name) in enumerate(items)
]


def complete_catalog(store, db, user, body):
    offer=store.row(db,'offers',body.get('offer_id'));store.active_record(db,'offers',offer)
    niche=store.row(db,'niches',offer['niche_id'])
    if niche['archived'] or type(body.get('version'))!=int or body['version']!=offer['version'] or type(body.get('cycle'))!=int or body['cycle']!=niche['cycle']:
        raise Problem('O nicho foi alterado. Reabra a matriz do ciclo atual antes de completar os idiomas.',409)
    existing={r['code']:dict(r) for r in db.execute('SELECT * FROM languages WHERE offer_id=?',(offer['id'],))}
    if 'en' not in existing or existing['en']['wave']!='base' or sum(r['wave']=='base' for r in existing.values())!=1:
        raise Problem('O nicho precisa ter uma única base inglesa.',409)
    created=0
    for item in LANGUAGE_CATALOG:
        if item['code'] in existing:continue
        language=store.insert(db,'languages',{'offer_id':offer['id'],'code':item['code'],'name':item['name']})
        store.template(db,offer['id'],'language',language,TRANSLATION);created+=1
    if created:
        db.execute('UPDATE offers SET version=version+1,updated_at=? WHERE id=?',(now(),offer['id']))
        store.audit(db,user,'offers',offer['id'],'complete_languages','Acrescentou '+str(created)+' idiomas planejados a '+niche['name'])
    return {'created':created,'total':len(existing)+created}
