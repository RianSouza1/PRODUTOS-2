import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Change text color to White (#FFFFFF)
# Currently it is #111111 (Black)
replacements = {
    r"--wp--preset--color--contrast: #111111;": "--wp--preset--color--contrast: #FFFFFF;",
    r"--wp--preset--color--contrast-2: #222222;": "--wp--preset--color--contrast-2: #FFFFFF;",
    r"--wp--preset--color--contrast-3: #333333;": "--wp--preset--color--contrast-3: #FFFFFF;",
}
for old, new in replacements.items():
    content = content.replace(old, new)

# 2. Fix the stars
# Currently they are: <span style="color: #111111; font-size: 1.2em; margin: 0 2px; text-shadow: 1px 1px 0px rgba(255,255,255,0.3);">★</span>
# We will make them White with a nice soft dark shadow so they stand out and look elegant
black_star = '<span style="color: #111111; font-size: 1.2em; margin: 0 2px; text-shadow: 1px 1px 0px rgba(255,255,255,0.3);">★</span>'
white_star = '<span style="color: #FFFFFF; font-size: 1.3em; margin: 0 2px; text-shadow: 0px 2px 4px rgba(0,0,0,0.3);">★</span>'
content = content.replace(black_star, white_star)

# 3. Revert button to the "previous standard"
# The inline button has background-color:#4caf50. 
# But our global CSS for .wp-element-button is overriding things:
# It currently has: background-color: #064E3B; color: #F8B003 !important;
# Let's revert the global button CSS to Green background with White text.
content = content.replace("background-color: #064E3B", "background-color: #4CAF50")
content = content.replace("background-color: #065F46", "background-color: #45A049") # hover green
content = content.replace("background-color: #047857", "background-color: #3d8b40") # active green
content = content.replace("outline-color: #064E3B", "outline-color: #4CAF50")
content = content.replace("color: #F8B003 !important;", "color: #FFFFFF !important;") # Text back to white
content = content.replace("color: #F88800 !important;", "color: #FFFFFF !important;") # Just in case

# Save
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Applied White text, White Stars with shadow, and reverted button to Green/White!")
