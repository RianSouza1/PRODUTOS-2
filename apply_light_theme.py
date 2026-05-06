import os

html_file = 'Bible Guide/index.html'
css_file = 'Bible Guide/style.css'

with open(css_file, 'r') as f:
    css = f.read()

old_vars = """:root {
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

new_vars = """:root {
    --primary: #fdfbf7;
    --bg-dark: #faf9f6;
    --bg-darker: #f3f0e8;
    --red-alert: #b91c1c; 
    --red-alert-dark: #991b1b;
    --text-main: #1e293b;
    --text-muted: #475569;
    --bg-light: #ffffff;
    --accent-gold: #b45309;
    --accent-gold-hover: #92400e;
    --green-check: #16a34a;
    --dark: #0f172a;
}"""

css = css.replace(old_vars, new_vars)

# Replace hardcoded white colors
css = css.replace('color: #ffffff;', 'color: var(--text-main);')
css = css.replace('color: #fff;', 'color: var(--text-main);')
css = css.replace('color: #cbd5e1;', 'color: var(--text-main);')
css = css.replace('color: #f8fafc;', 'color: var(--text-main);')
css = css.replace('color: #94a3b8;', 'color: var(--text-muted);')

# Restore the red banner text to white
css = css.replace('.top-warning-bar {\n    background-color: var(--red-alert);\n    color: var(--text-main);', '.top-warning-bar {\n    background-color: var(--red-alert);\n    color: #ffffff;')
css = css.replace('.time-sep {\n    font-weight: bold;\n    color: var(--text-main);', '.time-sep {\n    font-weight: bold;\n    color: #ffffff;')

with open(css_file, 'w') as f:
    f.write(css)

with open(html_file, 'r') as f:
    html = f.read()

# Replace inline whites
html = html.replace('color:#ffffff;', 'color:var(--text-main);')
html = html.replace('color: #ffffff;', 'color: var(--text-main);')
html = html.replace('color="#ffffff"', 'color="#faf9f6"')
html = html.replace('color: #f8fafc;', 'color: var(--text-main);')
html = html.replace('background: var(--bg-white);', 'background: var(--bg-darker);')

# Fix CTA Button color in HTML which is manually set
html = html.replace('color: var(--text-main); background: var(--red-alert);', 'color: #ffffff; background: var(--red-alert);')

with open(html_file, 'w') as f:
    f.write(html)
