import os

with open('.github/workflows/deploy.yml', 'r', encoding='utf-8') as f:
    content = f.read()

# Add to paths
content = content.replace("- 'ww-de/**'", "- 'ww-de/**'\n      - 'metalon/**'")

# Add to Prepare VPS Directories
content = content.replace("sudo mkdir -p /var/www/skillvault.blog/ww-de", "sudo mkdir -p /var/www/skillvault.blog/ww-de\n            sudo mkdir -p /var/www/skillvault.blog/metalon")

# Add deployment step
new_deploy_step = """
      - name: Deploy 'metalon' to skillvault.blog/metalon
        uses: appleboy/scp-action@v0.1.4
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.VPS_SECRET }}
          source: "metalon/*"
          target: "/var/www/skillvault.blog/metalon"
          strip_components: 1
"""
content += new_deploy_step

with open('.github/workflows/deploy.yml', 'w', encoding='utf-8') as f:
    f.write(content)

print("deploy.yml updated successfully!")
