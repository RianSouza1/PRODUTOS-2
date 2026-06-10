import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# We revert background back to Dark Green, and set text to #F88800
replacements = {
    r"--wp--preset--color--base: #FEF3C7;": "--wp--preset--color--base: #064E3B;",
    r"--wp--preset--color--base-2: #FDE68A;": "--wp--preset--color--base-2: #065F46;",
    r"--wp--preset--color--contrast: #064E3B;": "--wp--preset--color--contrast: #F88800;", # Main text as #F88800
    r"--wp--preset--color--contrast-2: #065F46;": "--wp--preset--color--contrast-2: #F88800;",
    r"--wp--preset--color--contrast-3: #047857;": "--wp--preset--color--contrast-3: #F88800;",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Also update the buttons to use the #F88800 color.
# The buttons currently have #F59E0B or #FBBF24 or similar from the previous script.
# We'll just replace the button colors directly by replacing occurrences.
content = content.replace("background-color: #F59E0B", "background-color: #F88800")
content = content.replace("background-color: #FBBF24", "background-color: #FFA333") # lighter hover
content = content.replace("background-color: #D97706", "background-color: #CC6F00") # active
content = content.replace("outline-color: #F59E0B", "outline-color: #F88800")
content = content.replace("rgba(245, 158, 11", "rgba(248, 136, 0")
content = content.replace("rgba(251, 191, 36", "rgba(255, 163, 51")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Applied #F88800 to text and buttons, on Dark Green background!")
