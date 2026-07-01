import re

with open('.github/workflows/deploy.yml', 'r') as f:
    content = f.read()

# 1. Add filter
if 'healing-es-members:' not in content:
    content = re.sub(
        r"(natures-es-members:\n\s+- 'natures-es-members/\*\*')",
        r"\1\n            healing-es-members:\n              - 'healing-es-members/**'",
        content
    )

# 2. Add mkdir
if 'sudo mkdir -p /var/www/skillvault.blog/nature-members' not in content:
    content = re.sub(
        r"(sudo mkdir -p /var/www/skillvault.blog/ww)",
        r"sudo mkdir -p /var/www/skillvault.blog/nature-members\n            \1",
        content
    )

# 3. Add deploy step
deploy_block = """
      - name: Deploy 'healing-es-members' to skillvault.blog/nature-members
        if: steps.filter.outputs.healing-es-members == 'true'
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.VPS_SECRET }}
          source: "healing-es-members/*"
          target: "/var/www/skillvault.blog/nature-members"
          strip_components: 1
"""
if "Deploy 'healing-es-members'" not in content:
    content = content + deploy_block

with open('.github/workflows/deploy.yml', 'w') as f:
    f.write(content)

