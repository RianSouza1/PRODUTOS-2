import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the heading
heading_match = re.search(r"(?i)What.{0,10}s Inside This Bestselling", text)
if heading_match:
    # Look back up to 3000 chars for the image (img2.webp or Imagens/img2.webp or IMAGE-1)
    region_start = max(0, heading_match.start() - 3000)
    region = text[region_start:heading_match.start()]
    
    # Find last <figure...> block in this region
    figures = list(re.finditer(r'<figure[^>]*>.*?</figure>', region, re.DOTALL))
    if figures:
        last_fig = figures[-1]
        fig_text = last_fig.group(0)
        print(f"Image to remove: {fig_text[:200].encode('ascii','replace').decode()}")
        # Remove it
        abs_start = region_start + last_fig.start()
        abs_end = region_start + last_fig.end()
        text = text[:abs_start] + text[abs_end:]
        print("Removed image before heading!")
    else:
        # Try finding wp-block-image div
        imgs = list(re.finditer(r'<div[^>]*wp-block-image[^>]*>.*?</div>', region, re.DOTALL))
        if imgs:
            last = imgs[-1]
            print(f"Found wp-block-image div: {last.group(0)[:150].encode('ascii','replace').decode()}")
        else:
            print("No figure found in region!")
            # Show the last 800 chars
            print(region[-800:].encode('ascii','replace').decode())

# ─────────────────────────────────────────────────────────────────────────────
# 2. Change "50 Step-by-Step" to "500 Step-by-Step"
# ─────────────────────────────────────────────────────────────────────────────
count = 0
# Only replace "50 Step" not "500 Step" (don't double-replace)
def replace_50(m):
    global count
    count += 1
    return m.group(0).replace('50 Step', '500 Step')

# Pattern: standalone "50 Step" not preceded by another digit
text, n = re.subn(r'(?<!\d)50 Step', '500 Step', text)
print(f"Replaced '50 Step' -> '500 Step' in {n} places")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done!")
