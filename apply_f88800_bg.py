import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We set Background to #F88800, and Text to Dark Green
replacements = {
    r"--wp--preset--color--base: #064E3B;": "--wp--preset--color--base: #F88800;",
    r"--wp--preset--color--base-2: #065F46;": "--wp--preset--color--base-2: #FFA333;",
    r"--wp--preset--color--contrast: #F88800;": "--wp--preset--color--contrast: #064E3B;", 
    r"--wp--preset--color--contrast-2: #F88800;": "--wp--preset--color--contrast-2: #065F46;",
    r"--wp--preset--color--contrast-3: #F88800;": "--wp--preset--color--contrast-3: #047857;",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Update the buttons: Background Dark Green, Text #F88800
content = content.replace("background-color: #F88800", "background-color: #064E3B")
content = content.replace("background-color: #FFA333", "background-color: #065F46") # lighter hover
content = content.replace("background-color: #CC6F00", "background-color: #047857") # active
content = content.replace("outline-color: #F88800", "outline-color: #064E3B")
content = content.replace("color: #064E3B !important;", "color: #F88800 !important;")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Applied #F88800 to Background, and Dark Green to Text and Buttons!")
