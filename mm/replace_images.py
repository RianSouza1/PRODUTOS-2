import re

def replace_images():
    with open('index.html', 'r', encoding='utf-8') as f:
        text = f.read()

    # Remove all srcset and sizes attributes
    text = re.sub(r'\s*srcset="[^"]+"', '', text)
    text = re.sub(r'\s*sizes="[^"]+"', '', text)

    # Replace specific images
    replacements = {
        'product-img-2.jpg': 'Imagens/img1.webp',
        'product-img-4.jpg': 'Imagens/img1.webp',
        '3books-1-1024x587.jpg': 'Imagens/img2.webp',
        '3books-1.jpg': 'Imagens/img2.webp',
        'IMAGE-1.png': 'Imagens/img2.webp',
        'IMAGE-2-1.jpg': 'Imagens/img3.webp',
        # Keep 70off-1.jpg as is or replace? I will leave 70off alone since no img4 provided.
    }

    for wp_img, local_img in replacements.items():
        # Match https://prime-library.com/.../wp_img
        pattern = r'https://prime-library.com/wp-content/uploads/2025/12/' + re.escape(wp_img)
        text = re.sub(pattern, local_img, text)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(text)

replace_images()
