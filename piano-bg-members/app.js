/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 * Пълната Колекция за Пиано — Български
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
                  ? `<i data-lucide="minimize" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Намали</span>`
                  : `<i data-lucide="maximize" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Цял екран</span>`;
          }
      });
      renderIcons();
  }

  window.createYtPlayerInstance = function(containerId, videoId) {
      function instantiate() {
          const mountNode = document.getElementById(containerId);
          if (!mountNode) return;
          
          window.activeYtPlayer = new YT.Player(containerId, {
              videoId: videoId,
              playerVars: {
                  'playsinline': 1,
                  'rel': 0,
                  'modestbranding': 1,
                  'controls': 0,
                  'disablekb': 1,
                  'fs': 0
              },
              events: {
                  'onStateChange': function(event) {
                      const container = mountNode.closest('.video-wrapper-container') || mountNode.parentElement;
                      const playBtn = container ? container.querySelector('.ctrl-btn-play') : null;
                      if (playBtn) {
                          if (event.data === YT.PlayerState.PLAYING) {
                              playBtn.innerHTML = `<i data-lucide="pause" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Пауза</span>`;
                          } else {
                              playBtn.innerHTML = `<i data-lucide="play" style="width: 22px; height: 22px; color: #ffffff;"></i><span>Пусни</span>`;
                          }
                          renderIcons();
                      }
                  }
              }
          });
      }

      if (window.YT && window.YT.Player) {
          instantiate();
      } else {
          window.onYouTubeIframeAPIReady = instantiate;
      }
  };

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Пълната Колекция за Пиано";
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
         &copy; 2026 ${APP_DATA.config.brandName || "Пълната Колекция за Пиано"}. Всички права запазени.
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

  // TELA: HOME (Ponto de Partida)
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'СПЕЦИАЛНО'}</span>
               <span class="premium-format">PDF • Документ за Изтегляне</span>
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

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/piano_IMG1_bg.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Пълната Колекция за Пиано";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Вашите Материали</h1><p>Кликнете върху колекциите по-долу, за да прегледате и изтеглите вашите книги.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>В момента няма регистрирани материали.</p>'}
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
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'СПЕЦИАЛНО'}</span>
               <span class="premium-format">Онлайн Достъп</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Повече информация'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Още Програми</h1><p>Открийте още препоръчани курсове и ръководства.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>В момента няма налични други продукти.</p>'}
          </div>
        </div>
      `;
  }

  // TELA: CONTACT
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Нуждаете се от помощ?</h1><p>Нашият екип за поддръжка е готов да ви помогне бързо.</p></div></div>
          
          <div class="contact-box glass-panel">
            <div class="contact-icon">
              <i data-lucide="mail-question"></i>
            </div>
            
            <h3 style="font-size: 1.15rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-dark);">
              Официална Поддръжка по Имейл
            </h3>
            
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.4;">
              Ако имате въпроси относно вашия достъп, изтегляне на материалите или имате нужда от съдействие, изпратете ни съобщение.
            </p>
            
            <a href="${mountMailTo()}" class="btn btn-primary" style="width: 100%; justify-content: center; gap: 0.5rem; padding: 0.85rem 1rem;">
              <i data-lucide="send"></i>
              Свържете се с Поддръжката
            </a>
          </div>
        </div>
      `;
  }

});
