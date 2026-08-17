/**
 * APP CORE ENGINE — Baby Sleep Guide (English)
 * ÁREA DE MEMBROS (Mobile First & Parent Friendly)
 */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------------------
  // 0. DOM REFERENCES
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  // ----------------------------------------------------------------------
  // 1. INITIALIZATION & ROUTING
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
      brandTitle.innerText = APP_DATA.config.brandName || "Baby Sleep Guide";
    }
  }

  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. SPA ROUTING SYSTEM
  // ----------------------------------------------------------------------
  function handleRouting() {
    let currentHash = window.location.hash || "#home";

    rootEl.innerHTML = "";

    updateBottomNavBar(currentHash);

    switch (currentHash) {
      case "#home":
      case "#livros":
        renderHomeAndLivros();
        break;
      case "#contato":
        renderContato();
        break;
      default:
        renderHomeAndLivros();
        break;
    }

    // Global copyright footer
    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.85rem; font-weight: 500; color:var(--text-muted); padding: 2.5rem 1rem 2rem; letter-spacing: 0.5px;">
          &copy; 2026 ${APP_DATA.config.brandName || "Baby Sleep Guide"}. All rights reserved.
       </footer>
    `);

    renderIcons();
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
      appContainer.scrollTo(0, 0);
    }
  }

  function updateBottomNavBar(hash) {
    tabItems.forEach(tab => {
      tab.classList.remove("active");
      const tabTarget = tab.getAttribute("href");
      if (tabTarget === hash || (hash === "#home" && tabTarget === "#livros")) {
        tab.classList.add("active");
      }
    });
  }

  // ----------------------------------------------------------------------
  // 3. MAIN RENDERERS
  // ----------------------------------------------------------------------

  // MAIN VIEW: HOME & MATERIALS
  function renderHomeAndLivros() {
    const books = APP_DATA.books || [];

    const booksHTML = books.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
            ${bk.features.map(f => `<li><i data-lucide="check-circle-2" style="color:var(--primary); width:18px; height:18px; flex-shrink:0;"></i> <span>${f}</span></li>`).join('')}
           </ul>`
        : '';

      return `
        <div class="premium-book-card">
          <div class="premium-badge-wrapper">
             <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAL'}</span>
             <span class="premium-format">PDF • Digital Download</span>
          </div>
         
          <div class="premium-info">
             <h3 class="premium-title">${bk.title}</h3>
             <p class="premium-desc">${bk.description}</p>
             
             ${featuresHTML}
             
             <div class="card-actions-row">
                <a href="${bk.downloadUrl}" target="_blank" class="premium-btn btn-primary">
                   <i data-lucide="book-open"></i> Read Now
                </a>
                <a href="${bk.downloadUrl}" download class="premium-btn btn-outline">
                   <i data-lucide="download"></i> Download PDF
                </a>
             </div>
          </div>
        </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1>Welcome to Baby Sleep Guide!</h1>
              <p>Your premium access has been confirmed. Download and read your complete guide collection below.</p>
            </div>
          </div>
          
          <div class="premium-hero-cover-container">
              <img src="assets/covers/baby_IMG1_en.png" alt="Baby Sleep Guide Package" class="package-cover-img">
          </div>

          <div class="section-title-wrapper">
             <h2 class="section-title"><i data-lucide="book-marked"></i> Member Guide Collection</h2>
          </div>

          <div class="list-container">
            ${booksHTML || '<p>No materials available at the moment.</p>'}
          </div>

          <div class="support-banner-card glass-panel">
            <div class="support-icon">
              <i data-lucide="help-circle"></i>
            </div>
            <div>
              <h3>Need Help with Your Access?</h3>
              <p>Our support team is available to help you with any questions. Email us at <a href="${mountMailTo()}" class="support-email-link">${APP_DATA.config.contactEmail}</a></p>
            </div>
          </div>
      </div>
    `;
  }

  // SCREEN: CONTACT
  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1>Member Support</h1>
              <p>We are here to assist you and your family.</p>
            </div>
          </div>
          
          <div class="card-bloco glass-panel contact-card">
             <div class="contact-icon-wrapper">
               <i data-lucide="mail"></i>
             </div>
             
             <h3>Send a Message</h3>
             <p>
                Have questions or need support with your materials? Send an email to our dedicated support address below.
             </p>
             
             <div class="contact-email-box">
                <a href="${mailHref}" class="contact-email-link">${APP_DATA.config.contactEmail}</a>
             </div>
          </div>
        </div>
      `;
  }

});
