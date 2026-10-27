/* Torkning av mat – Swedish member area, using the existing library layout. */
document.addEventListener('DOMContentLoaded', () => {
  const {config, labels, books} = APP_DATA;
  const root = document.getElementById('app-root');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('pre-page');
  const esc = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const text = key => esc(labels[key]);
  function icons() { if (window.lucide) window.lucide.createIcons(); }
  function hero(title, description) {
    return `<div class="hero-card glass-panel"><div class="hero-text"><h1 id="page-heading" tabindex="-1">${title}</h1><p>${description}</p></div></div>`;
  }
  function home() {
    return `<div class="page-view">${hero(text('welcome'), text('homeIntro'))}<div class="home-grid">
      <a href="#${config.booksRoute}" class="home-block glass-panel"><div class="home-block-icon"><i data-lucide="book-open" aria-hidden="true"></i></div><div><div class="home-block-title">${text('books')}</div><div class="home-block-subtitle">${text('booksSubtitle')}</div></div></a>
      <a href="#${config.videosRoute}" class="home-block glass-panel"><div class="home-block-icon"><i data-lucide="clapperboard" aria-hidden="true"></i></div><div><div class="home-block-title">${text('videos')}</div><div class="home-block-subtitle">${text('videosSubtitle')}</div></div></a>
      <a href="#${config.supportRoute}" class="home-block glass-panel"><div class="home-block-icon"><i data-lucide="message-square" aria-hidden="true"></i></div><div><div class="home-block-title">${text('support')}</div><div class="home-block-subtitle">${text('supportSubtitle')}</div></div></a>
    </div></div>`;
  }
  function library() {
    const cards = books.map(book => `<article class="premium-book-card">
      <div class="premium-badge-wrapper"><span class="premium-badge" style="background-color:${book.badgeColor}">${esc(book.badgeText)}</span><span class="premium-format">PDF · ${book.pageCount} ${text('pages')} · ${esc(book.fileSizeLabel)}</span></div>
      <div class="premium-info"><h2 class="premium-title">${esc(book.title)}</h2><p class="premium-desc">${esc(book.description)}</p>
        <ul class="premium-checklist">${book.features.map(feature => `<li><i data-lucide="check-square" aria-hidden="true"></i><span>${esc(feature)}</span></li>`).join('')}</ul>
        <div style="display:flex;flex-direction:column;gap:.75rem;width:100%;margin-top:1.5rem;">
          <a href="${esc(book.downloadUrl)}" target="_blank" rel="noopener" class="premium-btn"><i data-lucide="book-open" aria-hidden="true"></i>${text('read')}</a>
          <a href="${esc(book.downloadUrl)}" download class="premium-btn download-button"><i data-lucide="download" aria-hidden="true"></i>${text('download')}</a>
        </div>
      </div></article>`).join('');
    return `<div class="page-view">${hero(text('library'),text('libraryIntro'))}<div class="collection-cover"><img src="${esc(config.coverImage)}" alt="${esc(config.collectionName)}" width="1254" height="1254"><p>${esc(config.collectionName)}</p></div><div class="list-container">${cards || `<p>${text('empty')}</p>`}</div></div>`;
  }
  function support() {
    const mail = `mailto:${config.contactEmail}?subject=${encodeURIComponent(config.emailSubject)}&body=${encodeURIComponent(config.emailBodyTemplate)}`;
    return `<div class="page-view">${hero(text('supportHeading'),text('supportIntro'))}<section class="card-bloco glass-panel" style="text-align:center;padding:2.5rem 1.5rem;">
      <div class="home-block-icon" style="margin:0 auto 1.25rem;"><i data-lucide="mail" aria-hidden="true"></i></div><h2>${text('supportTitle')}</h2><p style="color:var(--text-muted);line-height:1.65;margin:1rem 0 1.5rem;">${text('supportBody')}</p>
      <a class="support-address" href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a><a class="premium-btn support-email-button" href="${esc(mail)}"><i data-lucide="mail" aria-hidden="true"></i>${text('emailButton')}</a>
    </section></div>`;
  }
  function render() {
    window.FOOD_DEMOS?.destroy();
    let route = window.location.hash.slice(1) || 'home';
    const aliases = {books:config.booksRoute,help:config.supportRoute,support:config.supportRoute,videos:config.videosRoute};
    route = aliases[route] || route;
    const isBooks = route === config.booksRoute;
    const isSupport = route === config.supportRoute;
    const isVideos = route === config.videosRoute;
    if (isBooks || isSupport || isVideos) overlay.hidden = true;
    root.innerHTML = isBooks ? library() : isSupport ? support() : isVideos ? window.FOOD_DEMOS.render() : home();
    root.insertAdjacentHTML('beforeend', `<footer class="member-footer">&copy; 2026 ${esc(config.brandName)}. ${text('rights')}</footer>`);
    nav.classList.toggle('hidden-on-home', !isBooks && !isSupport && !isVideos);
    nav.querySelectorAll('.tab-item').forEach(tab => {
      const active = tab.getAttribute('href') === `#${route}`;
      tab.classList.toggle('active',active);
      if (active) tab.setAttribute('aria-current','page'); else tab.removeAttribute('aria-current');
    });
    icons();
    root.scrollTo(0,0);
  }
  document.getElementById('enter-members').addEventListener('click', () => {
    overlay.hidden = true;
    if (window.location.hash !== `#${config.booksRoute}`) window.location.hash = config.booksRoute;
    document.getElementById('page-heading')?.focus();
  });
  window.addEventListener('hashchange',render);
  render();
});
