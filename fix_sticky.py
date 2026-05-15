import sys

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace overflow-x: hidden with clip
    new_content = content.replace("overflow-x: hidden !important;", "overflow-x: clip !important;")
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Fixed sticky issue in {path}")

fix_file("ww-de/index.html")
fix_file("metalon/index.html")

