with open(".github/workflows/deploy.yml", "r", encoding="utf-8") as f:
    content = f.read()

# Replace ww-de with mw-de
content = content.replace("ww-de", "mw-de")

# Replace metalon with mw
content = content.replace("metalon", "mw")

with open(".github/workflows/deploy.yml", "w", encoding="utf-8") as f:
    f.write(content)

