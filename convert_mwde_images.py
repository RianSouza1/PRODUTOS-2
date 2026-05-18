import os
from PIL import Image

def convert_to_webp(input_path, output_path, quality=80):
    try:
        with Image.open(input_path) as img:
            img.save(output_path, 'webp', quality=quality)
        print(f"Converted: {input_path} -> {output_path}")
        os.remove(input_path)
        print(f"Removed original: {input_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

images_dir = "mw-de/Imagens"
mappings = {
    "img1al.png": "img1al.webp",
    "img2al.png": "img2al.webp",
    "img3al-metal.png": "img3al.webp",
    "img4al.png": "img4al.webp"
}

for old_name, new_name in mappings.items():
    input_path = os.path.join(images_dir, old_name)
    output_path = os.path.join(images_dir, new_name)
    if os.path.exists(input_path):
        convert_to_webp(input_path, output_path)

