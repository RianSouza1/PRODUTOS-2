import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace title
text = text.replace('Woodworking Projects for Beginners + 2 BONUSES', 'Woodworking for Beginners + BONUSES')

# Replace img3 extension
text = text.replace('src="Imagens/img3.webp"', 'src="Imagens/img3.png"')

# Replace the second img1.webp with img4.png
# We can find all occurrences of src="Imagens/img1.webp" and replace the last one.
parts = text.rsplit('src="Imagens/img1.webp"', 1)
if len(parts) == 2:
    text = 'src="Imagens/img4.png"'.join(parts)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Title and images updated.")
