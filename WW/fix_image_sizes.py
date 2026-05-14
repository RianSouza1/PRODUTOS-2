import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

def add_style(match):
    img_tag = match.group(0)
    # se a imagem ja tem style, a gente adiciona
    if 'style="' in img_tag:
        img_tag = re.sub(r'style="([^"]*)"', r'style="\1; max-width: 800px !important; margin: 0 auto !important; display: block !important;"', img_tag)
    else:
        img_tag = img_tag.replace('<img ', '<img style="max-width: 800px !important; margin: 0 auto !important; display: block !important;" ')
    return img_tag

# Only target the images we modified (they have Imagens/ in the src or are large wp-images)
text = re.sub(r'<img[^>]+wp-image-[^>]+>', add_style, text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)
