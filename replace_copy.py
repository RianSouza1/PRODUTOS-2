import sys

with open("metalon/index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "Are you tired of watching amazing metalworking projects online and thinking:" in line:
        start_idx = i
    if "You just need the right guide, the right plans, and a clear path to follow." in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_html = """<p class="has-text-align-center has-large-font-size" style="line-height:1.2;"><strong>Still Watching Metalworking Projects And Thinking “I Could Never Build That”?</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">You see people building gates, shelves, racks, tables, frames, furniture, and custom workshop projects…</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">But when it’s your turn, everything feels confusing:</p>
<ul style="text-align:center; list-style:none; padding:0; font-size:1.1rem; color:#f9f9f9; line-height:1.8; margin-bottom:1.5rem;">
<li>What tools do I need?</li>
<li>What metal should I buy?</li>
<li>What measurements should I use?</li>
<li>Where do I even begin?</li>
</ul>
<p class="has-text-align-center has-medium-font-size"><strong>The truth is simple:</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">You don’t need years of experience to start.</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">With clear plans, exact measurements, and step-by-step guidance, you can build strong, useful, professional-looking metal projects — even if you’re starting from zero.</p>
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<hr class="wp-block-separator has-text-color has-base-2-color has-alpha-channel-opacity has-base-2-background-color has-background is-style-wide">
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-large-font-size"><strong><em><em>Why Is This Bundle Only $19.90?</em></em></strong></p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size"><strong>We know — getting three complete metalworking guides for the price of one may sound too good to be true.</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">But once a year, we run a special Reader Event to make our most popular collections easier to access.</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">Because we handle everything directly, we can skip retail markups and offer the full bundle for just:</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size"><strong><span style="color:#ffcc00; font-size:1.3rem;">$19.90</span> instead of <span style="text-decoration:line-through; color:#e42628;">$59.70</span></strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">When the event ends, the price goes back to normal.</p>
"""
    lines[start_idx:end_idx+1] = [new_html]
    with open("metalon/index.html", "w", encoding="utf-8") as f:
        f.writelines(lines)
    print("Replace successful.")
else:
    print(f"Could not find indices. Start: {start_idx}, End: {end_idx}")

