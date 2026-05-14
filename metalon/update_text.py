import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the bullet point
content = content.replace(
    '<strong>Relaxing project guides</strong> to help you de-stress while creating',
    '<strong>Step-by-step project guides</strong> to help you build with confidence from start to finish'
)

# Replace the title back to + 2 BONUSES
content = content.replace(
    'Woodworking for Beginners + BONUSES',
    'Woodworking for Beginners + 2 BONUSES'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Text replaced successfully!")
