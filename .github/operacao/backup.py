"""SQLite online backup; root-only directory; keep the last 30 daily snapshots."""
import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
os.umask(0o077)
source=Path('/var/lib/offervault-operacao/data.sqlite3')
if source.exists():
    folder=Path('/var/backups/offervault-operacao/daily')
    folder.mkdir(parents=True,exist_ok=True,mode=0o700)
    target=folder/(datetime.now(timezone.utc).strftime('%Y-%m-%d')+'.sqlite3')
    with sqlite3.connect('file:'+str(source)+'?mode=ro',uri=True) as origin, sqlite3.connect(target) as backup:
        origin.backup(backup)
    target.chmod(0o600)
    for old in sorted(folder.glob('*.sqlite3'),reverse=True)[30:]:old.unlink()

    # Preserve the encryption key separately from the encrypted database.
    import shutil
    key=Path('/etc/offervault-operacao.env')
    if key.exists():
        shutil.copyfile(key,folder.parent/'encryption.env')
        (folder.parent/'encryption.env').chmod(0o600)
