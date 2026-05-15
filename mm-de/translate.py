import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

translations = {
    # Header & Offer
    'FINAL HOURS – 70% OFF ENDS IN': 'LETZTE STUNDEN – 70% RABATT ENDET IN',
    'Woodworking for Beginners + 2 BONUSES': 'Holzbearbeitung für Anfänger + 2 BONI',
    'BUY 1 GET 3': 'KAUFEN SIE 1 UND ERHALTEN SIE 3',
    'For a limited time only, here is what you’ll get:': 'Nur für kurze Zeit, das erhalten Sie:',
    'BUY NOW': 'JETZT KAUFEN',
    '70% OFF': '70% RABATT',
    'TODAY ONLY': 'NUR HEUTE',
    
    # Story / Hook
    'Are you tired of watching amazing woodworking creations online and thinking, “I could never build that”?': 'Sind Sie es leid, erstaunliche Holzbearbeitungskreationen im Internet zu sehen und zu denken: „Das könnte ich niemals bauen“?',
    'What if the only thing standing between you and beautiful, handcrafted wood projects… was the right guidance?': 'Was wäre, wenn das Einzige, was zwischen Ihnen und wunderschönen, handgefertigten Holzprojekten steht... die richtige Anleitung wäre?',
    
    # "Too Good to Be True"
    'Why does this offer sound too good to be true?': 'Warum klingt dieses Angebot zu schön, um wahr zu sein?',
    'We get it — three bestselling books for the price of one isn’t something you see every day.': 'Wir verstehen das – drei Bestseller zum Preis von einem sieht man nicht alle Tage.',
    'Here’s the simple truth: once a year, around this season, we run a special Reader Event to thank our audience and make our most popular collections easier to access.': 'Hier ist die einfache Wahrheit: Einmal im Jahr, um diese Jahreszeit, veranstalten wir ein besonderes Leser-Event, um unserem Publikum zu danken und unsere beliebtesten Sammlungen leichter zugänglich zu machen.',
    'Because we manage everything directly — from printing to fulfillment — we can skip retail markups and offer the entire bundle (normally $59.70) for only $19.90.': 'Da wir alles direkt abwickeln – vom Druck bis zum Versand – können wir Einzelhandelsaufschläge überspringen und das gesamte Paket (normalerweise 59,70 $) für nur 19,90 $ anbieten.',
    'When the event ends, prices return to normal.': 'Wenn das Event endet, gelten wieder die normalen Preise.',
    
    # Myth Busting
    '“Woodworking Is Too Hard for Beginners.”': '„Holzbearbeitung ist zu schwer für Anfänger.“',
    'Is That Really True?': 'Ist das wirklich wahr?',
    'Most people believe woodworking requires expensive tools, years of experience, or natural talent.': 'Die meisten Menschen glauben, dass Holzbearbeitung teure Werkzeuge, jahrelange Erfahrung oder Naturtalent erfordert.',
    'That myth keeps countless beginners stuck, frustrated, and afraid to even try.': 'Dieser Mythos hält unzählige Anfänger gefangen, frustriert und lässt sie davor zurückschrecken, es überhaupt zu versuchen.',
    'But the truth is different:': 'Aber die Wahrheit sieht anders aus:',
    'With clear step-by-step instructions, simple beginner-friendly projects, and zero guesswork, anyone can build stunning, functional wood pieces — even if you’ve never touched a saw before.': 'Mit klaren Schritt-für-Schritt-Anleitungen, einfachen anfängerfreundlichen Projekten und ohne Rätselraten kann jeder atemberaubende, funktionale Holzstücke bauen – selbst wenn Sie noch nie eine Säge in der Hand hatten.',
    'This 3-book bundle gives you the roadmap, the confidence, and the practical skills to finally start creating with your hands… and loving every minute of it.': 'Dieses 3-Bücher-Paket gibt Ihnen den Fahrplan, das Selbstvertrauen und die praktischen Fähigkeiten, um endlich mit Ihren Händen kreativ zu werden... und jede Minute davon zu lieben.',
    
    # What's inside
    'What’s Inside This Bestselling 3-Book Bundle:': 'Was in diesem Bestseller-Paket mit 3 Büchern steckt:',
    '500 Step-by-Step Woodworking Projects perfect for beginners': '500 Schritt-für-Schritt Holzbearbeitungsprojekte perfekt für Anfänger',
    'Clear, full-color instructions that eliminate confusion and mistakes': 'Klare, vollfarbige Anleitungen, die Verwirrung und Fehler beseitigen',
    'Tool tutorials for beginners — no expensive equipment required': 'Werkzeug-Tutorials für Anfänger – keine teure Ausrüstung erforderlich',
    'Smart shortcuts and expert tips to avoid common beginner errors': 'Schlaue Abkürzungen und Expertentipps, um häufige Anfängerfehler zu vermeiden',
    'Money-making woodworking ideas you can start from home': 'Geldverdienende Holzbearbeitungsideen, die Sie von zu Hause aus starten können',
    'Step-by-step project guides to help you build with confidence from start to finish': 'Schritt-für-Schritt Projektanleitungen, die Ihnen helfen, vom Anfang bis zum Ende mit Zuversicht zu bauen',
    'Wood selection, measurements, and safety essentials explained simply': 'Holzauswahl, Maße und Sicherheitsgrundlagen einfach erklärt',
    
    # Closing
    'If you’ve ever dreamed of creating furniture, gifts, or functional pieces with your hands — but felt woodworking was “too diﬃcult” — this guide shows you exactly how to start, step by step, with total confidence.': 'Wenn Sie schon immer davon geträumt haben, Möbel, Geschenke oder funktionale Stücke mit Ihren Händen zu kreieren – aber dachten, Holzbearbeitung sei „zu schwierig“ – zeigt Ihnen dieser Leitfaden genau, wie Sie Schritt für Schritt und mit vollem Selbstvertrauen anfangen.',
    'Instant direct digital download (After you complete the payment you will immediately have the option to download the product(s) from the final purchase page and you will also receive a download email shortly after).': 'Sofortiger direkter digitaler Download (Nach Abschluss der Zahlung haben Sie sofort die Möglichkeit, die Produkte von der endgültigen Kaufseite herunterzuladen, und Sie erhalten kurz darauf auch eine Download-E-Mail).',
    'You’re not just buying three books.': 'Sie kaufen nicht nur drei Bücher.',
    'You’re gaining the skills to build things that last a lifetime.': 'Sie erwerben die Fähigkeiten, Dinge zu bauen, die ein Leben lang halten.',
    'And with 70% OFF today, it’s the perfect time to finally start your woodworking journey.': 'Und mit heute 70% Rabatt ist es der perfekte Zeitpunkt, um endlich Ihre Holzbearbeitungsreise zu beginnen.',
    'Build your first project this week': 'Bauen Sie Ihr erstes Projekt noch diese Woche',
    
    # Testimonials header
    'Here’s What People Are Saying About Us': 'Hier ist, was die Leute über uns sagen',
    'Verified Buyer': 'Verifizierter Käufer',
    
    # Testimonials
    'Clear and easy to follow.': 'Klar und einfach zu befolgen.',
    'I had never built anything before, but this guide made everything feel simple. I started with a small shelf and now I’m working on a coffee table. The step-by-step instructions are clear and easy to follow.': 'Ich hatte noch nie zuvor etwas gebaut, aber diese Anleitung hat alles ganz einfach gemacht. Ich habe mit einem kleinen Regal angefangen und arbeite jetzt an einem Couchtisch. Die Schritt-für-Schritt-Anleitungen sind klar und einfach zu befolgen.',
    
    'Actually beginner-friendly.': 'Wirklich anfängerfreundlich.',
    'What I liked most is that the projects actually feel beginner-friendly. I finally understood measurements, cuts, and how to put everything together without feeling lost.': 'Was mir am besten gefiel, ist, dass sich die Projekte tatsächlich anfängerfreundlich anfühlen. Ich habe endlich Maße, Schnitte und das Zusammenfügen verstanden, ohne mich verloren zu fühlen.',
    
    'Exceeded my expectations.': 'Hat meine Erwartungen übertroffen.',
    'I bought this hoping to learn the basics, and it exceeded my expectations. I already built a nightstand and a storage box, and both turned out great.': 'Ich habe es in der Hoffnung gekauft, die Grundlagen zu lernen, und es hat meine Erwartungen übertroffen. Ich habe bereits einen Nachttisch und eine Aufbewahrungsbox gebaut, und beides ist großartig geworden.',
    
    'Simple, practical, and not overwhelming.': 'Einfach, praktisch und nicht überfordernd.',
    'The plans are simple, practical, and not overwhelming. I used tools I already had in my garage and was able to complete my first project in a weekend.': 'Die Pläne sind einfach, praktisch und nicht überfordernd. Ich habe Werkzeuge verwendet, die ich bereits in meiner Garage hatte, und konnte mein erstes Projekt an einem Wochenende abschließen.',
    
    # Footer
    'Woodworking Library': 'Holzbearbeitung Bibliothek',
    'All rights reserved.': 'Alle Rechte vorbehalten.',
    'Contact Us': 'Kontaktiere uns',
}

# Apply all translations
for eng, de in translations.items():
    text = text.replace(eng, de)

# Update HTML lang tag
text = text.replace('<html lang="en-US">', '<html lang="de-DE">')

# Save updated HTML
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Translation applied successfully!")
