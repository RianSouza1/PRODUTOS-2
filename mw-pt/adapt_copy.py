import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    # Headers
    'Woodworking for Beginners + 2 BONUSES': 'Master Metalworking System + 8 BONUSES',
    'Woodworking – Prime Library': 'Metalon – Prime Library',
    'FINAL HOURS – 70% OFF ENDS IN': '🔥 LIMITED TIME OFFER Ends In',
    'BUY NOW': 'Instant Access to +1200 Plans >>',
    'BUY 1 GET 3': 'Master Metalworking System',
    'For a limited time only, here is what you’ll get:': 'Take a look inside what you\'ll receive today:',
    'Why does this offer sound too good to be true?': 'How Much Does All This Cost?',
    '“Woodworking Is Too Hard for Beginners.”': 'This System Is For You If...',
    'Is That Really True?': 'You know you could build incredible things… but you don\'t have a clear step-by-step',
    'What’s Inside This Bestselling 3-Book Bundle:': 'Everything You Get Today:',
    'Why wait?': 'Don\'t say "YES." Just say "MAYBE"',

    # Hooks & Intro
    'Are you tired of watching amazing woodworking creations online and thinking, “I could never build that”?': 'How many times have you lost a client because you didn\'t have the right plans?',
    'What if the only thing standing between you and beautiful, handcrafted wood projects… was the <em>right guidance</em>?': 'Or spent weeks trying to figure out measurements that should only take hours?',

    # Too good to be true text
    'We get it — three bestselling books for the price of one isn’t something you see every day.': 'When online courses charge $200 or $500 to teach you nothing but THEORY without a single usable plan...',
    'Here’s the simple truth: once a year, around this season, we run a special Reader Event to thank our audience and make our most popular collections easier to access.': 'It\'s natural to think a package with +1200 plans and 8 bonuses would cost a fortune.',
    'Because we manage everything directly — from printing to fulfillment — we can skip retail markups and offer the entire bundle (normally $59.70) for only $19.90.': 'But IT\'S NOT! The right thing was to make it accessible for EVERYONE.',
    'When the event ends, prices return to normal.': 'So I\'m offering a special launch discount for a limited time.',

    # Myth vs Truth
    'Most people believe woodworking requires expensive tools, years of experience, or natural talent.': 'You work hard all day, but your income stays the same… because you\'re always doing the same basic jobs.',
    'That myth keeps countless beginners stuck, frustrated, and afraid to even try.': 'You waste money burning through entire iron bars by working "by eye" without clear measurements.',
    'But the truth is diﬀerent:': 'But the truth is different:',
    'With <strong>clear step-by-step instructions</strong>, <strong>simple beginner-friendly projects</strong>, and <strong>zero</strong> <strong>guesswork</strong>, anyone can build stunning, functional wood pieces — even if you’ve never touched a saw before.': 'You\'ll stop improvising and start working with a clear system — even if your workshop feels disorganized or stuck right now.',
    'This 3-book bundle gives you the roadmap, the confidence, and the practical skills to finally start creating with your hands… and loving every minute of it.': 'You\'ll build modern, profitable metalworking projects with professional finishes that let you charge more.',

    # Bullet points
    '500 Step-by-Step Woodworking Projects': '+1200 Metal Plans with exact measurements',
    'perfect for beginners': 'for professional and beginner projects',
    'Clear, full-color instructions': 'ZERO-ERROR Checklist Before Cutting',
    'that eliminate confusion and mistakes': 'to avoid costly mistakes',
    'Tool tutorials for beginners ': 'Learn to Weld From Scratch ',
    '— no expensive equipment required': '— complete technical guide',
    'Smart shortcuts and expert tips': 'Quotes & Sales — Guaranteed Close',
    'to avoid common beginner errors': 'to quote jobs confidently',
    'Money-making woodworking ideas': 'High-Value Plans — Trailers & Gym Equipment',
    'you can start from home': 'to sell at PREMIUM prices',
    'Step-by-step project guides': 'Woodworking That Sells',
    'to help you build with confidence from start to finish': '— +100 Wood Plans to combine with iron',
    'Wood selection, measurements, and safety essentials': 'Artistic Metalworking — Premium Design',
    'explained simply': 'with a high-end aesthetic focus',

    # Guarantee & Closing
    'This bundle was created for people who feel stuck, intimidated, or unsure where to begin.': 'You have a decision to make. And I think it\'s an easy one.',
    'If you’ve ever dreamed of creating furniture, gifts, or functional pieces with your hands — but felt woodworking was “too diﬃcult” — this guide shows you exactly how to start, step by step, with total confidence. Instant direct digital download (After you complete the payment you will immediately have the option to download the product(s) from the final purchase page and you will also receive a download email shortly after).': 'For the price of a coffee and dessert, you eliminate ALL the headaches of building professional furniture — FOREVER. After ordering you get INSTANT ACCESS. No waiting for shipping. You can start your first project in minutes.',
    'You’re not just buying three books.': 'I\'m not giving you an empty "guarantee." I\'m making you a personal promise:',
    'You’re buying a skill… a hobby… a way to relax… and a new sense of pride every time you build something real.': '7-Day Guarantee: "Love It or Leave It" — 100% Satisfaction. If this isn\'t the most complete metalworking resource you\'ve ever seen, I\'ll refund 100% of your money. No questions.',
    'And with <strong>70% OFF today</strong>, it’s the perfect time to finally start your woodworking journey.': 'And with <strong>80% OFF today</strong>, it’s the perfect time to finally start your metalworking journey.',
    'Build your first project this week': 'Start your first project in minutes',
    'even if you’re a complete beginner.': 'even if you don\'t have a huge shop or expensive tools.',
    'Order now ': 'Instant Access ',
    'and save 70% before this limited-time deal disappears.': 'before this limited-time deal disappears.',

    # Prices
    '$19.90': '$29.99',
    '$59.70': '$177.91',
    '70%': '80%',

    # Testimonials
    'Michael R.': 'Daniel Brooks',
    '"Clear and easy to follow."': '"Complete beginner here"',
    '"I had never built anything before, but this guide made everything feel simple. I started with a small shelf and now I’m working on a coffee table. The step-by-step instructions are clear and easy to follow."': '"Complete beginner here and I just built my first table this weekend 🔨 the step by step was super clear. Wife was impressed lol"',

    'Daniel T.': 'Michael Thompson',
    '"Actually beginner-friendly."': '"Game changer"',
    '"What I liked most is that the projects actually feel beginner-friendly. I finally understood measurements, cuts, and how to put everything together without feeling lost."': '"Got my access right away. Started cutting with real measurements for the first time instead of guessing 🔥 game changer"',

    'Sarah W.': 'Anthony Martinez',
    '"Exceeded my expectations."': '"Best $30 I ever spent"',
    '"I bought this hoping to learn the basics, and it exceeded my expectations. I already built a nightstand and a storage box, and both turned out great."': '"Bro I finished an industrial shelf in ONE afternoon. My client couldn\'t believe it. Best $30 I ever spent 💪"',

    'Kevin M.': 'Carlos Ramirez',
    '"Simple, practical, and not overwhelming."': '"Not guessing anymore"',
    '"The plans are simple, practical, and not overwhelming. I used tools I already had in my garage and was able to complete my first project in a weekend."': '"I used to burn through iron bars guessing measurements. Not anymore. These plans pay for themselves on the first project 👊"',

    # Footer
    'Woodworking Library': 'Metalon Library'
}

for eng, de in replacements.items():
    text = text.replace(eng, de)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Text replaced successfully!")
