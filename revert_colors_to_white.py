import os
import re

# Base directory of the repository
base_dir = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2"

# Localized configurations for each page
targets = {
    "bkp-de/index.html": {"off": "70% RABATT", "ends": "ENDET HEUTE &#8628;"},
    "bkp/index.html": {"off": "70% OFF", "ends": "ENDS TODAY &#8628;"},
    "bkp-es/index.html": {"off": "70% DESCUENTO", "ends": "TERMINA HOY &#8628;"},
    "bkp-pt/index.html": {"off": "70% DE DESCONTO", "ends": "TERMINA HOJE &#8628;"},
    "hx-fr/index.html": {"off": "70% DE R&Eacute;DUCTION", "ends": "SE TERMINE AUJOURD'HUI &#8628;"},
    "hx-it/index.html": {"off": "70% DI SCONTO", "ends": "SCADE OGGI &#8628;"}
}

# The gorgeous buy button styles from the German page
button_styles = """:root :where(.wp-element-button, .wp-block-button__link){background-color: #4CAF50;border-radius: 8px;border-width: 0;color: #FFFFFF !important;font-family: var(--wp--preset--font-family--system-sans-serif);font-size: 1.3rem;font-style: normal;font-weight: 800;letter-spacing: 0.5px;line-height: inherit;padding-top: 1rem;padding-right: 2.5rem;padding-bottom: 1rem;padding-left: 2.5rem;text-decoration: none;text-transform: uppercase;box-shadow: 0 6px 20px rgba(248, 136, 0, 0.5);transition: all 0.3s ease;}:root :where(.wp-element-button:hover, .wp-block-button__link:hover){background-color: #45A049;color: #FFFFFF !important;transform: translateY(-3px);box-shadow: 0 8px 25px rgba(255, 163, 51, 0.7);}:root :where(.wp-element-button:focus, .wp-block-button__link:focus){background-color: #45A049;color: #FFFFFF !important;outline-color: #4CAF50;outline-offset: 2px;}:root :where(.wp-element-button:active, .wp-block-button__link:active){background-color: #3d8b40;color: #FFFFFF !important;transform: translateY(0);}"""

for relative_path, config in targets.items():
    file_path = os.path.join(base_dir, relative_path)
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, not found.")
        continue
        
    print(f"Processing {relative_path}...")
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # 1. Restore/set main background color to #F8B003 and text/contrast colors to #FFFFFF (White)
    content = re.sub(
        r'--wp--preset--color--base:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--base: #F8B003;',
        content
    )
    content = re.sub(
        r'--wp--preset--color--base-2:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--base-2: #FFFFFF;',
        content
    )
    content = re.sub(
        r'--wp--preset--color--contrast:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--contrast: #FFFFFF;',
        content
    )
    content = re.sub(
        r'--wp--preset--color--contrast-2:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--contrast-2: #FFFFFF;',
        content
    )
    content = re.sub(
        r'--wp--preset--color--contrast-3:\s*#[A-Fa-f0-9]{6};',
        '--wp--preset--color--contrast-3: #FFFFFF;',
        content
    )

    # 2. Revert utility classes color overrides to White
    # We want these specific color utility rules to use #FFFFFF instead of var or #064E3B
    content = re.sub(
        r'\.has-base-2-color\{color:\s*(?:var\(--wp--preset--color--contrast\)|#[A-Fa-f0-9]{6}|var\(--wp--preset--color--base-2\))\s*!important;\}',
        '.has-base-2-color{color: var(--wp--preset--color--base-2) !important;}',
        content
    )
    content = re.sub(
        r'\.has-contrast-color\{color:\s*(?:var\(--wp--preset--color--contrast\)|#[A-Fa-f0-9]{6})\s*!important;\}',
        '.has-contrast-color{color: var(--wp--preset--color--contrast) !important;}',
        content
    )
    content = re.sub(
        r'\.has-contrast-2-color\{color:\s*(?:var\(--wp--preset--color--contrast-2\)|#[A-Fa-f0-9]{6})\s*!important;\}',
        '.has-contrast-2-color{color: var(--wp--preset--color--contrast-2) !important;}',
        content
    )

    # 3. Synchronize gorgeous Green Buy Button styles from German page
    # First search for any existing custom or default .wp-element-button style block and replace it
    # We find it by looking for :root :where(.wp-element-button, .wp-block-button__link){...}
    # and all the subsequent rules up to active or focused state.
    pattern = r':root :where\(\.wp-element-button, \.wp-block-button__link\)\{.*?:root :where\(\.wp-element-button:active, \.wp-block-button__link:active\)\{background-color:\s*#[A-Fa-f0-9]{6};color:\s*#FFFFFF\s*!important;transform:\s*translateY\(0\);\}'
    if re.search(pattern, content, flags=re.DOTALL):
        content = re.sub(pattern, button_styles, content, flags=re.DOTALL)
    else:
        # Try a simpler replacement of the main rule
        content = re.sub(
            r':root :where\(\.wp-element-button, \.wp-block-button__link\)\{.*?\}',
            button_styles,
            content,
            count=1
        )
        # Remove subsequent active/hover rules if they are present and duplicate
        content = re.sub(
            r':root :where\(\.wp-element-button:hover, \.wp-block-button__link:hover\)\{.*?\}',
            '',
            content
        )
        content = re.sub(
            r':root :where\(\.wp-element-button:focus, \.wp-block-button__link:focus\)\{.*?\}',
            '',
            content
        )
        content = re.sub(
            r':root :where\(\.wp-element-button:active, \.wp-block-button__link:active\)\{.*?\}',
            '',
            content
        )

    # 4. Inject the Centered Scarcity Banner with exactly localized values and HUGE font sizes (just like German page)
    # The German page banner has:
    # 70% RABATT (font-size: clamp(3.5rem, 12vw, 9rem))
    # ENDET HEUTE ↴ (font-size: clamp(2rem, 7vw, 4.5rem))
    # All in #FFFFFF (White) on transparent background
    
    banner_html = f"""<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto;">
    <div style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap; text-align: center;">{config['off']}</div>
    <div style="color: #FFFFFF; font-size: clamp(2rem, 7vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; text-align: center;">{config['ends']}</div>
</div>"""

    # Replace any existing HTML banner in the file
    # Look for both class-based ("my-scarcity-banner") and style-based banner wrappers
    # Case A: has class my-scarcity-banner
    content = re.sub(
        r'<div class="my-scarcity-banner".*?</div>\s*</div>',
        banner_html,
        content,
        flags=re.DOTALL
    )
    # Case B: has style display flex ... margin: 20px auto; and contains 70%
    content = re.sub(
        r'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto;">.*?70%.*?</div>\s*</div>',
        banner_html,
        content,
        flags=re.DOTALL
    )

    # 5. Make sure there are no remaining #064E3B color definitions for text in this file
    # Clean up inline styles of any countdown or subtitles that were set to #064E3B
    content = content.replace("color: #064E3B;", "color: #FFFFFF;")
    content = content.replace("color:#064E3B", "color:#FFFFFF")
    
    # 6. Ensure buttons still have green background and white text inline
    # The actual CTA link looks like: style="border-radius:20px;background-color:#4caf50;box-shadow:var(--wp--preset--shadow--natural)"
    # Ensure color: #FFFFFF is explicitly set inside the inline style if needed, or that it has color: #FFFFFF !important in CSS
    # Since our CSS button_styles block forces color: #FFFFFF !important, it will look stunning.

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Finished processing {relative_path} successfully!")

print("All pages synchronized perfectly.")
