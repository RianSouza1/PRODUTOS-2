import os

html_file = 'Bible Guide/index.html'
css_file = 'Bible Guide/style.css'

with open(css_file, 'r') as f:
    css = f.read()

# Replace variables block
old_vars = """:root {
    --primary: #f0ebe1;
    --bg-dark: #f0ebe1;
    --bg-darker: #e3ddcf;
    --red-alert: #b91c1c; 
    --red-alert-dark: #991b1b;
    --text-main: #1e293b;
    --text-muted: #475569;
    --bg-light: #fbf9f4;
    --accent-gold: #b45309;
    --accent-gold-hover: #92400e;
    --green-check: #16a34a;
    --dark: #0f172a;
}"""

new_vars = """:root {
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

css = css.replace(old_vars, new_vars)

# Fix backgrounds
css = css.replace('.time-card {\n    background: var(--bg-light);\n    color: #000;', '.time-card {\n    background: #ffffff;\n    color: #000000;')

# Testimonial cards
css = css.replace('.testimonial-card {\n    background: var(--bg-light);\n    border-radius: 12px;\n    padding: 2rem;\n    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\n    color: var(--dark);', '.testimonial-card {\n    background: var(--bg-light);\n    border-radius: 12px;\n    padding: 2rem;\n    box-shadow: 0 15px 30px -5px rgba(0,0,0,0.6);\n    color: var(--text-main);')
css = css.replace('.testimonial-name {\n    font-size: 1.25rem;\n    font-weight: 800;\n    color: var(--dark);', '.testimonial-name {\n    font-size: 1.25rem;\n    font-weight: 800;\n    color: var(--text-main);')

# Upgrade Hero Section
css = css.replace('.hero-section {\n    background-color: var(--bg-dark);\n    padding: 4rem 0 3rem;\n}', '.hero-section {\n    background: radial-gradient(circle at top, var(--bg-light) 0%, var(--bg-dark) 70%);\n    padding: 4rem 0 3rem;\n}')

# Upgrade Button to be glossy and premium
btn_old = """.btn-buy-now {
    display: block;
    width: 100%;
    background-color: var(--accent-gold);
    color: #000000;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.25rem 2rem;
    border-radius: 50px;
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4);
    transition: all 0.2s ease;
    border: 3px solid #b45309;
    max-width: 450px;
    margin: 0 auto;
}

.btn-buy-now:hover {
    background-color: #fbbf24;
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(245, 158, 11, 0.6);
}"""

btn_new = """.btn-buy-now {
    display: block;
    width: 100%;
    background: linear-gradient(180deg, #fde047 0%, var(--accent-gold) 100%);
    color: #000000;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.25rem 2rem;
    border-radius: 50px;
    box-shadow: 0 10px 25px rgba(234, 179, 8, 0.4), inset 0 2px 0 rgba(255,255,255,0.6);
    transition: all 0.2s ease;
    border: none;
    max-width: 450px;
    margin: 0 auto;
}

.btn-buy-now:hover {
    background: linear-gradient(180deg, #fef08a 0%, #facc15 100%);
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(234, 179, 8, 0.6), inset 0 2px 0 rgba(255,255,255,0.8);
}"""
css = css.replace(btn_old, btn_new)

with open(css_file, 'w') as f:
    f.write(css)

with open(html_file, 'r') as f:
    html = f.read()

html = html.replace('color="#faf9f6"', 'color="#1c1917"')

with open(html_file, 'w') as f:
    f.write(html)
