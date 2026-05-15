import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# ─────────────────────────────────────────────────────────────────────────────
# Remove ALL previously injected <style id="ww-custom-fixes"> blocks
# ─────────────────────────────────────────────────────────────────────────────
text = re.sub(r'<style id="ww-custom-fixes">.*?</style>', '', text, flags=re.DOTALL)

# Also remove any other <style> blocks we might have injected
text = re.sub(r'<style>\s*/\* ── WW GLOBAL.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<style>\s*/\* ====== VIEWPORT.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<style>\s*img \{.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<style>\s*@media \(max-width: 768px\).*?</style>', '', text, flags=re.DOTALL)

# Remove duplicate viewport metas
text = re.sub(r'\n<meta name="viewport"[^>]+>\n', '\n', text)

# Remove duplicate Google Fonts links we added
text = re.sub(r'<link href="https://fonts.googleapis.com[^>]+>\n', '', text)

# Ensure viewport meta exists
if 'name="viewport"' not in text:
    text = text.replace('<head>', '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">', 1)

# ─────────────────────────────────────────────────────────────────────────────
# Inject ONE clean style block before </head>
# The key insight: the WordPress theme puts the content in:
#   <main class="wp-block-group has-base-2-color has-background ...">
#     ... countdown ...
#     <div class="entry-content wp-block-post-content has-global-padding is-layout-constrained">
#       ... all content ...
#     </div>
#   </main>
#
# The problems:
# 1. <main> has has-base-2-color (white bg) creating a "card" look on brown bg
# 2. entry-content has is-layout-constrained limiting max-width
# 3. has-global-padding adds side padding creating "bars"
# 4. WP presets use --wp--style--root--padding which adds more spacing
# ─────────────────────────────────────────────────────────────────────────────

css = """
<style id="ww-custom-fixes">
/* === RESET WP CONTAINER CONSTRAINTS === */
/* Make the main wrapper full-width, remove white card bg */
main.wp-block-group.has-base-2-color.has-background {
    background-color: #604020 !important;
    color: #f9f9f9 !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
}

/* Remove constrained layout max-width */
.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
    max-width: 800px !important;
    margin-left: auto !important;
    margin-right: auto !important;
}

/* entry-content full-width but content centered */
.entry-content.wp-block-post-content {
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    box-sizing: border-box !important;
}

/* alignfull blocks span full width */
.alignfull {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
}

/* Override root padding vars that create bars */
:root {
    --wp--style--root--padding-right: 0px !important;
    --wp--style--root--padding-left: 0px !important;
}

/* === IMAGES: responsive and centered === */
.wp-block-image img {
    width: 100%;
    max-width: 800px;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* Keep emoji/icon images small */
img.emoji, img.wp-smiley {
    width: 1em !important;
    height: 1em !important;
    max-width: 1em !important;
    display: inline !important;
    margin: 0 0.07em !important;
    vertical-align: -0.1em !important;
}

/* === SEPARATORS: match brown theme === */
.wp-block-separator {
    border-color: rgba(255,255,255,0.2) !important;
    opacity: 0.5;
}

/* === 70% OFF HTML BANNER === */
.ww-huge-offer-banner {
    background: #8c4c3a;
    border: 8px solid #5a3520;
    padding: 0;
    margin: 2rem 0;
    width: 100%;
}
.ww-huge-offer-inner {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 2rem;
    text-align: center;
}
.ww-huge-offer-title {
    font-family: 'Arial Black', 'Helvetica', sans-serif;
    font-size: 8rem;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 0.3rem;
    letter-spacing: -3px;
}
.ww-huge-offer-subtitle {
    font-family: 'Arial Black', 'Helvetica', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
}

/* === COUNTDOWN BAR === */
.ip-countdown-sticky {
    position: sticky !important;
    top: 0 !important;
    z-index: 9999 !important;
}

/* === FOOTER === */
footer {
    background: #3d2000 !important;
}

/* === OVERFLOW === */
html, body {
    overflow-x: hidden !important;
}

/* === MOBILE === */
@media (max-width: 767px) {
    .entry-content.wp-block-post-content {
        padding-left: 16px !important;
        padding-right: 16px !important;
    }

    .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
        max-width: 100% !important;
    }

    .wp-block-columns {
        flex-direction: column !important;
    }
    .wp-block-column {
        flex-basis: 100% !important;
        width: 100% !important;
    }

    /* Countdown */
    .ip-countdown-sticky {
        font-size: 0.8rem !important;
        padding: 8px 10px !important;
    }
    #ip-countdown-6a0471b9e9ba6 {
        transform: scale(0.85);
        transform-origin: center;
    }

    /* 70off banner */
    .ww-huge-offer-title { font-size: 4.5rem !important; }
    .ww-huge-offer-subtitle { font-size: 2rem !important; }
    .ww-huge-offer-inner { padding: 2rem 1rem !important; }

    /* Buttons */
    .wp-block-button__link {
        width: 100% !important;
        text-align: center !important;
    }
}
</style>
"""

text = text.replace('</head>', css + '\n</head>', 1)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done! Clean CSS injected.")
