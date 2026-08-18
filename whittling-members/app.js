/**
 * APP CORE ENGINE
 * ÁREA DE MEMBROS (Mobile First & Senior Friendly)
 * Nenhuma alteração de conteúdo ou curso deve ocorrer aqui. 
 * Apenas em data.js
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
      brandTitle.innerText = APP_DATA.config.brandName || "Área de Membros";
    }
  }

  function mountMailTo() {
    const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
  }

  // ----------------------------------------------------------------------
  // 2. SISTEMA DE ROTEAMENTO SPA (O "Coração" da navegação)
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
      case "#contato":
        renderContato();
        break;
      default:
        renderHome();
        break;
    }

    rootEl.insertAdjacentHTML('beforeend', `
       <footer class="app-footer" style="text-align:center; font-size:0.75rem; font-weight: 500; color:#6B7280; padding: 2rem 1rem 1.5rem; letter-spacing: 0.5px;">
         &copy; 2026 RSCA Library. All rights reserved.
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Bem-vindo, estimado membro!</h1><p>A qual conteúdo você gostaria de ter acesso hoje?</p></div></div>
          
  
          <div class="home-grid">
            
            <a href="#livros" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="book-open"></i>
              </div>
              <div>
                 <div class="home-block-title">Livros</div>
                 <div class="home-block-subtitle">Livros e materiais em PDF</div>
              </div>
            </a>
            
            <a href="#contato" class="home-block glass-panel">
              <div class="home-block-icon" style="background: var(--primary-light); color: var(--primary);">
                 <i data-lucide="message-square"></i>
              </div>
              <div>
                 <div class="home-block-title">Contato</div>
                 <div class="home-block-subtitle">Ajuda e Suporte</div>
              </div>
            </a>
  
          </div>
        </div>
      `;
  }

  // TELA: BOOKS (Materiais tipo Bundle)
  function renderAulas() {
    const videos = APP_DATA.videos || [];
    if (videos.length === 0) {
      rootEl.innerHTML = `<div class="glass-panel"><p style="color:var(--text-muted)">Nenhuma aula disponível.</p></div>`;
      return;
    }

    const activeVidId = window.activeVideoId || videos[0].id;
    const safeVideo = videos.find(v => v.id === activeVidId) || videos[0];

    const listCardsHTML = videos.map(vid => {
      const isActive = vid.id === safeVideo.id;
      const isWatched = localStorage.getItem('watched_' + vid.id) === '1';

      return `
        <div class="card-bloco glass-panel ${isActive ? 'active-video-item' : ''}" style="padding:1rem; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:1rem; border:${isActive ? '1px solid var(--primary)' : '1px solid var(--border-light)'}" onclick="window.activeVideoId='${vid.id}'; location.hash='#aulas';">
           <div style="display:flex; align-items:center; gap:0.85rem">
              <div style="width:40px; height:40px; border-radius:10px; background:${isActive ? 'var(--primary)' : 'var(--primary-light)'}; color:${isActive ? '#fff' : 'var(--primary)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0">
                 <i data-lucide="${isActive ? 'play-circle' : (isWatched ? 'check-circle' : 'film')}" style="width:20px; height:20px"></i>
              </div>
              <div>
                 <h4 style="font-size:0.95rem; font-weight:600; color:var(--text-dark); margin-bottom:0.2rem">${vid.title}</h4>
                 <span style="font-size:0.8rem; color:var(--text-muted)">${vid.duration || ''}</span>
              </div>
           </div>
           ${isWatched ? `<span style="font-size:0.75rem; background:rgba(34,197,94,0.15); color:#22c55e; padding:0.25rem 0.5rem; border-radius:6px; font-weight:600">Concluída</span>` : ''}
        </div>
      `;
    }).join('');

    rootEl.innerHTML = `
      <div class="page-view">
        <div class="hero-card glass-panel">
           <div class="hero-text">
              <h1>Aulas Práticas de Entalhe</h1>
              <p>${safeVideo ? safeVideo.title : 'Selecione uma aula acima para assistir'}</p>
           </div>
        </div>

        ${safeVideo ? `
          <div class="glass-panel" style="padding:0.75rem; margin-bottom:1.5rem; border-radius:16px;">
             <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; background:#000;">
                <iframe src="https://www.youtube.com/embed/${safeVideo.youtubeId}?autoplay=1&rel=0" 
                        title="${safeVideo.title}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen 
                        style="position:absolute; top:0; left:0; width:100%; height:100%; border-radius:12px;">
                </iframe>
             </div>
             <div style="padding:1rem 0.5rem 0.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem">
                <div>
                   <h3 style="font-size:1.1rem; font-weight:700; color:var(--text-dark)">${safeVideo.title}</h3>
                   <p style="font-size:0.85rem; color:var(--text-muted)">${safeVideo.duration || ''}</p>
                </div>
                <button class="download-btn" style="width:auto; padding:0.5rem 1rem; font-size:0.85rem;" onclick="const curr = localStorage.getItem('watched_${safeVideo.id}'); localStorage.setItem('watched_${safeVideo.id}', curr === '1' ? '0' : '1'); location.hash='#aulas';">
                   <i data-lucide="${localStorage.getItem('watched_' + safeVideo.id) === '1' ? 'check-circle' : 'check'}" style="width:16px; height:16px"></i>
                   <span>${localStorage.getItem('watched_' + safeVideo.id) === '1' ? 'Concluída' : 'Marcar como Assistida'}</span>
                </button>
             </div>
          </div>
        ` : ''}

        <div style="display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1.5rem">
           ${listCardsHTML}
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  function renderLivros() {
    const featuredBooks = APP_DATA.books.slice(0, 3);
    const compactBooks = APP_DATA.books.slice(3);

    const featuredHTML = featuredBooks.map(bk => {
      const featuresHTML = bk.features
        ? `<ul class="premium-checklist">
      ${bk.features.map(f => `<li><i data-lucide="check-square" style="color:#10B981; width:16px; height:16px;"></i> <span>${f}</span></li>`).join('')}
             </ul>`
        : '';

      // Só exibe capa individual no card se for uma imagem de capa individual e não a imagem do combo/bundle geral
      const hasDistinctCover = bk.coverImage && !bk.coverImage.includes('smo_IMG1') && !bk.coverImage.includes('SMK_IMG1');
      const coverHTML = hasDistinctCover ? `
           <div class="premium-cover-container">
              <img src="${bk.coverImage}" alt="${bk.title}" loading="lazy" class="premium-cover">
           </div>` : '';

      return `
      <div class="premium-book-card">
           <div class="premium-badge-wrapper">
              <span class="premium-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'ESPECIAL'}</span>
              <span class="premium-format">PDF • Documento Baixável</span>
           </div>
           
           ${coverHTML}
           
           <div class="premium-info">
              <h3 class="premium-title">${bk.title}</h3>
              <p class="premium-desc">${bk.description}</p>
              
              ${featuresHTML}
              
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; margin-top: 1.5rem;">
                 <a href="${bk.downloadUrl}" target="_blank" class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: var(--primary); color: #FFF;">
                    <i data-lucide="book-open"></i> Ler agora
                 </a>
                 <a href="${bk.downloadUrl}" download class="premium-btn" style="width: 100%; text-align: center; justify-content: center; background: transparent; color: var(--text-dark); border: 1px solid var(--border-light);">
                    <i data-lucide="download"></i> Baixar PDF
                 </a>
              </div>
           </div>
        </div>
      `;
    }).join('');

    let compactHTML = '';
    if (compactBooks.length > 0) {
      compactHTML = `
      <h2 class="section-divider-title">Recursos e exercícios adicionais</h2>
      <div class="compact-book-list">
        ${compactBooks.map(bk => `
          <div class="compact-book-card">
            <div class="compact-book-info">
              <h4 class="compact-book-title">${bk.title}</h4>
              <span class="compact-book-badge" style="background-color: ${bk.badgeColor || 'var(--primary)'}">${bk.badgeText || 'Recurso'}</span>
            </div>
            <div class="compact-book-actions">
              <a href="${bk.downloadUrl}" target="_blank" class="compact-action-btn btn-read" title="Ler agora">
                <i data-lucide="book-open"></i>
              </a>
              <a href="${bk.downloadUrl}" download class="compact-action-btn btn-download" title="Baixar PDF">
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
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Seus materiais</h1><p>Clique nas coleções abaixo para ver e baixar seus livros.</p></div></div>
          
          <div class="premium-hero-cover-container" style="text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); max-width: 480px; margin-left: auto; margin-right: auto;">
              <img src="assets/covers/whi_IMG1_pt.png" alt="Escultura em Madeira & Entalhe Manual" style="max-width: 260px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          </div>

          <div class="list-container">
            ${featuredHTML || '<p>Nenhum material cadastrado no momento.</p>'}
            ${compactHTML}
          </div>
        </div>
      `;
  }

  // TELA: CONTACT
  function renderContato() {
    const mailHref = mountMailTo();

    rootEl.innerHTML = `
      <div class="page-view">
          <div class="hero-card glass-panel"><div class="hero-text"><h1>Suporte ao Cliente</h1><p>Sua satisfação é nossa prioridade.</p></div></div>
          
  
          <div class="card-bloco glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
             <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-light)">
               <i data-lucide="mail" style="width: 32px; height: 32px"></i>
             </div>
             
             <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Enviar uma mensagem</h3>
             <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
                Copie o endereço de e-mail abaixo e envie-nos sua dúvida. Nossa equipe de suporte responderá o mais rápido possível.
             </p>
             
             <div style="background:var(--bg-body); border:1px solid var(--border-light); padding:1rem; border-radius:8px; display:inline-block;">
                <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
             </div>
          </div>
        </div>
      `;
  }

});
