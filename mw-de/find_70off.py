import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Find and replace the 70off IMAGE with HTML markup
# Pattern to match the wp-block-image containing 70off-1.jpg
old_70off = re.search(
    r'<figure[^>]*has-custom-border[^>]*>.*?70off.*?</figure>',
    text, re.DOTALL
)
if old_70off:
    print(f"Found 70off block at chars {old_70off.start()}-{old_70off.end()}")
    print(old_70off.group(0)[:300])
else:
    print("Not found - searching differently...")
    idx = text.find('70off')
    print(text[max(0, idx-200):idx+200])
