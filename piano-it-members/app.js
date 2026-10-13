/* Area riservata di pianoforte — Italiano */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app-root');
    const brand = document.getElementById('brand-title');
    const nav = document.getElementById('main-nav');
    const welcome = document.getElementById('pre-page');
    const tabs = document.querySelectorAll('.tab-item');

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[character]));
    }

    function renderIcons() {
        if (window.lucide) window.lucide.createIcons();
    }

    function mailTo() {
        const { contactEmail, emailSubject, emailBodyTemplate } = APP_DATA.config;
        return `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyTemplate)}`;
    }

    function home() {
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>Benvenuto nella tua area riservata!</h1>
                <p>Quali risorse vuoi consultare oggi?</p>
            </div></div>
            <div class="home-grid">
                <a href="#libri" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="book-open" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">I tuoi libri</h2><p class="home-block-subtitle">Tre libri di pianoforte da leggere e scaricare in PDF</p></div>
                </a>
                <a href="#assistenza" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="message-square" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">Assistenza</h2><p class="home-block-subtitle">Contattaci per ricevere aiuto</p></div>
                </a>
            </div>
        </div>`;
    }

    function books() {
        const cards = APP_DATA.books.map(book => `<article class="premium-book-card">
            <div class="premium-badge-wrapper">
                <span class="premium-badge" style="background-color:${book.badgeColor}">${escapeHtml(book.badgeText)}</span>
                <span class="premium-format">PDF · ${book.pages} pagine</span>
            </div>
            <div class="premium-info">
                <h2 class="premium-title">${escapeHtml(book.title)}</h2>
                <p class="premium-desc">${escapeHtml(book.description)}</p>
                <ul class="premium-checklist">${book.features.map(feature => `<li><i data-lucide="check-square" aria-hidden="true"></i><span>${escapeHtml(feature)}</span></li>`).join('')}</ul>
                <div class="book-actions">
                    <a href="${escapeHtml(book.downloadUrl)}" target="_blank" rel="noopener" class="premium-btn btn-read-pdf" aria-label="Leggi ${escapeHtml(book.title)} (si apre in una nuova scheda)">
                        <i data-lucide="book-open" aria-hidden="true"></i>Leggi ora
                    </a>
                    <a href="${escapeHtml(book.downloadUrl)}" download class="premium-btn btn-download-pdf" aria-label="Scarica ${escapeHtml(book.title)} in PDF">
                        <i data-lucide="download" aria-hidden="true"></i>Scarica il PDF
                    </a>
                </div>
            </div>
        </article>`).join('');
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>I tuoi libri di pianoforte</h1>
                <p>Leggi e scarica i tre volumi qui sotto. Inizia dalle basi, passa ai brani e continua con la sfida di 30 giorni.</p>
            </div></div>
            <div class="premium-hero-cover-container">
                <img src="assets/covers/piano_IMG1_it.png" alt="La collezione completa di pianoforte: tre libri in italiano" class="premium-cover">
            </div>
            <div class="list-container">${cards || '<p>Nessun libro disponibile al momento.</p>'}</div>
        </div>`;
    }

    function assistance() {
        const email = escapeHtml(APP_DATA.config.contactEmail);
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>Assistenza</h1><p>Siamo qui per aiutarti con l'accesso e i tuoi materiali.</p>
            </div></div>
            <section class="card-bloco glass-panel support-card">
                <div class="support-icon"><i data-lucide="mail" aria-hidden="true"></i></div>
                <h2>Scrivici un messaggio</h2>
                <p>Copia l'indirizzo e-mail qui sotto oppure usa il pulsante per scriverci. Descrivi la tua richiesta e indica il tuo nome: il nostro team ti risponderà al più presto.</p>
                <div class="support-email">${email}</div>
                <a href="${escapeHtml(mailTo())}" class="premium-btn btn-read-pdf"><i data-lucide="mail" aria-hidden="true"></i>Scrivi all'assistenza</a>
            </section>
        </div>`;
    }

    function route() {
        const aliases = { '#livros': '#libri', '#contato': '#assistenza' };
        let hash = window.location.hash || '#home';
        if (aliases[hash]) {
            hash = aliases[hash];
            history.replaceState(null, '', hash);
        }
        root.innerHTML = hash === '#libri' ? books() : hash === '#assistenza' ? assistance() : home();
        root.insertAdjacentHTML('beforeend', `<footer class="app-footer">&copy; ${new Date().getFullYear()} ${escapeHtml(APP_DATA.config.brandName)}. Tutti i diritti riservati.</footer>`);
        nav.classList.toggle('hidden-on-home', hash !== '#libri' && hash !== '#assistenza');
        tabs.forEach(tab => {
            const active = tab.getAttribute('href') === hash;
            tab.classList.toggle('active', active);
            if (active) tab.setAttribute('aria-current', 'page');
            else tab.removeAttribute('aria-current');
        });
        renderIcons();
        root.scrollTo(0, 0);
    }

    brand.textContent = APP_DATA.config.brandName;
    document.getElementById('brand-logo').addEventListener('error', event => { event.currentTarget.hidden = true; });
    document.getElementById('enter-resources').addEventListener('click', () => {
        welcome.hidden = true;
        if (window.location.hash !== '#libri') window.location.hash = '#libri';
        else route();
        root.focus({ preventScroll: true });
    });
    window.addEventListener('hashchange', route);
    route();
});
