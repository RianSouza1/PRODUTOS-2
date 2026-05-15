import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Testimonial 1
text = text.replace('<span class="testimonial-name">John D.</span>', '<span class="testimonial-name">Michael R.</span>')
text = text.replace('<div class="testimonial-title">"I built my first project in a weekend."</div>\n<div class="testimonial-text">"I was skeptical at first, but the techniques in Woodworking Projects for Beginners are genuinely practical. I followed the step-by-step instructions and within a weekend I had a beautiful piece I never thought possible. This bundle changed how I think about woodworking."</div>', '<div class="testimonial-title">"Clear and easy to follow."</div>\n<div class="testimonial-text">"I had never built anything before, but this guide made everything feel simple. I started with a small shelf and now I’m working on a coffee table. The step-by-step instructions are clear and easy to follow."</div>')

# Testimonial 2
text = text.replace('<span class="testimonial-name">Mark R.</span>', '<span class="testimonial-name">Daniel T.</span>')
text = text.replace('<div class="testimonial-title">"The best guide for beginners."</div>\n<div class="testimonial-text">"I\'ve bought dozens of woodworking books, but nothing clicked like this. The approach is warm, practical, and deeply grounded. My skills have genuinely transformed since I started applying these principles."</div>', '<div class="testimonial-title">"Actually beginner-friendly."</div>\n<div class="testimonial-text">"What I liked most is that the projects actually feel beginner-friendly. I finally understood measurements, cuts, and how to put everything together without feeling lost."</div>')

# Testimonial 3
text = text.replace('<span class="testimonial-name">Paul & Sarah T.</span>', '<span class="testimonial-name">Sarah W.</span>')
text = text.replace('✅ Verified Buyers', '✅ Verified Buyer')
text = text.replace('<div class="testimonial-title">"We build together every weekend."</div>\n<div class="testimonial-text">"My wife and I started the projects together. It gave us a shared language for talking about our goals. We feel more aligned, more hopeful, and more grateful than ever before."</div>', '<div class="testimonial-title">"Exceeded my expectations."</div>\n<div class="testimonial-text">"I bought this hoping to learn the basics, and it exceeded my expectations. I already built a nightstand and a storage box, and both turned out great."</div>')

# Testimonial 4
text = text.replace('<span class="testimonial-name">David W.</span>', '<span class="testimonial-name">Kevin M.</span>')
text = text.replace('<div class="testimonial-title">"Simple, powerful, and truly life-changing."</div>\n<div class="testimonial-text">"I kept starting and stopping with woodworking projects because they felt too abstract. This bundle is different — it gives you real, step-by-step actions. The shift in my mindset happened faster than I ever expected."</div>', '<div class="testimonial-title">"Simple, practical, and not overwhelming."</div>\n<div class="testimonial-text">"The plans are simple, practical, and not overwhelming. I used tools I already had in my garage and was able to complete my first project in a weekend."</div>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Testimonials replaced.")
