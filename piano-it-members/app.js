/* Area riservata di pianoforte — Italiano */
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app-root');
    const brand = document.getElementById('brand-title');
    const nav = document.getElementById('main-nav');
    const welcome = document.getElementById('pre-page');
    const tabs = document.querySelectorAll('.tab-item');
    let selectedLesson = 0;

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
                <a href="#video" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="play-circle" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">Video dimostrativi</h2><p class="home-block-subtitle">Sei esercizi brevi, con solo il suono del pianoforte</p></div>
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

    function videos() {
        const lessons = APP_DATA.videos || [];
        const lesson = lessons[selectedLesson] || lessons[0];
        if (!lesson) return '<div class="page-view"><h1>Video dimostrativi</h1><p>Nessuna dimostrazione disponibile al momento.</p></div>';
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>Guarda, ascolta e prova</h1>
                <p>Sei brevi dimostrazioni animate: segui i tasti illuminati e le dita indicate. L’audio contiene solo pianoforte, senza narrazione o voci di sottofondo.</p>
            </div></div>
            <section class="piano-lesson-card" aria-labelledby="lesson-title">
                <div class="piano-lesson-heading">
                    <div><p class="piano-lesson-eyebrow">Dimostrazione ${selectedLesson + 1} di ${lessons.length} · ${escapeHtml(lesson.category)}</p>
                    <h2 id="lesson-title">${escapeHtml(lesson.title)}</h2></div>
                    <span class="piano-lesson-badge">${escapeHtml(lesson.duration)} · Solo pianoforte</span>
                </div>
                <video id="piano-player" class="piano-demo-player" controls playsinline preload="none" poster="${escapeHtml(lesson.poster)}" aria-label="Dimostrazione: ${escapeHtml(lesson.title)}" aria-describedby="lesson-description">
                    <source src="${escapeHtml(lesson.videoUrl)}" type="video/mp4">
                    Il tuo browser non supporta questo video. <a href="${escapeHtml(lesson.videoUrl)}">Apri la dimostrazione</a>.
                </video>
                <p id="video-status" class="piano-player-status" role="status" hidden></p>
                <div class="piano-playback-tools">
                    <div class="piano-speed-tools" role="group" aria-label="Velocità di riproduzione">
                        <span>Velocità</span>
                        <button type="button" data-speed="0.75" aria-pressed="false">0,75×</button>
                        <button type="button" data-speed="1" aria-pressed="true">1×</button>
                    </div>
                    <button type="button" data-replay><i data-lucide="rotate-ccw" aria-hidden="true"></i>Ricomincia</button>
                </div>
                <div class="piano-lesson-details">
                    <p id="lesson-description">${escapeHtml(lesson.description)}</p>
                    <h3>Prova anche tu</h3>
                    <ol>${lesson.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
                    <p class="piano-finger-legend">Dita: 1 = pollice · 2 = indice · 3 = medio · 4 = anulare · 5 = mignolo.</p>
                </div>
            </section>
            <section class="piano-lesson-library" aria-labelledby="choose-lesson">
                <h2 id="choose-lesson">Scegli una dimostrazione</h2>
                <div class="piano-lesson-list">${lessons.map((item,index) => `<button type="button" class="piano-lesson-choice ${index === selectedLesson ? 'selected' : ''}" data-lesson="${index}" aria-pressed="${index === selectedLesson}">
                    <span class="piano-lesson-number">${String(index+1).padStart(2,'0')}</span>
                    <span class="piano-lesson-choice-text"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.category)} · ${escapeHtml(item.duration)}</span></span>
                    <i data-lucide="${index === selectedLesson ? 'check-circle' : 'play-circle'}" aria-hidden="true"></i>
                </button>`).join('')}</div>
            </section>
            <p class="piano-sound-credits">Suoni: <a href="https://github.com/Tonejs/audio/tree/master/salamander" target="_blank" rel="noopener">Salamander Grand Piano — Alexander Holm</a>, adattati per gli esercizi. <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a>.</p>
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
        const aliases = { '#livros': '#libri', '#contato': '#assistenza', '#videos': '#video' };
        let hash = window.location.hash || '#home';
        if (aliases[hash]) {
            hash = aliases[hash];
            history.replaceState(null, '', hash);
        }
        const previousPlayer = document.getElementById('piano-player');
        if (previousPlayer) previousPlayer.pause();
        root.innerHTML = hash === '#libri' ? books() : hash === '#video' ? videos() : hash === '#assistenza' ? assistance() : home();
        root.insertAdjacentHTML('beforeend', `<footer class="app-footer">&copy; ${new Date().getFullYear()} ${escapeHtml(APP_DATA.config.brandName)}. Tutti i diritti riservati.</footer>`);
        nav.classList.toggle('hidden-on-home', !['#libri', '#video', '#assistenza'].includes(hash));
        tabs.forEach(tab => {
            const active = tab.getAttribute('href') === hash;
            tab.classList.toggle('active', active);
            if (active) tab.setAttribute('aria-current', 'page');
            else tab.removeAttribute('aria-current');
        });
        renderIcons();
        const player = document.getElementById('piano-player');
        if (player) player.addEventListener('error', () => {
            const status = document.getElementById('video-status');
            status.textContent = 'Non è stato possibile caricare il video. Aggiorna la pagina oppure riprova tra poco.';
            status.hidden = false;
        });
        root.scrollTo(0, 0);
    }

    root.addEventListener('click', event => {
        const lessonButton = event.target.closest('button[data-lesson]');
        if (lessonButton) {
            const index = Number(lessonButton.dataset.lesson);
            if (Number.isInteger(index) && index >= 0 && index < APP_DATA.videos.length) {
                selectedLesson = index;
                route();
                root.focus({ preventScroll: true });
            }
            return;
        }
        const player = document.getElementById('piano-player');
        if (!player) return;
        const speedButton = event.target.closest('button[data-speed]');
        if (speedButton) {
            player.playbackRate = Number(speedButton.dataset.speed);
            root.querySelectorAll('button[data-speed]').forEach(button => button.setAttribute('aria-pressed', button === speedButton ? 'true' : 'false'));
        }
        if (event.target.closest('button[data-replay]')) {
            player.currentTime = 0;
            player.play().catch(() => {
                const status = document.getElementById('video-status');
                status.textContent = 'Premi il pulsante di riproduzione per iniziare.';
                status.hidden = false;
            });
        }
    });

    brand.textContent = APP_DATA.config.brandName;
    document.getElementById('brand-logo').addEventListener('error', event => { event.currentTarget.hidden = true; });
    document.getElementById('enter-resources').addEventListener('click', () => {
        welcome.hidden = true;
        if (!['#libri', '#video', '#videos', '#assistenza'].includes(window.location.hash)) window.location.hash = '#libri';
        else route();
        root.focus({ preventScroll: true });
    });
    window.addEventListener('hashchange', route);
    route();
});
