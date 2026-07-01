import os
import glob
import re

base_dir = '/Users/riansouza/Downloads/PRODUTOS 2'
deploy_file = os.path.join(base_dir, '.github/workflows/deploy.yml')

# 1. Rename folders
healing_folders = glob.glob(os.path.join(base_dir, 'healing-*-members')) + [os.path.join(base_dir, 'healing-members')]
for folder in healing_folders:
    if os.path.isdir(folder):
        new_name = folder.replace('healing-', 'nature-')
        # If the destination already exists (e.g., if there's a conflict), remove it or skip
        if not os.path.exists(new_name):
            os.rename(folder, new_name)
            print(f"Renamed {folder} to {new_name}")

# 2. Update deploy.yml
with open(deploy_file, 'r') as f:
    content = f.read()

content = content.replace('healing-', 'nature-')

with open(deploy_file, 'w') as f:
    f.write(content)

