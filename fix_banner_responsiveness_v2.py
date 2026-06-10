import os
import re

base_dir = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2"

# Proportionate responsive configurations to ensure text fits perfectly without breaking layout or overflowing
configs = {
    "bkp-de/index.html": {
        "off": "70% RABATT", 
        "ends": "ENDET HEUTE &#8628;",
        "title_clamp": "clamp(1.3rem, 9vw, 7.5rem)",
        "sub_clamp": "clamp(0.95rem, 4.5vw, 2.5rem)"
    },
    "bkp/index.html": {
        "off": "70% OFF", 
        "ends": "ENDS TODAY &#8628;",
        "title_clamp": "clamp(1.4rem, 11vw, 8rem)",
        "sub_clamp": "clamp(1rem, 5.5vw, 3rem)"
    },
    "bkp-es/index.html": {
        "off": "70% DESCUENTO", 
        "ends": "TERMINA HOY &#8628;",
        "title_clamp": "clamp(1.2rem, 7.2vw, 6.5rem)",
        "sub_clamp": "clamp(0.9rem, 4vw, 2.2rem)"
    },
    "bkp-pt/index.html": {
        "off": "70% DE DESCONTO", 
        "ends": "TERMINA HOJE &#8628;",
        "title_clamp": "clamp(1.1rem, 6.4vw, 6rem)",
        "sub_clamp": "clamp(0.85rem, 3.8vw, 2rem)"
    },
    "hx-fr/index.html": {
        "off": "70% DE R&Eacute;DUCTION", 
        "ends": "SE TERMINE AUJOURD'HUI &#8628;",
        "title_clamp": "clamp(1.1rem, 6.2vw, 5.8rem)",
        "sub_clamp": "clamp(0.8rem, 3.5vw, 1.8rem)"
    },
    "hx-it/index.html": {
        "off": "70% DI SCONTO", 
        "ends": "SCADE OGGI &#8628;",
        "title_clamp": "clamp(1.2rem, 7.2vw, 6.5rem)",
        "sub_clamp": "clamp(0.9rem, 4vw, 2.2rem)"
    }
}

for relative_path, cfg in configs.items():
    file_path = os.path.join(base_dir, relative_path)
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, not found.")
        continue
        
    print(f"Processing {relative_path} for responsiveness...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # The perfectly designed, centered, responsive banner HTML
    responsive_banner = f"""<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto; box-sizing: border-box; overflow: hidden;">
    <div style="color: #FFFFFF; font-size: {cfg['title_clamp']}; font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -2px; text-transform: uppercase; text-align: center; width: 100%; word-wrap: break-word;">{cfg['off']}</div>
    <div style="color: #FFFFFF; font-size: {cfg['sub_clamp']}; font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; text-align: center; width: 100%; word-wrap: break-word;">{cfg['ends']}</div>
</div>"""

    # Extremely robust regex that matches any version of our centered scarcity banner div
    # It looks for the outer div with "display: flex; flex-direction: column; align-items: center;" style
    # and matches everything up to the next closing div tags that represent the banner.
    pattern = r'<div style="display:\s*flex;\s*flex-direction:\s*column;\s*align-items:\s*center;.*?box-sizing:\s*border-box;\s*overflow:\s*hidden;">.*?</div>\s*</div>'
    
    if re.search(pattern, content, flags=re.DOTALL):
        content = re.sub(pattern, responsive_banner, content, flags=re.DOTALL)
        print(f"Matched and replaced the new format banner.")
    else:
        # Fallback to older format matchers just in case
        pattern_old = r'<div style="display:\s*flex;\s*flex-direction:\s*column;\s*align-items:\s*center;.*?margin:\s*20px auto;">.*?</div>\s*</div>'
        if re.search(pattern_old, content, flags=re.DOTALL):
            content = re.sub(pattern_old, responsive_banner, content, flags=re.DOTALL)
            print(f"Matched and replaced the old format banner.")
        else:
            print(f"WARNING: Scarcity banner pattern not matched in {relative_path}!")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Finished optimizing banner in {relative_path}!")

print("All banners fully optimized for extreme mobile responsiveness.")
