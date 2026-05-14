import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Get full main tag
m = re.search(r'<main[^>]+>', text)
if m:
    print(m.group(0))
