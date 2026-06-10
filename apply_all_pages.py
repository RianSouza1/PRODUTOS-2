import os
import re

targets = {
    "bkp/index.html": {"off": "70% OFF", "ends": "ENDS TODAY &#8628;"},
    "bkp-es/index.html": {"off": "70% DESCUENTO", "ends": "TERMINA HOY &#8628;"},
    "bkp-pt/index.html": {"off": "70% DE DESCONTO", "ends": "TERMINA HOJE &#8628;"}
}

base_dir = r"c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2"

def get_timer_script():
    return """<script type="text/javascript">
    function initIPCountdown(id) {
        let container = document.getElementById(id);
        if (!container) return;
        
        let defaultTime = 10 * 60; // 10 minutes
        let totalSeconds = defaultTime; 
        
        let savedTime = localStorage.getItem(id + '_timer');
        if (savedTime !== null && !isNaN(parseInt(savedTime, 10))) {
            totalSeconds = parseInt(savedTime, 10);
            if (totalSeconds <= 0 || totalSeconds > defaultTime) totalSeconds = defaultTime;
        }
        
        let hTens = container.querySelector('.hours-tens');
        let hOnes = container.querySelector('.hours-ones');
        let mTens = container.querySelector('.minutes-tens');
        let mOnes = container.querySelector('.minutes-ones');
        let sTens = container.querySelector('.seconds-tens');
        let sOnes = container.querySelector('.seconds-ones');
        
        // Immediate UI update so it doesn't wait 1 second
        function updateUI() {
            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;
            
            let hStr = h.toString().padStart(2, '0');
            let mStr = m.toString().padStart(2, '0');
            let sStr = s.toString().padStart(2, '0');
            
            if (hTens) hTens.innerText = hStr[0];
            if (hOnes) hOnes.innerText = hStr[1];
            if (mTens) mTens.innerText = mStr[0];
            if (mOnes) mOnes.innerText = mStr[1];
            if (sTens) sTens.innerText = sStr[0];
            if (sOnes) sOnes.innerText = sStr[1];
        }
        
        updateUI(); // run once immediately
        
        setInterval(() => {
            totalSeconds--;
            if (totalSeconds <= 0) {
                totalSeconds = defaultTime; // Reset loop
            }
            localStorage.setItem(id + '_timer', totalSeconds);
            updateUI();
        }, 1000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initIPCountdown('ip-countdown-6a0725cad2e3e');
        });
    } else {
        initIPCountdown('ip-countdown-6a0725cad2e3e');
    }
</script>"""

star_html = '<span style="color: #FFD54F; font-size: 1.6em; margin: 0 4px; text-shadow: -1px -1px 0 rgba(255,255,255,0.4), 1px 1px 0 #D98800, 2px 2px 0 #C27A00, 3px 3px 0 #A86A00, 4px 4px 5px rgba(0,0,0,0.3);">★</span>'

for target, trans in targets.items():
    file_path = os.path.join(base_dir, target)
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, not found.")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Colors
    content = re.sub(r'--wp--preset--color--base: #[0-9a-fA-F]{6};', '--wp--preset--color--base: #F8B003;', content)
    content = re.sub(r'--wp--preset--color--base-2: #[0-9a-fA-F]{6};', '--wp--preset--color--base-2: #FFFFFF;', content)

    # 2. Button styles (find the specific CSS rules block)
    # The button block usually contains background-color: ...; border-radius...
    content = re.sub(r':root :where\(\.wp-element-button, \.wp-block-button__link\)\{background-color: #[0-9a-fA-F]{6};', 
                     ':root :where(.wp-element-button, .wp-block-button__link){background-color: #4CAF50;', content)
    content = re.sub(r':root :where\(\.wp-element-button, \.wp-block-button__link\)\{(.*?)color: var\(--wp--preset--color--base\);',
                     r':root :where(.wp-element-button, .wp-block-button__link){\1color: #FFFFFF !important;', content, flags=re.DOTALL)

    # 3. Stars
    content = re.sub(r'<img[^>]*src="[^"]*2b50\.svg"[^>]*>', star_html, content)

    # 4. Timer JS
    # Replace the old script block. Look for function initIPCountdown(id) and the closing </script>
    content = re.sub(r'<script type="text/javascript">\s*function initIPCountdown\(id\).*?</script>', get_timer_script(), content, flags=re.DOTALL)
    
    # Remove plugin conflicting script
    content = re.sub(r'<script id="ip-countdown-script-js-extra">.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script src="https://atlas-library.com/wp-content/plugins/ip-countdown-by-niro/assets/countdown\.js\?ver=1\.0\.0" id="ip-countdown-script-js"></script>', '', content)

    # 5. HTML Banner
    banner_html = f"""<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; padding: 20px 0; margin: 20px auto;">
    <div style="color: #FFFFFF; font-size: clamp(3.5rem, 12vw, 9rem); font-weight: 900; font-family: 'Arial Black', Impact, sans-serif; line-height: 1; letter-spacing: -3px; text-transform: uppercase; white-space: nowrap; text-align: center;">{trans['off']}</div>
    <div style="color: #FFFFFF; font-size: clamp(2rem, 7vw, 4.5rem); font-weight: 800; font-family: 'Arial Black', Impact, sans-serif; margin-top: 10px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; text-align: center;">{trans['ends']}</div>
</div>"""

    content = re.sub(r'<figure class="wp-block-image alignfull size-full has-custom-border"><img loading="lazy".*?70off.*?</figure>', banner_html, content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Successfully processed {target}")
