/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 * Nenhuma alteração de conteúdo ou curso deve ocorrer aqui. 
 * Apenas em data.js
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

  // Variável para armazenar qual ID de vídeo foi escolhido para tocar
  let currentVideoId = APP_DATA.videos.length > 0 ? APP_DATA.videos[0].id : null;

  // ----------------------------------------------------------------------
  // 1. INICIALIZAÇÃO DA BASE (Header e Global Settings)
  // ----------------------------------------------------------------------
  initGlobalConfig();
  handleRouting();

  // Ouvinte para trocar a rota cada vez que o hash (url/#tela) mudar.
  window.addEventListener("hashchange", handleRouting);

  // Re-renderizar ícones Lucide sempre que novas views surgirem
  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function initGlobalConfig() {
    if (APP_DATA.config) {
      brandTitle.innerText = APP_DATA.config.brandName || "Mitgliederbereich";
    }
  }

  // Cria a string `mailto:` dinamicamente com base no contato do data.js
  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. SISTEMA DE ROTEAMENTO SPA (O "Coração" da navegação)
  // ----------------------------------------------------------------------
  function handleRouting() {
    // 2.1 Verifica a rota atual. Se vazio, joga para #home
    let currentHash = window.location.hash || "#home";

    // 2.2 Limpar a tela
    rootEl.innerHTML = "";

    // 2.3 Destacar Aba Inferior Ativa
    updateBottomNavBar(currentHash);

    // 2.4 Controlar Opções Flutuantes exclusivas de Telas Internas
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
        renderHome(); // Prevenção de Rota Perdida (Sênior Friendly)
        break;
    }

    // Injetar o footer global de Copyright no final de todas as telas
    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#6B7280; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
         &copy; 2026 ${APP_DATA.config.brandName || "Die Naturapotheke"}. Alle Rechte vorbehalten.
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
    // Regra 1: Na Home, o bottomNav não deve aparecer para não distrair
    if (hash === "#home") {
      bottomNav.classList.add('hidden-on-home');
    } else {
      bottomNav.classList.remove('hidden-on-home');
    }

    // Regra 2: Ocultar Botão Flutuante de Ajuda APENAS se estiver na aba do menu Contato
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Willkommen, Mitglied</h1><p>Worauf möchten Sie heute zugreifen?</p></div></div>
          
  
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">BÜCHER</div>
                 <div class="home-block-subtitle">E-Books und PDF-Materialien</div>
              </div>
            </a>
            
            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">KONTAKT</div>
                 <div class="home-block-subtitle">Hilfe und Unterstützung</div>
              </div>
            </a>
  
          </div>
        </div>
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
      <div class="premium-book-card" style="margin-bottom: 2rem;">
           <div class="premium-badge-wrapper">
              <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'SPECIAL'}</span>
              <span class="premium-format">PDF • Jetzt lesen</span>
           </div>
           
           <div class="premium-info" style="padding: 0;">
              <h3 class="premium-title" style="margin-top: 0.5rem;">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                 <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                    <i data-lucide="book-open"></i> Jetzt lesen
                 </a>
                 <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                    <i data-lucide="download"></i> PDF herunterladen
                 </a>
              </div>
           </div>
        </div >
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view" style="padding-bottom: 0;">
          <div class="hero-card glass-panel" style="margin-bottom: 1.5rem;"><div class="hero-text"><h1>Ihre Materialien</h1><p>Greifen Sie unten auf Ihre Leitfäden und Boni zu.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="assets/covers/Alemão - img1.png" alt="Die Naturapotheke Kollektion" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>
          
          <div class="list-container">
            ${booksHTML || '<p>Derzeit sind keine Materialien registriert.</p>'}
          </div>
        </div>
      `;
  }

  // TELA: OTHER PRODUCTS
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
              <span class="premium-format">Online Access</span>
           </div>
           
           <div class="premium-cover-container">
              <img src="${prod.coverImage}" alt="${prod.title}" loading="lazy" class="premium-cover">
           </div>
           
           <div class="premium-info">
              <h3 class="premium-title">${prod.title}</h3>
              <p class="premium-desc">${prod.description}</p>
              
              ${featuresHTML}
              
              <a href="${prod.linkUrl}" target="_blank" class="premium-btn">
                 <i data-lucide="external-link"></i> ${prod.buttonText || 'Conhecer Mais'}
              </a>
           </div>
        </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Other Programs</h1><p>Discover materials to improve your health.</p></div></div>
          
          
          <div class="list-container">
            ${prodsHTML || '<p>More news coming soon!</p>'}
          </div>
        </div>
      `;
  }

  // TELA: CONTACT (100% Nativa E-mail)
  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Studentensupport</h1><p>Ihre Zufriedenheit ist unsere Priorität.</p></div></div>
          
  
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Nachricht senden</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Kopieren Sie die unten stehende Adresse und senden Sie eine E-Mail mit Ihrer Frage. Unser Team wird so schnell wie möglich antworten.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

  // ----------------------------------------------------------------------
  // 4. MÓDULO COMPLEXO: RENDERIZADOR DE VIDEOS
  // ----------------------------------------------------------------------
  function renderVideos() {
    const allVideos = APP_DATA.videos || [];
    const safeVideo = allVideos.find(v => v.id === currentVideoId) || allVideos[0] || null;

    // Render do Layout (Sem Top Player, apenas a Playlist Sanduíche)
    rootEl.innerHTML = `
      <div class="page-view" style="padding-top:0; padding-left:0; padding-right:0; background: var(--bg-body);">
      <div class="playlist-container" style="padding: 24px var(--safe-padding);">
        <div class="hero-card glass-panel" style="margin-top:-24px;"><div class="hero-text"><h1>Your Classes</h1><p>Stay up to date with your online practices</p></div></div>
        
        

        <div id="video-playlist-items">
          <!-- JS Injeta Aulas Aqui -->
        </div>
      </div>
        </div>
      `;

    // Atualizar lista da Playlist
    if (safeVideo) {
      attachPlaylistEvents(allVideos, safeVideo.id);
    }
  }

  // Função global para iniciar o Play (Nativo HTML5)
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

    // Força o Autoplay Programático para o usuário não precisar clicar 2 vezes (1 no banner, 1 no player)
    setTimeout(() => {
      const player = document.getElementById('main-native-player');
      if (player) {
        player.play().catch(e => console.log('Autoplay preventivo nativo:', e));
      }
    }, 100);
  };

  function attachPlaylistEvents(videosArray, activeVideoId) {
    const playlistEl = document.getElementById("video-playlist-items");
    if (!playlistEl) return;

    // Montar a árvore HTML (Sanduíche/Accordion)
    const playlistHtml = videosArray.map((vid, index) => {
      const isPlaying = vid.id === activeVideoId;
      const vidSrc = vid.videoUrl || vid.embedUrl;

      return `
      <div class="card-bloco play-item glass-panel ${isPlaying ? 'active-play' : ''}" style="margin-bottom:16px; display:flex; flex-direction:column; padding:0; overflow:hidden;" data-video-id="${vid.id}">
            
            <!-- Cabeçalho Clicável -->
            <a href="javascript:void(0)" class="play-item-header" style="display:flex; padding: 16px; text-decoration:none; color:inherit;">
              <div style="display:flex; flex-direction:column; justify-content:center; flex:1">
                 <h4 style="margin:0 0 4px; font-size:1.1rem; color:${isPlaying ? 'var(--primary)' : 'var(--text-dark)'}">${vid.title}</h4>
                 <p style="margin:0; font-size:0.9rem; color:${isPlaying ? 'var(--text-dark)' : 'var(--text-muted)'}">${vid.duration || 'Full Class'}</p>
              </div>
              ${isPlaying
          ? '<i data-lucide="chevron-down" style="color:var(--primary); align-self:center;"></i>'
          : '<i data-lucide="play-circle" style="opacity:0.5; align-self:center;"></i>'}
            </a>
            
            <!-- Corpo do Vídeo (Só aparece se estiver ativo) -->
      ${isPlaying ? `
              <div class="play-item-body" style="padding: 0 16px 16px 16px; animation: slideDown 0.3s ease;">
                 <video 
                    src="${vidSrc}" 
                    controls 
                    autoplay 
                    playsinline 
                    controlsList="nodownload" 
                    style="width: 100%; max-height: 260px; display: block; object-fit: contain; border-radius: 12px; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                 </video>
              </div>
            ` : ''
        }
          </div>
    `;
    }).join('');

    playlistEl.innerHTML = playlistHtml;
    renderIcons();

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
