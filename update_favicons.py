import sys
import re

def update_file(path, new_title, emoji):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update title
    content = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', content)
    
    # Remove old favicons
    content = re.sub(r'<link rel="icon".*?>\n?', '', content)
    content = re.sub(r'<link rel="apple-touch-icon".*?>\n?', '', content)
    content = re.sub(r'<meta name="msapplication-TileImage".*?>\n?', '', content)
    
    # Insert new favicon before </head> or after </style>
    new_favicon = f'<link rel="icon" href="data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>{emoji}</text></svg>">\n'
    content = content.replace('</head>', new_favicon + '</head>')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {path} with title '{new_title}' and emoji '{emoji}'")

update_file("metalon/index.html", "Metalworking Projects", "🔨")
update_file("ww-de/index.html", "Holzbearbeitung Projekte", "🪵")

