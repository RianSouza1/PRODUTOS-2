document.addEventListener('DOMContentLoaded', () => {
  const {config, labels, books} = APP_DATA;
  const root = document.getElementById('app-root');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('pre-page');
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const text = key => escape(labels[key]);
  const paths = {
    'book-open':'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    'message-square':'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'check-square':'<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
  nav.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });

  function enter() {
    overlay.hidden = true;
    if (!window.location.hash) window.location.hash = config.booksRoute;
    document.getElementById('page-heading')?.focus();
  }
  document.getElementById('enter-members').addEventListener('click', enter);

  function hero(title, subtitle) {
    return `<div class="hero-card glass-panel"><div class="hero-text"><h1 id="page-heading" tabindex="-1">${title}</h1><p>${subtitle}</p></div></div>`;
  }
  function renderHome() {
    return `<div class="page-view">${hero(text('welcome'), text('homeIntro'))}<div class="home-grid">
      <a href="#${config.booksRoute}" class="home-block glass-panel"><div class="home-block-icon">${icon('book-open')}</div><div><div class="home-block-title">${text('books')}</div><div class="home-block-subtitle">${text('booksSubtitle')}</div></div></a>
      <a href="#${config.supportRoute}" class="home-block glass-panel"><div class="home-block-icon">${icon('message-square')}</div><div><div class="home-block-title">${text('support')}</div><div class="home-block-subtitle">${text('supportSubtitle')}</div></div></a>
    </div></div>`;
  }
  function renderBooks() {
    const cards = books.map(book => `<article class="premium-book-card">
      <div class="premium-badge-wrapper"><span class="premium-badge" style="background-color:${book.badgeColor}">${escape(book.badgeText)}</span><span class="premium-format">PDF · ${book.pageCount} ${text('pagesUnit')} · ${escape(book.fileSizeLabel)}</span></div>
      <div class="premium-info"><h2 class="premium-title">${escape(book.title)}</h2><p class="premium-desc">${escape(book.description)}</p>
        <ul class="premium-checklist">${book.features.map(feature => `<li>${icon('check-square')}<span>${escape(feature)}</span></li>`).join('')}</ul>
        <div class="book-actions"><a href="${book.downloadUrl}" target="_blank" rel="noopener" class="premium-btn">${icon('book-open')}${text('read')}</a>
        <a href="${book.downloadUrl}" download class="premium-btn secondary-download">${icon('download')}${text('download')}</a></div>
      </div></article>`).join('');
    return `<div class="page-view">${hero(text('materials'), text('materialsIntro'))}
      <div class="collection-cover"><img src="${config.coverImage}" alt="${escape(config.collectionName)}" width="1254" height="1254"><p>${escape(config.collectionName)}</p></div>
      <div class="list-container">${cards || `<p>${text('empty')}</p>`}</div></div>`;
  }
  function renderSupport() {
    const mail = `mailto:${config.contactEmail}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(labels.emailBody)}`;
    return `<div class="page-view">${hero(text('supportTitle'), text('supportIntro'))}<div class="card-bloco glass-panel support-card">
      <div class="support-icon">${icon('mail')}</div><h2>${text('message')}</h2><p>${text('supportBody')}</p>
      <a class="support-address" href="mailto:${config.contactEmail}">${escape(config.contactEmail)}</a>
      <a class="premium-btn" href="${mail}">${icon('mail')}${text('emailButton')}</a>
    </div></div>`;
  }
  function render() {
    let hash = '';
    try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { hash = ''; }
    const isBooks = hash === config.booksRoute || hash === 'books';
    const isSupport = hash === config.supportRoute || hash === 'support';
    if (isBooks || isSupport) overlay.hidden = true;
    root.innerHTML = isBooks ? renderBooks() : isSupport ? renderSupport() : renderHome();
    root.insertAdjacentHTML('beforeend', `<footer class="app-footer">&copy; 2026 ${escape(config.brandName)}. ${text('rights')}</footer>`);
    nav.classList.toggle('hidden-on-home', !isBooks && !isSupport);
    const route = isBooks ? config.booksRoute : isSupport ? config.supportRoute : '';
    nav.querySelectorAll('.tab-item').forEach(tab => {
      const active = tab.getAttribute('href') === `#${route}`;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current','page'); else tab.removeAttribute('aria-current');
    });
    root.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);
  render();
});
