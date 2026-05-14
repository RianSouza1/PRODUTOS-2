import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the specific initIPCountdown script with the new timer logic
old_script = """<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        initIPCountdown('ip-countdown-6a0471b9e9ba6');
    });
</script>"""

new_script = """<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        let totalSeconds = 10 * 60; // 10 minutes
        const timerBlock = document.getElementById('ip-countdown-6a0471b9e9ba6');
        if(timerBlock) timerBlock.classList.remove('expired');
        const hT = document.querySelector('.hours-tens');
        const hO = document.querySelector('.hours-ones');
        const mT = document.querySelector('.minutes-tens');
        const mO = document.querySelector('.minutes-ones');
        const sT = document.querySelector('.seconds-tens');
        const sO = document.querySelector('.seconds-ones');
        
        setInterval(() => {
            if(totalSeconds <= 0) return;
            totalSeconds--;
            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;
            
            let hStr = String(h).padStart(2, '0');
            let mStr = String(m).padStart(2, '0');
            let sStr = String(s).padStart(2, '0');
            
            if(hT) hT.innerText = hStr[0];
            if(hO) hO.innerText = hStr[1];
            if(mT) mT.innerText = mStr[0];
            if(mO) mO.innerText = mStr[1];
            if(sT) sT.innerText = sStr[0];
            if(sO) sO.innerText = sStr[1];
        }, 1000);
    });
</script>"""

if old_script in text:
    text = text.replace(old_script, new_script)
else:
    print('Failed to find old script')

# Also, let's fix the colors!
# Replace #cfcabe (Accent / Light Green-Beige) with #b09060
text = re.sub(r'(?i)#cfcabe', '#b09060', text)

# Replace #8c4c3a (Accent 3 / Red-brown) with #604020
text = re.sub(r'(?i)#8c4c3a', '#604020', text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('Done')
