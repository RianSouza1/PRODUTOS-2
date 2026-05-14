import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace prices
content = content.replace('$19.90', '19,90 €')
content = content.replace('$59.70', '59,70 €')
content = content.replace('19,90 $', '19,90 €')
content = content.replace('59,70 $', '59,70 €')

# Replace links
# Find all hrefs inside buttons or the specific old link
# Usually the buttons have `href="https://pay.hotmart.com/..."` or `href="?add-to-cart=..."`
# Let's use regex to replace all hotmart links or the checkout button links
# In the original English version it was `href="?add-to-cart=189489"`
content = re.sub(r'href="[^"]*add-to-cart=\d+"', 'href="https://pay.hotmart.com/G105831245S"', content)
content = re.sub(r'href="https://pay\.hotmart\.com/[^"]+"', 'href="https://pay.hotmart.com/G105831245S"', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Prices and links replaced successfully!")
