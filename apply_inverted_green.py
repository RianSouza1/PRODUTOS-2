import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Current Dark Green theme
# --wp--preset--color--base: #064E3B;
# --wp--preset--color--base-2: #065F46;
# --wp--preset--color--contrast: #FEF3C7;
# --wp--preset--color--contrast-2: #FDE68A;
# --wp--preset--color--contrast-3: #FCD34D;

# We will invert them: Base (Background) becomes Light/Honey, Contrast (Text) becomes Dark Green
replacements = {
    r"--wp--preset--color--base: #064E3B;": "--wp--preset--color--base: #FEF3C7;",
    r"--wp--preset--color--base-2: #065F46;": "--wp--preset--color--base-2: #FDE68A;",
    r"--wp--preset--color--contrast: #FEF3C7;": "--wp--preset--color--contrast: #064E3B;",
    r"--wp--preset--color--contrast-2: #FDE68A;": "--wp--preset--color--contrast-2: #065F46;",
    r"--wp--preset--color--contrast-3: #FCD34D;": "--wp--preset--color--contrast-3: #047857;",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Let's also adjust the button text color. If the button is Gold (#F59E0B), 
# the text inside the button should be Dark Green for contrast (it already is #064E3B, so it's fine).

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Inverted Light Honey & Dark Green Palette applied successfully!")
