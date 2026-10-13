/**
 * APP CORE ENGINE
 * MEDLEMSOMRÅDE (Mobile First & Senior Friendly)
 * Stolsgymnastik för seniorer — Svenska
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

  let activeVideoFilter = "all";
  let activeTimers = {};
  const ytPlayers = {};

  // ----------------------------------------------------------------------
  // 1. BASIS INITIALISATIE
  // ----------------------------------------------------------------------
  document.getElementById('enter-members').addEventListener('click', () => {
    const overlay = document.getElementById('pre-page');
    overlay.style.opacity = '0';
    window.location.hash = 'bocker';
    setTimeout(() => { overlay.hidden = true; rootEl.querySelector('h1')?.focus(); }, 600);
  });
  initGlobalConfig();
  handleRouting();

  window.addEventListener("hashchange", () => {
    cleanupTimers();
    cleanupPlayers();
    handleRouting();
  });

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Stolsgymnastik för seniorer";
    }
  }

  function cleanupTimers() {
    Object.keys(activeTimers).forEach(id => {
      if (activeTimers[id]) {
        clearInterval(activeTimers[id]);
      }
    });
    activeTimers = {};
  }

  function cleanupPlayers() {
    Object.keys(ytPlayers).forEach(id => {
      try {
        if (ytPlayers[id] && typeof ytPlayers[id].destroy === 'function') {
          ytPlayers[id].destroy();
        }
      } catch (e) {}
      delete ytPlayers[id];
    });
  }

  // ----------------------------------------------------------------------
  // 2. ROUTING
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
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#94a3b8; padding: 2.5rem 1rem 2rem; letter-spacing: 0.5px;">
         &copy; 2026 ${APP_DATA.config.brandName || "Stolsgymnastik för seniorer"}. Alla rättigheter förbehållna.
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
      if (hash === "#support" || hash === "#home") {
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
              <h1 tabindex="-1">Välkommen till ditt medlemsområde!</h1>
              <p>Vilka övningar eller material vill du titta på i dag?</p>
            </div>
          </div>
          
          <div class="home-grid">
            
            <a href="#filmer" class="home-block glass-panel" style="border: 1px solid rgba(14, 165, 233, 0.4); background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(14, 165, 233, 0.12) 100%);">
              <div class="home-block-icon" style="background: var(--primary); color: #FFF;">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Videodemonstrationer</div>
                 <div class="home-block-subtitle">Korta demonstrationer av övningarna utan ljud</div>
              </div>
            </a>

            <a href="#bocker" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Böcker och guider</div>
                 <div class="home-block-subtitle">Träningsguider och övningsprogram i PDF</div>
              </div>
            </a>

            <a href="#support" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Support</div>
                 <div class="home-block-subtitle">Frågor och hjälp</div>
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'EXTRAMATERIAL'}</span>
               <span class="premium-format">PDF • Dokument att ladda ner</span>
            </div>
           
            <div class="premium-info">
               <h3 class="premium-title">${bk.title}</h3>
               <p class="premium-desc">${bk.description}</p>
               
               ${featuresHTML}
               
                <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                   <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
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
      <h2 class="section-divider-title">Fler material</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Material'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" rel="noopener" class="compact-action-btn btn-read" title="Läs nu">
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

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/ch_IMG1_sv.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Stolsgymnastik för seniorer";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Dina material</h1><p>Öppna böckerna nedan för att läsa dem eller ladda ner dem till din enhet.</p></div></div>
          
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

  // ----------------------------------------------------------------------
  // 5. WEERGAVE: VIDEODEMONSTRATIES (VIDEOS - 100% WHITE LABEL & GELUIDLOOS)
  // ----------------------------------------------------------------------
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const filteredVideos = activeVideoFilter === "all"
      ? allVideos
      : allVideos.filter(v => v.category === activeVideoFilter);

    const cardsHTML = filteredVideos.map(vid => {
      const stepsHTML = vid.steps.map((step, idx) => `
        <div class="exercise-step-item">
           <span class="step-num">${idx + 1}</span>
           <span class="step-desc">${step}</span>
        </div>
      `).join('');

      return `
        <div class="exercise-video-card glass-panel" id="card-${vid.id}">
           
           <!-- Top header of the card -->
           <div class="exercise-header">
              <div class="exercise-title-wrap">
                 <h3 class="exercise-title">${vid.title}</h3>
                 <span class="exercise-target"><i data-lucide="crosshair" style="width: 13px; height: 13px;"></i> ${vid.target}</span>
              </div>
              <div class="exercise-badges">
                 <span class="exercise-badge" style="background-color: ${vid.badgeColor || '#0284c7'}">${vid.categoryName}</span>
                 <span class="exercise-duration"><i data-lucide="clock" style="width: 12px; height: 12px;"></i> ${vid.duration}</span>
              </div>
           </div>

           <!-- 100% White-Label Video Container (No Channel, No YouTube links) -->
           <div class="clean-video-wrapper" id="player-wrap-${vid.id}">
              <div class="video-crop-box">
                 <div id="yt-player-${vid.id}"></div>
                 <div class="video-click-shield" onclick="window.toggleCustomVideoPlay('${vid.id}')">
                    <div class="play-overlay-icon" id="play-overlay-${vid.id}">
                       <i data-lucide="play" style="width: 28px; height: 28px; color: #FFF; margin-left: 3px;"></i>
                    </div>
                 </div>
              </div>

              <!-- Custom White-Label Control Bar -->
              <div class="custom-video-controls">
                 <button class="ctrl-action-btn" id="ctrl-play-${vid.id}" onclick="window.toggleCustomVideoPlay('${vid.id}')">
                    <i data-lucide="play" style="width: 16px; height: 16px;" id="icon-ctrl-${vid.id}"></i>
                    <span id="text-ctrl-${vid.id}">Spela upp</span>
                 </button>

                 <span class="ctrl-mute-badge">
                    <i data-lucide="volume-x" style="width: 13px; height: 13px;"></i> Utan ljud
                 </span>

                 <button class="ctrl-timer-btn" id="btn-timer-${vid.id}" onclick="window.togglePracticeTimer('${vid.id}')">
                    <i data-lucide="timer" style="width: 15px; height: 15px;"></i>
                    <span id="timer-label-${vid.id}">Starta 30 sek.</span>
                 </button>
              </div>

              <div class="timer-progress-track" id="timer-track-${vid.id}" style="display:none;">
                 <div class="timer-progress-bar" id="timer-bar-${vid.id}"></div>
              </div>
           </div>

           <!-- Exercise details -->
           <div class="exercise-body">
              <p class="exercise-description">${vid.description}</p>
              
              <div class="exercise-steps-box">
                 <div class="steps-heading">
                    <i data-lucide="list-checks" style="width: 16px; height: 16px; color: var(--primary);"></i>
                    Steg för steg:
                 </div>
                 ${stepsHTML}
              </div>

              <div class="exercise-tip-box">
                 <i data-lucide="info" style="width: 18px; height: 18px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
                 <span><strong>Praktiskt tips:</strong> ${vid.tip}</span>
              </div>
           </div>

        </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 1rem;">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1 tabindex="-1">Videodemonstrationer</h1>
              <p>Korta övningsdemonstrationer utan ljud för seniorer.</p>
            </div>
          </div>

          <!-- Soundless info banner -->
          <div class="soundless-banner glass-panel">
             <div class="soundless-icon-box">
                <i data-lucide="volume-x" style="color: #38bdf8; width: 24px; height: 24px;"></i>
             </div>
             <div class="soundless-text">
                <strong>Videodemonstrationer utan ljud</strong>
                <span>Titta på rörelserna i lugn och ro och använd de skriftliga instruktionerna i din egen takt.</span>
             </div>
          </div>

          <!-- Category filter pills -->
          <div class="video-filter-bar">
             <button class="filter-pill ${activeVideoFilter === 'all' ? 'active' : ''}" onclick="window.setExerciseFilter('all')">
               <i data-lucide="layers" style="width: 15px; height: 15px;"></i> Alla (${allVideos.length})
             </button>
             <button class="filter-pill ${activeVideoFilter === 'benen' ? 'active' : ''}" onclick="window.setExerciseFilter('benen')">
               <i data-lucide="activity" style="width: 15px; height: 15px;"></i> Ben och höfter
             </button>
             <button class="filter-pill ${activeVideoFilter === 'bovenlichaam' ? 'active' : ''}" onclick="window.setExerciseFilter('bovenlichaam')">
               <i data-lucide="zap" style="width: 15px; height: 15px;"></i> Överkropp
             </button>
             <button class="filter-pill ${activeVideoFilter === 'romp' ? 'active' : ''}" onclick="window.setExerciseFilter('romp')">
               <i data-lucide="shield" style="width: 15px; height: 15px;"></i> Bål
             </button>
             <button class="filter-pill ${activeVideoFilter === 'nek' ? 'active' : ''}" onclick="window.setExerciseFilter('nek')">
               <i data-lucide="smile" style="width: 15px; height: 15px;"></i> Nacke och rörlighet
             </button>
          </div>

          <!-- Video cards grid -->
          <div class="exercise-videos-grid" id="exercise-grid">
             ${cardsHTML || '<p style="text-align:center; color:var(--text-muted); padding:2rem;">Inga övningar hittades.</p>'}
          </div>
      </div>
    `;

    // Initialize all YouTube players without any UI branding
    initAllYtPlayers();
  }

  window.setExerciseFilter = function(category) {
    cleanupTimers();
    activeVideoFilter = category;
    cleanupPlayers();
    renderVideos();
    renderIcons();
  };

  function initAllYtPlayers() {
    if (typeof YT === 'undefined' || !YT.Player) {
      setTimeout(initAllYtPlayers, 150);
      return;
    }

    const allVideos = APP_DATA.videos || [];
    const filteredVideos = activeVideoFilter === "all"
      ? allVideos
      : allVideos.filter(v => v.category === activeVideoFilter);

    filteredVideos.forEach(vid => {
      const container = document.getElementById(`yt-player-${vid.id}`);
      if (!container) return;

      try {
        ytPlayers[vid.id] = new YT.Player(`yt-player-${vid.id}`, {
          videoId: vid.youtubeId,
          playerVars: {
            hl: 'sv',
            autoplay: 0,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            loop: 1,
            playlist: vid.youtubeId,
            disablekb: 1,
            fs: 0,
            playsinline: 1,
            iv_load_policy: 3
          },
          events: {
            onReady: function(event) {
              event.target.mute();
            },
            onStateChange: function(event) {
              updatePlayerUI(vid.id, event.data);
            }
          }
        });
      } catch (err) {
        console.error("Error creating YT player for:", vid.id, err);
      }
    });
  }

  window.toggleCustomVideoPlay = function(vidId) {
    const player = ytPlayers[vidId];
    if (!player || typeof player.getPlayerState !== 'function') return;

    try {
      const state = player.getPlayerState();
      if (state === 1) { // YT.PlayerState.PLAYING
        player.pauseVideo();
      } else {
        // Pause any other playing video so only one plays
        Object.keys(ytPlayers).forEach(id => {
          if (id !== vidId && ytPlayers[id] && typeof ytPlayers[id].pauseVideo === 'function') {
            try { ytPlayers[id].pauseVideo(); } catch(e) {}
          }
        });
        player.mute();
        player.playVideo();
      }
    } catch (e) {
      console.error("Playback toggle error:", e);
    }
  };

  function updatePlayerUI(vidId, playerState) {
    const overlay = document.getElementById(`play-overlay-${vidId}`);
    const iconCtrl = document.getElementById(`icon-ctrl-${vidId}`);
    const textCtrl = document.getElementById(`text-ctrl-${vidId}`);

    if (playerState === 1) { // PLAYING
      if (overlay) overlay.style.opacity = '0';
      if (iconCtrl) iconCtrl.setAttribute('data-lucide', 'pause');
      if (textCtrl) textCtrl.innerText = 'Pausa';
    } else {
      if (overlay) overlay.style.opacity = '1';
      if (iconCtrl) iconCtrl.setAttribute('data-lucide', 'play');
      if (textCtrl) textCtrl.innerText = 'Spela upp';
    }
    renderIcons();
  }

  window.togglePracticeTimer = function(vidId) {
    const track = document.getElementById(`timer-track-${vidId}`);
    const bar = document.getElementById(`timer-bar-${vidId}`);
    const label = document.getElementById(`timer-label-${vidId}`);

    if (activeTimers[vidId]) {
      clearInterval(activeTimers[vidId]);
      delete activeTimers[vidId];
      if (track) track.style.display = 'none';
      if (label) label.innerText = 'Starta 30 sek.';
      return;
    }

    let timeLeft = 30;
    if (track) track.style.display = 'block';
    if (label) label.innerText = `${timeLeft}s...`;
    if (bar) bar.style.width = '100%';

    activeTimers[vidId] = setInterval(() => {
      timeLeft -= 1;
      if (label) label.innerText = `${timeLeft}s...`;
      if (bar) bar.style.width = `${(timeLeft / 30) * 100}%`;

      if (timeLeft <= 0) {
        clearInterval(activeTimers[vidId]);
        delete activeTimers[vidId];
        if (label) label.innerText = 'Klart! ✓';
        if (bar) bar.style.width = '0%';
        setTimeout(() => {
          if (track) track.style.display = 'none';
          if (label) label.innerText = 'Starta 30 sek.';
        }, 3000);
      }
    }, 1000);
  };

  // ----------------------------------------------------------------------
  // 6. WEERGAVE: ANDERE PRODUKTEN
  // ----------------------------------------------------------------------
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Fler program</h1><p>Upptäck fler guider och träningsprogram.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Det finns inga andra produkter tillgängliga just nu.</p>'}
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1 tabindex="-1">Kundservice</h1><p>Behöver du hjälp med tillgång eller nedladdning?</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px; color: #38bdf8;"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Skicka ett meddelande</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Kopiera e-postadressen nedan eller klicka på knappen för att skicka din fråga till oss.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem 1.5rem; border-radius:10px; display:inline-block;">
                <span style="font-size: 1.15rem; font-weight: 700; color:#38bdf8; user-select: all;">${APP_DATA.config.contactEmail}</span>
             </div>
             <a class="premium-btn support-email-button" href="mailto:${APP_DATA.config.contactEmail}?subject=${encodeURIComponent(APP_DATA.config.emailSubject)}&body=${encodeURIComponent(APP_DATA.config.emailBodyTemplate)}"><i data-lucide="mail"></i>Kontakta supporten</a>
          </div>
        </div>
      `;
  }

});
