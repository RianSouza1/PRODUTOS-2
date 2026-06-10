import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace all occurrences of #F88800 with #F8B003
content = content.replace("#F88800", "#F8B003")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replaced #F88800 with #F8B003 successfully!")
