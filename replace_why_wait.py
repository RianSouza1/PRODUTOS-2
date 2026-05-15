import sys

with open("metalon/index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "Why Wait?" in line:
        start_idx = i
    if "Here’s What People Are Saying About Us" in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    # We want to replace from start_idx up to end_idx - 1
    # But wait, there is a `</div>` at line 1142 that closes the background block.
    # We must keep that `</div>`!
    
    # Find the nearest </div> before the testimonials
    div_idx = end_idx - 1
    while div_idx > start_idx and "</div>" not in lines[div_idx]:
        div_idx -= 1
        
    new_html = """<p class="has-text-align-center has-large-font-size" style="padding-right:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><img draggable="false" role="img" class="emoji" alt="🔨" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f528.svg"> <strong><strong>Build Your First Metal Project This Week</strong></strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>
<p class="has-text-align-center has-medium-font-size" style="padding-right:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><strong><strong><strong>Even If You’re A Complete Beginner.</strong></strong></strong></p>
<div style="height:30px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>
</div>
"""
    lines[start_idx:div_idx+1] = [new_html]
    with open("metalon/index.html", "w", encoding="utf-8") as f:
        f.writelines(lines)
    print("Replace successful.")
else:
    print("Indices not found.")

