/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 * Militaire Calisthenics voor Mannen — Nederlands
 */

document.addEventListener("DOMContentLoaded", () => {

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

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Militaire Calisthenics voor Mannen";
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
        renderVideos();
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
         &copy; 2026 ${APP_DATA.config.brandName || "Militaire Calisthenics voor Mannen"}. Alle rechten voorbehouden.
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Welkom, gewaardeerd lid!</h1><p>Tot welke materialen wilt u vandaag toegang?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Boeken</div>
                 <div class="home-block-subtitle">Boeken & PDF-gidsen</div>
              </div>
            </a>

            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Video's</div>
                 <div class="home-block-subtitle">Trainingsvideo's & Techniek</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Ondersteuning</div>
                 <div class="home-block-subtitle">Hulp & Klantenservice</div>
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
               <span class="premium-format">PDF • Downloadbaar Document</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                     <i data-lucide="book-open"></i> Nu lezen
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> Download PDF
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title">Aanvullende Bronnen</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Bron'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Nu lezen">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="Download PDF">
                <i data-lucide="download"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      `;
    }

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/man_IMG1_nl.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Militaire Calisthenics voor Mannen";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Uw Materialen</h1><p>Klik op de onderstaande collecties om uw gidsen te lezen en te downloaden.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Er zijn momenteel geen materialen geregistreerd.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // TELA: VIDEOS
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const safeVideo = allVideos.find(v => v.id === currentVideoId) || allVideos[0] || null;

    rootEl.innerHTML = `
      <div class="page-view" style="padding-top:0; padding-left:0; padding-right:0; background: var(--bg-body);">
      <div class="playlist-container" style="padding: 24px var(--safe-padding);">
        <div class="hero-card glass-panel" style="margin-top:-24px;"><div class="hero-text"><h1>Trainingsvideo's</h1><p>Militaire lichaamsgewichtoefeningen en correcte techniek voor mannen 40+.</p></div></div>
        
        <div style="background-color: rgba(16, 185, 129, 0.1); color: var(--primary); border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; font-weight: 500; font-size: 0.95rem;" class="glass-panel">
           <i data-lucide="check-circle" style="width: 20px; height: 20px; flex-shrink: 0; color: #10B981;"></i>
           <span>Klik op een oefening om de instructievideo te bekijken</span>
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

    const playlistHtml = videosArray.map((vid, index) => {
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
                       controlsList="nodownload" 
                       style="width: 100%; max-height: 480px; display: block; object-fit: contain; border-radius: 12px; background: #000;">
                    </video>
                 </div>
                 ${vid.obs ? `
                 <div style="margin-top: 10px; padding: 10px 14px; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-light); font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="info" style="width: 16px; height: 16px; color: var(--primary); flex-shrink: 0;"></i>
                    <span><strong>Instructie:</strong> ${vid.obs}</span>
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
               <span class="premium-format">Online Toegang</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Meer informatie'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Meer Programma's</h1><p>Ontdek meer aanbevolen gidsen en cursussen.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Momenteel geen andere producten beschikbaar.</p>'}
          </div>
        </div>
      `;
  }

  // TELA: CONTACT
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Klantenservice</h1><p>Uw tevredenheid is onze hoogste prioriteit.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Stuur een bericht</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Kopieer het onderstaande e-mailadres en stuur ons uw vraag. Ons ondersteuningsteam zal u zo snel mogelijk antwoorden.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

});
