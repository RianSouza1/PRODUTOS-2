/**
 * APP CORE ENGINE
 * MITGLIEDERBEREICH (Mobile First & Senior Friendly)
 * Stuhlübungen für Senioren — Deutsch
 */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------------------
  // 0. DOM-REFERENTIES & STATE
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");



  // ----------------------------------------------------------------------
  // 1. BASIS INITIALISATIE
  // ----------------------------------------------------------------------
  document.getElementById('enter-members').addEventListener('click', () => {
    const overlay = document.getElementById('pre-page');
    overlay.style.opacity = '0';
    if (!['#buecher', '#videos', '#hilfe', '#programme'].includes(window.location.hash)) window.location.hash = 'buecher';
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
      brandTitle.innerText = APP_DATA.config.brandName || "Stuhlübungen für Senioren";
    }
  }

  // ----------------------------------------------------------------------
  // 2. ROUTING
  // ----------------------------------------------------------------------
  function handleRouting() {
    let currentHash = window.location.hash || "#home";
    if (["#video"].includes(currentHash)) {
      currentHash = "#videos";
      history.replaceState(null, "", currentHash);
    }
    window.CHAIR_DEMOS.pause();

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
      case "#programme":
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
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#94a3b8; padding: 2.5rem 1rem 2rem; letter-spacing: 0.5px;">
         &copy; 2026 ${APP_DATA.config.brandName || "Stuhlübungen für Senioren"}. Alle Rechte vorbehalten.
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

    const fBtn = floatingHelp ? floatingHelp.querySelector('.floating-help-btn') : null;
    if (fBtn) {
      if (hash === "#hilfe" || hash === "#home") {
        fBtn.classList.add('hidden');
      } else {
        fBtn.classList.remove('hidden');
      }
    }
  }

  // ----------------------------------------------------------------------
  // 3. WEERGAVE: HOME
  // ----------------------------------------------------------------------
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1 tabindex="-1">Willkommen in Ihrem Mitgliederbereich!</h1>
              <p>Welche Übungen oder Materialien möchten Sie heute ansehen?</p>
            </div>
          </div>
          
          <div class="home-grid">
            
            <a href="#videos" class="home-block glass-panel" style="border: 1px solid rgba(14, 165, 233, 0.4); background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(14, 165, 233, 0.12) 100%);">
              <div class="home-block-icon" style="background: var(--primary); color: #FFF;">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Videodemonstrationen</div>
                 <div class="home-block-subtitle">Kurze Demonstrationen der Übungen ohne Ton</div>
              </div>
            </a>

            <a href="#buecher" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Bücher und Anleitungen</div>
                 <div class="home-block-subtitle">Trainingsanleitungen und Übungspläne als PDF</div>
              </div>
            </a>

            <a href="#hilfe" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Hilfe</div>
                 <div class="home-block-subtitle">Fragen und Unterstützung</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 4. WEERGAVE: BOEKEN (BOOKS)
  // ----------------------------------------------------------------------
  function renderLivros() {
    const featuredBooks = (APP_DATA.books || []).slice(0, 3);
    const compactBooks = (APP_DATA.books || []).slice(3);

    const featuredHTML = featuredBooks.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:#38bdf8; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'ZUSATZMATERIAL'}</span>
               <span class="premium-format">PDF • Dokument zum Herunterladen</span>
            </div>
           
            <div class="premium-info">
               <h3 class="premium-title">${bk.title}</h3>
               <p class="premium-desc">${bk.description}</p>
               
               ${featuresHTML}
               
                <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                   <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                      <i data-lucide="book-open"></i> Jetzt lesen
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
      <h2 class="section-divider-title">Weitere Materialien</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Material'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="compact-action-btn btn-read" title="Jetzt lesen">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="PDF herunterladen">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/ch_IMG1_de.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Stuhlübungen für Senioren";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Ihre Materialien</h1><p>Öffnen Sie die Bücher unten zum Lesen oder laden Sie sie auf Ihr Gerät herunter.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Derzeit sind keine Materialien verfügbar.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 5. WEERGAVE: VIDEODEMONSTRATIES (VIDEOS - 100% WHITE LABEL & GELUIDLOOS)
  // ----------------------------------------------------------------------
  function renderVideos() {
    window.CHAIR_DEMOS.render();
  }

  function renderOutrosProdutos() {
    const prodsHTML = (APP_DATA.otherProducts || []).map(prod => {
      const featuresHTML = prod.features
        ? `<ul class="premium-checklist">
      ${prod.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Weitere Programme</h1><p>Entdecken Sie weitere Anleitungen und Trainingsprogramme.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Derzeit sind keine weiteren Produkte verfügbar.</p>'}
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 7. WEERGAVE: CONTACT / ONDERSTEUNING
  // ----------------------------------------------------------------------
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Kundenservice</h1><p>Benötigen Sie Hilfe mit dem Zugang oder dem Herunterladen?</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px; color: #38bdf8;"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Nachricht senden</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Kopieren Sie die E-Mail-Adresse unten oder klicken Sie auf die Schaltfläche, um uns Ihre Frage zu senden.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem 1.5rem; border-radius:10px; display:inline-block;">
                <span style="font-size: 1.15rem; font-weight: 700; color:#38bdf8; user-select: all;">${APP_DATA.config.contactEmail}</span>
             </div>
             <a class="premium-btn support-email-button" href="mailto:${APP_DATA.config.contactEmail}?subject=${encodeURIComponent(APP_DATA.config.emailSubject)}&body=${encodeURIComponent(APP_DATA.config.emailBodyTemplate)}"><i data-lucide="mail"></i>Kundenservice kontaktieren</a>
          </div>
        </div>
      `;
  }

});
