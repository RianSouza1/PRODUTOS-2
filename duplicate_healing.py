import os
import shutil
import re

languages = ['bg', 'cs', 'da', 'de', 'fi', 'fr', 'hr', 'hu', 'it', 'nl', 'no', 'pl', 'pt', 'sk', 'sl', 'sv', 'en']

base_dir = '/Users/riansouza/Downloads/PRODUTOS 2'
src_folder = os.path.join(base_dir, 'healing-es-members')
deploy_file = os.path.join(base_dir, '.github/workflows/deploy.yml')

with open(deploy_file, 'r') as f:
    deploy_content = f.read()

for lang in languages:
    if lang == 'en':
        dest_name = 'healing-members'
        slug = 'natural-members'
    else:
        dest_name = f'healing-{lang}-members'
        slug = f'natural-members-{lang}'
    
    dest_folder = os.path.join(base_dir, dest_name)
    
    # Copy folder
    if not os.path.exists(dest_folder):
        shutil.copytree(src_folder, dest_folder)
        
    # Update deploy.yml filter
    filter_block = f"""            {dest_name}:
              - '{dest_name}/**'"""
    if f"{dest_name}:" not in deploy_content:
        deploy_content = re.sub(
            r"(healing-es-members:\n\s+- 'healing-es-members/\*\*')",
            r"\1\n" + filter_block,
            deploy_content
        )
        
    # Update deploy.yml mkdir
    mkdir_line = f"sudo mkdir -p /var/www/skillvault.blog/{slug}"
    if mkdir_line not in deploy_content:
        deploy_content = re.sub(
            r"(sudo mkdir -p /var/www/skillvault.blog/natural-members-es)",
            r"\1\n            " + mkdir_line,
            deploy_content
        )
        
    # Update deploy.yml step
    deploy_step = f"""
      - name: Deploy '{dest_name}' to skillvault.blog/{slug}
        if: steps.filter.outputs.{dest_name} == 'true'
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{{{ secrets.VPS_HOST }}}}
          username: ${{{{ secrets.VPS_USERNAME }}}}
          key: ${{{{ secrets.VPS_SECRET }}}}
          source: "{dest_name}/*"
          target: "/var/www/skillvault.blog/{slug}"
          strip_components: 1
"""
    if f"Deploy '{dest_name}'" not in deploy_content:
        deploy_content += deploy_step

with open(deploy_file, 'w') as f:
    f.write(deploy_content)

