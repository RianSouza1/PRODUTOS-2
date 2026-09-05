/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 * Militär Kalistenik för Män — Svenska
 */

document.addEventListener("DOMContentLoaded", () => {

  window.toggleActiveYtPlay = function() {
    if (window.activeYtPlayer && typeof window.activeYtPlayer.getPlayerState === 'function') {
      const state = window.activeYtPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        window.activeYtPlayer.pauseVideo();
      } else {
        window.activeYtPlayer.playVideo();
      }
    }
  };

  // ----------------------------------------------------------------------
  // 0. REFERÊNCIAS DO DOM ENCAPSULADAS
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  let currentVideoId = APP_DATA.videos.length > 0 ? APP_DATA.videos[0].id : null;

  // ----------------------------------------------------------------------
  // 1. INICIALIZAÇÃO DA BASE (Header e Global Settings)
  // ----------------------------------------------------------------------
  initGlobalConfig();
  handleRouting();

  window.addEventListener("hashchange", handleRouting);

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Inject YouTube Iframe API globally
  if (!document.getElementById("yt-api-script")) {
    const tag = document.createElement('script');
    tag.id = "yt-api-script";
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  window.activeYtPlayer = null;

  // Fullscreen CSS injections
  if (!document.getElementById("fullscreen-css")) {
      const style = document.createElement('style');
      style.id = "fullscreen-css";
      style.textContent = `
          .video-wrapper-container:fullscreen {
              background: #000 !important;
              display: flex;
              flex-direction: column;
              justify-content: center;
          }
          .video-wrapper-container:fullscreen > div[id^="yt-player-"] {
              height: calc(100vh - 68px) !important;
              flex-grow: 1;
          }
          .video-wrapper-container:-webkit-full-screen {
              background: #000 !important;
              display: flex;
              flex-direction: column;
              justify-content: center;
          }
          .video-wrapper-container:-webkit-full-screen > div[id^="yt-player-"] {
              height: calc(100vh - 68px) !important;
              flex-grow: 1;
          }
      `;
      document.head.appendChild(style);
  }

  window.toggleCustomFullscreen = function(elementId) {
      const container = document.getElementById(elementId);
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          if (container.requestFullscreen) {
              container.requestFullscreen();
          } else if (container.webkitRequestFullscreen) {
              container.webkitRequestFullscreen();
          } else if (container.msRequestFullscreen) {
              container.msRequestFullscreen();
          }
      } else {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      }
  };

  document.addEventListener('fullscreenchange', handleFsUpdate);
  document.addEventListener('webkitfullscreenchange', handleFsUpdate);
  document.addEventListener('mozfullscreenchange', handleFsUpdate);
  document.addEventListener('MSFullscreenChange', handleFsUpdate);

  function handleFsUpdate() {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
      document.querySelectorAll('.video-custom-controls').forEach(bar => {
          const btn = bar.querySelector('.ctrl-btn-fs');
          if (btn) {
              btn.innerHTML = isFs 
                  ? `<i data-lucide="minimize" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Minimera</span>`
                  : `<i data-lucide="maximize" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Helskärm</span>`;
          }
      });
      renderIcons();
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Militär Kalistenik för Män";
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
      case "#videos":
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
         &copy; 2026 ${APP_DATA.config.brandName || "Militär Kalistenik för Män"}. Alla rättigheter förbehållna.
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
      if (hash === "#contato" || hash === "#home") {
        fBtn.classList.add('hidden');
      } else {
        fBtn.classList.remove('hidden');
      }
    }
  }

  // ----------------------------------------------------------------------
  // 3. RENDERIZADORES DE TELAS (VIEWS)
  // ----------------------------------------------------------------------

  // TELA: HOME
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Välkommen, kära medlem!</h1><p>Vilka material vill du ha tillgång till idag?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Böcker</div>
                 <div class="home-block-subtitle">Böcker & PDF-material</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Support</div>
                 <div class="home-block-subtitle">Hjälp & Kundservice</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  // TELA: BOOKS
  function renderLivros() {
    const featuredBooks = APP_DATA.books.slice(0, 3);
    const compactBooks = APP_DATA.books.slice(3);

    const featuredHTML = featuredBooks.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAL'}</span>
               <span class="premium-format">PDF • Dokument för nedladdning</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                     <i data-lucide="book-open"></i> Läs nu
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
      <h2 class="section-divider-title">Ytterligare resurser</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Resurs'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Läs nu">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="Ladda ner PDF">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/man_IMG1_sv.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Militär Kalistenik för Män";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Dina Material</h1><p>Klicka på samlingarna nedan för att läsa och ladda ner dina böcker.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Det finns inga material registrerade för närvarande.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // TELA: OTHER PRODUCTS
  function renderOutrosProdutos() {
    const prodsHTML = APP_DATA.otherProducts.map(prod => {
      const featuresHTML = prod.features
        ? `<ul class="premium-checklist">
      ${prod.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'SPECIAL'}</span>
               <span class="premium-format">Onlineåtkomst</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Mer information'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Fler Program</h1><p>Upptäck fler rekommenderade guider och kurser.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Inga ytterligare produkter tillgängliga just nu.</p>'}
          </div>
        </div>
      `;
  }

  // TELA: CONTACT
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Kundservice</h1><p>Din nöjdhet är vår högsta prioritet.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Skicka ett meddelande</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Kopiera e-postadressen nedan och skicka din fråga. Vårt supportteam svarar så snart som möjligt.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

});
