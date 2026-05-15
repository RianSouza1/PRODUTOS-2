import re
import os

with open('../WW/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Top Bar
html = html.replace('<strong><img draggable="false" role="img" class="emoji" alt="⏰" src="https://s.w.org/images/core/emoji/17.0.2/svg/23f0.svg"> FINAL HOURS – 70% OFF ENDS IN</strong> <br>',
                    '<strong>🔥 FINAL HOURS — 70% OFF ENDS SOON<br><span style="font-size:0.85em;font-weight:400">Trusted by 2,000+ metalworking enthusiasts</span></strong><br>')

# Hero Text
html = html.replace('<p class="has-text-align-center has-system-sans-serif-font-family has-x-large-font-size"><strong><em>Are you tired of watching amazing woodworking creations online and thinking, “I could never build that”?</em></strong></p>',
                    '<p class="has-text-align-center has-system-sans-serif-font-family has-x-large-font-size" style="line-height:1.2;"><strong>Build Professional MetalWorking Projects — Even If You’re Starting From Zero</strong></p>')
html = html.replace('<p class="has-text-align-center has-medium-font-size">What if the only thing standing between you and beautiful, handcrafted wood projects… was the <em>right guidance</em>?</p>',
                    '<p class="has-text-align-center has-medium-font-size">Get a complete 3-guide bundle with beginner lessons, professional metal frame projects, money-making strategies, and 1,200+ exact metal plans to help you stop guessing and start building with confidence.</p>')

# Title under image 1
html = html.replace('<strong><strong>Woodworking for Beginners + 2 BONUSES</strong></strong>',
                    '<strong><strong>MetalWorking for Beginners + 2 BONUSES</strong></strong>')
html = html.replace('<strong>You Save 70%</strong>', '<strong>You Save 70% Today</strong>')

# Add trust text under BUY NOW
buy_now_html = '<a class="wp-block-button__link has-background wp-element-button" href="https://prime-library.com/?add-to-cart=189489" style="border-radius:20px;background-color:#4caf50;box-shadow:var(--wp--preset--shadow--natural)"><strong>BUY NOW</strong></a></div>\n</div>'
trust_text = '\n<p class="has-text-align-center has-small-font-size" style="margin-top:5px; font-size:0.9rem;">Instant Access • One-Time Payment • Beginner & Advanced Friendly</p>'
html = html.replace(buy_now_html, buy_now_html + trust_text)

# Segunda dobra / Conexão com a dor (before BUY 1 GET 3 / before image 2)
# The text "BUY 1 GET 3" is right after the first BUY NOW and a spacer
segunda_dobra = """
<p class="has-text-align-center has-large-font-size" style="line-height:1.2;"><strong>Are you tired of watching amazing metalworking projects online and thinking:</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">“I could never build that…”</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">Maybe you’ve seen people building gates, shelves, racks, tables, metal frames, furniture, workshop pieces, and custom projects…</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">But when it’s your turn to start, everything feels confusing:</p>
<ul style="text-align:center; list-style:none; padding:0; font-size:1.1rem; color:#f9f9f9; line-height:1.8; margin-bottom:1.5rem;">
<li>What tools do I need?</li>
<li>What measurements should I use?</li>
<li>What type of metal should I buy?</li>
<li>How do I avoid wasting material?</li>
<li>Where do I even begin?</li>
</ul>
<p class="has-text-align-center has-medium-font-size"><strong>The truth is simple:</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">You don’t need to figure everything out alone.</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">With the right plans, clear measurements, and step-by-step guidance, you can start building strong, useful, professional-looking metal projects — even if you’re starting from zero.</p>
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>

<p class="has-text-align-center has-large-font-size" style="line-height:1.2;"><strong>From Raw Metal To Real Projects</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">See how simple metal pieces can become strong, useful, professional-looking builds when you follow the right plan.</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
"""

# Find the spot right before "BUY 1 GET 3"
html = html.replace('<p class="has-text-align-center has-large-font-size"><strong><strong>BUY 1 GET 3</strong></strong></p>',
                    segunda_dobra + '<p class="has-text-align-center has-large-font-size"><strong><strong>BUY 1 GET 3</strong></strong></p>')

# Replace "For a limited time only, here is what you’ll get:" and the image 2 logic
# Wait, user wants the video/carousel before BUY 1 GET 3. I inserted it. Now I need to add the text AFTER the carousel image.
after_carousel = """
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">Inside this bundle, you’ll find project ideas, exact measurements, and practical guidance to help you build pieces like:</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size"><strong>Shelves, racks, tables, supports, frames, workshop structures, home projects, square tube builds, furniture, and more.</strong></p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">This is exactly why the bundle includes 1,200+ metal plans with exact measurements — so you can stop wasting time trying to invent everything from scratch and start building with more confidence.</p>
<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center has-medium-font-size">No more guessing.<br>No more random tutorials.<br>Just clear plans and a practical path to follow.</p>
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<hr class="wp-block-separator has-text-color has-base-2-color has-alpha-channel-opacity has-base-2-background-color has-background is-style-wide">
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
"""

# The image 2 is: <figure class="wp-block-image alignfull size-large"><img ... src="Imagens/img2.webp" ...></figure>
# We replace the hr right after it with our `after_carousel`
html = html.replace('<hr class="wp-block-separator has-text-color has-base-2-color has-alpha-channel-opacity has-base-2-background-color has-background is-style-wide">',
                    after_carousel, 1)

# Modify BUY 1 GET 3 text
html = html.replace('For a limited time only, here is what you’ll get:',
                    'For a limited time only, here is what you’ll get inside the complete MetalWorking Bundle:<br><br>'
                    '<strong>Book 1: MetalWorking for Beginners</strong><br>'
                    'A practical beginner-friendly guide that shows you how to understand tools, materials, safety, measurements, cutting, welding basics, and your first real metalworking projects — even if you’re starting from zero.<br>'
                    'Perfect if you want to finally stop watching videos and start creating real projects with your own hands.<br><br>'
                    '<strong>Bonus 1: Professional Metal Frame Projects</strong><br>'
                    'A more advanced project guide designed for people who want to build stronger, cleaner, more professional-looking pieces using metal frames, square tubes, workshop structures, home projects, racks, shelves, furniture, supports, and practical builds.<br>'
                    'This is ideal if you already know the basics or want to create projects that look more solid, useful, and professional.<br><br>'
                    '<strong>Bonus 2: Make Money With MetalWorking</strong><br>'
                    'A simple guide to help you choose profitable metalworking projects, price your work, avoid undercharging, find buyers, and turn your skill into a real income opportunity.<br>'
                    'Because metalworking is not just a hobby — it can become a valuable skill that pays you back.<br><br>'
                    '<strong>Special Included Bonus: 1,200+ Metal Plans With Exact Measurements</strong><br>'
                    'Get access to a huge collection of ready-to-build metal plans with exact measurements, so you can stop guessing, avoid costly mistakes, and start building with more confidence.<br>'
                    'This bonus gives you the direction most beginners and even experienced builders are missing: clear plans before cutting, welding, or wasting material.')

# Offer Justification
html = html.replace('Why does this offer sound too good to be true?', 'Why Does This Offer Sound Too Good To Be True?')
html = html.replace('We get it — three bestselling books for the price of one isn’t something you see every day.',
                    'We get it.<br><br>Three practical metalworking guides plus 1,200+ exact metal plans for the price of one isn’t something you see every day.')
html = html.replace('Here’s the simple truth: once a year, around this season, we run a special Reader Event to thank our audience and make our most popular collections easier to access.',
                    'Here’s the simple truth:<br><br>For a limited time, we’re running a special digital bundle event to help more people start building strong, useful, professional-looking metal projects without wasting time, money, or materials trying to figure everything out alone.')
html = html.replace('Because we manage everything directly — from printing to fulfillment — we can skip retail markups and offer the entire bundle (normally $59.70) for only $19.90.',
                    'Because this is a digital bundle, we can skip retail markups, printing costs, and shipping fees — and offer the entire collection, normally $59.70, for only $19.90 today.')

# Objection Handling
html = html.replace('“Woodworking Is Too Hard for Beginners.”', '“MetalWorking Is Too Hard For Beginners.”')
html = html.replace('Most people believe woodworking requires expensive tools, years of experience, or natural talent.',
                    'Most people believe metalworking requires a huge workshop, expensive equipment, years of experience, or natural talent.')
html = html.replace('That myth keeps countless beginners stuck, frustrated, and afraid to even try.',
                    'That myth keeps countless beginners stuck, intimidated, and afraid to even try.')
html = html.replace('But the truth is diﬀerent:', 'But the truth is different.')
html = html.replace('With <strong>clear step-by-step instructions</strong>, <strong>simple beginner-friendly projects</strong>, and <strong>zero</strong> <strong>guesswork</strong>, anyone can build stunning, functional wood pieces — even if you’ve never touched a saw before.',
                    'With clear step-by-step instructions, exact measurements, beginner-friendly explanations, and practical project plans, anyone can start building strong and useful metal pieces — even if they’re starting from zero.')

html = html.replace('<p class="has-text-align-center">This 3-book bundle gives you the roadmap, the confidence, and the practical skills to finally start creating with your hands… and loving every minute of it.</p>',
                    '<p class="has-text-align-center">This complete bundle gives you beginner lessons, professional metal frame projects, money-making strategies, and exact plans to help you stop guessing and start building with confidence.</p>\n'
                    '<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>\n'
                    '<p class="has-text-align-center">You don’t need to be an expert.</p>\n'
                    '<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>\n'
                    '<p class="has-text-align-center">You don’t need to guess every measurement.</p>\n'
                    '<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>\n'
                    '<p class="has-text-align-center">You don’t need to waste money learning everything the hard way.</p>\n'
                    '<div style="height:10px" aria-hidden="true" class="wp-block-spacer"></div>\n'
                    '<p class="has-text-align-center">You just need the right guide, the right plans, and a clear path to follow.</p>')

# What's Inside (List Items)
html = html.replace('What’s Inside This Bestselling 3-Book Bundle:', 'What’s Inside This Practical MetalWorking Bundle:')

# I will replace the block of 7 checkmarks with the 9 checkmarks using regex to grab the block.
# Since it's tricky, let's just replace each line manually or the entire block.
old_list = """<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>500 Step-by-Step Woodworking Projects</strong> perfect for beginners</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Clear, full-color instructions</strong> that eliminate confusion and mistakes</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Tool tutorials for beginners </strong>— no expensive equipment required</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Smart shortcuts and expert tips</strong> to avoid common beginner errors</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Money-making woodworking ideas</strong> you can start from home</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Step-by-step project guides</strong> to help you build with confidence from start to finish</p>

<div style="height:20px" aria-hidden="true" class="wp-block-spacer" bis_skin_checked="1"></div>

<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--60);margin-left:var(--wp--preset--spacing--60)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> <strong>Wood selection, measurements, and safety essentials</strong> explained simply</p>"""

new_list = """<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> MetalWorking for Beginners to help you understand the basics from zero</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Professional metal frame projects for stronger, cleaner, more advanced builds</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> 1,200+ metal plans with exact measurements so you can stop guessing</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Step-by-step instructions to help you build with more confidence from start to finish</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Tool, material, and safety guidance explained in a simple way</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Project ideas for shelves, racks, furniture, supports, frames, workshop builds, and home pieces</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Measurement and planning tips to help you avoid wasting metal, time, and money</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Money-making guidance to help you choose projects people may actually buy</p>
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<p class="has-text-align-center" style="margin-right:var(--wp--preset--spacing--50);margin-left:var(--wp--preset--spacing--50)"><img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/17.0.2/svg/2705.svg"> Pricing and selling tips so you don’t undercharge for your work</p>"""

html = html.replace(old_list, new_list)

# Second Offer Call (Adding text above and below)
html = html.replace('<div class="ww-huge-offer-title">70% OFF</div>', '<div class="ww-huge-offer-title" style="font-size:5rem;">70% OFF</div>')
html = html.replace('<div class="ww-huge-offer-subtitle">TODAY ONLY &#x2193;</div>',
                    '<div class="ww-huge-offer-subtitle">TODAY ONLY &#x2193;</div>\n<div style="height:20px"></div>\n<p style="color:#fff; font-size:1.5rem; font-weight:bold; max-width:800px; margin:0 auto; line-height:1.2;">Build Professional MetalWorking Projects — Even If You’re Starting From Zero</p>\n<p style="color:#fff; font-size:1.2rem; max-width:800px; margin:15px auto 0;">Get the complete 3-guide bundle with beginner lessons, professional metal frame projects, money-making strategies, and 1,200+ exact plans.</p>')

# Replace the text after second offer
html = html.replace('If you’ve ever dreamed of creating furniture, gifts, or functional pieces with your hands — but felt woodworking was “too diﬃcult” — this guide shows you exactly how to start, step by step, with total confidence. Instant direct digital download (After you complete the payment you will immediately have the option to download the product(s) from the final purchase page and you will also receive a download email shortly after).',
                    'If you’ve ever dreamed of building metal furniture, shelves, gates, racks, supports, workshop pieces, or custom projects — but felt metalworking was “too complicated” — this guide shows you exactly how to start, step by step, with confidence.<br><br>And if you already have some experience, the professional metal frame projects and exact plans can help you build cleaner, stronger, more advanced pieces without wasting time trying to figure everything out from scratch.<br><br>After your payment is complete, you’ll receive instant digital access to the full bundle and download instructions by email.')

# Emotional section
html = html.replace('Why wait? ', 'Why Wait? ')
html = html.replace('You’re not just buying three books.', 'You’re not just buying three guides.')
html = html.replace('You’re buying a skill… a hobby… a way to relax… and a new sense of pride every time you build something real.',
                    'You’re buying a skill.<br>A productive hobby.<br>A way to build useful things with your hands.<br>A path to create stronger, cleaner, more professional-looking projects.<br>And maybe even a new income opportunity if you decide to sell what you build.<br><br>Every finished project gives you something most people never experience:<br><br><strong>The pride of looking at something strong, useful, and real — and knowing you built it yourself.</strong>')
html = html.replace('And with <strong>70% OFF today</strong>, it’s the perfect time to finally start your woodworking journey.',
                    'And with <strong>70% OFF today</strong>, this is the perfect time to finally start your metalworking journey.')

html = html.replace('Build your first project this week', 'Build Your First Metal Project This Week')
html = html.replace('even if you’re a complete beginner.', 'Even If You’re A Complete Beginner.')

# Testimonials Replace Block
t1_old = 'Michael R.'
t1_old_text = '"I had never built anything before, but this guide made everything feel simple. I started with a small shelf and now I’m working on a coffee table. The step-by-step instructions are clear and easy to follow."'
t1_new_text = '"I had never built anything with metal before, but this guide made the basics feel simple. I started with a small metal shelf frame and finally understood how to plan the measurements before cutting."'

t2_old = 'Daniel T.'
t2_old_text = '"What I liked most is that the projects actually feel beginner-friendly. I finally understood measurements, cuts, and how to put everything together without feeling lost."'
t2_new_text = '"What I liked most is that it doesn’t assume you already know everything. The explanations are practical, simple, and focused on helping you start without feeling overwhelmed."'

t3_old = 'Sarah W.'
t3_old_title = '"Exceeded my expectations."'
t3_old_text = '"I bought this hoping to learn the basics, and it exceeded my expectations. I already built a nightstand and a storage box, and both turned out great."'
t3_new = 'Robert M.'
t3_new_title = '"Helped me stop guessing."'
t3_new_text = '"Before this, I was always watching random videos and trying to figure out the measurements by myself. The plans helped me avoid mistakes and feel more confident."'

t4_old = 'Kevin M.'
t4_old_title = '"Simple, practical, and not overwhelming."'
t4_old_text = '"The plans are simple, practical, and not overwhelming. I used tools I already had in my garage and was able to complete my first project in a weekend."'
t4_new = 'Kevin J.'
t4_new_title = '"Simple, practical, and useful."'
t4_new_text = '"The project ideas are realistic and not overwhelming. I used basic tools and completed my first small metal project in a weekend."'

html = html.replace(t1_old_text, t1_new_text)
html = html.replace(t2_old_text, t2_new_text)
html = html.replace(t3_old, t3_new)
html = html.replace(t3_old_title, t3_new_title)
html = html.replace(t3_old_text, t3_new_text)
html = html.replace(t4_old, t4_new)
html = html.replace(t4_old_title, t4_new_title)
html = html.replace(t4_old_text, t4_new_text)

# Final title in tab
html = html.replace('<title>Woodworking – Prime Library</title>', '<title>MetalWorking – Prime Library</title>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Replaced with new user copy successfully!")
