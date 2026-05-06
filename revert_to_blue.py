import os

html_file = 'Bible Guide/index.html'
css_file = 'Bible Guide/style.css'

with open(css_file, 'r') as f:
    css = f.read()

# Replace variables block
old_vars = """:root {
    --primary: #1c1917; /* Warm dark stone */
    --bg-dark: #1c1917; 
    --bg-darker: #0c0a09; 
    --red-alert: #dc2626; 
    --red-alert-dark: #991b1b;
    --text-main: #fafaf9; /* Crisp off-white */
    --text-muted: #a8a29e;
    --bg-light: #292524; /* Elevated cards */
    --accent-gold: #eab308;
    --accent-gold-hover: #ca8a04;
    --green-check: #10b981;
    --dark: #0c0a09;
}"""

new_vars = """:root {
    --primary: #0f172a; /* Very dark navy blue */
    --bg-dark: #0f172a;
    --bg-darker: #020617;
    --red-alert: #ef4444; 
    --red-alert-dark: #b91c1c;
    --text-main: #f8fafc; /* White/very light gray for dark bg */
    --text-muted: #cbd5e1;
    --bg-light: #ffffff; /* For cards/testimonials */
    --accent-gold: #f59e0b;
    --accent-gold-hover: #d97706;
    --green-check: #22c55e;
    --dark: #0f172a;
}"""

css = css.replace(old_vars, new_vars)

# Fix testimonial backgrounds and text colors
css = css.replace('.testimonial-card {\n    background: var(--bg-light);\n    border-radius: 12px;\n    padding: 2rem;\n    box-shadow: 0 15px 30px -5px rgba(0,0,0,0.6);\n    color: var(--text-main);', '.testimonial-card {\n    background: var(--bg-light);\n    border-radius: 12px;\n    padding: 2rem;\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);\n    color: var(--dark);')

css = css.replace('.testimonial-name {\n    font-size: 1.25rem;\n    font-weight: 800;\n    color: var(--text-main);', '.testimonial-name {\n    font-size: 1.25rem;\n    font-weight: 800;\n    color: var(--dark);')

with open(css_file, 'w') as f:
    f.write(css)

with open(html_file, 'r') as f:
    html = f.read()

# Fix icon backgrounds
html = html.replace('color="#1c1917"', 'color="#ffffff"')
html = html.replace('background: var(--bg-light);', 'background: var(--bg-white);') # wait, previously I changed bg-white to bg-darker then bg-light. Let's make it bg-darker
html = html.replace('background: var(--bg-light);', 'background: var(--bg-darker);')

with open(html_file, 'w') as f:
    f.write(html)
