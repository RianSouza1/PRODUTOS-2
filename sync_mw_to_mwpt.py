import os
import shutil

# Paths
base_dir = "/Users/riansouza/Downloads/PRODUTOS 2/PRODUTOS-2"
src_dir = os.path.join(base_dir, "mw")
dest_dir = os.path.join(base_dir, "mw-pt")

# 1. Ensure mw-pt directory structure exists
os.makedirs(dest_dir, exist_ok=True)
os.makedirs(os.path.join(dest_dir, "Imagens"), exist_ok=True)

# 2. Copy index.html from mw to mw-pt
print("Copying index.html...")
shutil.copy(os.path.join(src_dir, "index.html"), os.path.join(dest_dir, "index.html"))

# 3. Copy other utility scripts from mw to mw-pt (without overwriting Imagens)
for item in os.listdir(src_dir):
    src_item = os.path.join(src_dir, item)
    dest_item = os.path.join(dest_dir, item)
    if os.path.isdir(src_item):
        if item == "Imagens":
            # Only copy images if dest_dir/Imagens is empty to preserve translated images
            dest_img_dir = os.path.join(dest_dir, "Imagens")
            if not os.listdir(dest_img_dir):
                print("Copying default images...")
                for img in os.listdir(src_item):
                    shutil.copy(os.path.join(src_item, img), os.path.join(dest_img_dir, img))
        else:
            if os.path.exists(dest_item):
                shutil.rmtree(dest_item)
            shutil.copytree(src_item, dest_item)
    else:
        if item != "index.html":
            shutil.copy(src_item, dest_item)

print("Directory structure sync completed!")

# 4. Read index.html from mw-pt
index_path = os.path.join(dest_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

# 5. Translate Copy to Portuguese of Portugal (PT-PT) - Focus on Metalurgia / Metalúrgicos
translations = {
    "🔥 FINAL HOURS — 70% OFF ENDS SOON": "🔥 ÚLTIMAS HORAS — DESCONTO DE 70% TERMINA EM BREVE",
    "🔥 PROVEN METHOD TRUSTED BY 2,000+ METALWORKERS": "🔥 MÉTODO COMPROVADO EM QUE MAIS DE 2000 METALÚRGICOS CONFIAM",
    
    'Build <span style="color:#ff9900; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);">Professional MetalWorking</span> Projects<br>— Even If You’re <span style="background-color:#e42628; color:#ffffff; padding:2px 10px; border-radius:4px;">Starting From Zero</span>': 
    'Construa Projetos de <span style="color:#ff9900; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);">Metalurgia Profissional</span><br>— Mesmo que Esteja a <span style="background-color:#e42628; color:#ffffff; padding:2px 10px; border-radius:4px;">Começar do Zero</span>',
    
    "Get a complete 3-guide bundle with beginner lessons, professional metal frame projects, money-making strategies, and 1,200+ exact metal plans to help you stop guessing and start building with confidence.": 
    "Obtenha um pacote completo de 3 guias com lições para principiantes, projetos profissionais de estruturas metálicas, estratégias para ganhar dinheiro e mais de 1200 planos de metal exatos para o ajudar a deixar de adivinhar e começar a construir com confiança.",
    
    '<strong>$19.90 </strong><mark style="background-color:rgba(0, 0, 0, 0);color:#e42628" class="has-inline-color"><s>$59.70</s> </mark> <strong>You Save 70% Today</strong>': 
    '<strong>19.90€ </strong><mark style="background-color:rgba(0, 0, 0, 0);color:#e42628" class="has-inline-color"><s>59.70€</s> </mark> <strong>Poupe 70% Hoje</strong>',
    
    '<strong>$19.90 </strong><mark style="background-color:rgba(0, 0, 0, 0);color:#e42628" class="has-inline-color"><s>$59.70</s></mark> <strong>You Save 70% Today</strong>': 
    '<strong>19.90€ </strong><mark style="background-color:rgba(0, 0, 0, 0);color:#e42628" class="has-inline-color"><s>59.70€</s></mark> <strong>Poupe 70% Hoje</strong>',
    
    "<strong>BUY NOW</strong>": "<strong>COMPRE AGORA</strong>",
    "Instant Access • One-Time Payment": "Acesso Imediato • Pagamento Único",
    "<strong><strong>BUY 1 GET 3</strong></strong>": "<strong><strong>COMPRE 1 E LEVE 3</strong></strong>",
    
    "Inside this bundle, you’ll find project ideas, exact measurements, and practical guidance to help you build pieces like:": 
    "Dentro deste pacote, encontrará ideias de projetos, medidas exatas e orientação prática para o ajudar a construir peças como:",
    
    "<strong>Shelves, racks, tables, supports, frames, workshop structures, home projects, square tube builds, furniture, and more.</strong>": 
    "<strong>Prateleiras, estantes, mesas, suportes, estruturas, construções para oficina, projetos domésticos, construções com tubos quadrados, móveis e muito mais.</strong>",
    
    "This is exactly why the bundle includes 1,200+ metal plans with exact measurements — so you can stop wasting time trying to invent everything from scratch and start building with more confidence.": 
    "É exatamente por isso que o pacote inclui mais de 1200 planos de metal com medidas exatas — para que possa deixar de perder tempo a tentar inventar tudo do zero e começar a construir com mais confiança.",
    
    "No more guessing.<br>No more random tutorials.<br>Just clear plans and a practical path to follow.": 
    "Deixe de adivinhar.<br>Chega de tutoriais aleatórios.<br>Apenas planos claros e um caminho prático a seguir.",
    
    "<strong>From Raw Metal To Real Projects</strong>": "<strong>Do Metal Bruto a Projetos Reais</strong>",
    
    "See how simple metal pieces can become strong, useful, professional-looking builds when you follow the right plan.": 
    "Veja como simples peças de metal se podem tornar construções fortes, úteis e com aspeto profissional quando segue o plano certo.",
    
    "<strong>Still Watching Metalworking Projects And Thinking “I Could Never Build That”?</strong>": 
    "<strong>Ainda assiste a projetos de metalurgia e pensa \"Eu nunca conseguiria construir isso\"?</strong>",
    
    "You see people building gates, shelves, racks, tables, frames, furniture, and custom workshop projects…": 
    "Vê pessoas a construir portões, prateleiras, estantes, mesas, estruturas, móveis e projetos de oficina personalizados…",
    
    "But when it’s your turn, everything feels confusing:": "Mas quando chega a sua vez, tudo parece confuso:",
    "<li>What tools do I need?</li>": "<li>De que ferramentas preciso?</li>",
    "<li>What metal should I buy?</li>": "<li>Que metal devo comprar?</li>",
    "<li>What measurements should I use?</li>": "<li>Que medidas devo usar?</li>",
    "<li>Where do I even begin?</li>": "<li>Por onde é que começo?</li>",
    
    "<strong>The truth is simple:</strong>": "<strong>A verdade é simples:</strong>",
    "You don’t need years of experience to start.": "Não precisa de anos de experiência para começar.",
    
    "With clear plans, exact measurements, and step-by-step guidance, you can build strong, useful, professional-looking metal projects — even if you’re starting from zero.": 
    "Com planos claros, medidas exatas e orientação passo a passo, pode construir projetos de metal fortes, úteis e com aspeto profissional — mesmo que esteja a começar do zero.",
    
    "<strong><em><em>Why Is This Bundle Only $19.90?</em></em></strong>": 
    "<strong><em><em>Porque é que este Pacote custa apenas 19.90€?</em></em></strong>",
    
    "<strong>We know — getting three complete metalworking guides for the price of one may sound too good to be true.</strong>": 
    "<strong>Nós sabemos — obter três guias completos de metalurgia pelo preço de um pode parecer bom demais para ser verdade.</strong>",
    
    "But once a year, we run a special Reader Event to make our most popular collections easier to access.": 
    "Mas uma vez por ano, realizamos um Evento Especial do Leitor para tornar as nossas coleções mais populares mais fáceis de aceder.",
    
    "Because we manage everything directly, we can skip retail markups and offer the full bundle for just:": 
    "Como gerimos tudo diretamente, podemos evitar as margens de lucro do retalho e oferecer o pacote completo por apenas:",
    
    '<strong><span style="color:#ffcc00; font-size:1.3rem;">$19.90</span> instead of <span style="text-decoration:line-through; color:#e42628;">$59.70</span></strong>': 
    '<strong><span style="color:#ffcc00; font-size:1.3rem;">19.90€</span> em vez de <span style="text-decoration:line-through; color:#e42628;">59.70€</span></strong>',
    
    "When the event ends, the price goes back to normal.": "Quando o evento terminar, o preço volta ao normal.",
    
    "<strong><strong><strong><strong>What’s Inside This Practical MetalWorking Bundle:</strong></strong></strong></strong>": 
    "<strong><strong><strong><strong>O que está dentro deste Pacote Prático de Metalurgia:</strong></strong></strong></strong>",
    
    "<strong>1200 Step-by-Step Metalworking Projects</strong> perfect for beginners": 
    "<strong>1200 Projetos de Metalurgia Passo a Passo</strong> perfeitos para principiantes",
    
    "<strong>Clear, full-color instructions</strong> that eliminate confusion and mistakes": 
    "<strong>Instruções claras e a cores</strong> que eliminam confusões e erros",
    
    "<strong>Tool tutorials for beginners </strong>— no expensive equipment required": 
    "<strong>Tutoriais de ferramentas para principiantes </strong>— sem necessidade de equipamentos caros",
    
    "<strong>Smart shortcuts and expert tips</strong> to avoid common beginner errors": 
    "<strong>Atalhos inteligentes e dicas de especialistas</strong> para evitar erros comuns de principiantes",
    
    "<strong>Money-making metalworking ideas</strong> you can start from home": 
    "<strong>Ideias de metalurgia lucrativas</strong> que pode começar a partir de casa",
    
    "<strong>Step-by-step project guides</strong> to help you build with confidence from start to finish": 
    "<strong>Guias de projeto passo a passo</strong> para o ajudar a construir com confiança do início ao fim",
    
    "<strong>Wood selection, measurements, and safety essentials</strong> explained simply": 
    "<strong>Seleção de materiais, medidas e essenciais de segurança</strong> explicados de forma simples",
    
    "TODAY ONLY": "APENAS HOJE",
    
    "<strong>This bundle was created for people who feel stuck, intimidated, or unsure where to begin.</strong>": 
    "<strong>Este pacote foi criado para pessoas que se sentem bloqueadas, intimidadas ou inseguras sobre por onde começar.</strong>",
    
    "If you’ve ever dreamed of building metal furniture, shelves, gates, racks, supports, workshop pieces, or custom projects — but felt metalworking was “too complicated” — this guide shows you exactly how to start, step by step, with confidence.<br><br>And if you already have some experience, the professional metal frame projects and exact plans can help you build cleaner, stronger, more advanced pieces without wasting time trying to figure everything out from scratch.<br><br>After your payment is complete, you’ll receive instant digital access to the full bundle and download instructions by email.": 
    "Se alguma vez sonhou em construir móveis de metal, prateleiras, portões, estantes, suportes, peças de oficina ou projetos personalizados — mas achou que trabalhar metal era \"demasiado complicado\" — este guia mostra-lhe exatamente como começar, passo a passo, com confiança.<br><br>E se já tem alguma experiência, os projetos de estruturas metálicas profissionais e planos exatos podem ajudá-lo a construir peças mais limpas, fortes e avançadas, sem perder tempo a tentar perceber tudo do zero.<br><br>Após a conclusão do pagamento, receberá acesso digital imediato ao pacote completo e as instruções de descarregamento por e-mail.",
    
    "<strong><strong>Build Your First Metal Project This Week</strong></strong>": "<strong><strong>Construa o seu Primeiro Projeto de Metal esta Semana</strong></strong>",
    "<strong><strong><strong>Even If You’re A Complete Beginner.</strong></strong></strong>": "<strong><strong><strong>Mesmo que Seja um Principiante Absoluto.</strong></strong></strong>",
    
    "<em><em>Here’s What People Are Saying About Us</em> :</em>": "<em><em>Eis o que as pessoas dizem sobre nós</em>:</em>",
    "✅ Verified Buyer": "✅ Comprador Verificado",
    "\"Clear and easy to follow.\"": "\"Claro e fácil de seguir.\"",
    
    "\"I had never built anything with metal before, but this guide made the basics feel simple. I started with a small metal shelf frame and finally understood how to plan the measurements before cutting.\"": 
    "\"Nunca tinha construído nada em metal antes, mas este guia fez com que as bases parecessem simples. Comecei com uma pequena prateleira de metal e finalmente percebi como planear as medidas antes de cortar.\"",
    
    "\"Actually beginner-friendly.\"": "\"Realmente adequado para principiantes.\"",
    
    "\"What I liked most is that it doesn’t assume you already know everything. The explanations are practical, simple, and focused on helping you start without feeling overwhelmed.\"": 
    "\"O que mais gostei é que não assume que já sabe tudo. As explicações são práticas, simples e focadas em ajudá-lo a começar sem se sentir sobrecarregado.\"",
    
    "\"Helped me stop guessing.\"": "\"Ajudou-me a deixar de adivinhar.\"",
    
    "\"Before this, I was always watching random videos and trying to figure out the measurements by myself. The plans helped me avoid mistakes and feel more confident.\"": 
    "\"Antes disso, andava sempre a ver vídeos aleatórios e a tentar descobrir as medidas sozinho. Os planos ajudaram-me a evitar erros e a sentir-me mais confiante.\"",
    
    "\"Simple, practical, and useful.\"": "\"Simples, prático e útil.\"",
    
    "\"The project ideas are realistic and not overwhelming. I used basic tools and completed my first small metal project in a weekend.\"": 
    "\"As ideias de projetos são realistas e não são excessivas. Usei ferramentas básicas e concluí o meu primeiro pequeno projeto de metal num fim de semana.\"",
    
    "Metalworking Library": "Biblioteca de Metalurgia",
    "© All rights reserved.": "© Todos os direitos reservados.",
    "Contact Us": "Contacte-nos",
    "<title>Woodworking – Prime Library</title>": "<title>Projetos de Metalurgia</title>",
    "<title>Metalworking Projects</title>": "<title>Projetos de Metalurgia</title>",
    
    # Extra translations
    "MetalWorking for Beginners + 2 BONUSES": "Metalurgia para Principiantes + 2 BÓNUS",
    "https://prime-library.com/woodworking/": "https://prime-library.com/metalurgia/",
    "woodworking%2F": "metalurgia%2F",
    
    # Hotmart checkout link update
    "https://pay.hotmart.com/P105840222D?checkoutMode=10": "https://pay.hotmart.com/I106092310I?checkoutMode=10"
}

# 6. Replace content
for eng, trans in translations.items():
    content = content.replace(eng, trans)

# 7. Replace language tag
content = content.replace('<html lang="en-US">', '<html lang="pt-PT">')

# 8. Save back to mw-pt/index.html
with open(index_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Translation applied and saved in mw-pt/index.html successfully!")
