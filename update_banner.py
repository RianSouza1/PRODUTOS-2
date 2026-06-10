import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We need to find the banner div and replace its contents.
# Let's just find the div with the background color we added.
pattern = r'<div style="text-align: center; padding: 40px 10px; margin: 20px 0; background-color: #f7b718; border-top: 4px solid #ebaa0e; box-shadow: 0 10px 20px rgba\(0,0,0,0\.1\);">.*?</div>\n</div>'
# Wait, the closing tags might be tricky with regex.
# I will just replace the specific lines.

old_banner = """<div style="text-align: center; padding: 40px 10px; margin: 20px 0; background-color: #f7b718; border-top: 4px solid #ebaa0e; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
    <div style="color: #FFFFFF; font-size: clamp(4rem, 12vw, 7rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -2px; text-transform: uppercase;">70% OFF</div>
    <div style="color: #FFFFFF; font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 15px; letter-spacing: 1px; text-transform: uppercase;">ENDS TODAY &#8628;</div>
</div>"""

new_banner = """<div style="text-align: center; padding: 20px 0; margin: 20px 0;">
    <div style="color: #FFFFFF; font-size: clamp(6rem, 16vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase;">70% OFF</div>
    <div style="color: #FFFFFF; font-size: clamp(3rem, 8vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase;">ENDS TODAY &#8628;</div>
</div>"""

content = content.replace(old_banner, new_banner)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Banner updated successfully!")
