/**
 * APP CORE ENGINE
 * ÃREA DE MEMBROS (Mobile First & Senior Friendly)
 * Nenhuma alteraÃ§Ã£o de conteÃºdo ou curso deve ocorrer aqui. 
 * Apenas em data.js
 */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------------------
  // 0. REFERÃŠNCIAS DO DOM ENCAPSULADAS
  // ----------------------------------------------------------------------
  const rootEl = document.getElementById("app-root");
  const brandTitle = document.getElementById("brand-title");
  const bottomNav = document.getElementById("main-nav");
  const floatingHelp = document.getElementById("floating-help-container");
  const tabItems = document.querySelectorAll(".tab-item");

  // VariÃ¡vel para armazenar qual ID de vÃ­deo foi escolhido para tocar
  let currentVideoId = APP_DATA.videos.length > 0 ? APP_DATA.videos[0].id : null;

  // ----------------------------------------------------------------------
  // 1. INICIALIZAÃ‡ÃƒO DA BASE (Header e Global Settings)
  // ----------------------------------------------------------------------
  initGlobalConfig();
  handleRouting();

  // Ouvinte para trocar a rota cada vez que o hash (url/#tela) mudar.
  window.addEventListener("hashchange", handleRouting);

  // Re-renderizar Ã­cones Lucide sempre que novas views surgirem
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
  window.activeYtPlayer = null; // Guardar a instÃ¢ncia ativa do player

  // Fullscreen CSS injections
  if (!document.getElementById("fullscreen-css")) {
      const style = document.createElement('style');
      style.id = "fullscreen-css";
      style.textContent = `
          .video-wrapper-container:fullscreen {
              background: #000 !important;
              display: flex !important;
              flex-direction: column;
              justify-content: center;
              width: 100vw !important;
              height: 100vh !important;
          }
          .video-wrapper-container:fullscreen .yt-16-9-wrapper {
              padding-bottom: 0 !important;
              height: calc(100vh - 68px) !important;
              flex-grow: 1;
              position: relative;
          }
          .video-wrapper-container:-webkit-full-screen {
              background: #000 !important;
              display: flex !important;
              flex-direction: column;
              justify-content: center;
              width: 100vw !important;
              height: 100vh !important;
          }
          .video-wrapper-container:-webkit-full-screen .yt-16-9-wrapper {
              padding-bottom: 0 !important;
              height: calc(100vh - 68px) !important;
              flex-grow: 1;
              position: relative;
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

  window.toggleYtPlayPause = function() {
      if(window.activeYtPlayer && typeof window.activeYtPlayer.getPlayerState === 'function') {
          const state = window.activeYtPlayer.getPlayerState();
          if (state === 1) { // 1 = playing
              window.activeYtPlayer.pauseVideo();
          } else {
              window.activeYtPlayer.playVideo();
          }
      }
  };

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Ãrea de Membros";
    }
  }

  // Cria a string `mailto:` dinamicamente com base no contato do data.js
  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. SISTEMA DE ROTEAMENTO SPA (O "CoraÃ§Ã£o" da navegaÃ§Ã£o)
  // ----------------------------------------------------------------------
  function handleRouting() {
    // 2.1 Verifica a rota atual. Se vazio, joga para #home
    let currentHash = window.location.hash || "#home";

    // 2.2 Limpar a tela
    rootEl.innerHTML = "";

    // 2.3 Destacar Aba Inferior Ativa
    updateBottomNavBar(currentHash);

    // 2.4 Controlar OpÃ§Ãµes Flutuantes exclusivas de Telas Internas
    togglePersistentElements(currentHash);

    // 2.5 Injetar a view correta dentro da main
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
        renderHome(); // PrevenÃ§Ã£o de Rota Perdida (SÃªnior Friendly)
        break;
    }

    // Injetar o footer global de Copyright no final de todas as telas
    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#6B7280; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
         &copy; 2026 RSCA Library. All rights reserved.
       </footer>
    `);

    renderIcons();
    // Emula que a tela rolou de volta para cima ao trocar de rota
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
    // Regra 1: Na Home, o bottomNav nÃ£o deve aparecer para nÃ£o distrair
    if (hash === "#home") {
      bottomNav.classList.add('hidden-on-home');
    } else {
      bottomNav.classList.remove('hidden-on-home');
    }

    // Regra 2: Ocultar BotÃ£o Flutuante de Ajuda APENAS se estiver na aba do menu Contato
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Bem-vindo, Membro</h1><p>O que gostaria de consultar hoje?</p></div></div>
          
  
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">LIVROS</div>
                 <div class="home-block-subtitle">Livros e materiais PDF</div>
              </div>
            </a>
            
            <a href="#videos" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="play-circle"></i>
              </div>
              <div>
                 <div class="home-block-title">VÍDEOS</div>
                 <div class="home-block-subtitle">Os seus cursos em vídeo</div>
              </div>
            </a>
  
            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">CONTACTO</div>
                 <div class="home-block-subtitle">Ajuda e suporte</div>
              </div>
            </a>
  
          </div>
        </div >
      `;
  }

  // TELA: BOOKS (Materiais tipo Bundle)
  function renderLivros() {
    const booksHTML = APP_DATA.books.map(bk => {
      // Create features checklist HTML
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
           <div class="premium-badge-wrapper">
              <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAL'}</span>
              <span class="premium-format">PDF • Descarregamento Digital</span>
           </div>
           
           <div class="premium-cover-container">
              <img src="${bk.coverImage}" alt="${bk.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                 <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                    <i data-lucide="book-open"></i> Ler agora
                 </a>
                 <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                    <i data-lucide="download"></i> Descarregar PDF
                 </a>
              </div>
           </div>
        </div >
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Os Seus Materiais</h1><p>Toque numa coleção abaixo para ver o conteúdo.</p></div></div>
          
          
          <div class="list-container">
            ${booksHTML || '<p>Nenhum material registado de momento.</p>'}
          </div>
        </div>
      `;
  }

  // SCREEN: OTHER PRODUCTS
  function renderOutrosProdutos() {
    const prodsHTML = APP_DATA.otherProducts.map(prod => {
      // Create features checklist HTML
      const featuresHTML = prod.features
        ? `<ul class="premium-checklist">
      ${prod.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      return `
      <div class="premium-book-card">
           <div class="premium-badge-wrapper">
              <span class="premium-badge" style="background-color: ${prod.badgeColor || 'var(--primary)'}">${prod.badgeText || 'SPECIAL'}</span>
              <span class="premium-format">Acesso online</span>
           </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Saber mais'}
              </a>
           </div>
        </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Mais Programas</h1><p>Descubra materiais adicionais.</p></div></div>
          
          
          <div class="list-container">
            ${prodsHTML || '<p>Mais novidades em breve!</p>'}
          </div>
        </div>
      `;
  }

  // SCREEN: CONTACT
  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Suporte</h1><p>A sua satisfação é a nossa prioridade.</p></div></div>
          
  
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Enviar uma mensagem</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Copie o endereço abaixo e envie-nos um e-mail com a sua questão. A nossa equipa responderá o mais rapidamente possível.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 4. COMPLEX MODULE: VIDEO RENDERER
  // ----------------------------------------------------------------------
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const safeVideo = allVideos.find(v => v.id === currentVideoId) || allVideos[0] || null;

    // Layout Render (No Top Player, only Sandwich Playlist)
    rootEl.innerHTML = `
      <div class="page-view" style="padding-top:0; padding-left:0; padding-right:0; background: var(--bg-body);">
      <div class="playlist-container" style="padding: 24px var(--safe-padding);">
        <div class="hero-card glass-panel" style="margin-top:-24px;">
          <div class="hero-text">
            <h1>Os Seus Cursos</h1>
            <p style="margin-bottom: 12px;">Playlist organizada em 3 módulos sequenciais:</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(4px); padding: 4px 10px; border-radius: 100px; font-size: 0.8rem; font-weight: 600; color: #FFF; border: 1px solid rgba(255, 255, 255, 0.25);">🐝 Meliponicultura (Aulas 1-10)</span>
              <span style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(4px); padding: 4px 10px; border-radius: 100px; font-size: 0.8rem; font-weight: 600; color: #FFF; border: 1px solid rgba(255, 255, 255, 0.25);">🍷 Hidromel (Aulas 11-93)</span>
              <span style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(4px); padding: 4px 10px; border-radius: 100px; font-size: 0.8rem; font-weight: 600; color: #FFF; border: 1px solid rgba(255, 255, 255, 0.25);">🇪🇸 Espanhol (Aulas 94-110)</span>
            </div>
          </div>
        </div>

        <div id="video-playlist-items">
          <!-- JS Injects Lessons Here -->
        </div>
      </div>
        </div>
      `;

    // Update Playlist List
    if (safeVideo) {
      attachPlaylistEvents(allVideos, safeVideo.id);
    }
  }

  // Global function to start Play (HTML5 Native)
  window.startCustomPlay = function (wrapper, videoSrc) {
    if (wrapper.classList.contains('is-playing')) return;

    const container = wrapper.querySelector('.custom-player-iframe-container');

    container.innerHTML = `
      <video 
            id="main-native-player"
            src="${videoSrc}" 
            controls 
            playsinline 
            controlsList="nodownload" 
            style="width: 100%; height: 100%; display: block; object-fit: contain; border-radius: 4px; background: #000;">
         </video>
      `;

    wrapper.classList.add('is-playing');

    // Force Programmatic Autoplay so the user doesn't have to click twice
    setTimeout(() => {
      const player = document.getElementById('main-native-player');
      if (player) {
        player.play().catch(e => console.log('Native autoplay prevented:', e));
      }
    }, 100);
  };

  function attachPlaylistEvents(videosArray, activeVideoId) {
    const playlistEl = document.getElementById("video-playlist-items");
    if (!playlistEl) return;

    // Assemble HTML tree (Sandwich/Accordion)
    const playlistHtml = videosArray.map((vid, index) => {
      const isPlaying = vid.id === activeVideoId;
      const vidSrc = vid.videoUrl || vid.embedUrl;

      return `
      <div class="card-bloco play-item glass-panel ${isPlaying ? 'active-play' : ''}" style="margin-bottom:16px; display:flex; flex-direction:column; padding:0; overflow:hidden;" data-video-id="${vid.id}">
            
            <!-- Clickable Header -->
            <a href="javascript:void(0)" class="play-item-header" style="display:flex; padding: 16px; text-decoration:none; color:inherit;">
              <div style="display:flex; flex-direction:column; justify-content:center; flex:1">
                 <h4 style="margin:0 0 4px; font-size:1.1rem; color:${isPlaying ? 'var(--primary)' : 'var(--text-dark)'}">${vid.title}</h4>
                 <p style="margin:0; font-size:0.9rem; color:${isPlaying ? 'var(--text-dark)' : 'var(--text-muted)'}">${vid.duration || 'Curso completo'}</p>
              </div>
              ${isPlaying
          ? '<i data-lucide="chevron-down" style="color:var(--primary); align-self:center;"></i>'
          : '<i data-lucide="play-circle" style="opacity:0.5; align-self:center;"></i>'}
            </a>
            
            <!-- Corpo do VÃ­deo (SÃ³ aparece se estiver ativo) -->
      ${isPlaying ? `
              <div class="play-item-body" style="padding: 0 16px 16px 16px; animation: slideDown 0.3s ease;">
                 ${vid.iframeUrl ? `
                 <div class="video-wrapper-container" style="border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); padding-bottom: 56.25%; position: relative;">
                    <iframe src="${vid.iframeUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
                 ` : vid.youtubeId ? `
                 <div id="video-container-${vid.id}" class="video-wrapper-container" style="border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; flex-direction: column;">
                    <div class="yt-16-9-wrapper" onclick="window.toggleYtPlayPause()" style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; flex-shrink: 0; cursor: pointer;">
                        <div id="yt-player-${vid.id}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 20px; padding: 12px; background: var(--bg-body); border-top: 1px solid var(--border-light); flex-shrink: 0;">
                        <button id="yt-play-pause-btn" onclick="window.toggleYtPlayPause()" style="background:var(--primary-light); color:var(--primary); border:none; border-radius: 50%; width: 44px; height: 44px; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><i data-lucide="pause" style="width: 20px; height: 20px;"></i></button>
                        <button onclick="window.toggleCustomFullscreen('video-container-${vid.id}')" style="background:var(--bg-body); color:var(--text-dark); border: 1px solid var(--border-light); border-radius: 50%; width: 44px; height: 44px; display:flex; align-items:center; justify-content:center; cursor:pointer;"><i data-lucide="maximize" style="width: 20px; height: 20px;"></i></button>
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
                 <video 
                    src="${vidSrc}" 
                    controls 
                    autoplay 
                    playsinline 
                    controlsList="nodownload" 
                    onclick="this.paused ? this.play() : this.pause();"
                    style="width: 100%; max-height: 260px; display: block; object-fit: contain; border-radius: 12px; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                 </video>
                 `}
              </div>
            ` : ''
        }
          </div>
    `;
    }).join('');

    playlistEl.innerHTML = playlistHtml;
    renderIcons();

    // Inicializar YouTube Player caso o vÃ­deo ativo tenha youtubeId
    const activeVidObj = videosArray.find(v => v.id === activeVideoId);
    if (activeVidObj && activeVidObj.youtubeId) {
        const initYT = () => {
            if (window.activeYtPlayer && typeof window.activeYtPlayer.destroy === 'function') {
                window.activeYtPlayer.destroy();
            }
            window.activeYtPlayer = new YT.Player(`yt-player-${activeVidObj.id}`, {
                videoId: activeVidObj.youtubeId,
                playerVars: {
                    'controls': 0, // Esconde a barra nativa, usamos apenas os nossos botÃµes
                    'disablekb': 1,
                    'modestbranding': 1,
                    'rel': 0,
                    'showinfo': 0,
                    'fs': 0, // Desativa botÃ£o fullscreen nativo, usamos o nosso
                    'playsinline': 1
                },
                events: {
                    'onReady': (event) => { 
                        // Autoplay nem sempre funciona sem interaÃ§Ã£o, mas tentamos
                        event.target.playVideo(); 
                    },
                    'onStateChange': (event) => {
                        const btn = document.getElementById('yt-play-pause-btn');
                        if (!btn) return;
                        if (event.data === 1) { // Playing
                            btn.innerHTML = '<i data-lucide="pause" style="width: 20px; height: 20px;"></i>';
                            btn.style.background = 'var(--primary-light)';
                            btn.style.color = 'var(--primary)';
                        } else { // Paused or other
                            btn.innerHTML = '<i data-lucide="play" style="width: 20px; height: 20px; margin-left: 2px;"></i>';
                            btn.style.background = 'var(--primary)';
                            btn.style.color = 'white';
                        }
                        if(window.lucide) window.lucide.createIcons();
                    }
                }
            });
        };
        
        if (window.YT && window.YT.Player) {
            initYT();
        } else {
            const checkYT = setInterval(() => {
                if (window.YT && window.YT.Player) {
                    clearInterval(checkYT);
                    initYT();
                }
            }, 100);
        }
    }

    // Adicionar comportamentos de clique na lista
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

});

