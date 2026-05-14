import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace png image references with webp
content = content.replace('src="Imagens/img1al.png"', 'src="Imagens/img1al.webp"')
content = content.replace('src="Imagens/img2al.png"', 'src="Imagens/img2al.webp"')
content = content.replace('src="Imagens/img3al.png"', 'src="Imagens/img3al.webp"')
content = content.replace('src="Imagens/img4al.png"', 'src="Imagens/img4al.webp"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML updated to use WebP images.")
