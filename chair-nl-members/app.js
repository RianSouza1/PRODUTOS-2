/**
 * APP CORE ENGINE
 * LEDENOMGEVING (Mobile First & Senior Friendly)
 * Stoelgymnastiek voor Senioren — Nederlands
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
  let activeAnimationFrames = {};

  // ----------------------------------------------------------------------
  // 1. BASIS INITIALISATIE
  // ----------------------------------------------------------------------
  initGlobalConfig();
  handleRouting();

  window.addEventListener("hashchange", () => {
    cleanupRunningAnimations();
    handleRouting();
  });

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Stoelgymnastiek voor Senioren";
    }
  }

  function cleanupRunningAnimations() {
    Object.keys(activeAnimationFrames).forEach(id => {
      if (activeAnimationFrames[id]) {
        cancelAnimationFrame(activeAnimationFrames[id]);
      }
    });
    activeAnimationFrames = {};

    Object.keys(activeTimers).forEach(id => {
      if (activeTimers[id]) {
        clearInterval(activeTimers[id]);
      }
    });
    activeTimers = {};
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
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#94a3b8; padding: 2.5rem 1rem 2rem; letter-spacing: 0.5px;">
         &copy; 2026 ${APP_DATA.config.brandName || "Stoelgymnastiek voor Senioren"}. Alle rechten voorbehouden.
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
  // 3. WEERGAVE: HOME
  // ----------------------------------------------------------------------
  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1>Welkom, beste lid!</h1>
              <p>Welke oefeningen of materialen wilt u vandaag bekijken?</p>
            </div>
          </div>
          
          <div class="home-grid">
            
            <a href="#videos" class="home-block glass-panel" style="border: 1px solid rgba(14, 165, 233, 0.4); background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(14, 165, 233, 0.12) 100%);">
              <div class="home-block-icon" style="background: var(--primary); color: #FFF;">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Videodemonstraties</div>
                 <div class="home-block-subtitle">Korte, geluidloze demonstraties van alle oefeningen</div>
              </div>
            </a>

            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Boeken & Handleidingen</div>
                 <div class="home-block-subtitle">Volledige trainingsgidsen en schema's in PDF</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Ondersteuning</div>
                 <div class="home-block-subtitle">Vragen en persoonlijke hulp</div>
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
    const featuredBooks = APP_DATA.books.slice(0, 3);
    const compactBooks = APP_DATA.books.slice(3);

    const featuredHTML = featuredBooks.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:#38bdf8; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
            <div class="premium-badge-wrapper">
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAAL'}</span>
               <span class="premium-format">PDF • Document om te downloaden</span>
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
      <h2 class="section-divider-title">Aanvullende materialen</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Materiaal'}</span>
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

    const heroCoverImg = (APP_DATA.books && APP_DATA.books[0] && APP_DATA.books[0].coverImage) ? APP_DATA.books[0].coverImage : "assets/covers/ch_IMG1_nl.png";
    const heroCoverAlt = (APP_DATA.config && APP_DATA.config.brandName) ? APP_DATA.config.brandName : "Stoelgymnastiek voor Senioren";

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Uw materialen</h1><p>Klik op de onderstaande collecties om uw boeken te lezen en te downloaden.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="${heroCoverImg}" alt="${heroCoverAlt}" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Er zijn momenteel geen materialen beschikbaar.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 5. WEERGAVE: VIDEODEMONSTRATIES (VIDEOS)
  // ----------------------------------------------------------------------
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 1rem;">
          <div class="hero-card glass-panel">
            <div class="hero-text">
              <h1>Videodemonstraties</h1>
              <p>Korte, duidelijke oefeningen zonder geluid — speciaal ontworpen voor senioren.</p>
            </div>
          </div>

          <!-- Soundless info banner -->
          <div class="soundless-banner glass-panel">
             <div class="soundless-icon-box">
                <i data-lucide="volume-x" style="color: #38bdf8; width: 24px; height: 24px;"></i>
             </div>
             <div class="soundless-text">
                <strong>Geluidloze demonstraties</strong>
                <span>Alle video's spelen automatisch zonder geluid in een rustige lus, zodat u zich volledig kunt concentreren op de juiste uitvoering.</span>
             </div>
          </div>

          <!-- Category filter pills -->
          <div class="video-filter-bar">
             <button class="filter-pill ${activeVideoFilter === 'all' ? 'active' : ''}" onclick="window.setExerciseFilter('all')">
               <i data-lucide="layers" style="width: 15px; height: 15px;"></i> Alle (${allVideos.length})
             </button>
             <button class="filter-pill ${activeVideoFilter === 'benen' ? 'active' : ''}" onclick="window.setExerciseFilter('benen')">
               <i data-lucide="activity" style="width: 15px; height: 15px;"></i> Benen & Heupen
             </button>
             <button class="filter-pill ${activeVideoFilter === 'bovenlichaam' ? 'active' : ''}" onclick="window.setExerciseFilter('bovenlichaam')">
               <i data-lucide="zap" style="width: 15px; height: 15px;"></i> Bovenlichaam
             </button>
             <button class="filter-pill ${activeVideoFilter === 'romp' ? 'active' : ''}" onclick="window.setExerciseFilter('romp')">
               <i data-lucide="shield" style="width: 15px; height: 15px;"></i> Romp & Core
             </button>
             <button class="filter-pill ${activeVideoFilter === 'nek' ? 'active' : ''}" onclick="window.setExerciseFilter('nek')">
               <i data-lucide="smile" style="width: 15px; height: 15px;"></i> Nek & Mobiliteit
             </button>
          </div>

          <!-- Video cards grid / list -->
          <div class="exercise-videos-grid" id="exercise-grid">
             <!-- Injected via updateVideoGrid -->
          </div>
      </div>
    `;

    updateVideoGrid();
  }

  window.setExerciseFilter = function(category) {
    activeVideoFilter = category;
    renderVideos();
  };

  function updateVideoGrid() {
    const gridEl = document.getElementById("exercise-grid");
    if (!gridEl) return;

    const allVideos = APP_DATA.videos || [];
    const filteredVideos = activeVideoFilter === "all"
      ? allVideos
      : allVideos.filter(v => v.category === activeVideoFilter);

    if (filteredVideos.length === 0) {
      gridEl.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:2rem;">Geen oefeningen gevonden in deze categorie.</p>`;
      return;
    }

    gridEl.innerHTML = filteredVideos.map(vid => {
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

           <!-- Interactive Demonstration Canvas Screen -->
           <div class="demo-screen-wrapper">
              <div class="demo-badge-mute">
                 <i data-lucide="volume-x" style="width: 14px; height: 14px;"></i> Geluidloos
              </div>
              <div class="demo-badge-loop">
                 <i data-lucide="refresh-cw" style="width: 12px; height: 12px;" class="spin-slow"></i> Lus
              </div>
              <canvas id="canvas-${vid.id}" width="420" height="260" class="exercise-canvas"></canvas>
              
              <!-- Floating control bar on bottom of screen -->
              <div class="demo-screen-controls">
                 <button class="screen-btn play-btn" id="btn-play-${vid.id}" onclick="window.toggleDemoPlay('${vid.id}')" title="Afspelen/Pauzeren">
                    <i data-lucide="pause" style="width: 16px; height: 16px;" id="icon-play-${vid.id}"></i>
                    <span id="text-play-${vid.id}">Pauzeren</span>
                 </button>
                 
                 <div class="speed-selector">
                    <button class="speed-btn active" id="spd-norm-${vid.id}" onclick="window.setDemoSpeed('${vid.id}', 1.0)">1.0x</button>
                    <button class="speed-btn" id="spd-slow-${vid.id}" onclick="window.setDemoSpeed('${vid.id}', 0.6)">0.6x (Langzaam)</button>
                 </div>

                 <button class="screen-btn timer-btn" id="btn-timer-${vid.id}" onclick="window.togglePracticeTimer('${vid.id}')" title="30s Oefentimer">
                    <i data-lucide="timer" style="width: 16px; height: 16px;"></i>
                    <span id="timer-label-${vid.id}">Start 30s</span>
                 </button>
              </div>

              <!-- Practice timer progress bar -->
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
                    Stapsgewijze uitvoering:
                 </div>
                 ${stepsHTML}
              </div>

              <div class="exercise-tip-box">
                 <i data-lucide="info" style="width: 18px; height: 18px; color: #38bdf8; flex-shrink: 0; margin-top: 2px;"></i>
                 <span><strong>Belangrijke tip:</strong> ${vid.tip}</span>
              </div>
           </div>

        </div>
      `;
    }).join('');

    renderIcons();

    // Start canvas animations for each rendered exercise
    filteredVideos.forEach(vid => {
      initExerciseAnimation(vid);
    });
  }

  // ----------------------------------------------------------------------
  // 6. CANVAS SILENT BIOMECHANIC ANIMATION ENGINE
  // ----------------------------------------------------------------------
  const animStates = {};

  function initExerciseAnimation(vid) {
    const canvas = document.getElementById(`canvas-${vid.id}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    animStates[vid.id] = {
      playing: true,
      speed: 1.0,
      phase: Math.random() * Math.PI * 2,
      animType: vid.animType || 'knee_lift',
      timerSeconds: 30,
      timerRunning: false
    };

    function renderFrame() {
      const state = animStates[vid.id];
      if (!state) return;

      if (state.playing) {
        state.phase += 0.035 * state.speed;
      }

      drawExerciseStage(ctx, canvas.width, canvas.height, state.animType, state.phase);

      activeAnimationFrames[vid.id] = requestAnimationFrame(renderFrame);
    }

    renderFrame();
  }

  window.toggleDemoPlay = function(vidId) {
    const state = animStates[vidId];
    if (!state) return;

    state.playing = !state.playing;
    const icon = document.getElementById(`icon-play-${vidId}`);
    const text = document.getElementById(`text-play-${vidId}`);

    if (state.playing) {
      if (icon) icon.setAttribute('data-lucide', 'pause');
      if (text) text.innerText = "Pauzeren";
    } else {
      if (icon) icon.setAttribute('data-lucide', 'play');
      if (text) text.innerText = "Afspelen";
    }
    renderIcons();
  };

  window.setDemoSpeed = function(vidId, speed) {
    const state = animStates[vidId];
    if (!state) return;

    state.speed = speed;
    const btnNorm = document.getElementById(`spd-norm-${vidId}`);
    const btnSlow = document.getElementById(`spd-slow-${vidId}`);

    if (speed === 1.0) {
      if (btnNorm) btnNorm.classList.add('active');
      if (btnSlow) btnSlow.classList.remove('active');
    } else {
      if (btnNorm) btnNorm.classList.remove('active');
      if (btnSlow) btnSlow.classList.add('active');
    }
  };

  window.togglePracticeTimer = function(vidId) {
    const state = animStates[vidId];
    if (!state) return;

    const track = document.getElementById(`timer-track-${vidId}`);
    const bar = document.getElementById(`timer-bar-${vidId}`);
    const label = document.getElementById(`timer-label-${vidId}`);

    if (state.timerRunning) {
      clearInterval(activeTimers[vidId]);
      state.timerRunning = false;
      if (track) track.style.display = 'none';
      if (label) label.innerText = 'Start 30s';
      return;
    }

    state.timerRunning = true;
    let timeLeft = 30;
    if (track) track.style.display = 'block';
    if (label) label.innerText = `${timeLeft}s...`;
    if (bar) bar.style.width = '100%';

    activeTimers[vidId] = setInterval(() => {
      timeLeft -= 1;
      if (label) label.innerText = `${timeLeft}s`;
      if (bar) bar.style.width = `${(timeLeft / 30) * 100}%`;

      if (timeLeft <= 0) {
        clearInterval(activeTimers[vidId]);
        state.timerRunning = false;
        if (label) label.innerText = 'Voltooid! ✓';
        if (bar) bar.style.width = '0%';
        setTimeout(() => {
          if (track) track.style.display = 'none';
          if (label) label.innerText = 'Start 30s';
        }, 3000);
      }
    }, 1000);
  };

  // ----------------------------------------------------------------------
  // 7. CANVAS VECTOR DRAWING ALGORITHMS (HUMANOID BIOMECHANICS)
  // ----------------------------------------------------------------------
  function drawExerciseStage(ctx, w, h, type, phase) {
    ctx.clearRect(0, 0, w, h);

    // Background Gradient with subtle grid
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(1, '#1e293b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Floor Line
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, h - 35);
    ctx.lineTo(w - 30, h - 35);
    ctx.stroke();

    // Chair base anchor
    const cx = w * 0.45;
    const cy = h - 35;

    // Draw Chair
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Chair legs
    ctx.beginPath();
    ctx.moveTo(cx - 28, cy - 65); // Seat front
    ctx.lineTo(cx - 32, cy);      // Front leg
    ctx.moveTo(cx + 22, cy - 65); // Seat back
    ctx.lineTo(cx + 26, cy);      // Back leg
    // Seat cushion
    ctx.moveTo(cx - 35, cy - 65);
    ctx.lineTo(cx + 26, cy - 65);
    // Backrest
    ctx.moveTo(cx + 22, cy - 65);
    ctx.lineTo(cx + 20, cy - 150);
    ctx.stroke();

    // Chair seat highlight
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - 32, cy - 70, 56, 6);

    // Sine osc (-1 to 1) and positive wave (0 to 1)
    const sinVal = Math.sin(phase);
    const wave = (sinVal + 1) / 2;

    // Head, Spine, Pelvis anchors
    let headX = cx - 5;
    let headY = cy - 165;
    let shoulderX = cx - 4;
    let shoulderY = cy - 135;
    let hipX = cx + 5;
    let hipY = cy - 70;
    
    let kneeLX = cx - 35;
    let kneeLY = cy - 70;
    let footLX = cx - 35;
    let footLY = cy;

    let kneeRX = cx - 30;
    let kneeRY = cy - 70;
    let footRX = cx - 30;
    let footRY = cy;

    let elbowX = cx - 12;
    let elbowY = cy - 105;
    let handX = cx - 25;
    let handY = cy - 80;

    let arrowDetails = null;
    let activeHighlight = '#38bdf8';

    // ------------------------------------------------------------------
    // BIOMECHANIC CALCULATIONS PER EXERCISE TYPE
    // ------------------------------------------------------------------
    switch (type) {
      case 'knee_lift':
        // Left knee lifts up and down
        kneeLY = cy - 70 - wave * 45;
        footLX = cx - 42 + wave * 8;
        footLY = cy - wave * 40;
        arrowDetails = { x: cx - 40, y: cy - 35, dir: 'up', text: 'Knie heffen' };
        break;

      case 'calf_raise':
        // Both heels raise up onto balls of feet
        footLY = cy - wave * 18;
        footRY = cy - wave * 18;
        kneeLY = cy - 70 - wave * 8;
        kneeRY = cy - 70 - wave * 8;
        arrowDetails = { x: cx - 35, y: cy - 10, dir: 'up', text: 'Hielen omhoog' };
        break;

      case 'hip_abduction':
        // Leg opens outward
        kneeLX = cx - 35 - wave * 28;
        footLX = cx - 35 - wave * 32;
        arrowDetails = { x: cx - 50, y: cy - 40, dir: 'left', text: 'Zijwaarts' };
        break;

      case 'bicep_curl':
        // Forearms bend up towards shoulders
        handX = cx - 18 - (1 - wave) * 12;
        handY = cy - 125 + (1 - wave) * 45;
        elbowY = cy - 100;
        arrowDetails = { x: cx - 28, y: cy - 100, dir: 'up', text: 'Armen buigen' };
        break;

      case 'shoulder_roll':
        // Shoulder moves in circle
        shoulderX = cx - 4 + Math.cos(phase) * 6;
        shoulderY = cy - 135 + Math.sin(phase) * 8;
        headY = cy - 165 + Math.sin(phase) * 3;
        arrowDetails = { x: cx + 15, y: cy - 145, dir: 'circle', text: 'Cirkelrol' };
        break;

      case 'chest_opener':
        // Elbows pull back, chest opens
        shoulderX = cx - 4 + wave * 4;
        elbowX = cx - 2 - wave * 16;
        elbowY = cy - 130;
        handX = cx - 20 - wave * 22;
        handY = cy - 135;
        headX = cx - 5 + wave * 3;
        arrowDetails = { x: cx - 45, y: cy - 135, dir: 'right', text: 'Borst openen' };
        break;

      case 'wrist_circles':
        // Arms extended forward, hands rotating
        elbowX = cx - 25;
        elbowY = cy - 120;
        handX = cx - 55 + Math.cos(phase) * 10;
        handY = cy - 118 + Math.sin(phase) * 10;
        arrowDetails = { x: cx - 55, y: cy - 100, dir: 'circle', text: 'Polscirkel' };
        break;

      case 'torso_twist':
        // Torso rotates with arms crossed
        headX = cx - 5 + sinVal * 12;
        shoulderX = cx - 4 + sinVal * 16;
        elbowX = cx - 15 + sinVal * 14;
        elbowY = cy - 115;
        handX = cx - 5 + sinVal * 8;
        handY = cy - 120;
        arrowDetails = { x: cx - 5, y: cy - 150, dir: 'twist', text: 'Rotatie' };
        break;

      case 'pelvic_tilt':
        // Spine arches and rounds
        hipX = cx + 5 - sinVal * 8;
        shoulderX = cx - 4 + sinVal * 6;
        headX = cx - 5 + sinVal * 5;
        arrowDetails = { x: cx + 15, y: cy - 90, dir: 'arch', text: 'Kanteling' };
        break;

      case 'side_bend':
        // Body tilts sideways
        headX = cx - 5 - sinVal * 16;
        shoulderX = cx - 4 - sinVal * 14;
        handX = cx - 18 - sinVal * 18;
        handY = cy - 75 + Math.abs(sinVal) * 20;
        arrowDetails = { x: cx - 35, y: cy - 120, dir: 'side', text: 'Zijbuiging' };
        break;

      case 'chin_tuck':
        // Head moves horizontally back and forth
        headX = cx - 5 + wave * 10;
        arrowDetails = { x: cx + 12, y: cy - 165, dir: 'right', text: 'Kin intrekken' };
        break;

      case 'neck_tilt':
        // Head tilts towards shoulder
        headX = cx - 5 + sinVal * 14;
        headY = cy - 165 + Math.abs(sinVal) * 6;
        arrowDetails = { x: cx - 25, y: cy - 175, dir: 'tilt', text: 'Nekrek' };
        break;

      default:
        break;
    }

    // ------------------------------------------------------------------
    // DRAW HUMANOID BODY (Modern Cyber-Teal Anatomy)
    // ------------------------------------------------------------------
    
    // 1. Right/Back Leg (slightly muted)
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(hipX - 5, hipY);
    ctx.lineTo(kneeRX, kneeRY);
    ctx.lineTo(footRX, footRY);
    ctx.stroke();

    // 2. Torso / Spine
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(hipX, hipY);
    ctx.lineTo(shoulderX, shoulderY);
    ctx.stroke();

    // 3. Left/Front Leg (Active & Highlighted)
    ctx.strokeStyle = activeHighlight;
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(hipX, hipY);
    ctx.lineTo(kneeLX, kneeLY);
    ctx.lineTo(footLX, footLY);
    ctx.stroke();

    // Feet
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(footLX, footLY);
    ctx.lineTo(footLX - 16, footLY);
    ctx.moveTo(footRX, footRY);
    ctx.lineTo(footRX - 14, footRY);
    ctx.stroke();

    // 4. Arms
    ctx.strokeStyle = '#e0f2fe';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(shoulderX, shoulderY);
    ctx.lineTo(elbowX, elbowY);
    ctx.lineTo(handX, handY);
    ctx.stroke();

    // 5. Joints (Glowing Nodes)
    const joints = [
      { x: shoulderX, y: shoulderY, r: 4 },
      { x: elbowX, y: elbowY, r: 3.5 },
      { x: handX, y: handY, r: 4 },
      { x: hipX, y: hipY, r: 4.5 },
      { x: kneeLX, y: kneeLY, r: 4.5 },
      { x: footLX, y: footLY, r: 3.5 }
    ];
    joints.forEach(j => {
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // 6. Head
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(headX, headY, 13, 0, Math.PI * 2);
    ctx.fill();

    // Subtle face direction cue
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(headX - 6, headY - 1, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // 7. Motion Arrow & Instruction Text Overlay
    if (arrowDetails) {
      drawMotionArrow(ctx, arrowDetails);
    }

    // 8. Rhythmic Breathing Indicator Pulse
    const breathRad = 16 + wave * 6;
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 + wave * 0.4})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w - 45, 40, breathRad, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(wave > 0.5 ? 'Inademen' : 'Uitademen', w - 45, 44);
  }

  function drawMotionArrow(ctx, arrow) {
    ctx.save();
    ctx.strokeStyle = '#fbbf24';
    ctx.fillStyle = '#fbbf24';
    ctx.lineWidth = 2.5;

    ctx.font = 'bold 11px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(arrow.text, arrow.x, arrow.y - 12);

    if (arrow.dir === 'up') {
      ctx.beginPath();
      ctx.moveTo(arrow.x, arrow.y + 16);
      ctx.lineTo(arrow.x, arrow.y - 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(arrow.x - 5, arrow.y + 4);
      ctx.lineTo(arrow.x, arrow.y - 4);
      ctx.lineTo(arrow.x + 5, arrow.y + 4);
      ctx.fill();
    } else if (arrow.dir === 'left') {
      ctx.beginPath();
      ctx.moveTo(arrow.x + 16, arrow.y);
      ctx.lineTo(arrow.x - 2, arrow.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(arrow.x + 4, arrow.y - 5);
      ctx.lineTo(arrow.x - 4, arrow.y);
      ctx.lineTo(arrow.x + 4, arrow.y + 5);
      ctx.fill();
    } else if (arrow.dir === 'right') {
      ctx.beginPath();
      ctx.moveTo(arrow.x - 16, arrow.y);
      ctx.lineTo(arrow.x + 2, arrow.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(arrow.x - 4, arrow.y - 5);
      ctx.lineTo(arrow.x + 4, arrow.y);
      ctx.lineTo(arrow.x - 4, arrow.y + 5);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(arrow.x, arrow.y + 5, 8, 0, Math.PI * 1.5);
      ctx.stroke();
    }

    ctx.restore();
  }

  // ----------------------------------------------------------------------
  // 8. WEERGAVE: ANDERE PRODUKTEN
  // ----------------------------------------------------------------------
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
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'SPECIAAL'}</span>
               <span class="premium-format">Online toegang</span>
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Meer programma's</h1><p>Ontdek meer aanbevolen gidsen en trainingen.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>Er zijn momenteel geen andere producten beschikbaar.</p>'}
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 9. WEERGAVE: CONTACT / ONDERSTEUNING
  // ----------------------------------------------------------------------
  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Klantenservice</h1><p>Uw tevredenheid is onze hoogste prioriteit.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px; color: #38bdf8;"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Stuur ons een bericht</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Kopieer het onderstaande e-mailadres en stuur ons uw vraag. Ons ondersteuningsteam helpt u zo snel mogelijk verder.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem 1.5rem; border-radius:10px; display:inline-block;">
                <span style="font-size: 1.15rem; font-weight: 700; color:#38bdf8; user-select: all;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

});
