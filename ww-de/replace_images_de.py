import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace images
content = content.replace('src="Imagens/img1.webp"', 'src="Imagens/img1al.png"')
content = content.replace('src="Imagens/img2.webp"', 'src="Imagens/img2al.png"')
content = content.replace('src="Imagens/img3.png"', 'src="Imagens/img3al.png"')
content = content.replace('src="Imagens/img4.png"', 'src="Imagens/img4al.png"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Images replaced successfully!")
