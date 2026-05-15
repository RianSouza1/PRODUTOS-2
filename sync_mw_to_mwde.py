import shutil

# Copy mw/index.html to mw-de/index.html
shutil.copy("mw/index.html", "mw-de/index.html")

with open("mw-de/index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update image names
content = content.replace("Imagens/img1.webp", "Imagens/img1al.webp")
content = content.replace("Imagens/img2.webp", "Imagens/img2al.webp")
content = content.replace("Imagens/img3.webp", "Imagens/img3al.webp")
content = content.replace("Imagens/img4.webp", "Imagens/img4al.webp")
content = content.replace("MetalWorking for Beginners + 2 BONUSES", "Metallbearbeitung für Anfänger + 2 BONI")

# 2. Update checkout links (Hotmart)
content = content.replace("https://pay.hotmart.com/P105840222D?checkoutMode=10", "https://pay.hotmart.com/G105831245S")

# 3. Translate Copy
translations = {
    "🔥 FINAL HOURS — 70% OFF ENDS SOON": "🔥 LETZTE STUNDEN — 70% RABATT ENDET BALD",
    "🔥 PROVEN METHOD TRUSTED BY 2,000+ METALWORKERS": "🔥 BEWÄHRTE METHODE, DER ÜBER 2.000 METALLARBEITER VERTRAUEN",
    "Build <span style=\"color:#ff9900; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);\">Professional MetalWorking</span> Projects<br>— Even If You’re <span style=\"background-color:#e42628; color:#ffffff; padding:2px 10px; border-radius:4px;\">Starting From Zero</span>": "Bauen Sie <span style=\"color:#ff9900; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);\">Professionelle Metallbearbeitungs-</span> Projekte<br>— Auch wenn Sie <span style=\"background-color:#e42628; color:#ffffff; padding:2px 10px; border-radius:4px;\">bei Null anfangen</span>",
    "Get a complete 3-guide bundle with beginner lessons, professional metal frame projects, money-making strategies, and 1,200+ exact metal plans to help you stop guessing and start building with confidence.": "Sichern Sie sich ein komplettes 3-Bücher-Paket mit Anfängerlektionen, professionellen Metallrahmenprojekten, Strategien zum Geldverdienen und über 1.200 exakten Metallplänen, damit Sie nicht länger raten müssen und mit Selbstvertrauen bauen können.",
    "<strong>$19.90 </strong><mark style=\"background-color:rgba(0, 0, 0, 0);color:#e42628\" class=\"has-inline-color\"><s>$59.70</s> </mark> <strong>You Save 70% Today</strong>": "<strong>19,90 € </strong><mark style=\"background-color:rgba(0, 0, 0, 0);color:#e42628\" class=\"has-inline-color\"><s>59,70 €</s> </mark> <strong>Sie sparen 70% heute</strong>",
    "<strong>$19.90 </strong><mark style=\"background-color:rgba(0, 0, 0, 0);color:#e42628\" class=\"has-inline-color\"><s>$59.70</s></mark> <strong>You Save 70% Today</strong>": "<strong>19,90 € </strong><mark style=\"background-color:rgba(0, 0, 0, 0);color:#e42628\" class=\"has-inline-color\"><s>59,70 €</s></mark> <strong>Sie sparen heute 70%</strong>",
    "<strong>BUY NOW</strong>": "<strong>JETZT KAUFEN</strong>",
    "Instant Access • One-Time Payment": "Sofortiger Zugang • Einmalige Zahlung",
    "<strong><strong>BUY 1 GET 3</strong></strong>": "<strong><strong>KAUFEN SIE 1 BEKOMMEN SIE 3</strong></strong>",
    "Inside this bundle, you’ll find project ideas, exact measurements, and practical guidance to help you build pieces like:": "In diesem Paket finden Sie Projektideen, genaue Maße und praktische Anleitungen, um Stücke wie diese zu bauen:",
    "<strong>Shelves, racks, tables, supports, frames, workshop structures, home projects, square tube builds, furniture, and more.</strong>": "<strong>Regale, Ständer, Tische, Halterungen, Rahmen, Werkstattstrukturen, Heimprojekte, Vierkantrohr-Konstruktionen, Möbel und mehr.</strong>",
    "This is exactly why the bundle includes 1,200+ metal plans with exact measurements — so you can stop wasting time trying to invent everything from scratch and start building with more confidence.": "Genau deshalb enthält das Paket über 1.200 Metallpläne mit genauen Maßen – so verschwenden Sie keine Zeit mehr mit eigenen Erfindungen und können mit mehr Selbstvertrauen bauen.",
    "No more guessing.<br>No more random tutorials.<br>Just clear plans and a practical path to follow.": "Kein Raten mehr.<br>Keine zufälligen Tutorials mehr.<br>Einfach klare Pläne und ein praktischer Weg.",
    "<strong>From Raw Metal To Real Projects</strong>": "<strong>Von rohem Metall zu echten Projekten</strong>",
    "See how simple metal pieces can become strong, useful, professional-looking builds when you follow the right plan.": "Sehen Sie, wie aus einfachen Metallstücken starke, nützliche und professionelle Konstruktionen werden, wenn Sie dem richtigen Plan folgen.",
    "<strong>Still Watching Metalworking Projects And Thinking “I Could Never Build That”?</strong>": "<strong>Schauen Sie sich immer noch Metallbearbeitungsprojekte an und denken: „Das könnte ich niemals bauen“?</strong>",
    "You see people building gates, shelves, racks, tables, frames, furniture, and custom workshop projects…": "Sie sehen Leute, die Tore, Regale, Tische, Rahmen, Möbel und individuelle Werkstattprojekte bauen…",
    "But when it’s your turn, everything feels confusing:": "Aber wenn Sie an der Reihe sind, fühlt sich alles verwirrend an:",
    "<li>What tools do I need?</li>": "<li>Welche Werkzeuge brauche ich?</li>",
    "<li>What metal should I buy?</li>": "<li>Welches Metall sollte ich kaufen?</li>",
    "<li>What measurements should I use?</li>": "<li>Welche Maße sollte ich verwenden?</li>",
    "<li>Where do I even begin?</li>": "<li>Wo fange ich überhaupt an?</li>",
    "<strong>The truth is simple:</strong>": "<strong>Die Wahrheit ist einfach:</strong>",
    "You don’t need years of experience to start.": "Sie brauchen keine jahrelange Erfahrung, um anzufangen.",
    "With clear plans, exact measurements, and step-by-step guidance, you can build strong, useful, professional-looking metal projects — even if you’re starting from zero.": "Mit klaren Plänen, genauen Maßen und Schritt-für-Schritt-Anleitungen können Sie starke, nützliche und professionelle Metallprojekte bauen – auch wenn Sie bei Null anfangen.",
    "<strong><em><em>Why Is This Bundle Only $19.90?</em></em></strong>": "<strong><em><em>Warum kostet dieses Paket nur 19,90 €?</em></em></strong>",
    "<strong>We know — getting three complete metalworking guides for the price of one may sound too good to be true.</strong>": "<strong>Wir wissen – drei komplette Metallbearbeitungs-Guides zum Preis von einem klingt fast zu schön, um wahr zu sein.</strong>",
    "But once a year, we run a special Reader Event to make our most popular collections easier to access.": "Aber einmal im Jahr veranstalten wir ein besonderes Leser-Event, um unsere beliebtesten Sammlungen zugänglicher zu machen.",
    "Because we handle everything directly, we can skip retail markups and offer the full bundle for just:": "Da wir alles direkt abwickeln, können wir Einzelhandelsaufschläge überspringen und das komplette Paket anbieten für nur:",
    "<strong><span style=\"color:#ffcc00; font-size:1.3rem;\">$19.90</span> instead of <span style=\"text-decoration:line-through; color:#e42628;\">$59.70</span></strong>": "<strong><span style=\"color:#ffcc00; font-size:1.3rem;\">19,90 €</span> anstatt <span style=\"text-decoration:line-through; color:#e42628;\">59,70 €</span></strong>",
    "When the event ends, the price goes back to normal.": "Wenn das Event endet, wird der Preis wieder normalisiert.",
    "<strong><strong><strong><strong>What’s Inside This Practical MetalWorking Bundle:</strong></strong></strong></strong>": "<strong><strong><strong><strong>Was in diesem praktischen Metallbearbeitungs-Paket steckt:</strong></strong></strong></strong>",
    "<strong>1200 Step-by-Step Metalworking Projects</strong> perfect for beginners": "<strong>1200 Schritt-für-Schritt Metallbearbeitungsprojekte</strong> perfekt für Anfänger",
    "<strong>Clear, full-color instructions</strong> that eliminate confusion and mistakes": "<strong>Klare, vollfarbige Anleitungen</strong>, die Verwirrung und Fehler beseitigen",
    "<strong>Tool tutorials for beginners </strong>— no expensive equipment required": "<strong>Werkzeug-Tutorials für Anfänger </strong>— keine teure Ausrüstung erforderlich",
    "<strong>Smart shortcuts and expert tips</strong> to avoid common beginner errors": "<strong>Schlaue Abkürzungen und Experten-Tipps</strong>, um typische Anfängerfehler zu vermeiden",
    "<strong>Money-making metalworking ideas</strong> you can start from home": "<strong>Geldverdienen mit Metallbearbeitungs-Ideen</strong>, die Sie von zu Hause aus starten können",
    "<strong>Step-by-step project guides</strong> to help you build with confidence from start to finish": "<strong>Schritt-für-Schritt Projektanleitungen</strong>, die Ihnen helfen, von Anfang bis Ende mit Selbstvertrauen zu bauen",
    "<strong>Wood selection, measurements, and safety essentials</strong> explained simply": "<strong>Materialauswahl, Maße und Sicherheitsgrundlagen</strong> einfach erklärt",
    "TODAY ONLY": "NUR HEUTE",
    "<strong>This bundle was created for people who feel stuck, intimidated, or unsure where to begin.</strong>": "<strong>Dieses Paket wurde für Menschen entwickelt, die sich festgefahren, eingeschüchtert oder unsicher fühlen, wo sie anfangen sollen.</strong>",
    "If you’ve ever dreamed of building metal furniture, shelves, gates, racks, supports, workshop pieces, or custom projects — but felt metalworking was “too complicated” — this guide shows you exactly how to start, step by step, with confidence.<br><br>And if you already have some experience, the professional metal frame projects and exact plans can help you build cleaner, stronger, more advanced pieces without wasting time trying to figure everything out from scratch.<br><br>After your payment is complete, you’ll receive instant digital access to the full bundle and download instructions by email.": "Wenn Sie schon immer davon geträumt haben, Metallmöbel, Regale, Tore, Ständer, Werkstattstücke oder individuelle Projekte zu bauen – aber dachten, Metallbearbeitung sei „zu kompliziert“ – zeigt Ihnen dieser Leitfaden genau, wie Sie Schritt für Schritt und mit Selbstvertrauen anfangen.<br><br>Und wenn Sie bereits Erfahrung haben, helfen Ihnen die professionellen Metallrahmenprojekte und genauen Pläne, sauberere, stärkere und fortgeschrittenere Stücke zu bauen, ohne Zeit zu verschwenden.<br><br>Nach Abschluss Ihrer Zahlung erhalten Sie sofortigen digitalen Zugriff auf das gesamte Paket und Download-Anweisungen per E-Mail.",
    "<strong><strong>Build Your First Metal Project This Week</strong></strong>": "<strong><strong>Bauen Sie Ihr erstes Metallprojekt noch diese Woche</strong></strong>",
    "<strong><strong><strong>Even If You’re A Complete Beginner.</strong></strong></strong>": "<strong><strong><strong>Auch wenn Sie ein blutiger Anfänger sind.</strong></strong></strong>",
    "<em><em>Here’s What People Are Saying About Us</em> :</em>": "<em><em>Hier ist, was die Leute über uns sagen</em> :</em>",
    "✅ Verified Buyer": "✅ Verifizierter Käufer",
    "\"Clear and easy to follow.\"": "\"Klar und einfach zu befolgen.\"",
    "\"I had never built anything with metal before, but this guide made the basics feel simple. I started with a small metal shelf frame and finally understood how to plan the measurements before cutting.\"": "\"Ich hatte noch nie zuvor etwas aus Metall gebaut, aber diese Anleitung machte die Grundlagen einfach. Ich habe mit einem kleinen Regalrahmen angefangen und endlich verstanden, wie man Maße vor dem Schneiden plant.\"",
    "\"Actually beginner-friendly.\"": "\"Wirklich anfängerfreundlich.\"",
    "\"What I liked most is that it doesn’t assume you already know everything. The explanations are practical, simple, and focused on helping you start without feeling overwhelmed.\"": "\"Was mir am besten gefiel, ist, dass nicht davon ausgegangen wird, dass man schon alles weiß. Die Erklärungen sind praktisch, einfach und darauf fokussiert, einem beim Start zu helfen, ohne einen zu überfordern.\"",
    "\"Helped me stop guessing.\"": "\"Hat mir geholfen, nicht mehr raten zu müssen.\"",
    "\"Before this, I was always watching random videos and trying to figure out the measurements by myself. The plans helped me avoid mistakes and feel more confident.\"": "\"Davor habe ich mir immer zufällige Videos angesehen und versucht, die Maße selbst herauszufinden. Die Pläne haben mir geholfen, Fehler zu vermeiden und mich sicherer zu fühlen.\"",
    "\"Simple, practical, and useful.\"": "\"Einfach, praktisch und nützlich.\"",
    "\"The project ideas are realistic and not overwhelming. I used basic tools and completed my first small metal project in a weekend.\"": "\"Die Projektideen sind realistisch und nicht überfordernd. Ich habe einfache Werkzeuge benutzt und mein erstes kleines Metallprojekt an einem Wochenende fertiggestellt.\"",
    "Metalworking Library": "Metallbearbeitung Bibliothek",
    "© All rights reserved.": "© Alle Rechte vorbehalten.",
    "Contact Us": "Kontaktiere uns",
    "<title>Woodworking – Prime Library</title>": "<title>Metallbearbeitung Projekte</title>",
    "<title>Metalworking Projects</title>": "<title>Metallbearbeitung Projekte</title>"
}

for old_text, new_text in translations.items():
    content = content.replace(old_text, new_text)

with open("mw-de/index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("mw-de successfully recreated from mw with German translations")
