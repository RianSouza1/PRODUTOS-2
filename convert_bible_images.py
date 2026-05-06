from PIL import Image
import os

dir_path = "/Users/riansouza/Downloads/PRODUTOS 2/Bible Guide/images"
repo_path = "/Users/riansouza/TAICHI/glp/Bible Guide/images"

def convert_and_replace(png_name, webp_name):
    png_path = os.path.join(dir_path, png_name)
    webp_path = os.path.join(dir_path, webp_name)
    repo_webp_path = os.path.join(repo_path, webp_name)
    
    if os.path.exists(png_path):
        print(f"Converting {png_name} to {webp_name}...")
        # Open and convert
        with Image.open(png_path) as img:
            # Convert to RGB if necessary (to avoid issues with transparency in some webp saves, though WEBP supports alpha)
            img.save(webp_path, "WEBP", quality=85)
            # Also save directly to the repo
            img.save(repo_webp_path, "WEBP", quality=85)
        # Remove original PNG
        os.remove(png_path)
        print(f"Success! {webp_name} created.")
    else:
        print(f"File not found: {png_path}")

convert_and_replace("img1-bible.png", "img1.webp")
convert_and_replace("IMAGEM 2 .png", "img2.webp")
convert_and_replace("IMAGEM 3.png", "img-4.webp")
