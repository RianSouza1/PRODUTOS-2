"""Install the isolated OfferVault service and nginx route with rollback."""
import hashlib
import json
import os
import pwd
import re
import shutil
import sqlite3
import subprocess
import sys
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
if sys.version_info<(3,9):raise SystemExit('Python 3.9 or newer is required')
try:
    from cryptography.fernet import Fernet
except ImportError:
    subprocess.run(['apt-get','update','-qq'],check=True)
    subprocess.run(['apt-get','install','-y','python3-cryptography'],check=True)
    from cryptography.fernet import Fernet
os.umask(0o077)
source=Path('/tmp/offervault-deploy')
private=Path('/opt/offervault-operacao')
public=Path('/var/www/storeinfocus.com/operacao')
data=Path('/var/lib/offervault-operacao')
snippet=Path('/etc/nginx/snippets/offervault-operacao.conf')
units=[Path('/etc/systemd/system')/n for n in ('offervault-operacao.service','offervault-backup.service','offervault-backup.timer')]
configs=[]
for path in Path('/etc/nginx/sites-enabled').iterdir():
    if path.is_file() and re.search(r'\bserver_name\s+[^;]*\bstoreinfocus\.com\b[^;]*;',path.read_text()):
        if path.resolve() not in configs:configs.append(path.resolve())
if not configs:raise SystemExit('Storeinfocus nginx configuration was not found')
compile((source/'app/server.py').read_text(),'server.py','exec')
subprocess.run(['systemd-analyze','verify',str(source/'offervault-operacao.service'),str(source/'offervault-backup.service'),str(source/'offervault-backup.timer')],check=True)
backup=Path('/var/backups/offervault-operacao/deploy')/datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')
backup.mkdir(parents=True,exist_ok=True,mode=0o700)
changed=[snippet,*configs,*units,*(private/n for n in ('server.py','store.py','domain.py','trello_import.py','schema.sql','backup.py')),*(public/n for n in ('index.html','app.js','styles.css','favicon.svg'))]
envfile=Path('/etc/offervault-operacao.env')
changed.append(envfile)
originals={p:(p.read_bytes(),p.stat().st_mode&0o777) if p.exists() else None for p in changed}
for i,(path,entry) in enumerate(originals.items()):
    if entry:(backup/str(i)).write_bytes(entry[0])
database=data/'data.sqlite3'
if database.exists():
    with sqlite3.connect('file:'+str(database)+'?mode=ro',uri=True) as origin,sqlite3.connect(backup/'data.sqlite3') as destination:origin.backup(destination)
try:
    for folder in (private,public):folder.mkdir(parents=True,exist_ok=True);folder.chmod(0o755)
    data.mkdir(parents=True,exist_ok=True);data.chmod(0o700)
    try:account=pwd.getpwnam('offervault')
    except KeyError:
        subprocess.run(['useradd','--system','--user-group','--no-create-home','--shell','/usr/sbin/nologin','offervault'],check=True)
        account=pwd.getpwnam('offervault')
    os.chown(data,account.pw_uid,account.pw_gid)
    if not envfile.exists():envfile.write_text('OFFERVAULT_ENCRYPTION_KEY='+Fernet.generate_key().decode()+'\n')
    envfile.chmod(0o600)
    key=envfile.read_text().strip().split('=',1)[1]
    Fernet(key.encode())
    if database.exists():
        for existing in data.iterdir():
            if existing.is_file():os.chown(existing,account.pw_uid,account.pw_gid)
    for name in ('server.py','store.py','domain.py','trello_import.py','schema.sql','backup.py'):
        shutil.copyfile(source/('backup.py' if name=='backup.py' else 'app/'+name),private/name);(private/name).chmod(0o644)
    version=hashlib.sha256((source/'app/web/app.js').read_bytes()+(source/'app/web/styles.css').read_bytes()).hexdigest()[:12]
    for name in ('index.html','app.js','styles.css','favicon.svg'):
        content=(source/'app/web'/name).read_bytes().replace(b'{{ASSET_VERSION}}',version.encode())
        (public/name).write_bytes(content);(public/name).chmod(0o644)
    snippet.parent.mkdir(parents=True,exist_ok=True)
    snippet.write_bytes((source/'nginx-location.conf').read_bytes());snippet.chmod(0o644)
    include='include /etc/nginx/snippets/offervault-operacao.conf;'
    for path in configs:
        text=path.read_text()
        if include not in text:path.write_text(re.sub(r'(\bserver_name\s+[^;]*\bstoreinfocus\.com\b[^;]*;)',r'\1\n    '+include,text))
    for unit in units:unit.write_bytes((source/unit.name).read_bytes());unit.chmod(0o644)
    subprocess.run(['nginx','-t'],check=True,stdout=subprocess.DEVNULL)
    subprocess.run(['systemctl','daemon-reload'],check=True)
    subprocess.run(['systemctl','enable','offervault-operacao.service','offervault-backup.timer'],check=True)
    subprocess.run(['systemctl','restart','offervault-operacao.service'],check=True)
    healthy=False
    for attempt in range(15):
        try:
            with urllib.request.urlopen('http://127.0.0.1:8766/operacao/api/health',timeout=2) as response:healthy=json.load(response).get('ok') is True
            if healthy:break
        except Exception:pass
        time.sleep(1)
    if not healthy:raise RuntimeError('Application health check failed')
    subprocess.run(['systemctl','start','offervault-backup.timer'],check=True)
    subprocess.run(['systemctl','start','offervault-backup.service'],check=True)
    subprocess.run(['systemctl','reload','nginx'],check=True)
except Exception:
    for path,entry in originals.items():
        if entry:path.write_bytes(entry[0]);path.chmod(entry[1])
        else:path.unlink(missing_ok=True)
    subprocess.run(['systemctl','daemon-reload'],check=False)
    if originals[units[0]]:subprocess.run(['systemctl','restart','offervault-operacao.service'],check=False)
    else:subprocess.run(['systemctl','disable','--now','offervault-operacao.service','offervault-backup.timer'],check=False)
    subprocess.run(['nginx','-t'],check=False,stdout=subprocess.DEVNULL)
    subprocess.run(['systemctl','reload','nginx'],check=False)
    raise
finally:
    shutil.rmtree(source,ignore_errors=True)
print('OfferVault installed; independent database and daily backup active')
