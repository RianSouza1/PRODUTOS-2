/**
 * APP CORE ENGINE
 * MITGLIEDERBEREICH
 * Das Buch der inneren Weisheit – Deutsch
 */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------------------
  // 0. DOM REFERENTIES
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");


  // ----------------------------------------------------------------------
  // 1. INITIALISATIE
  // ----------------------------------------------------------------------
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
      brandTitle.innerText = APP_DATA.config.brandName || "Das Buch der inneren Weisheit";
    }
  }

  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. SPA ROUTING
  // ----------------------------------------------------------------------
  function handleRouting() {
    let currentHash = window.location.hash || "#home";

    rootEl.innerHTML = "";
    updateBottomNavBar(currentHash);
    togglePersistentElements(currentHash);

    switch (currentHash) {
      case "#home":
        renderHome();
        break;
      case "#buecher":
        renderBooks();
        break;
      case "#videos":
        renderBooks();
        break;
      case "#hilfe":
        renderHelp();
        break;
      default:
        renderHome();
        break;
    }

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#6B7280; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
          &copy; 2026 ${APP_DATA.config.brandName || "Das Buch der inneren Weisheit"}. Alle Rechte vorbehalten.
       </footer>
    `);

    renderIcons();
    document.querySelector('.app-container').scrollTo(0, 0);
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
  // 3. WEERGAVEN (VIEWS)
  // ----------------------------------------------------------------------

  // WEERGAVE: HOME
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Willkommen in Ihrem Mitgliederbereich!</h1><p>Welche Inhalte möchten Sie heute entdecken?</p></div></div>

          <div class="home-grid">

            <a href="#buecher" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Bücher</div>
                 <div class="home-block-subtitle">Bücher lesen und PDFs herunterladen</div>
              </div>
            </a>

            <a href="#hilfe" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Hilfe</div>
                 <div class="home-block-subtitle">Unterstützung und Fragen</div>
              </div>
            </a>

          </div>
        </div>
      `;
  }

  // WEERGAVE: BOEKEN (BOOKS)
  function renderBooks() {
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'EXKLUSIV'}</span>
               <span class="premium-format">PDF • ${bk.pageCount} Seiten</span>
            </div>

           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>

              ${featuresHTML}

               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF; font-weight: 700;">
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
            <div class="compact-book-info">
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

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/wis_IMG1_de.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Das Buch der inneren Weisheit";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Ihre Bibliothek</h1><p>Lesen Sie Ihre drei Bücher direkt im Browser oder laden Sie die PDFs herunter.</p></div></div>

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

  // WEERGAVE: ONDERSTEUNING / CONTACT
  function renderHelp() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Hilfe für Mitglieder</h1><p>Wir helfen Ihnen gerne weiter.</p></div></div>

          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>

             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Nachricht senden</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Schreiben Sie uns Ihre Frage an die folgende E-Mail-Adresse. Unser Hilfeteam antwortet Ihnen so bald wie möglich.
             </p>

             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <a href="${mountMailTo()}" style="font-size: 1.1rem; font-weight: 700; color:var(--text-dark); user-select: auto; overflow-wrap: anywhere;">${APP_DATA.config.contactEmail}</a>
             </div>
          </div>
        </div>
      `;
  }

});
