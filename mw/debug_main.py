import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Find main wrapper
m = re.search(r'<main class="([^"]+)"', text)
if m:
    print('Main classes:', m.group(1))

# Find entry-content
m2 = re.search(r'<div class="entry-content[^"]*"', text)
if m2:
    print('Entry:', text[m2.start():m2.start()+250].encode('ascii','replace').decode())

# Find the root padding variables
m3 = re.search(r'--wp--style--root--padding[^;]+;', text)
if m3:
    ctx = text[max(0,m3.start()-20):m3.end()+200]
    print('Root padding:', ctx.encode('ascii','replace').decode()[:300])
