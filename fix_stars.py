import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Change text color to a darker Black/Dark Grey (#111111) for better contrast
# Currently the text is #064E3B
replacements = {
    r"--wp--preset--color--contrast: #064E3B;": "--wp--preset--color--contrast: #111111;",
    r"--wp--preset--color--contrast-2: #065F46;": "--wp--preset--color--contrast-2: #222222;",
    r"--wp--preset--color--contrast-3: #047857;": "--wp--preset--color--contrast-3: #333333;",
}
for old, new in replacements.items():
    content = content.replace(old, new)

# 2. Fix the stars
# The user highlighted them and they look like blue squares because of text selection.
# They disappeared because yellow stars on a yellow background are invisible.
# We will replace the img tags with native stars that have a dark outline/shadow, OR just replace them with Black Stars '★'.
# Let's replace the emoji imgs with highly visible Black Stars styled nicely.

star_img = '<img draggable="false" role="img" class="emoji" alt="⭐" src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg">'
visible_star = '<span style="color: #111111; font-size: 1.2em; margin: 0 2px; text-shadow: 1px 1px 0px rgba(255,255,255,0.3);">★</span>'

content = content.replace(star_img, visible_star)

# Let's also check if they used actual ⭐ text anywhere
content = content.replace("⭐⭐⭐⭐⭐", visible_star * 5)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Text color changed to #111111 and stars made visible!")
