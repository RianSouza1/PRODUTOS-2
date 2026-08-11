/**
 * APP CORE ENGINE
 * אזור חברים (Mobile First & Senior Friendly)
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

  window.restartYtVideo = function() {
    if (window.activeYtPlayer && typeof window.activeYtPlayer.seekTo === 'function') {
      window.activeYtPlayer.seekTo(0, true);
      window.activeYtPlayer.playVideo();
    }
  };

  window.setYtSpeed = function(rate) {
    if (window.activeYtPlayer && typeof window.activeYtPlayer.setPlaybackRate === 'function') {
      window.activeYtPlayer.setPlaybackRate(rate);
    }
    document.querySelectorAll('.speed-btn').forEach(b => {
      b.style.background = 'var(--bg-body)';
      b.style.color = 'var(--text-dark)';
      b.style.borderColor = 'var(--border-light)';
      b.style.transform = 'scale(1)';
    });
    const active = document.querySelector(`.speed-btn[data-rate="${rate}"]`);
    if (active) {
      active.style.background = 'var(--primary)';
      active.style.color = 'white';
      active.style.borderColor = 'var(--primary)';
      active.style.transform = 'scale(1.1)';
    }
  };

  window.toggleWatched = function(videoId) {
    const key = `watched_${videoId}`;
    const isWatched = localStorage.getItem(key) === '1';
    if (isWatched) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, '1');
    }
    const nowWatched = !isWatched;
    const btn = document.getElementById(`watched-btn-${videoId}`);
    if (btn) {
      btn.style.borderColor = nowWatched ? 'var(--primary)' : 'var(--border-light)';
      btn.style.background = nowWatched ? 'var(--primary-light)' : 'transparent';
      btn.style.color = nowWatched ? 'var(--primary)' : 'var(--text-muted)';
      btn.innerHTML = nowWatched
        ? '<i data-lucide="check-circle" style="width:18px;height:18px;"></i> <span>נצפה</span>'
        : '<i data-lucide="circle" style="width:18px;height:18px;"></i> <span>סמן כנצפה</span>';
      if (window.lucide) lucide.createIcons();
    }
    const badge = document.getElementById(`watched-badge-${videoId}`);
    if (badge) badge.style.display = nowWatched ? 'inline-flex' : 'none';
  };

  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  let currentVideoId = APP_DATA.videos.length > 0 ? APP_DATA.videos[0].id : null;

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
          <a href="${mailHref}" class="floating-help-btn" title="עזרה ותמיכה">
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
      brandTitle.innerText = APP_DATA.config.brandName || "אזור חברים";
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
         &copy; 2026 ${APP_DATA.config.brandName || "מאסטרי בגיטרה אקוסטית"}. כל הזכויות שמורות.
       </footer>
    `);

    renderIcons();
    document.querySelector('.app-container').scrollTo(0, 0);
  }

  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>ברוך הבא, חבר!</h1><p>למה תרצה לגשת היום?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">ספרים</div>
                 <div class="home-block-subtitle">ספרים וחומרי PDF</div>
              </div>
            </a>
            
            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">סרטונים</div>
                 <div class="home-block-subtitle">שיעורי וידאו ומדריכים</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">צור קשר</div>
                 <div class="home-block-subtitle">עזרה ותמיכה</div>
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'מיוחד'}</span>
               <span class="premium-format">PDF &bull; מסמך להורדה</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                     <i data-lucide="book-open"></i> קרא עכשיו
                  </a>
                  <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                     <i data-lucide="download"></i> הורד PDF
                  </a>
               </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title">משאבים נוספים</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'משאב'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="קרא עכשיו">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="הורד PDF">
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>החומרים שלך</h1><p>לחץ על האוספים למטה כדי לצפות ולהוריד את הספרים שלך.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="assets/covers/gui_IMG1_he.png" alt="מאסטרי בגיטרה אקוסטית" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>אין חומרים זמינים כרגע.</p>'}
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
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'מיוחד'}</span>
               <span class="premium-format">גישה מקוונת</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" class="premium-cover-img">
           </div>

           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'למד עוד'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>תכניות נוספות</h1><p>גלה תכניות וחומרים נוספים.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>עדכונים חדשים בקרוב!</p>'}
          </div>
        </div>
      `;
  }

  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>תמיכת לקוחות</h1><p>השביעות רצון שלך היא בעדיפות הראשונה שלנו.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">שלח הודעה</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 העתק את כתובת הדוא"ל למטה ושלח לנו את שאלתך. צוות התמיכה שלנו יענה בהקדם האפשרי.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const safeVideo = allVideos.find(v => v.id === currentVideoId) || allVideos[0] || null;

    rootEl.innerHTML = `
      <div class="page-view" style="padding-top:0; padding-left:0; padding-right:0; background: var(--bg-body);">
      <div class="playlist-container" style="padding: 24px var(--safe-padding);">
        <div class="hero-card glass-panel" style="margin-top:-24px;"><div class="hero-text"><h1>שיעורי וידאו</h1><p>צפה במדריכי אקורדים לגיטרה למתחילים — ללא דיבורים, רק צליל גיטרה.</p></div></div>
        
        <div style="background-color: rgba(16, 185, 129, 0.1); color: var(--primary); border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; font-weight: 500; font-size: 0.95rem;" class="glass-panel">
           <i data-lucide="clock" style="width: 20px; height: 20px; flex-shrink: 0; color: #10B981;"></i>
           <span>שיעורים חדשים בקרוב</span>
        </div>

        <div id="video-playlist-items">
        </div>
      </div>
        </div>
      `;

    const playlistContainer = document.getElementById("video-playlist-items");
    if (!playlistContainer) return;

    playlistContainer.innerHTML = allVideos.map(vid => {
      const isPlaying = vid.id === (safeVideo ? safeVideo.id : null);
      const vidSrc = vid.videoUrl || vid.embedUrl || vid.src || null;

      return `
         <div style="background: var(--bg-card); border-radius: 16px; border: 1px solid ${isPlaying ? 'var(--primary)' : 'var(--border-light)'}; margin-bottom: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: all 0.2s;">
            
            <a href="#videos" onclick="window.currentVideoId='${vid.id}'; window.location.hash='#videos'; location.reload(); return false;" style="display: flex; align-items: center; gap: 12px; padding: 16px; text-decoration: none; color: inherit;">
              ${!isPlaying ? `<div style="width:36px;height:36px;background:var(--primary-light);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i data-lucide="play-circle" style="width:18px;height:18px;color:var(--primary);"></i></div>` : ''}
              <div style="display:flex; flex-direction:column; justify-content:center; flex:1; min-width:0;">
                 <h4 style="margin:0 0 4px; font-size:1.05rem; color:${isPlaying ? 'var(--primary)' : 'var(--text-dark)'}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${vid.title}</h4>
                 <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                   <p style="margin:0; font-size:0.82rem; color:var(--text-muted);">${vid.duration || 'שיעור מלא'}</p>
                   ${`<span id="watched-badge-${vid.id}" style="display:${typeof localStorage !== 'undefined' && localStorage.getItem('watched_'+vid.id)==='1'?'inline-flex':'none'}; align-items:center; gap:3px; font-size:0.72rem; font-weight:700; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:20px;"><i data-lucide="check" style="width:10px;height:10px;"></i> נצפה</span>`}
                 </div>
              </div>
              ${isPlaying
          ? '<i data-lucide="chevron-down" style="color:var(--primary); align-self:center; flex-shrink:0;"></i>'
          : '<i data-lucide="chevron-right" style="opacity:0.35; align-self:center; flex-shrink:0;"></i>'}
            </a>
            
      ${isPlaying ? `
              <div class="play-item-body" style="padding: 0 16px 16px 16px; animation: slideDown 0.3s ease;">
                 ${vid.youtubeId ? `
                 <div id="video-container-${vid.id}" class="video-wrapper-container" style="position: relative; border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); aspect-ratio: 9 / 16; max-height: 520px; margin: 0 auto;">
                    <div id="yt-player-${vid.id}" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></div>
                    <div class="video-click-overlay" onclick="window.toggleActiveYtPlay()" style="position: absolute; top: 50px; left: 0; width: 100%; height: calc(100% - 80px); cursor: pointer; z-index: 5;"></div>
                    <div style="position:absolute;top:0;left:0;width:100%;height:50px;background:#000;z-index:6;pointer-events:none;"></div>
                    <div style="position:absolute;bottom:0;left:0;width:100%;height:30px;background:#000;z-index:6;pointer-events:none;"></div>
                    <div style="position:absolute;bottom:30px;right:0;width:140px;height:34px;background:#000;z-index:6;pointer-events:none;"></div>
                    <div style="position:absolute;bottom:30px;left:0;width:100px;height:34px;background:#000;z-index:6;pointer-events:none;"></div>
                 </div>
                 <div style="background:var(--bg-card); border:1px solid var(--border-light); border-radius:0 0 12px 12px; padding: 10px 14px; display:flex; flex-direction:column; gap:10px;">

                   <div style="display:flex; justify-content:center; align-items:center; gap:10px;">
                     <button onclick="window.restartYtVideo()" title="הפעל מחדש" style="background:var(--bg-body); color:var(--text-dark); border:1px solid var(--border-light); border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;">
                       <i data-lucide="skip-back" style="width:18px;height:18px;"></i>
                     </button>
                     <button class="play-pause-btn" onclick="window.toggleActiveYtPlay()" style="background:var(--primary); color:white; border:none; border-radius:50%; width:50px; height:50px; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.2); flex-shrink:0;">
                       <i data-lucide="pause" style="width:22px;height:22px;"></i>
                     </button>
                     <button onclick="window.toggleCustomFullscreen('video-container-${vid.id}')" title="מסך מלא" style="background:var(--bg-body); color:var(--text-dark); border:1px solid var(--border-light); border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0;">
                       <i data-lucide="maximize" style="width:18px;height:18px;"></i>
                     </button>
                   </div>

                   <div style="display:flex; align-items:center; gap:6px; justify-content:center; flex-wrap:wrap;">
                     <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted); margin-right:4px;">מהירות</span>
                     ${['0.5','0.75','1','1.25','1.5'].map(r => `
                     <button class="speed-btn ${r==='1'?'speed-active':''}" data-rate="${r}" onclick="window.setYtSpeed(${r})" style="font-size:0.72rem; font-weight:600; padding:4px 10px; border-radius:20px; border:1px solid var(--border-light); cursor:pointer; transition:all 0.2s; background:${r==='1'?'var(--primary)':'var(--bg-body)'}; color:${r==='1'?'white':'var(--text-dark)'}; min-width:42px;">${r}x</button>`).join('')}
                   </div>

                   <div style="display:flex; justify-content:center;">
                     <button id="watched-btn-${vid.id}" onclick="window.toggleWatched('${vid.id}')" class="${localStorage.getItem('watched_${vid.id}')==='1'?'watched-active':''}" style="display:flex; align-items:center; gap:6px; padding:8px 20px; border-radius:30px; border:1.5px solid ${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary)':'var(--border-light)'}; background:${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary-light)':'transparent'}; color:${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary)':'var(--text-muted)'}; cursor:pointer; font-size:0.85rem; font-weight:600; transition:all 0.2s;">
                       <i data-lucide="${localStorage.getItem('watched_${vid.id}')==='1'?'check-circle':'circle'}" style="width:18px;height:18px;"></i>
                       <span>${localStorage.getItem('watched_${vid.id}')==='1'?'נצפה':'סמן כנצפה'}</span>
                     </button>
                   </div>

                 </div>
                 ` : (vidSrc && (vidSrc.includes('tynk.ai') || vidSrc.includes('iframe') || !vidSrc.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i))) ? `
                 <iframe 
                    src="${vidSrc}" 
                    frameborder="0" 
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    style="width: 100%; aspect-ratio: 16 / 9; height: auto; border-radius: 12px; border: none; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                 </iframe>
                 ` : `
                 <video controls style="width: 100%; aspect-ratio: 16 / 9; height: auto; border-radius: 12px; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <source src="${vidSrc}" type="video/mp4">
                 </video>
                 `}
              </div>
      ` : ''}
         </div>
      `;
    }).join('');

    renderIcons();

    if (safeVideo && safeVideo.youtubeId) {
      setTimeout(() => {
        if (window.YT && window.YT.Player) {
          window.activeYtPlayer = new YT.Player(`yt-player-${safeVideo.id}`, {
            videoId: safeVideo.youtubeId,
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              fs: 0,
              playsinline: 1,
              iv_load_policy: 3,
              disablekb: 1,
              cc_load_policy: 0
            },
            events: {
              onStateChange: function(event) {
                const playBtn = document.querySelector('.play-pause-btn');
                if (playBtn) {
                  if (event.data === YT.PlayerState.PLAYING) {
                    playBtn.innerHTML = '<i data-lucide="pause" style="width:22px;height:22px;"></i>';
                  } else {
                    playBtn.innerHTML = '<i data-lucide="play" style="width:22px;height:22px;"></i>';
                  }
                  renderIcons();
                }
              }
            }
          });
        }
      }, 300);
    }
  }

});
