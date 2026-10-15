/**
 * APP CORE ENGINE
 * MEDLEMSOMRÅDE (Mobile First & Senior Friendly)
 * Teckningskollektionen för nybörjare — Svenska
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
    if(!['#bocker','#filmer','#support'].includes(window.location.hash)) window.location.hash = 'bocker';
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
      brandTitle.innerText = APP_DATA.config.brandName || "Teckningskollektionen för nybörjare";
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
    const aliases = { '#books':'#bocker', '#videos':'#filmer', '#video':'#filmer', '#help':'#support' };
    if(aliases[currentHash]) { currentHash=aliases[currentHash]; history.replaceState(null,'',currentHash); }
    if(['#bocker','#filmer','#support'].includes(currentHash)) document.getElementById('pre-page').hidden=true;

    rootEl.innerHTML = "";
    updateBottomNavBar(currentHash);
    togglePersistentElements(currentHash);

    switch (currentHash) {
      case "#home":
        renderHome();
        break;
      case "#bocker":
        renderLivros();
        break;
      case "#filmer":
        renderVideos();
        break;
      case "#program":
        renderOutrosProdutos();
        break;
      case "#support":
        renderContato();
        break;
      default:
        renderHome();
        break;
    }

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#cbd5e1; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
          &copy; 2026 ${APP_DATA.config.brandName || "Teckningskollektionen för nybörjare"}. Alla rättigheter förbehållna.
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
      if (hash === "#support" || hash === "#home") {
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Välkommen till ditt medlemsområde!</h1><p>Vilka material vill du använda idag?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#bocker" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Böcker och övningshäften</div>
                 <div class="home-block-subtitle">Teckningsguider och övningar i PDF-format</div>
              </div>
            </a>

            <a href="#filmer" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Filmer</div>
                 <div class="home-block-subtitle">Korta demonstrationer av teckning</div>
              </div>
            </a>
            
            <a href="#support" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Hjälp</div>
                 <div class="home-block-subtitle">Hjälp med tillgång och material</div>
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'EXTRAMATERIAL'}</span>
               <span class="premium-format">PDF • Material att ladda ner</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF; font-weight: 700;">
                     <i data-lucide="book-open"></i> Öppna PDF
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> Ladda ner PDF
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title" style="margin-top: 2rem;">Övningshäften och stegvisa uppgifter</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div class="compact-book-info" style="display:flex; flex-direction:column; gap:4px;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}; align-self: flex-start;">${bk.badgeText || 'Övningshäfte'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="compact-action-btn btn-read" title="Öppna PDF" aria-label="Öppna PDF: ${bk.title}">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="Ladda ner PDF" aria-label="Ladda ner PDF: ${bk.title}">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/draw_IMG1_sv.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Teckningskollektionen för nybörjare";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Dina teckningsmaterial</h1><p>Öppna böckerna och övningshäftena nedan eller ladda ner dem till din enhet.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Det finns inga material tillgängliga just nu.</p>'}
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
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'EXTRAMATERIAL'}</span>
               <span class="premium-format">Tillgång online</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" rel="noopener" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Läs mer'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Fler program</h1><p>Upptäck fler kurser och material för skapande.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Fler material kommer snart!</p>'}
          </div>
        </div>
      `;
  }

  // VISTA: CONTATTO / SUPPORTO
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Medlemssupport</h1><p>Behöver du hjälp med tillgången eller med att ladda ner material?</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Skicka ett meddelande</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Kopiera e-postadressen nedan eller klicka på knappen för att skicka din fråga. Vi svarar så snart vi kan.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span dir="ltr" style="font-size: 1.1rem; font-weight: 700; color:var(--text-dark); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
             <a href="${mountMailTo()}" class="premium-btn support-email-button"><i data-lucide="mail"></i>Kontakta supporten</a>
          </div>
        </div>
      `;
  }

});
