import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the banner text to be translated to German and force single-line for 70% RABATT
old_banner_1 = """<div style="color: #FFFFFF; font-size: clamp(6rem, 16vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase;">70% OFF</div>"""
new_banner_1 = """<div style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap;">70% RABATT</div>"""

old_banner_2 = """<div style="color: #FFFFFF; font-size: clamp(3rem, 8vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase;">ENDS TODAY &#8628;</div>"""
new_banner_2 = """<div style="color: #FFFFFF; font-size: clamp(2rem, 7vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase;">ENDET HEUTE &#8628;</div>"""

content = content.replace(old_banner_1, new_banner_1)
content = content.replace(old_banner_2, new_banner_2)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Banner translated to German and forced to single line!")
