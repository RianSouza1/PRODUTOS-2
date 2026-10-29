/**
 * APP CORE ENGINE
 * MITGLIEDERBEREICH (Mobile First & Senior Friendly)
 * Zeichenkollektion für Anfänger — Deutsch
 */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------------------
  // 0. RIFERIMENTI DOM
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");


  // ----------------------------------------------------------------------
  // 1. INIZIALIZZAZIONE
  // ----------------------------------------------------------------------
  document.getElementById('enter-members').addEventListener('click', () => {
    const overlay = document.getElementById('pre-page');
    overlay.style.opacity = '0';
    if(!['#buecher','#videos','#hilfe'].includes(window.location.hash)) window.location.hash = 'buecher';
    setTimeout(() => { overlay.hidden = true; rootEl.querySelector('h1')?.focus(); }, 600);
  });
  initGlobalConfig();
  handleRouting();

  window.addEventListener("hashchange", handleRouting);

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Zeichenkollektion für Anfänger";
    }
  }

  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. ROUTING SPA
  // ----------------------------------------------------------------------
  function handleRouting() {
    window.DRAW_DEMOS.pause();
    let currentHash = window.location.hash || "#home";
    const aliases = { '#books':'#buecher', '#videos':'#videos', '#video':'#videos', '#help':'#hilfe' };
    if(aliases[currentHash]) { currentHash=aliases[currentHash]; history.replaceState(null,'',currentHash); }
    if(['#buecher','#videos','#hilfe'].includes(currentHash)) document.getElementById('pre-page').hidden=true;

    rootEl.innerHTML = "";
    updateBottomNavBar(currentHash);
    togglePersistentElements(currentHash);

    switch (currentHash) {
      case "#home":
        renderHome();
        break;
      case "#buecher":
        renderLivros();
        break;
      case "#videos":
        renderVideos();
        break;
      case "#program":
        renderOutrosProdutos();
        break;
      case "#hilfe":
        renderContato();
        break;
      default:
        renderHome();
        break;
    }

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#cbd5e1; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
          &copy; 2026 ${APP_DATA.config.brandName || "Zeichenkollektion für Anfänger"}. Alle Rechte vorbehalten.
       </footer>
    `);

    renderIcons();
    document.querySelector('.main-content').scrollTo(0, 0);
  }

  function updateBottomNavBar(hash) {
    tabItems.forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("href") === hash) {
        tab.classList.add("active");
      }
    });
  }

  function togglePersistentElements(hash) {
    if (hash === "#home") {
      bottomNav.classList.add('hidden-on-home');
    } else {
      bottomNav.classList.remove('hidden-on-home');
    }

    const fBtn = floatingHelp.querySelector('.floating-help-btn');
    if (fBtn) {
      if (hash === "#hilfe" || hash === "#home") {
        fBtn.classList.add('hidden');
      } else {
        fBtn.classList.remove('hidden');
      }
    }
  }

  // ----------------------------------------------------------------------
  // 3. VISTE (VIEWS)
  // ----------------------------------------------------------------------

  // VISTA: HOME
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Willkommen in deinem Mitgliederbereich!</h1><p>Welche Materialien möchtest du heute nutzen?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#buecher" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Bücher und Praxishefte</div>
                 <div class="home-block-subtitle">Zeichenanleitungen und Übungen als PDF</div>
              </div>
            </a>

            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Videos</div>
                 <div class="home-block-subtitle">Kurze Vorführungen von Zeichentechniken</div>
              </div>
            </a>
            
            <a href="#hilfe" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Hilfe</div>
                 <div class="home-block-subtitle">Hilfe beim Zugang und zu deinen Materialien</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  // VISTA: VIDEOS
  function renderVideos() {
    window.DRAW_DEMOS.render();
  }

  // VISTA: LIBRI & MATERIALI (BOOKS)
  function renderLivros() {
    const featuredBooks = APP_DATA.books.slice(0, 3);
    const compactBooks = APP_DATA.books.slice(3);

    const featuredHTML = featuredBooks.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:var(--primary); width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'ZUSATZMATERIAL'}</span>
               <span class="premium-format">PDF • Material zum Herunterladen</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF; font-weight: 700;">
                     <i data-lucide="book-open"></i> PDF öffnen
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> PDF herunterladen
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title" style="margin-top: 2rem;">Praxishefte und Schritt-für-Schritt-Übungen</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div class="compact-book-info" style="display:flex; flex-direction:column; gap:4px;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}; align-self: flex-start;">${bk.badgeText || 'Praxisheft'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="compact-action-btn btn-read" title="PDF öffnen" aria-label="PDF öffnen: ${bk.title}">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="PDF herunterladen" aria-label="PDF herunterladen: ${bk.title}">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/draw_IMG1_de.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Zeichenkollektion für Anfänger";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Deine Zeichenmaterialien</h1><p>Öffne deine Bücher und Praxishefte unten oder lade sie auf dein Gerät herunter.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Zurzeit sind keine Materialien verfügbar.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // VISTA: ALTRI PRODOTTI
  function renderOutrosProdutos() {
    const prodsHTML = APP_DATA.otherProducts.map(prod => {
      const featuresHTML = prod.features
        ? `<ul class="premium-checklist">
      ${prod.features.map(f => `<li><i data-lucide="check-square" style="color:var(--primary); width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'ZUSATZMATERIAL'}</span>
               <span class="premium-format">Online-Zugang</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" rel="noopener" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Mehr erfahren'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Weitere Kurse</h1><p>Entdecke weitere kreative Kurse und Materialien.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Weitere Materialien folgen bald!</p>'}
          </div>
        </div>
      `;
  }

  // VISTA: CONTATTO / SUPPORTO
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Hilfe zum Mitgliederbereich</h1><p>Brauchst du Hilfe beim Zugang oder beim Herunterladen deiner Materialien?</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Eine Nachricht senden</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Kopiere die E-Mail-Adresse unten oder klicke auf die Schaltfläche, um uns deine Frage zu schicken. Wir antworten so bald wie möglich.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span dir="ltr" style="font-size: 1.1rem; font-weight: 700; color:var(--text-dark); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
             <a href="${mountMailTo()}" class="premium-btn support-email-button"><i data-lucide="mail"></i>Hilfe per E-Mail</a>
          </div>
        </div>
      `;
  }

});
