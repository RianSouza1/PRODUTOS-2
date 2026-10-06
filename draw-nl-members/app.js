/**
 * APP CORE ENGINE
 * LEDENGEBIED (Mobile First & Senior Friendly)
 * De Praktische Tekencollectie — Nederlands
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
  // 0. DOM ELEMENTEN
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  let currentVideoId = APP_DATA.videos && APP_DATA.videos.length > 0 ? APP_DATA.videos[0].id : null;

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

  // YouTube API
  if (!document.getElementById("yt-api-script")) {
    const tag = document.createElement('script');
    tag.id = "yt-api-script";
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  window.activeYtPlayer = null;

  // Fullscreen CSS
  if (!document.getElementById("fullscreen-css")) {
      const style = document.createElement('style');
      style.id = "fullscreen-css";
      style.textContent = `
          .video-wrapper-container:fullscreen {
              background: #000 !important;
              display: flex !important;
              flex-direction: column;
              justify-content: center;
          }
          .video-wrapper-container:fullscreen > div[id^="yt-player-"] {
              height: calc(100vh - 68px) !important;
              flex-grow: 1;
          }
          .video-wrapper-container:-webkit-full-screen {
              background: #000 !important;
              display: flex !important;
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

  function initGlobalConfig() {
    if (brandTitle && APP_DATA.config.brandName) {
      brandTitle.textContent = APP_DATA.config.brandName;
    }
    document.title = `${APP_DATA.config.brandName} — Ledengebied`;

    // Zwevende helpknop
    if (APP_DATA.config.showFloatingHelp) {
      floatingHelp.innerHTML = `
        <a href="#contato" class="floating-help-btn" aria-label="Ondersteuning">
          <i data-lucide="help-circle"></i>
          <span>Hulp nodig?</span>
        </a>
      `;
    }
  }

  // ----------------------------------------------------------------------
  // 2. ROUTING
  // ----------------------------------------------------------------------
  function handleRouting() {
    const hash = window.location.hash || "#livros";

    updateBottomNavBar(hash);
    togglePersistentElements(hash);

    rootEl.classList.add("view-fade-out");

    setTimeout(() => {
      switch (hash) {
        case "#home":
          renderHome();
          break;
        case "#videos":
          renderVideos();
          break;
        case "#livros":
          renderLivros();
          break;
        case "#outros":
          renderOutrosProdutos();
          break;
        case "#contato":
          renderContato();
          break;
        default:
          renderLivros();
          break;
      }
      renderFooter();
      rootEl.classList.remove("view-fade-out");
      rootEl.classList.add("view-fade-in");
      setTimeout(() => rootEl.classList.remove("view-fade-in"), 200);
    }, 150);
  }

  function renderFooter() {
    const currentYear = new Date().getFullYear();
    const footerExists = document.querySelector('.app-footer');
    if (footerExists) footerExists.remove();

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer">
          <div class="footer-bottom">
            <p>&copy; ${currentYear} ${APP_DATA.config.brandName}. Alle rechten voorbehouden.</p>
          </div>
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
  // 3. WEERGAVEN (VIEWS)
  // ----------------------------------------------------------------------

  // WEERGAVE: HOME
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Welkom, gewaardeerd lid!</h1><p>Welke materialen wilt u vandaag bekijken?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Boeken</div>
                 <div class="home-block-subtitle">Gidsen & Werkboeken</div>
              </div>
            </a>
            
            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Video's</div>
                 <div class="home-block-subtitle">Praktijklessen & Technieken</div>
              </div>
            </a>
            
            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Ondersteuning</div>
                 <div class="home-block-subtitle">Hulp & Vragen</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  // WEERGAVE: VIDEOS
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const safeVideo = allVideos.find(v => v.id === currentVideoId) || allVideos[0] || null;

    rootEl.innerHTML = `
      <div class="page-view" style="padding-top:0; padding-left:0; padding-right:0; background: var(--bg-body);">
      <div class="playlist-container" style="padding: 24px var(--safe-padding);">
        <div class="hero-card glass-panel" style="margin-top:-24px;"><div class="hero-text"><h1>Tekenlessen & Demonstraties</h1><p>Visuele demonstraties van basistechnieken, arcering, perspectief en portret.</p></div></div>
        
        <div style="background-color: rgba(124, 58, 237, 0.1); color: var(--primary); border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; font-weight: 500; font-size: 0.95rem;" class="glass-panel">
           <i data-lucide="play-circle" style="width: 20px; height: 20px; flex-shrink: 0; color: var(--primary);"></i>
           <span>Klik op een les hieronder om de video te bekijken</span>
        </div>

        <div id="video-playlist-items">
        </div>
      </div>
        </div>
      `;

    if (safeVideo) {
      attachPlaylistEvents(allVideos, safeVideo.id);
    }
  }

  function attachPlaylistEvents(videosArray, activeVideoId) {
    const playlistEl = document.getElementById("video-playlist-items");
    if (!playlistEl) return;

    const playlistHtml = videosArray.map((vid) => {
      const isPlaying = vid.id === activeVideoId;
      const vidSrc = vid.videoUrl;

      return `
      <div class="card-bloco play-item glass-panel ${isPlaying ? 'active-play' : ''}" style="margin-bottom:16px; display:flex; flex-direction:column; padding:0; overflow:hidden;" data-video-id="${vid.id}">
            
            <a href="javascript:void(0)" class="play-item-header" style="display:flex; padding: 16px; text-decoration:none; color:inherit; align-items:center; gap:12px;">
              <div style="width:36px;height:36px;background:${isPlaying ? 'var(--primary)' : 'var(--primary-light)'};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i data-lucide="${isPlaying ? 'play' : 'play-circle'}" style="width:18px;height:18px;color:${isPlaying ? '#FFF' : 'var(--primary)'};"></i>
              </div>
              <div style="display:flex; flex-direction:column; justify-content:center; flex:1; min-width:0;">
                 <h4 style="margin:0 0 4px; font-size:1.05rem; color:${isPlaying ? 'var(--primary)' : 'var(--text-dark)'};">${vid.title}</h4>
                 <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                   <span style="margin:0; font-size:0.82rem; color:var(--text-muted); font-weight:600;">${vid.duration || '0:25'}</span>
                   ${vid.category ? `<span style="font-size:0.75rem; background:rgba(0,0,0,0.05); padding:2px 8px; border-radius:12px; color:var(--text-muted);">${vid.category}</span>` : ''}
                 </div>
              </div>
              ${isPlaying
          ? '<i data-lucide="chevron-down" style="color:var(--primary); align-self:center; flex-shrink:0;"></i>'
          : '<i data-lucide="chevron-right" style="opacity:0.35; align-self:center; flex-shrink:0;"></i>'}
            </a>
            
      ${isPlaying ? `
              <div class="play-item-body" style="padding: 0 16px 16px 16px; animation: slideDown 0.3s ease;">
                 <div style="position: relative; border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-height: 480px; margin: 0 auto;">
                    <video 
                       src="${vidSrc}" 
                       controls 
                       autoplay 
                       playsinline 
                       loop
                       controlsList="nodownload" 
                       style="width: 100%; max-height: 480px; display: block; object-fit: contain; border-radius: 12px; background: #000;">
                    </video>
                 </div>
                 ${vid.obs ? `
                 <div style="margin-top: 10px; padding: 10px 14px; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-light); font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="info" style="width: 16px; height: 16px; color: var(--primary); flex-shrink: 0;"></i>
                    <span><strong>Praktijktip:</strong> ${vid.obs}</span>
                 </div>
                 ` : ''}
              </div>
            ` : ''}
      </div>
    `;
    }).join('');

    playlistEl.innerHTML = playlistHtml;
    renderIcons();

    // Eventos de clique na playlist
    const listHeaders = playlistEl.querySelectorAll(".play-item-header");
    listHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.closest('.play-item');
        const clickedId = item.getAttribute("data-video-id");
        if (clickedId !== currentVideoId) {
          currentVideoId = clickedId;
          renderVideos();
          setTimeout(() => {
            const activeNode = document.querySelector('.active-play');
            if (activeNode) activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 50);
        }
      });
    });
  }

  // WEERGAVE: BOEKEN & MATERIALEN (BOOKS)
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAAL'}</span>
               <span class="premium-format">PDF • Downloadbaar Document</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF; font-weight: 700;">
                     <i data-lucide="book-open"></i> Nu lezen
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> PDF downloaden
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title" style="margin-top: 2rem;">Praktijkwerkboeken & Begeleide Oefeningen</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div class="compact-book-info" style="display:flex; flex-direction:column; gap:4px;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}; align-self: flex-start;">${bk.badgeText || 'Werkboek'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Nu lezen">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="PDF downloaden">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/draw_IMG1_nl.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "De Praktische Tekencollectie";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Uw Tekenmaterialen</h1><p>Klik op de onderstaande gidsen en werkboeken om ze te openen of te downloaden.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Geen materialen beschikbaar op dit moment.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // WEERGAVE: ONDERSTEUNING (CONTACT)
  function renderContato() {
    const defaultSubject = encodeURIComponent(APP_DATA.config.emailSubject || "Vraag over toegang");
    const defaultBody = encodeURIComponent(APP_DATA.config.emailBodyTemplate || "Hallo supportteam, ik heb hulp nodig met betrekking tot mijn toegang.");
    const mailtoUrl = `mailto:${APP_DATA.config.contactEmail}?subject=${defaultSubject}&body=${defaultBody}`;

    rootEl.innerHTML = `
      <div class="page-view">
        <div class="hero-card glass-panel">
          <div class="hero-text">
            <h1>Ondersteuning & Klantenservice</h1>
            <p>Heeft u vragen over de materialen of uw toegang? Ons team staat voor u klaar!</p>
          </div>
        </div>

        <div class="glass-panel" style="padding: 2.5rem 1.5rem; text-align: center; max-width: 520px; margin: 0 auto; border-radius: 20px;">
          <div style="width: 72px; height: 72px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
            <i data-lucide="mail" style="width: 36px; height: 36px;"></i>
          </div>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.75rem;">Persoonlijke Hulp</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.75rem;">
            Klik op de onderstaande knop om direct een e-mail naar ons ondersteuningsteam te sturen. Wij reageren zo spoedig mogelijk.
          </p>
          <a href="${mailtoUrl}" class="premium-btn" style="display: inline-flex; justify-content: center; align-items: center; width: 100%; padding: 1rem; background: var(--primary); color: #FFF; font-weight: 600; border-radius: 12px; font-size: 1.05rem; gap: 0.5rem; text-decoration: none; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);">
            <i data-lucide="send" style="width: 18px; height: 18px;"></i>
            <span>Ondersteuning openen via e-mail</span>
          </a>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 1.25rem;">
            Of schrijf rechtstreeks naar: <strong>${APP_DATA.config.contactEmail}</strong>
          </p>
        </div>
      </div>
    `;
  }

});
