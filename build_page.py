import os

css_content = """@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

:root {
    --primary: #4c0519; /* Rose-900 / Deep Wine */
    --bg-dark: #2a040e;
    --bg-darker: #170207;
    --red-alert: #ef4444; 
    --red-alert-dark: #b91c1c;
    --text-main: #f8fafc; 
    --text-muted: #cbd5e1;
    --bg-light: #ffffff; 
    --accent-gold: #f59e0b;
    --accent-gold-hover: #d97706;
    --green-check: #22c55e;
    --dark: #0f172a;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif; 
    color: var(--text-main);
    background-color: var(--bg-dark);
    line-height: 1.65;
    font-size: 1.15rem; 
    -webkit-font-smoothing: antialiased;
}

.container {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding: 0 20px;
}

.text-center { text-align: center; }
.text-primary { color: var(--text-main); }
.font-heading { font-family: 'Montserrat', sans-serif; }
.bold { font-weight: 700; }
.italic { font-style: italic; }
.mt-1 { margin-top: 1.5rem; }
.mt-2 { margin-top: 2.5rem; }
.mt-3 { margin-top: 4rem; }
.mb-1 { margin-bottom: 1.5rem; }
.mb-2 { margin-bottom: 2.5rem; }
.hidden { display: none !important; }

/* ================== STICKY COUNTDOWN ================== */
.top-warning-bar {
    background-color: var(--red-alert);
    color: #fff;
    text-align: center;
    padding: 14px 20px;
    font-size: 1.15rem;
    font-weight: 800;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    letter-spacing: 0.5px;
}

.warning-text {
    margin-bottom: 6px;
    display: block;
}

.countdown-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.time-unit {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.time-label {
    font-size: 0.75rem;
    margin-top: 4px;
    font-weight: 600;
    text-transform: lowercase;
}

.time-card {
    background: #fff;
    color: #000;
    font-weight: 900;
    font-size: 1.4rem;
    padding: 4px 10px;
    border-radius: 4px;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15);
}

.time-sep {
    font-weight: bold;
    color: #fff;
    font-size: 1.4rem;
    margin-top: -18px; 
}

/* ================== HERO / HEADLINE ================== */
.hero-section {
    background-color: var(--bg-dark);
    padding: 4rem 0 3rem;
}

.main-headline {
    font-size: 2.8rem;
    line-height: 1.25;
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-weight: 800;
}

.sub-headline {
    font-size: 1.25rem;
    color: #cbd5e1;
    max-width: 800px;
    margin: 0 auto 2.5rem;
    font-weight: 400;
}

.hero-main-image {
    width: 100%;
    max-width: 800px;
    margin: 0 auto 2.5rem;
    display: block;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
}

/* ================== BUY 1 GET 3 ================== */
.b1g3-title {
    font-size: 2.3rem;
    font-weight: 900;
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-family: 'Inter', sans-serif;
}

.b1g3-subtitle {
    font-size: 1.25rem;
    color: #f8fafc;
    margin-bottom: 2rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.b1g3-image-container {
    max-width: 800px;
    margin: 0 auto;
}

.b1g3-image {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.b1g3-prices {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 10%;
}

.b1g3-price-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.b1g3-price-strikethrough {
    color: var(--accent-gold);
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 2px;
}

.b1g3-price-final {
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 800;
}

@media (max-width: 768px) {
    .b1g3-title { font-size: 1.9rem; }
    .b1g3-subtitle { font-size: 1.15rem; margin-bottom: 1.5rem; }
    .b1g3-prices { padding: 0 4%; }
    .b1g3-price-strikethrough { font-size: 1.05rem; }
    .b1g3-price-final { font-size: 1.35rem; }
}

/* ================== CALL TO ACTION BOX ================== */
.cta-box {
    background: transparent;
    padding: 1.5rem 0;
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
}

.cta-box h3 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-weight: 800;
}

.star-rating {
    color: var(--accent-gold);
    font-size: 1.6rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 4px;
}

.price-container {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.price-container .current-price {
    font-size: 4rem;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
}

.price-container .savings {
    font-size: 1.25rem;
    color: #94a3b8;
    margin-top: 0.5rem;
}

.price-container .savings s {
    color: var(--red-alert);
}

.price-container .savings strong {
    color: #ffffff;
    font-weight: 700;
    margin-left: 8px;
}

.btn-buy-now {
    display: block;
    width: 100%;
    background-color: var(--accent-gold);
    color: #000000;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.25rem 2rem;
    border-radius: 50px;
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4);
    transition: all 0.2s ease;
    border: 3px solid #b45309;
    max-width: 450px;
    margin: 0 auto;
}

.btn-buy-now:hover {
    background-color: #fbbf24;
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(245, 158, 11, 0.6);
}

.guarantee-text {
    font-size: 0.95rem;
    color: #94a3b8;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

/* ================== DEAL INFO SECTIONS ================== */
.text-section {
    padding: 4rem 0;
    background-color: var(--bg-dark);
}

.text-section h2 {
    color: #ffffff;
}

.text-section p {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: #cbd5e1;
}

.divider {
    height: 1px;
    background: #4c0519;
    max-width: 60%;
    margin: 3rem auto;
}

/* ================== HTML BENEFITS CHECKLIST ================== */
.benefits-section {
    padding: 4rem 0;
    background-color: var(--bg-dark);
}

.benefits-list {
    list-style: none;
    max-width: 750px;
    margin: 2rem auto;
}

.benefits-list li {
    font-size: 1.2rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid #4c0519;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    color: #f8fafc;
}

.benefits-list li:last-child {
    border-bottom: none;
}

.benefits-list li i {
    color: var(--green-check);
    font-size: 1.6rem;
    margin-top: 2px;
    flex-shrink: 0;
}

/* ================== BUNDLE SECTION ================== */
.bundle-section {
    padding: 4rem 0;
    background-color: var(--bg-dark);
    color: #fff;
    text-align: center;
}

.bundle-section h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: #fff;
}

.bundle-image {
    width: 100%;
    max-width: 900px;
    margin: 2rem auto;
    display: block;
    border-radius: 8px;
}

/* ================== TESTIMONIALS ================== */
.testimonials-section {
    padding: 4rem 0;
    background: var(--bg-dark);
}

.testimonials-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 650px;
    margin: 0 auto 2rem;
}

.testimonial-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
    color: var(--dark);
    text-align: left;
}

.testimonial-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.testimonial-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
}

.testimonial-author-info {
    display: flex;
    flex-direction: column;
}

.testimonial-name {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--dark);
}

.verified-buyer {
    font-size: 0.85rem;
    color: var(--green-check);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
}

.testimonial-stars {
    color: var(--accent-gold);
    display: flex;
    margin-bottom: 0.75rem;
}

.testimonial-title {
    font-weight: 800;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
}

.testimonial-text {
    font-size: 1.1rem;
    color: #475569;
    line-height: 1.6;
}

/* ================== EXTRA SALES SECTIONS ================== */
.huge-offer-banner {
    background-color: var(--bg-dark); 
    padding: 3rem 1rem;
    text-align: center;
    border-top: none; 
    border-bottom: none;
}

.huge-offer-title {
    font-size: 9rem;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 0.5rem;
    letter-spacing: -2px;
}

.huge-offer-subtitle {
    font-size: 4.5rem;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    letter-spacing: -1px;
}

/* ================== RESPONSIVE ================== */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    .hero-section, .text-section, .benefits-section, .bundle-section, .testimonials-section {
        padding: 0.8rem 0 !important;
    }

    .divider {
        margin: 1.5rem auto !important;
    }

    .mt-1 { margin-top: 1rem !important; }
    .mt-2 { margin-top: 1.5rem !important; }
    .mt-3 { margin-top: 2rem !important; }
    .mb-1 { margin-bottom: 1rem !important; }
    .mb-2 { margin-bottom: 1.5rem !important; }
    
    .top-warning-bar {
        padding: 10px;
    }
    .warning-text {
        font-size: 1.1rem;
        margin-bottom: 4px;
    }
    .time-card {
        font-size: 1.1rem;
        padding: 4px 10px;
    }
    .time-sep {
        font-size: 1.1rem;
        margin-top: -14px;
    }
    .time-label {
        font-size: 0.65rem;
    }

    .main-headline {
        font-size: 2.1rem;
        line-height: 1.25;
        margin-bottom: 1.2rem;
    }
    
    .sub-headline {
        font-size: 1.1rem;
    }
    
    .price-container .current-price {
        font-size: 3.2rem;
    }
    
    .btn-buy-now {
        font-size: 1.4rem;
        padding: 1.2rem 1rem;
    }
    
    .text-section p, .benefits-list li {
        font-size: 1.15rem;
    }
    
    .bundle-section h2 {
        font-size: 2.2rem;
    }
    
    .testimonial-card {
        padding: 1.5rem;
    }
    
    .huge-offer-banner {
        padding: 1rem 1rem;
    }
    
    .huge-offer-title {
        font-size: 4rem;
    }
    
    .huge-offer-subtitle {
        font-size: 1.8rem;
    }
}
"""

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Systematic Theology - Atlas Library</title>
<link href="data:," rel="icon"/>
<link href="style.css" rel="stylesheet"/>
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
<!-- UTMify Tracker -->
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-subids
  async
  defer
></script>
<!-- UTMify Pixel -->
<script>
  window.pixelId = "69c734f2a7f3af58104edc35";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
</head>
<body>
<!-- STICKY COUNTDOWN BAR -->
<div class="top-warning-bar">
<div class="warning-text">⏰ FINAL HOURS: 70% OFF ENDS IN</div>
<div class="countdown-box">
<div class="time-unit">
<span class="time-card" id="timer-hours">01</span>
<span class="time-label">hh</span>
</div>
<span class="time-sep">:</span>
<div class="time-unit">
<span class="time-card" id="timer-minutes">47</span>
<span class="time-label">mm</span>
</div>
<span class="time-sep">:</span>
<div class="time-unit">
<span class="time-card" id="timer-seconds">02</span>
<span class="time-label">ss</span>
</div>
</div>
</div>

<!-- MAIN HERO SECTION -->
<section class="hero-section text-center">
<div class="container">
<h1 class="main-headline font-heading bold italic text-primary">
    Are you hungry to understand your faith more deeply… but overwhelmed by where to start?
</h1>
<p class="sub-headline">
    What if you could grow in biblical knowledge, strengthen your confidence, and guide your family spiritually — <strong>in just a few minutes a week?</strong>
</p>
<!-- MAIN IMAGE -->
<img alt="Systematic Theology Bundle" class="hero-main-image" src="https://atlas-library.com/wp-content/uploads/2026/03/product-img-1.jpg"/>
<!-- BUY/CTA BOX -->
<div class="cta-box">
<div class="star-rating">
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
</div>
<h3>52 Weeks of Systematic Theology Bundle</h3>
<div class="price-container">
<div class="current-price">$19.90</div>
<div class="savings">
<s>$59.70</s> <strong>You Save 70%</strong>
</div>
</div>
<a class="btn-buy-now" href="https://atlas-library.com/?add-to-cart=207170">
    BUY NOW 
</a>
<div class="guarantee-text">
<i data-lucide="shield-check" style="color: #16a34a; width: 16px;"></i>
    100% Secure Payment • Instant Digital Access
</div>
</div>
</div>
</section>

<!-- BUY 1 GET 3 SECTION -->
<section class="b1g3-section text-center" style="padding: 4rem 0 0; background-color: var(--bg-darker);">
<div class="container">
<h1 class="b1g3-title" style="letter-spacing: -0.5px;">BUY 1 GET 3</h1>
<p class="b1g3-subtitle">
    For a limited time only, here is what you'll get:
</p>
<div class="b1g3-image-container" style="max-width: 900px;">
<div class="b1g3-prices" style="justify-content: center; padding: 0;">
<img alt="Buy 1 Get 3 Offer" class="b1g3-image" src="https://atlas-library.com/wp-content/uploads/2026/03/3books-1024x587.jpg" />
</div>
</div>
<div class="divider" style="margin-top: 3.5rem; margin-bottom: 0;"></div>
</div>
</section>

<!-- CONTENT SECTIONS -->
<section class="text-section">
<div class="container">
<div class="text-center">
<h2 class="font-heading bold italic" style="font-size: 2.4rem; margin-bottom: 2rem;">Why does this offer sound too good to be true?</h2>
</div>
<div style="max-width: 750px; margin: 0 auto; line-height: 1.8;">
<p>We get it — three bestselling books for the price of one isn’t something you see every day.</p>
<p>Here’s the simple truth: once a year, around this season, we run a special Reader Event to thank our audience and make our most popular collections easier to access.</p>
<p>Because we manage everything directly — from printing to fulfillment — we can skip retail markups and offer the entire bundle (normally $59.70) for only $19.90.</p>
<p class="bold" style="color: var(--red-alert);">When the event ends, prices return to normal.</p>
</div>
<div class="divider"></div>
<div class="text-center">
<h2 class="font-heading bold italic text-primary" style="font-size: 2.2rem; margin-bottom: 2rem;">Ready to Finally Understand What You Believe — and Why It Matters?</h2>
</div>
<div style="max-width: 750px; margin: 0 auto; line-height: 1.8;">
<p>So many Christians want to go deeper. They want clarity. Confidence. Answers.</p>
<p>But systematic theology feels intimidating. Academic. Complicated.</p>
<p class="bold">✅ That’s exactly why the <strong>52 Weeks of Systematic Theology by Daniel Begum</strong> was created.</p>
<p>This powerful 3-book bundle breaks down core Christian doctrine into clear, structured, weekly lessons — designed for adults, teens, and kids. <strong style="color:#ffffff;">No seminary degree required. No overwhelming jargon.</strong></p>
<p>Just truth explained simply, biblically, and practically.</p>
<p>Instead of confusion, you gain clarity.<br>
Instead of doubt, you gain confidence.<br>
Instead of surface-level faith, you build deep-rooted conviction.</p>
</div>

<div class="text-center" style="margin-top: 3rem;">
    <img alt="Interior Preview" src="https://atlas-library.com/wp-content/uploads/2026/03/IMAGE-1-scaled.jpg" style="width: 100%; max-width: 800px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
</div>
</div>
</section>

<!-- BENEFITS CHECKLIST SECTION -->
<section class="benefits-section" style="background-color: var(--bg-darker);">
<div class="container">
<h2 class="text-center font-heading bold italic" style="font-size: 2.2rem; margin-bottom: 2.5rem; color: #ffffff;">
    ⭐ What’s Included in This Bestselling 3-Book Bundle?
</h2>
<ul class="benefits-list">
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>52 Weeks of Systematic Theology – Workbook for Adults:</strong> A full-year guided journey exploring Christian doctrine, biblical foundations, reflection questions, and real-life application.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>52 Weeks of Systematic Theology – Practical for Teens:</strong> Age-appropriate theological teaching that speaks directly to the questions and struggles teens actually face.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>Systematic Theology for Kids (Ages 8–12):</strong> Engaging, simplified explanations that help children understand big biblical truths in ways they can grasp and remember.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>Structured 52-Week Format:</strong> Short, focused lessons designed to fit into busy schedules — just minutes a week.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>Clear, Bible-Based Teaching:</strong> Doctrines explained step-by-step, rooted in Scripture, without unnecessary complexity.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>Reflection & Discussion Prompts:</strong> Perfect for personal study, small groups, homeschool families, or family devotion time.</span>
</li>
<li>
<i color="#ffffff" data-lucide="check-circle" fill="#22c55e"></i>
<span><strong>Family-Aligned Learning Path:</strong> Parents and kids can learn the same theological themes at their own level — building unity and shared spiritual growth.</span>
</li>
</ul>

<div class="text-center" style="margin-top: 3rem;">
    <img alt="Books Stacked" src="https://atlas-library.com/wp-content/uploads/2026/03/IMAGE-2.jpeg" style="width: 100%; max-width: 800px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
</div>
</div>
</section>

<!-- 3. HUGE OFFER BANNER -->
<section class="huge-offer-banner">
<div class="container">
<div class="huge-offer-title">70% OFF</div>
<div class="huge-offer-subtitle">
    ENDS TODAY 
    <i data-lucide="corner-right-down" style="width: 48px; height: 48px; stroke-width: 3px;"></i>
</div>
</div>
</section>

<!-- BUNDLE / BOOKS SECTION & SECOND CTA -->
<section class="bundle-section" style="padding-top: 2rem;">
<div class="container">
<img alt="3 Books Bundle" class="bundle-image" src="https://atlas-library.com/wp-content/uploads/2026/03/product-img-2.jpg" style="width: 100%; max-width: 700px; margin: 0 auto; border-radius: 8px;"/>
<div class="cta-box" style="margin-top: 1rem; background: var(--bg-light); border-radius: 12px; padding: 2rem;">
<div class="star-rating">
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
<i data-lucide="star" fill="currentColor"></i>
</div>
<h3 style="color: var(--dark);">52 Weeks of Systematic Theology Bundle</h3>
<div class="price-container">
<div class="current-price" style="color: var(--primary);">$19.90</div>
<div class="savings" style="color: #64748b;">
<s>$59.70</s> <strong style="color: var(--dark);">You Save 70%</strong>
</div>
</div>
<a class="btn-buy-now" href="https://atlas-library.com/?add-to-cart=207170">
    BUY NOW 
</a>
</div>
</div>
</section>

<section class="text-section text-center">
<div class="container">
<div style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
<p style="font-size: 1.4rem; color: #ffffff; font-weight: bold;">If you’ve ever felt:</p>
<ul style="list-style: none; text-align: left; max-width: 500px; margin: 1rem auto 2rem; color: #cbd5e1; font-size: 1.25rem;">
    <li style="margin-bottom: 10px;">👉 Unsure how to explain your faith</li>
    <li style="margin-bottom: 10px;">👉 Frustrated by surface-level Bible studies</li>
    <li style="margin-bottom: 10px;">👉 Concerned your kids are growing up without solid foundations</li>
    <li style="margin-bottom: 10px;">👉 Spiritually stagnant and wanting more</li>
</ul>

<p><strong>This is your turning point.</strong></p>
<p>The 52 Weeks of Systematic Theology Workbook for Adults + 2 BONUSES doesn’t just give you information — it gives you structure, clarity, and momentum.</p>
<p>And right now, it’s available at <strong>70% OFF</strong>.</p>
<p>That means you can equip yourself and your family with a full year of guided theological growth for less than the price of a single dinner out. Instant direct digital download.</p>

<div class="conversion-highlight-box" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.02)); border: 2px dashed var(--accent-gold); border-radius: 12px; padding: 2rem 1.5rem; margin: 3rem auto 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
<h3 class="font-heading bold italic" style="font-size: 2.2rem; margin-bottom: 0.8rem; color: var(--accent-gold);">
    Why wait?
</h3>
<p style="font-size: 1.3rem; line-height: 1.6; margin-bottom: 1.5rem; color: #f8fafc; font-weight: 600;">
<span style="font-size: 1.4rem;">👉</span> You could keep saying "I’ll go deeper someday." Or you can start this week. Build confidence. Build understanding. Build a faith that lasts.
</p>
<a class="bold italic" href="https://atlas-library.com/?add-to-cart=207170" style="font-size: 1.4rem; color: #ffffff; background: var(--red-alert); display: inline-block; padding: 12px 24px; border-radius: 6px; box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4); text-decoration: none; width: 100%; max-width: 550px;">
    Claim your 70% discount today before this offer expires!
</a>
</div>
</div>

<div class="divider"></div>
<h2 class="font-serif bold italic mt-3 mb-2" style="font-size: 2.2rem; color: #ffffff;">Here's What People Are Saying About Us:</h2>

<div class="testimonials-grid">
<!-- Testimonial 1 -->
<div class="testimonial-card">
<div class="testimonial-header">
<div class="testimonial-avatar" style="background-color: #0f172a;">S</div>
<div class="testimonial-author-info">
<span class="testimonial-name">Sarah M.</span>
<span class="verified-buyer">
<i data-lucide="check-circle" style="width: 14px;"></i> Verified Buyer
</span>
</div>
</div>
<div class="testimonial-stars">
<i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i>
</div>
<div class="testimonial-title">"I used to feel so intimidated..."</div>
<div class="testimonial-text">"I used to feel so intimidated by theology, but this bundle broke it down beautifully. Our family discussions have never been richer! We finally understand what we believe."</div>
</div>
<!-- Testimonial 2 -->
<div class="testimonial-card">
<div class="testimonial-header">
<div class="testimonial-avatar" style="background-color: #4c0519;">D</div>
<div class="testimonial-author-info">
<span class="testimonial-name">David T.</span>
<span class="verified-buyer">
<i data-lucide="check-circle" style="width: 14px;"></i> Verified Buyer
</span>
</div>
</div>
<div class="testimonial-stars">
<i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i>
</div>
<div class="testimonial-title">"An absolute game-changer!"</div>
<div class="testimonial-text">"Finally, a resource that explains deep biblical truths without the seminary jargon. The kids' book is an absolute game-changer for our evening devotionals. Highly recommended!"</div>
</div>
<!-- Testimonial 3 -->
<div class="testimonial-card">
<div class="testimonial-header">
<div class="testimonial-avatar" style="background-color: #047857;">M</div>
<div class="testimonial-author-info">
<span class="testimonial-name">Michael & Emily R.</span>
<span class="verified-buyer">
<i data-lucide="check-circle" style="width: 14px;"></i> Verified Buyers
</span>
</div>
</div>
<div class="testimonial-stars">
<i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i>
</div>
<div class="testimonial-title">"Brilliant alignment."</div>
<div class="testimonial-text">"We’ve been looking for something we could study together as a family. The fact that it aligns the adult, teen, and kids' lessons is brilliant. We study the same topics at our own levels."</div>
</div>
<!-- Testimonial 4 -->
<div class="testimonial-card">
<div class="testimonial-header">
<div class="testimonial-avatar" style="background-color: #b45309;">J</div>
<div class="testimonial-author-info">
<span class="testimonial-name">Jessica L.</span>
<span class="verified-buyer">
<i data-lucide="check-circle" style="width: 14px;"></i> Verified Buyer
</span>
</div>
</div>
<div class="testimonial-stars">
<i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i><i data-lucide="star" fill="currentColor"></i>
</div>
<div class="testimonial-title">"Truly life-changing."</div>
<div class="testimonial-text">"I've grown more in my faith in the past few weeks than I have in years. Highly recommend to anyone wanting to truly understand what they believe and build a solid foundation."</div>
</div>
</div>
</div>
</section>

<!-- FOOTER -->
<footer style="background: #1e293b; color: #94a3b8; text-align: center; padding: 2.5rem 1rem; font-size: 0.9rem;">
<div class="container">
<h4 class="font-serif bold mb-1" style="color: #cbd5e1; font-size: 1.2rem;">Atlas Library</h4>
<p>© All rights reserved.</p>
<p style="margin-top: 1rem;">
<a href="mailto:contact@atlas-library.com" style="color: #cbd5e1; text-decoration: none;">Contact Us</a>
</p>
</div>
</footer>

<!-- Initialize Lucide Icons & Countdown -->
<script>
    lucide.createIcons();
    
    // Countdown Timer Logic
    function startTimer() {
        const hoursEl = document.getElementById("timer-hours");
        const minutesEl = document.getElementById("timer-minutes");
        const secondsEl = document.getElementById("timer-seconds");
        
        if (!hoursEl || !minutesEl || !secondsEl) return;
        
        let hours = parseInt(hoursEl.innerText, 10);
        let minutes = parseInt(minutesEl.innerText, 10);
        let seconds = parseInt(secondsEl.innerText, 10);
        
        let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        
        const timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                return;
            }
            
            totalSeconds--;
            
            let h = Math.floor(totalSeconds / 3600);
            let m = Math.floor((totalSeconds % 3600) / 60);
            let s = totalSeconds % 60;
            
            hoursEl.innerText = String(h).padStart(2, '0');
            minutesEl.innerText = String(m).padStart(2, '0');
            secondsEl.innerText = String(s).padStart(2, '0');
        }, 1000);
    }
    
    startTimer();
</script>
</body>
</html>
"""

base_dir = "/Users/riansouza/Downloads/PRODUTOS 2/systematic-theology"
with open(os.path.join(base_dir, "style.css"), "w", encoding="utf-8") as f:
    f.write(css_content)

with open(os.path.join(base_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Page updated with new layout, texts, urgency section, countdown, and custom styling.")
