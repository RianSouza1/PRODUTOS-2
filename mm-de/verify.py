import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Check if our 70off HTML is present
if '<section class="ww-huge-offer-banner">' in text:
    print("70off HTML: PRESENT")
else:
    print("70off HTML: MISSING")

# Check if style block is present
if 'ww-custom-fixes' in text:
    print("Custom CSS: PRESENT")
else:
    print("Custom CSS: MISSING")

# Check for the shadow variable
count = text.count('--wp--preset--shadow--natural')
print(f"Shadow variable refs: {count}")

# Check for has-background on <main>
m = re.search(r'<main[^>]+>', text)
if m:
    print(f"Main tag: {m.group(0)[:200]}")

# Check if 70off image is still there
if '70off-1.jpg' in text:
    print("70off IMAGE: STILL PRESENT - needs removal!")
else:
    print("70off IMAGE: removed")
