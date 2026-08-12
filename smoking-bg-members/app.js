/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 */

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  initGlobalConfig();
  handleRouting();

  window.addEventListener("hashchange", handleRouting);

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function updateBottomNavBar(currentHash) {
    tabItems.forEach((item) => {
      const tabTarget = item.getAttribute("href");
      if (tabTarget === currentHash) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function togglePersistentElements(currentHash) {
    if (APP_DATA.config && APP_DATA.config.showFloatingHelp) {
      if (currentHash === "#contato") {
        floatingHelp.style.display = "none";
      } else {
        const mailHref = mountMailTo();
        floatingHelp.style.display = "block";
        floatingHelp.innerHTML = `
          <a href="${mailHref}" class="floating-help-btn" title="Помощ и Поддръжка">
             <i data-lucide="help-circle"></i>
          </a>
        `;
      }
    } else {
      floatingHelp.style.display = "none";
    }
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Пушене на Месо & BBQ";
    }
  }

  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  function handleRouting() {
    let currentHash = window.location.hash || "#home";
    rootEl.innerHTML = "";
    updateBottomNavBar(currentHash);
    togglePersistentElements(currentHash);

    switch (currentHash) {
      case "#home":
        renderHome();
        break;
      case "#livros":
        renderLivros();
        break;
      case "#produtos":
        renderOutrosProdutos();
        break;
      case "#contato":
        renderContato();
        break;
      default:
        renderHome();
        break;
    }

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#6B7280; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
         &copy; 2026 ${APP_DATA.config.brandName || "Пушене на Месо & BBQ"}. Всички права запазени.
       </footer>
    `);

    renderIcons();
    document.querySelector('.app-container').scrollTo(0, 0);
  }

  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Добре дошли, уважаеми член!</h1><p>До какви материали искате достъп днес?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Книги</div>
                 <div class="home-block-subtitle">Книги и PDF Материали</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Контакт</div>
                 <div class="home-block-subtitle">Помощ и Поддръжка</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  function renderLivros() {
    const featuredBook = APP_DATA.books || [];
    const mainBooks = featuredBook.filter(b => !b.isCompact);
    const compactBooks = featuredBook.filter(b => b.isCompact);

    let featuredHTML = mainBooks.map(bk => {
      let featuresHTML = '';
      if (bk.features && bk.features.length > 0) {
        featuresHTML = `
          <ul class="premium-features-list">
            ${bk.features.map(f => `<li><i data-lucide="check-circle-2"></i> <span>${f}</span></li>`).join('')}
          </ul>
        `;
      }

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'СПЕЦИАЛНО'}</span>
               <span class="premium-format">PDF &bull; Документ за Изтегляне</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                     <i data-lucide="book-open"></i> Прочети сега
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> Изтегли PDF
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title">Допълнителни Ресурси</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Ресурс'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Прочети сега">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="Изтегли PDF">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Вашите Материали</h1><p>Кликнете върху колекциите по-долу, за да прегледате и изтеглите вашите книги.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="assets/covers/smo_IMG1_bg.png" alt="Пушене на Месо & BBQ" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>В момента няма регистрирани материали.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  function renderOutrosProdutos() {
    const prods = APP_DATA.otherProducts || [];

    let prodsHTML = prods.map(prod => {
      let featuresHTML = '';
      if (prod.features && prod.features.length > 0) {
        featuresHTML = `
          <ul class="premium-features-list">
            ${prod.features.map(f => `<li><i data-lucide="check-circle-2"></i> <span>${f}</span></li>`).join('')}
          </ul>
        `;
      }

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'СПЕЦИАЛНО'}</span>
               <span class="premium-format">Онлайн Достъп</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" class="premium-cover-img">
           </div>

           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Научете повече'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Други Програми</h1><p>Открийте още програми и материали.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Очаквайте скоро още новини!</p>'}
          </div>
        </div>
      `;
  }

  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Поддръжка на Клиенти</h1><p>Вашето удовлетворение е наш приоритет.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Изпратете съобщение</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Копирайте имейл адреса по-долу и ни изпратете вашия въпрос. Нашият екип за поддръжка ще ви отговори възможно най-скоро.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

});
