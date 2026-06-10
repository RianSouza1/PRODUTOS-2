import re

file_path = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\bkp-de\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update CSS Variables for Deep Forest Green Theme
replacements = {
    # Replace from current cream
    r"--wp--preset--color--base: #FDFBF7;": "--wp--preset--color--base: #064E3B;", # Deep Forest Green
    r"--wp--preset--color--base-2: #EAF0EE;": "--wp--preset--color--base-2: #065F46;", # Slightly lighter green
    r"--wp--preset--color--contrast: #1B3B2B;": "--wp--preset--color--contrast: #FEF3C7;", # Warm honey/off-white text
    r"--wp--preset--color--contrast-2: #276749;": "--wp--preset--color--contrast-2: #FDE68A;", # Golden text
    r"--wp--preset--color--contrast-3: #4A5568;": "--wp--preset--color--contrast-3: #FCD34D;", # Yellow text
    # Also replace original just in case
    r"--wp--preset--color--base: #f9f9f9;": "--wp--preset--color--base: #064E3B;",
    r"--wp--preset--color--base-2: #ffffff;": "--wp--preset--color--base-2: #065F46;",
    r"--wp--preset--color--contrast: #111111;": "--wp--preset--color--contrast: #FEF3C7;",
    r"--wp--preset--color--contrast-2: #636363;": "--wp--preset--color--contrast-2: #FDE68A;",
    r"--wp--preset--color--contrast-3: #A4A4A4;": "--wp--preset--color--contrast-3: #FCD34D;",
}

for old, new in replacements.items():
    content = content.replace(old, new)

# 2. Re-style the buttons for high conversion (Bright Gold)
button_css_cream = r":root :where(.wp-element-button, .wp-block-button__link){background-color: #F59E0B;border-radius: 8px;border-width: 0;color: #1B3B2B !important;font-family: var(--wp--preset--font-family--system-sans-serif);font-size: 1.25rem;font-style: normal;font-weight: 800;letter-spacing: 0.5px;line-height: inherit;padding-top: 1rem;padding-right: 2.5rem;padding-bottom: 1rem;padding-left: 2.5rem;text-decoration: none;text-transform: uppercase;box-shadow: 0 6px 15px rgba(245, 158, 11, 0.4);transition: all 0.3s ease;}"
button_hover_cream = r":root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: #D97706;color: #1B3B2B !important;transform: translateY(-3px);box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);}"
button_focus_cream = r":root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: #D97706;color: #1B3B2B !important;outline-color: #F59E0B;outline-offset: 2px;}"
button_active_cream = r":root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: #B45309;color: #1B3B2B !important;transform: translateY(0);}"

button_css_new = r":root :where(.wp-element-button, .wp-block-button__link){background-color: #F59E0B;border-radius: 8px;border-width: 0;color: #064E3B !important;font-family: var(--wp--preset--font-family--system-sans-serif);font-size: 1.3rem;font-style: normal;font-weight: 800;letter-spacing: 0.5px;line-height: inherit;padding-top: 1rem;padding-right: 2.5rem;padding-bottom: 1rem;padding-left: 2.5rem;text-decoration: none;text-transform: uppercase;box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);transition: all 0.3s ease;}"
button_hover_new = r":root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: #FBBF24;color: #064E3B !important;transform: translateY(-3px);box-shadow: 0 8px 25px rgba(251, 191, 36, 0.7);}"
button_focus_new = r":root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: #FBBF24;color: #064E3B !important;outline-color: #F59E0B;outline-offset: 2px;}"
button_active_new = r":root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: #D97706;color: #064E3B !important;transform: translateY(0);}"

content = content.replace(button_css_cream, button_css_new)
content = content.replace(button_hover_cream, button_hover_new)
content = content.replace(button_focus_cream, button_focus_new)
content = content.replace(button_active_cream, button_active_new)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Deep Forest Green & Gold Palette applied successfully!")
