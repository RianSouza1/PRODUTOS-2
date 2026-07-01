import re

with open('.github/workflows/deploy.yml', 'r') as f:
    content = f.read()

content = content.replace('skillvault.blog/nature-members', 'skillvault.blog/natural-members-es')

with open('.github/workflows/deploy.yml', 'w') as f:
    f.write(content)

