import os
import glob
try:
    from PIL import Image
    
    png_files = glob.glob('Imagens/*.png')
    for file in png_files:
        webp_file = file.replace('.png', '.webp')
        img = Image.open(file)
        img.save(webp_file, 'webp')
        print(f"Converted {file} to {webp_file}")
        # Optional: os.remove(file) to clean up
except ImportError:
    print("PIL not installed. Please install Pillow.")
