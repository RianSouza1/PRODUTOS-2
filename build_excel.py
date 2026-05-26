# -*- coding: utf-8 -*-
import os
import re

template_path = r'c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\Pagina Exemplo\index.html'
with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

# Shared fixes
template = template.replace('Biblioteca Joseph', 'Atlas Library')
template = template.replace('Compradora verificada', 'Verified Buyer')
template = template.replace('Comprador verificado', 'Verified Buyer')
template = template.replace('Compradores verificados', 'Verified Buyer')
template = template.replace('images/senior_w1.webp', 'images/1-1.jpg')
template = template.replace('images/senior_m1.webp', 'images/2-1.jpg')
template = template.replace('images/senior_couple.webp', 'images/3-1.jpg')
template = template.replace('images/senior_w2.webp', 'images/4-1.jpg')

# Testimonial avatar alt text replacements
template = template.replace('alt="Linda M."', 'alt="Michael B."')
template = template.replace('alt="Robert T."', 'alt="Jessica P."')
template = template.replace('alt="Carol &amp; Jim S."', 'alt="David &amp; Lisa"')
template = template.replace('alt="Susan K."', 'alt="Robert W."')

# ----------------- EXCEL BUILD -----------------
ex = template

# Image replacements
ex = ex.replace('alt="Tai Chi for Seniors Program" class="hero-main-image" src="images/img1.webp"', 'alt="Excel Mastery Bundle" class="hero-main-image" src="images/kidney-1.jpg"')
ex = ex.replace('class="b1g3-image" src="images/img2.webp"', 'class="b1g3-image" src="images/3books-1-1024x587.jpg"')
ex = ex.replace('src="images/img-4.webp"', 'src="images/IMAGE-2.jpg"')
ex = ex.replace('class="bundle-image" src="images/img1.webp"', 'class="bundle-image" src="images/kidney-2.jpg"')

# Remove testimonial avatars completely
ex = ex.replace('<img alt="Michael B." class="testimonial-avatar" src="images/1-1.jpg"/>', '')
ex = ex.replace('<img alt="Jessica P." class="testimonial-avatar" src="images/2-1.jpg"/>', '')
ex = ex.replace('<img alt="David &amp; Lisa" class="testimonial-avatar" src="images/3-1.jpg"/>', '')
ex = ex.replace('<img alt="Robert W." class="testimonial-avatar" src="images/4-1.jpg"/>', '')

# Lang and Footer translations
ex = ex.replace('<html lang="es">', '<html lang="en">')
ex = ex.replace('style="background: #1e293b;', 'style="background: #030712;')
ex = ex.replace('© Todos los derechos reservados.', '© All rights reserved.')
ex = ex.replace('Contáctenos', 'Contact us')

ex = ex.replace('Tai Chi para Mayores - Práctica Diaria Fácil', 'Excel Mastery - Learn Excel in Days')
ex = ex.replace('⏰ HORAS FINALES: EL 70% DE DESCUENTO TERMINA EN', '⏰ FINAL HOURS: 70% OFF ENDS IN')
ex = ex.replace('¿Tiene miedo de perder su independencia, equilibrio o movilidad a medida que envejece?', 'Still wasting hours on Excel tasks that should take minutes?')
ex = ex.replace('No está solo, y la verdad es que mejorar la estabilidad, la flexibilidad y la confianza puede ser una gran ayuda. <strong>simple</strong>… cuando sigue la rutina correcta paso a paso diseñada específicamente para personas mayores.', 'You are not alone. Many professionals struggle with Excel... but once you learn the right formulas, shortcuts, and features, what used to take hours can be done in seconds.')
ex = ex.replace('Tai Chi para Mayores + 2 BONUS', 'Excel Mastery + 2 Bonuses')
ex = ex.replace('Ahorra 70%', 'You Save 70%')
ex = ex.replace('COMPRAR AHORA', 'BUY NOW')
ex = ex.replace('https://pay.hotmart.com/S105001730W?checkoutMode=10', 'https://atlas-library.com/?add-to-cart=219328')
ex = ex.replace('Pago 100% seguro • Acceso digital instantáneo', '100% secure payment • Instant digital access')
ex = ex.replace('COMPRA 1 OBTÉN 3', 'BUY 1 GET 3')
ex = ex.replace('Solo por tiempo limitado, esto es lo que obtendrá:', 'For a limited time only, here is what you get:')
ex = ex.replace('¿Por qué ofrecemos esta increíble oferta?', 'Why does this deal sound too good to be true?')

ex = re.sub(r'<div style="max-width: 750px; margin: 0 auto; line-height: 1\.8;">\s*<p>Es raro encontrar.*?</div>', """<div style="max-width: 750px; margin: 0 auto; line-height: 1.8; text-align: center;"><p>We get it - you don't see three complete guides for the price of one every day.</p><p>By cutting out publishers and middlemen, we can offer this entire package directly to you digitally.</p><p>This allows us to drop the price from $59.70 to just $19.90 during this special sale.</p><p class="bold" style="color: var(--red-alert);">When the event ends, prices go back to normal.</p></div>""", ex, flags=re.DOTALL)

ex = ex.replace('"¿No es demasiado difícil de aprender o demasiado lento para que funcione?"', 'What if the only thing standing between you and a promotion is learning Excel properly?')
ex = re.sub(r'<div style="max-width: 750px; margin: 0 auto; line-height: 1\.8;">\s*<p>Muchas personas mayores creen.*?</div>', '<div style="max-width: 750px; margin: 0 auto; line-height: 1.8; text-align: center;"><p>Because the truth is: <strong>You don’t need to be a math genius or a programmer.</strong></p><p>All you need is a clear, beginner-friendly roadmap.</p><p>This bundle takes you from absolute beginner to advanced power user, step by step.</p></div>', ex, flags=re.DOTALL)

ex = ex.replace('📚 Esto es exactamente lo que obtiene dentro del paquete Tai Chi para personas mayores:', '📚 Here is exactly what you get inside the Excel bundle:')
ex = re.sub(r'<ul class="benefits-list">.*?</ul>', '''<ul class="benefits-list">
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Excel from Zero to Pro:</strong> Complete guide to mastering the fundamentals</span></li>
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Advanced Formulas & Functions:</strong> VLOOKUP, INDEX/MATCH, and more</span></li>
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Data Visualization:</strong> Create stunning charts and dashboards</span></li>
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Pivot Tables:</strong> Analyze huge datasets in seconds</span></li>
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Bonus 1: ChatGPT for Excel Guide</strong></span></li>
<li><i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i><span><strong>Bonus 2: 50+ Ready-to-use Templates</strong></span></li>
</ul>''', ex, flags=re.DOTALL)

ex = ex.replace('70% DE DESCUENTO', '70% OFF')
ex = ex.replace('TERMINA HOY', 'ENDS TODAY')

ex = re.sub(r'<div style="max-width: 800px; margin: 0 auto; line-height: 1\.8;">\s*<p>Salvaguardar tu movilidad.*?</div>\s*</div>', '''<div style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
<p>That means you’re getting <strong>3 complete Excel books + bonuses</strong> for less than the cost of a single online course.</p>
<p>Instant direct digital download (After you complete the payment you will immediately have the option to download the product(s) from the final purchase page and you will also receive a download email shortly after).</p>
<div class="conversion-highlight-box" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.02)); border: 2px dashed var(--accent-gold); border-radius: 12px; padding: 2rem 1.5rem; margin: 3rem auto 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
<h3 class="font-heading bold italic" style="font-size: 2.2rem; margin-bottom: 0.8rem; color: var(--accent-gold);">Why wait another day?</h3>
<p style="font-size: 1.3rem; line-height: 1.6; margin-bottom: 1.5rem; color: #f8fafc; font-weight: 600;"><span style="font-size: 1.4rem;">👉</span> Stop wasting time doing things manually.</p>
<a class="bold italic" href="https://atlas-library.com/?add-to-cart=219328" style="font-size: 1.5rem; color: #ffffff; background: var(--red-alert); display: inline-block; padding: 12px 24px; border-radius: 6px; box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4); text-decoration: none; width: 100%; max-width: 380px;">Grab your 70% OFF bundle today!</a>
</div>
</div>''', ex, flags=re.DOTALL)
ex = ex.replace('Esto es lo que dicen nuestros clientes:', 'Here is what our customers say:')

# Testimonials EXCEL
ex = ex.replace('Carmen G.', 'Michael B.')
ex = ex.replace('"¡Ojalá hubiera encontrado esto hace años!"', '"Transformed how I work."')
ex = ex.replace('"Antes de comenzar este programa, tenía dificultades para levantarme de la cama debido a la rigidez. Las rutinas diarias de 10 minutos son muy suaves pero increíblemente efectivas. ¡Finalmente siento que recuperé mi movilidad y posso jugar con mis nietos sin preocuparme por una caída!"', '"I used to spend 3 hours every Friday formatting reports. With the shortcuts I learned here, I do it in 15 minutes. Best investment ever."')
ex = ex.replace('"Antes de comenzar este programa, tenía dificultades para levantarme de la cama debido a la rigidez. Las rutinas diarias de 10 minutos son muy suaves pero increíblemente efectivas. ¡Finalmente siento que recuperé mi movilidad y puedo jugar con mis nietos sin preocuparme por una caída!"', '"I used to spend 3 hours every Friday formatting reports. With the shortcuts I learned here, I do it in 15 minutes. Best investment ever."')

ex = ex.replace('Carlos M.', 'Jessica P.')
ex = ex.replace('"La mejor inversión para mi salud."', '"So easy to follow."')
ex = ex.replace('"Al principio era escéptico porque nunca entendí completamente el Tai Chi, pero los vídeos paso a paso y los libros son sorprendentemente claros. El alivio en mis articulaciones es muy notable después de sólo 3 semanas."', '"I was always intimidated by Excel, but these guides break it down so simply. The ChatGPT bonus is mind-blowing!"')

ex = ex.replace('Ana y Manuel F.', 'David & Lisa')
ex = ex.replace('"Lo hacemos juntos todas las mañanas".', '"Got the promotion!"')
ex = ex.replace('"Mi esposo y yo comenzamos a seguir el paquete de Tai Chi para personas mayores todos los días. Los ejercicios de equilibrio son excelentes y ahora nos sentimos mucho más seguros al caminar al aire libre. ¡Se lo recomiendo a cualquiera!"', '"My boss noticed my new skills immediately. I owe my recent raise to the Pivot Tables and VLOOKUP sections."')

ex = ex.replace('Laura S.', 'Robert W.')
ex = ex.replace('"Fácil de seguir y realmente te cambia la vida".', '"Amazing templates!"')
ex = ex.replace('"¡Los libros están bellamente ilustrados! No pensé que leer un libro sobre el movimento funcionaría, pero el desglose es muy simple. Yo también he perdido un poco de peso, la diferencia de energía es enorme".', '"The 50+ ready-to-use templates saved my business. I use the inventory tracker and financial dashboard every single day."')
ex = ex.replace('"¡Los libros están bellamente ilustrados! No pensé que leer un libro sobre el movimiento funcionaría, pero el desglose es muy simple. Yo también he perdido un poco de peso, la diferencia de energía es enorme".', '"The 50+ ready-to-use templates saved my business. I use the inventory tracker and financial dashboard every single day."')

script_replacement = '''        function startTimer() {
            const hoursEl = document.getElementById("timer-hours");
            const minutesEl = document.getElementById("timer-minutes");
            const secondsEl = document.getElementById("timer-seconds");
            
            if (!hoursEl || !minutesEl || !secondsEl) return;
            
            let totalSeconds = 10 * 60; // 10 minutes
            let savedTime = localStorage.getItem('excel_timer');
            if (savedTime) {
                let parsed = parseInt(savedTime, 10);
                if (!isNaN(parsed) && parsed > 0 && parsed <= 600) {
                    totalSeconds = parsed;
                }
            }
            
            function updateDisplay() {
                if (totalSeconds <= 0) totalSeconds = 10 * 60;
                
                let h = Math.floor(totalSeconds / 3600);
                let m = Math.floor((totalSeconds % 3600) / 60);
                let s = totalSeconds % 60;
                
                hoursEl.innerText = String(h).padStart(2, '0');
                minutesEl.innerText = String(m).padStart(2, '0');
                secondsEl.innerText = String(s).padStart(2, '0');
            }
            
            updateDisplay();
            
            const timerInterval = setInterval(() => {
                totalSeconds--;
                localStorage.setItem('excel_timer', totalSeconds);
                updateDisplay();
            }, 1000);
        }'''
ex = re.sub(r'function startTimer\(\) \{.*?\n        \}', script_replacement, ex, flags=re.DOTALL)

with open(r'c:\Users\rian9\Downloads\PRODUTOS 2\PRODUTOS-2\excel\index.html', 'w', encoding='utf-8') as f:
    f.write(ex)
print('Generated excel/index.html')
