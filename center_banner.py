import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Current HTML
old_banner_1 = """<div style="text-align: center; padding: 20px 0; margin: 20px 0;">"""
old_banner_2 = """<div style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap;">70% RABATT</div>"""
old_banner_3 = """<div style="color: #FFFFFF; font-size: clamp(2rem, 7vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase;">ENDET HEUTE &#8628;</div>"""

# Ensure we replace exactly the block
old_full = old_banner_1 + "\n    " + old_banner_2 + "\n    " + old_banner_3 + "\n</div>"

# New HTML: Flexbox centering, width 100%, nowrap on both lines.
new_full = """<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto;">
    <div style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap; text-align: center;">70% RABATT</div>
    <div style="color: #FFFFFF; font-size: clamp(2rem, 7vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; text-align: center;">ENDET HEUTE &#8628;</div>
</div>"""

if old_full in content:
    content = content.replace(old_full, new_full)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Banner aligned to center perfectly!")
else:
    print("Could not find exact block to replace.")
