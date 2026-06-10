import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The current stars are:
white_star = '<span style="color: #FFFFFF; font-size: 1.3em; margin: 0 2px; text-shadow: 0px 2px 4px rgba(0,0,0,0.3);">★</span>'

# We want them to look like the 3D yellow stars on a yellow background.
# We will use a bright golden yellow (#FFD700) with layered text shadows to create a 3D bevel and drop shadow.
css_3d_star = '<span style="color: #FFD54F; font-size: 1.6em; margin: 0 4px; text-shadow: -1px -1px 0 rgba(255,255,255,0.4), 1px 1px 0 #D98800, 2px 2px 0 #C27A00, 3px 3px 0 #A86A00, 4px 4px 5px rgba(0,0,0,0.3);">★</span>'

content = content.replace(white_star, css_3d_star)

# The user also asked for White letters: "Coloque as letras branco"
# I already did this in the previous script, but let's double check.
# The button was already reverted to Green/White in the previous script.

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("3D Yellow Stars applied successfully!")
