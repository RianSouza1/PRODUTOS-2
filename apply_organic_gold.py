import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update CSS Variables for Organic Gold & Forest Palette
replacements = {
    r"--wp--preset--color--base: #18181b;": "--wp--preset--color--base: #FDFBF7;", # Warm Cream / Beeswax
    r"--wp--preset--color--base-2: #27272a;": "--wp--preset--color--base-2: #EAF0EE;", # Soft Sage Green
    r"--wp--preset--color--contrast: #f4f4f5;": "--wp--preset--color--contrast: #1B3B2B;", # Deep Forest Green
    r"--wp--preset--color--contrast-2: #a1a1aa;": "--wp--preset--color--contrast-2: #276749;", # Lighter forest green
    r"--wp--preset--color--contrast-3: #71717a;": "--wp--preset--color--contrast-3: #4A5568;", # Neutral dark
    # Let's also handle the case where it was still the original white (just in case they reverted)
    r"--wp--preset--color--base: #f9f9f9;": "--wp--preset--color--base: #FDFBF7;",
    r"--wp--preset--color--base-2: #ffffff;": "--wp--preset--color--base-2: #EAF0EE;",
    r"--wp--preset--color--contrast: #111111;": "--wp--preset--color--contrast: #1B3B2B;",
    r"--wp--preset--color--contrast-2: #636363;": "--wp--preset--color--contrast-2: #276749;",
    r"--wp--preset--color--contrast-3: #A4A4A4;": "--wp--preset--color--contrast-3: #4A5568;",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# 2. Re-style the buttons for high conversion (Amber/Golden)
# If it's already the dark mode script version, replace that
button_css_dark = r":root :where(.wp-element-button, .wp-block-button__link){background-color: #f59e0b;border-radius: 8px;border-width: 0;color: #18181b !important;font-family: var(--wp--preset--font-family--system-sans-serif);font-size: 1.15rem;font-style: normal;font-weight: 800;letter-spacing: 0.5px;line-height: inherit;padding-top: 1rem;padding-right: 2rem;padding-bottom: 1rem;padding-left: 2rem;text-decoration: none;text-transform: uppercase;box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);transition: all 0.3s ease;}"
button_hover_dark = r":root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: #d97706;color: #18181b !important;transform: translateY(-2px);box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);}"
button_focus_dark = r":root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: #d97706;color: #18181b !important;outline-color: #f59e0b;outline-offset: 2px;}"
button_active_dark = r":root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: #b45309;color: #18181b !important;transform: translateY(0);}"

# The new organic gold buttons
button_css_new = r":root :where(.wp-element-button, .wp-block-button__link){background-color: #F59E0B;border-radius: 8px;border-width: 0;color: #1B3B2B !important;font-family: var(--wp--preset--font-family--system-sans-serif);font-size: 1.25rem;font-style: normal;font-weight: 800;letter-spacing: 0.5px;line-height: inherit;padding-top: 1rem;padding-right: 2.5rem;padding-bottom: 1rem;padding-left: 2.5rem;text-decoration: none;text-transform: uppercase;box-shadow: 0 6px 15px rgba(245, 158, 11, 0.4);transition: all 0.3s ease;}"
button_hover_new = r":root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: #D97706;color: #1B3B2B !important;transform: translateY(-3px);box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);}"
button_focus_new = r":root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: #D97706;color: #1B3B2B !important;outline-color: #F59E0B;outline-offset: 2px;}"
button_active_new = r":root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: #B45309;color: #1B3B2B !important;transform: translateY(0);}"

content = content.replace(button_css_dark, button_css_new)
content = content.replace(button_hover_dark, button_hover_new)
content = content.replace(button_focus_dark, button_focus_new)
content = content.replace(button_active_dark, button_active_new)

# Fix sticky warning background to a more sophisticated dark amber/red
content = content.replace(r'style="background-color:#dc2626; color: #ffffff;"', r'style="background-color:#C53030; color: #ffffff;"')
content = content.replace(r'style="background-color:#e42628"', r'style="background-color:#C53030; color: #ffffff;"')

# Adjust text colors
content = content.replace(r'has-text-color has-base-2-color', r'has-text-color has-base-2-color')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Organic Gold & Forest Palette applied successfully!")
