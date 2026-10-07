"""Install only Ciclo40 locations. Roll back changed config if nginx validation fails."""
import os
import re
import json
import subprocess
import shutil
from pathlib import Path
from datetime import datetime, timezone

templates = Path('/tmp/ciclo40-deploy')
os.umask(0o077)
token = os.environ['CICLO40_BACKEND_TOKEN']
if not re.fullmatch(r'[A-Za-z0-9._~+/=-]+', token):
    raise SystemExit('Unsupported service credential format')
snippet = Path('/etc/nginx/snippets/ciclo40.conf')
api = Path('/etc/nginx/snippets/ciclo40-api.conf')
snippet.parent.mkdir(parents=True, exist_ok=True)
backup = Path('/var/backups/ciclo40') / datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')
backup.mkdir(parents=True, exist_ok=True, mode=0o700)
config_files = []
for path in Path('/etc/nginx/sites-enabled').iterdir():
    if path.is_file() and re.search(r'\bserver_name\s+[^;]*\bstoreinfocus\.com\b[^;]*;', path.read_text()):
        real = path.resolve()
        if real not in config_files:
            config_files.append(real)
if not config_files:
    raise SystemExit('Storeinfocus nginx configuration was not found')
originals = {p: p.read_bytes() if p.exists() else None for p in [snippet, api, *config_files]}
for i, (p, content) in enumerate(originals.items()):
    if content is not None:
        target = backup / str(i)
        target.write_bytes(content)
        target.chmod(0o600)
try:
    snippet.write_text((templates / 'nginx-location.conf.template').read_text())
    api.write_text((templates / 'nginx-api.conf.template').read_text().replace('__TOKEN__', json.dumps('Bearer ' + token)))
    snippet.chmod(0o600)
    api.chmod(0o600)
    for path in config_files:
        text = path.read_text()
        if 'include /etc/nginx/snippets/ciclo40.conf;' not in text:
            text = re.sub(r'(\bserver_name\s+[^;]*\bstoreinfocus\.com\b[^;]*;)', r'\1\n    include /etc/nginx/snippets/ciclo40.conf;', text)
            path.write_text(text)
    subprocess.run(['nginx', '-t'], check=True, stdout=subprocess.DEVNULL)
    subprocess.run(['systemctl', 'reload', 'nginx'], check=True)
except Exception:
    for path, content in originals.items():
        if content is None:
            path.unlink(missing_ok=True)
        else:
            path.write_bytes(content)
    raise
finally:
    shutil.rmtree(templates, ignore_errors=True)
print('Ciclo40 routes installed successfully')
