import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# ─────────────────────────────────────────────────────────────────────────────
# 1. Find the "What's Inside This Bestselling" heading and remove the image before it
# ─────────────────────────────────────────────────────────────────────────────

# The heading is something like "What's Inside This Bestselling 3-Book Bundle"
# The image just before it should be the img3.webp (IMAGE-1.png replacement)
# Let's find that image + the heading, and remove the image

# Pattern: <figure...> containing img2.webp OR IMAGE-1 immediately before the heading
# First let's locate the heading
heading_match = re.search(
    r'(?i)(What.{0,10}s Inside This Bestselling)',
    text
)
if heading_match:
    print(f"Found heading at char {heading_match.start()}")
    # Look back ~1000 chars for a <figure> or <img>
    region_before = text[max(0, heading_match.start()-2000):heading_match.start()]
    print("Region before heading (last 500 chars):")
    print(region_before[-500:].encode('ascii', 'replace').decode())
else:
    print("Heading not found!")
    # Search for the text differently
    for phrase in ["Bestselling", "bestselling", "What's Inside", "whats inside"]:
        if phrase in text:
            idx = text.index(phrase)
            print(f"Found '{phrase}' at {idx}")
            print(text[max(0,idx-300):idx+100].encode('ascii','replace').decode())
            break
