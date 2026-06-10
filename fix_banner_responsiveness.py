import os
import re

base_dir = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2"

# Proportionate responsive configurations to ensure text fits perfectly without breaking layout or overflowing
configs = {
    "bkp-de/index.html": {
        "off": "70% RABATT", 
        "ends": "ENDET HEUTE &#8628;",
        "title_clamp": "clamp(2rem, 10vw, 8rem)",
        "sub_clamp": "clamp(1.2rem, 5vw, 3rem)"
    },
    "bkp/index.html": {
        "off": "70% OFF", 
        "ends": "ENDS TODAY &#8628;",
        "title_clamp": "clamp(2rem, 12vw, 9rem)",
        "sub_clamp": "clamp(1.2rem, 6vw, 3.5rem)"
    },
    "bkp-es/index.html": {
        "off": "70% DESCUENTO", 
        "ends": "TERMINA HOY &#8628;",
        "title_clamp": "clamp(2rem, 8.2vw, 7rem)",
        "sub_clamp": "clamp(1.1rem, 4.5vw, 2.5rem)"
    },
    "bkp-pt/index.html": {
        "off": "70% DE DESCONTO", 
        "ends": "TERMINA HOJE &#8628;",
        "title_clamp": "clamp(1.8rem, 7.2vw, 6.2rem)",
        "sub_clamp": "clamp(1.1rem, 4vw, 2.3rem)"
    },
    "hx-fr/index.html": {
        "off": "70% DE R&Eacute;DUCTION", 
        "ends": "SE TERMINE AUJOURD'HUI &#8628;",
        "title_clamp": "clamp(1.8rem, 7.2vw, 6.2rem)",
        "sub_clamp": "clamp(1.1rem, 4vw, 2.3rem)"
    },
    "hx-it/index.html": {
        "off": "70% DI SCONTO", 
        "ends": "SCADE OGGI &#8628;",
        "title_clamp": "clamp(2rem, 8.2vw, 7rem)",
        "sub_clamp": "clamp(1.1rem, 4.5vw, 2.5rem)"
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
    # We removed "white-space: nowrap;" and optimized clamp sizing + line-height to ensure zero overflow or cutoffs.
    responsive_banner = f"""<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto; box-sizing: border-box; overflow: hidden;">
    <div style="color: #FFFFFF; font-size: {cfg['title_clamp']}; font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -2px; text-transform: uppercase; text-align: center; width: 100%; word-wrap: break-word;">{cfg['off']}</div>
    <div style="color: #FFFFFF; font-size: {cfg['sub_clamp']}; font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; text-align: center; width: 100%; word-wrap: break-word;">{cfg['ends']}</div>
</div>"""

    # Replace any existing scarcity banner block
    # Case A: Matches style-based centered banner wrapper with any content
    pattern = r'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto;">.*?</div>\s*</div>'
    if re.search(pattern, content, flags=re.DOTALL):
        content = re.sub(pattern, responsive_banner, content, flags=re.DOTALL)
    # Case B: Matches style-based centered banner wrapper with box-sizing (our newer format)
    pattern_box = r'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto; box-sizing: border-box;.*?</div\s*>\s*</div>'
    if re.search(pattern_box, content, flags=re.DOTALL):
        content = re.sub(pattern_box, responsive_banner, content, flags=re.DOTALL)
    # Case C: Matches class-based banner wrapper
    elif 'class="my-scarcity-banner"' in content:
        content = re.sub(r'<div class="my-scarcity-banner".*?</div>\s*</div>', responsive_banner, content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Finished optimizing banner in {relative_path}!")

print("All banners fully optimized for extreme mobile responsiveness.")
