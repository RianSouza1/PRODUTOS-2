from PIL import Image
import os

png_path = "ww-de/Imagens/img1-al.png"
webp_path = "ww-de/Imagens/img1al.webp"

if os.path.exists(png_path):
    print(f"Converting {png_path} to {webp_path}...")
    with Image.open(png_path) as img:
        img.save(webp_path, "WEBP", quality=85)
    os.remove(png_path)
    print(f"Success! {webp_path} created and PNG removed.")
else:
    print(f"File not found: {png_path}")

