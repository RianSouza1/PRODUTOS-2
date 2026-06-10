import os
import re

targets = [
    "bkp/index.html",
    "bkp-es/index.html",
    "bkp-pt/index.html",
    "hx-fr/index.html",
    "hx-it/index.html",
    "bkp-de/index.html"
]

for target in targets:
    if not os.path.exists(target):
        print(f"Skipping {target}, does not exist.")
        continue
        
    with open(target, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Fix CSS Variables
    content = re.sub(r'--wp--preset--color--base:\s*#[A-Fa-f0-9]{6};', '--wp--preset--color--base: #F8B003;', content)
    content = re.sub(r'--wp--preset--color--base-2:\s*#[A-Fa-f0-9]{6};', '--wp--preset--color--base-2: #064E3B;', content)
    content = re.sub(r'--wp--preset--color--contrast:\s*#[A-Fa-f0-9]{6};', '--wp--preset--color--contrast: #064E3B;', content)
    content = re.sub(r'--wp--preset--color--contrast-2:\s*#[A-Fa-f0-9]{6};', '--wp--preset--color--contrast-2: #064E3B;', content)
    content = re.sub(r'--wp--preset--color--contrast-3:\s*#[A-Fa-f0-9]{6};', '--wp--preset--color--contrast-3: #064E3B;', content)
    
    # Fix Specific Classes that might force wrong colors
    content = re.sub(r'\.has-base-color\{color:\s*#[A-Fa-f0-9]{6}\s*!important;\}', '.has-base-color{color: #F8B003 !important;}', content)
    content = re.sub(r'\.has-base-2-color\{color:\s*(?:var\(--wp--preset--color--contrast\)|#[A-Fa-f0-9]{6})\s*!important;\}', '.has-base-2-color{color: var(--wp--preset--color--base-2) !important;}', content)
    content = re.sub(r'\.has-contrast-color\{color:\s*(?:var\(--wp--preset--color--contrast\)|#[A-Fa-f0-9]{6})\s*!important;\}', '.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}', content)
    content = re.sub(r'\.has-contrast-2-color\{color:\s*(?:var\(--wp--preset--color--contrast-2\)|#[A-Fa-f0-9]{6})\s*!important;\}', '.has-contrast-2-color{color: var(--wp--preset--color--contrast-2) !important;}', content)

    # Make the Scarcity Banner Text Dark Green too! 
    # Our injected banner has: <div style="color: #FFFFFF; font-size: clamp...
    content = content.replace('style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem);', 'style="color: #064E3B; font-size: clamp(3.5rem, 12vw, 9rem);')
    content = content.replace('style="color: #FFFFFF; font-size: clamp(1.5rem, 9vw, 9rem);', 'style="color: #064E3B; font-size: clamp(1.5rem, 9vw, 9rem);')

    # Also check if there's any other HTML banner variants we added in bkp-de
    content = content.replace('style="color: #FFFFFF; font-size: clamp(', 'style="color: #064E3B; font-size: clamp(')
    
    # Change the subtitle "ENDS TODAY" / "TERMINA HOJE" text color if it was hardcoded to White
    content = content.replace('color: #FFFFFF; font-size: clamp(1rem, 4vw, 3rem);', 'color: #064E3B; font-size: clamp(1rem, 4vw, 3rem);')
    
    # Write back
    with open(target, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Successfully fixed colors in {target}")

print("Done.")
