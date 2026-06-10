import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

old_banner = """<div style="color: #FFFFFF; font-size: clamp(6rem, 16vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase;">70% OFF</div>"""
new_banner = """<div style="color: #FFFFFF; font-size: clamp(4rem, 14vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap;">70% OFF</div>"""

content = content.replace(old_banner, new_banner)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Banner updated to single line!")
