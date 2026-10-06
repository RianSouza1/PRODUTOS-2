document.addEventListener('DOMContentLoaded', () => {
  const {config, labels, books} = APP_DATA;
  const root = document.getElementById('app-root');
  const nav = document.getElementById('main-nav');
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const text = key => escape(labels[key]);
  document.getElementById('brand-title').textContent = config.brandName;
  const icons = () => window.lucide && window.lucide.createIcons();

  document.getElementById('enter-members').addEventListener('click', () => {
    const overlay = document.getElementById('pre-page');
    overlay.style.opacity = '0';
    window.location.hash = config.booksRoute;
    setTimeout(() => { overlay.hidden = true; document.getElementById('page-heading')?.focus(); }, 600);
  });

  function hero(title, subtitle) {
    return `<div class="hero-card glass-panel"><div class="hero-text"><h1 id="page-heading" tabindex="-1">${title}</h1><p>${subtitle}</p></div></div>`;
  }

  function renderHome() {
    return `<div class="page-view">${hero(text('welcome'), text('homeIntro'))}<div class="home-grid">
      <a href="#${config.booksRoute}" class="home-block glass-panel"><div class="home-block-icon"><i data-lucide="book-open"></i></div><div><div class="home-block-title">${text('books')}</div><div class="home-block-subtitle">${text('booksSubtitle')}</div></div></a>
      <a href="#${config.supportRoute}" class="home-block glass-panel"><div class="home-block-icon"><i data-lucide="message-square"></i></div><div><div class="home-block-title">${text('support')}</div><div class="home-block-subtitle">${text('supportSubtitle')}</div></div></a>
    </div></div>`;
  }

  function renderBooks() {
    const cards = books.map(book => `<article class="premium-book-card">
      <div class="premium-badge-wrapper"><span class="premium-badge" style="background-color:${book.badgeColor}">${escape(book.badgeText)}</span><span class="premium-format">${text('format')}</span></div>
      <div class="premium-info"><h2 class="premium-title">${escape(book.title)}</h2><p class="premium-desc">${escape(book.description)}</p>
        <ul class="premium-checklist">${book.features.map(feature => `<li><i data-lucide="check-square"></i><span>${escape(feature)}</span></li>`).join('')}</ul>
        <div class="book-actions"><a href="${book.downloadUrl}" target="_blank" rel="noopener" class="premium-btn"><i data-lucide="book-open"></i>${text('read')}</a>
        <a href="${book.downloadUrl}" download class="premium-btn secondary-download"><i data-lucide="download"></i>${text('download')}</a></div>
      </div></article>`).join('');
    return `<div class="page-view">${hero(text('materials'), text('materialsIntro'))}
      <div class="adult-collection-cover"><img src="${config.coverImage}" alt="${escape(config.collectionName)}" width="1254" height="1254"><p>${escape(config.collectionName)}</p></div>
      <div class="list-container">${cards || `<p>${text('empty')}</p>`}</div></div>`;
  }

  function renderSupport() {
    const mail = `mailto:${config.contactEmail}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(labels.emailBody)}`;
    return `<div class="page-view">${hero(text('supportTitle'), text('supportIntro'))}<div class="card-bloco glass-panel adult-support">
      <div class="support-icon"><i data-lucide="mail"></i></div><h2>${text('message')}</h2><p>${text('supportBody')}</p>
      <a class="support-address" href="mailto:${config.contactEmail}">${escape(config.contactEmail)}</a>
      <a class="premium-btn" href="${mail}"><i data-lucide="mail"></i>${text('emailButton')}</a>
    </div></div>`;
  }

  function render() {
    const hash = window.location.hash.slice(1);
    const isBooks = hash === config.booksRoute;
    const isSupport = hash === config.supportRoute;
    root.innerHTML = isBooks ? renderBooks() : isSupport ? renderSupport() : renderHome();
    root.insertAdjacentHTML('beforeend', `<footer class="app-footer">&copy; 2026 ${escape(config.brandName)}. ${text('rights')}</footer>`);
    nav.classList.toggle('hidden-on-home', !isBooks && !isSupport);
    document.querySelectorAll('.tab-item').forEach(tab => {
      const active = tab.getAttribute('href') === `#${hash}`;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current','page'); else tab.removeAttribute('aria-current');
    });
    icons();
    document.querySelector('.app-container').scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);
  render();
});
