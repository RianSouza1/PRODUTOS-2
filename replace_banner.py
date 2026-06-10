import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The image to replace:
# <figure class="wp-block-image alignfull size-full has-custom-border"><img loading="lazy" decoding="async" width="2400" height="900" src="https://atlas-library.com/wp-content/uploads/2025/12/70off-4.jpg"...</figure>

pattern = r'<figure class="wp-block-image alignfull size-full has-custom-border"><img loading="lazy" decoding="async" width="2400" height="900" src="https://atlas-library.com/wp-content/uploads/2025/12/70off-4\.jpg".*?</figure>'

html_banner = """
<div style="text-align: center; padding: 40px 10px; margin: 20px 0; background-color: #f7b718; border-top: 4px solid #ebaa0e; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
    <div style="color: #FFFFFF; font-size: clamp(4rem, 12vw, 7rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -2px; text-transform: uppercase;">70% OFF</div>
    <div style="color: #FFFFFF; font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 15px; letter-spacing: 1px; text-transform: uppercase;">ENDS TODAY &#8628;</div>
</div>
"""

new_content = re.sub(pattern, html_banner, content, flags=re.DOTALL)

if new_content != content:
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Replaced banner image with HTML version successfully!")
else:
    print("Could not find the image banner to replace.")
