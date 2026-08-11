/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 */

document.addEventListener("DOMContentLoaded", () => {

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
        ? '<i data-lucide="check-circle" style="width:18px;height:18px;"></i> <span>Watched</span>'
        : '<i data-lucide="circle" style="width:18px;height:18px;"></i> <span>Mark as Watched</span>';
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
          <a href="${mailHref}" class="floating-help-btn" title="Help & Support">
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
      brandTitle.innerText = APP_DATA.config.brandName || "Whittling & Woodcarving";
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
         &copy; 2026 ${APP_DATA.config.brandName || "Whittling & Woodcarving"}. All rights reserved.
       </footer>
    `);

    renderIcons();
    document.querySelector('.app-container').scrollTo(0, 0);
  }

  function renderHome() {
    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Welcome, valued member!</h1><p>What would you like to access today?</p></div></div>
          
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Books</div>
                 <div class="home-block-subtitle">Books &amp; PDF Materials</div>
              </div>
            </a>
            
            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">Videos</div>
                 <div class="home-block-subtitle">Video Tutorials &amp; Carving Guides</div>
              </div>
            </a>

            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Contact</div>
                 <div class="home-block-subtitle">Help &amp; Support</div>
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
               <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAL'}</span>
               <span class="premium-format">PDF &bull; Downloadable Document</span>
            </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
               <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                  <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                     <i data-lucide="book-open"></i> Read now
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
      <h2 class="section-divider-title">Additional Resources</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0;">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Resource'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Read now">
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

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Your Materials</h1><p>Click the collections below to view and download your books.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="assets/covers/whi_IMG1_en.png" alt="Whittling & Woodcarving" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>No materials registered at this time.</p>'}
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
               <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'SPECIAL'}</span>
               <span class="premium-format">Online Access</span>
            </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" class="premium-cover-img">
           </div>

           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Learn more'}
              </a>
           </div>
         </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Other Programmes</h1><p>Discover more programmes and materials.</p></div></div>
          
          <div class="list-container">
            ${prodsHTML || '<p>More updates coming soon!</p>'}
          </div>
        </div>
      `;
  }

  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Customer Support</h1><p>Your satisfaction is our priority.</p></div></div>
          
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Send a message</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                 Copy the email address below and send us your question. Our support team will reply as quickly as possible.
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
        <div class="hero-card glass-panel" style="margin-top:-24px;"><div class="hero-text"><h1>Video Tutorials</h1><p>Watch step-by-step wood carving demonstrations — no talking, pure visual learning.</p></div></div>
        
        <div style="background-color: rgba(16, 185, 129, 0.1); color: var(--primary); border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; font-weight: 500; font-size: 0.95rem;" class="glass-panel">
           <i data-lucide="clock" style="width: 20px; height: 20px; flex-shrink: 0; color: #10B981;"></i>
           <span>New carving tutorials coming soon</span>
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
      const ytId = vid.youtubeId || null;
      const vidSrc = vid.videoUrl || vid.embedUrl || vid.src || null;

      return `
         <div style="background: var(--bg-card); border-radius: 16px; border: 1px solid ${isPlaying ? 'var(--primary)' : 'var(--border-light)'}; margin-bottom: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03); transition: all 0.2s;">
            
            <a href="#videos" onclick="window.currentVideoId='${vid.id}'; window.location.hash='#videos'; location.reload(); return false;" style="display: flex; align-items: center; gap: 12px; padding: 16px; text-decoration: none; color: inherit;">
              ${!isPlaying ? `<div style="width:36px;height:36px;background:var(--primary-light);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><i data-lucide="play-circle" style="width:18px;height:18px;color:var(--primary);"></i></div>` : ''}
              <div style="display:flex; flex-direction:column; justify-content:center; flex:1; min-width:0;">
                 <h4 style="margin:0 0 4px; font-size:1.05rem; color:${isPlaying ? 'var(--primary)' : 'var(--text-dark)'}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${vid.title}</h4>
                 <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                   <p style="margin:0; font-size:0.82rem; color:var(--text-muted);">${vid.duration || 'Full tutorial'}</p>
                   ${`<span id="watched-badge-${vid.id}" style="display:${typeof localStorage !== 'undefined' && localStorage.getItem('watched_'+vid.id)==='1'?'inline-flex':'none'}; align-items:center; gap:3px; font-size:0.72rem; font-weight:700; color:var(--primary); background:var(--primary-light); padding:2px 8px; border-radius:20px;"><i data-lucide="check" style="width:10px;height:10px;"></i> Watched</span>`}
                 </div>
              </div>
              ${isPlaying
          ? '<i data-lucide="chevron-down" style="color:var(--primary); align-self:center; flex-shrink:0;"></i>'
          : '<i data-lucide="chevron-right" style="opacity:0.35; align-self:center; flex-shrink:0;"></i>'}
            </a>
            
      ${isPlaying ? `
              <div class="play-item-body" style="padding: 0 16px 16px 16px; animation: slideDown 0.3s ease;">
                 
                 <div class="video-wrapper-container" style="position: relative; border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); aspect-ratio: 16 / 9; width: 100%; max-width: 800px; margin: 0 auto 12px auto;">
                    ${ytId ? `
                    <iframe 
                       src="https://www.youtube.com/embed/${ytId}?rel=0" 
                       title="${vid.title}"
                       frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen 
                       style="width: 100%; height: 100%; position: absolute; top:0; left:0; border: none; border-radius: 12px;">
                    </iframe>
                    ` : (vidSrc && (vidSrc.includes('tynk.ai') || vidSrc.includes('iframe') || !vidSrc.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i))) ? `
                    <iframe 
                       src="${vidSrc}" 
                       frameborder="0" 
                       scrolling="no"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen 
                       style="width: 100%; height: 100%; position: absolute; top:0; left:0; border: none; background: #000;">
                    </iframe>
                    ` : `
                    <video controls style="width: 100%; height: 100%; position: absolute; top:0; left:0; border-radius: 12px; background: #000;">
                       <source src="${vidSrc}" type="video/mp4">
                    </video>
                    `}
                 </div>

                 <div style="background:var(--bg-card); border:1px solid var(--border-light); border-radius:12px; padding: 12px 14px; display:flex; justify-content:center; align-items:center;">
                   <button id="watched-btn-${vid.id}" onclick="window.toggleWatched('${vid.id}')" class="${localStorage.getItem('watched_${vid.id}')==='1'?'watched-active':''}" style="display:flex; align-items:center; gap:6px; padding:8px 20px; border-radius:30px; border:1.5px solid ${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary)':'var(--border-light)'}; background:${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary-light)':'transparent'}; color:${localStorage.getItem('watched_${vid.id}')==='1'?'var(--primary)':'var(--text-muted)'}; cursor:pointer; font-size:0.85rem; font-weight:600; transition:all 0.2s;">
                     <i data-lucide="${localStorage.getItem('watched_${vid.id}')==='1'?'check-circle':'circle'}" style="width:18px;height:18px;"></i>
                     <span>${localStorage.getItem('watched_${vid.id}')==='1'?'Watched':'Mark as Watched'}</span>
                   </button>
                 </div>

              </div>
      ` : ''}
         </div>
      `;
    }).join('');

    renderIcons();
  }

});
