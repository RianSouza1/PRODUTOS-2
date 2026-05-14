import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Translate untranslated parts
replacements = {
    'What if the only thing standing between you and beautiful, handcrafted wood projects… was the <em>right guidance</em>?': 'Was wäre, wenn das Einzige, was zwischen Ihnen und wunderschönen, handgefertigten Holzprojekten steht... die <em>richtige Anleitung</em> wäre?',
    '<strong>But the truth is diﬀerent:</strong>': '<strong>Aber die Wahrheit sieht anders aus:</strong>',
    'With <strong>clear step-by-step instructions</strong>, <strong>simple beginner-friendly projects</strong>, and <strong>zero</strong> <strong>guesswork</strong>, anyone can build stunning, functional wood pieces — even if you’ve never touched a saw before.': 'Mit <strong>klaren Schritt-für-Schritt-Anleitungen</strong>, <strong>einfachen anfängerfreundlichen Projekten</strong> und <strong>ohne Rätselraten</strong> kann jeder atemberaubende, funktionale Holzstücke bauen – selbst wenn Sie noch nie eine Säge in der Hand hatten.',
    '<strong>This bundle was created for people who feel stuck, intimidated, or unsure where to begin.</strong>': '<strong>Dieses Paket wurde für Menschen entwickelt, die sich festgefahren, eingeschüchtert oder unsicher fühlen, wo sie anfangen sollen.</strong>',
    '<strong>Why wait? </strong>': '<strong>Warum warten? </strong>',
    'You’re buying a skill… a hobby… a way to relax… and a new sense of pride every time you build something real.': 'Sie kaufen eine Fähigkeit... ein Hobby... eine Möglichkeit zur Entspannung... und ein neues Gefühl von Stolz jedes Mal, wenn Sie etwas Echtes bauen.'
}

for eng, de in replacements.items():
    content = content.replace(eng, de)

# 2. Add CSS to break long words
css_addition = """
/* Fix long words breaking on mobile */
html, body, p, h1, h2, h3, h4, h5, h6, strong, em {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    -webkit-hyphens: auto !important;
    hyphens: auto !important;
}
"""
content = content.replace('/* === MOBILE === */', css_addition + '\n/* === MOBILE === */')

# 3. Footer alignment fix
content = content.replace('<div style="width: 100%; max-width: 850px; margin: 0 auto; padding: 0 20px;">\n<h4', '<div style="width: 100%; max-width: 850px; margin: 0 auto; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center;">\n<h4')

# 4. Top spacing adjustment above "Sind Sie es leid"
# Find the exact block to replace the height
target_spacing = '<div style="height:40px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>\n\n\n\n<p class="has-text-align-center has-system-sans-serif-font-family has-x-large-font-size"><strong><em>Sind Sie es leid'
replacement_spacing = '<div style="height:10px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>\n\n\n\n<p class="has-text-align-center has-system-sans-serif-font-family has-x-large-font-size"><strong><em>Sind Sie es leid'
content = content.replace(target_spacing, replacement_spacing)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Adjustments made successfully!")
