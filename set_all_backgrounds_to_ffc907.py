import os
import re

base_dir = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2"

targets = [
    "bkp-de/index.html",
    "bkp/index.html",
    "bkp-es/index.html",
    "bkp-pt/index.html",
    "hx-fr/index.html",
    "hx-it/index.html"
]

for target in targets:
    file_path = os.path.join(base_dir, target)
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, not found.")
        continue
        
    print(f"Processing {target}...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # 1. Update --wp--preset--color--base variable to #ffc907 (the original German honey yellow)
    content = re.sub(
        r'--wp--preset--color--base:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--base: #ffc907;',
        content
    )
    
    # 2. Update utility class styles that used the wrong yellow (#F8B003)
    content = content.replace("background-color: #F8B003", "background-color: #ffc907")
    content = content.replace("background-color:#F8B003", "background-color:#ffc907")
    content = content.replace("color: #F8B003", "color: #ffc907")
    content = content.replace("color:#F8B003", "color:#ffc907")
    content = content.replace(".has-base-color{color: #F8B003 !important;}", ".has-base-color{color: #ffc907 !important;}")
    content = content.replace(".has-base-background-color{background-color: #F8B003 !important;}", ".has-base-background-color{background-color: #ffc907 !important;}")
    
    # Also double check that the <main> tag and other outer wrappers have background-color: var(--wp--preset--color--base) or #ffc907
    content = re.sub(
        r'style="background-color:#[A-Fa-f0-9]{6}" id="wp--skip-link--target"',
        'style="background-color:var(--wp--preset--color--base)" id="wp--skip-link--target"',
        content
    )
    content = re.sub(
        r'style="background-color:#[A-Fa-f0-9]{6};margin-top:0;margin-bottom:80px;',
        'style="background-color:var(--wp--preset--color--base);margin-top:0;margin-bottom:80px;',
        content
    )

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Successfully processed {target}!")

print("All backgrounds set to original German #ffc907 yellow.")
