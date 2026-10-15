/* Zona de miembros de piano — Español. */
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
                <h1>¡Bienvenido a tu zona de miembros!</h1>
                <p>¿Qué materiales quieres consultar hoy?</p>
            </div></div>
            <div class="home-grid">
                <a href="#libros" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="book-open" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">Tus libros</h2><p class="home-block-subtitle">Tres libros de piano para leer y descargar en PDF</p></div>
                </a>
                <a href="#videos" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="play-circle" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">Vídeos demostrativos</h2><p class="home-block-subtitle">Seis demostraciones breves con manos reales al piano</p></div>
                </a>
                <a href="#soporte" class="home-block glass-panel">
                    <div class="home-block-icon"><i data-lucide="message-square" aria-hidden="true"></i></div>
                    <div><h2 class="home-block-title">Soporte</h2><p class="home-block-subtitle">Contacta con nosotros para recibir ayuda</p></div>
                </a>
            </div>
        </div>`;
    }

    function books() {
        const cards = APP_DATA.books.map(book => `<article class="premium-book-card">
            <div class="premium-badge-wrapper">
                <span class="premium-badge" style="background-color:${book.badgeColor}">${escapeHtml(book.badgeText)}</span>
                <span class="premium-format">PDF · ${book.pages} páginas</span>
            </div>
            <div class="premium-info">
                <h2 class="premium-title">${escapeHtml(book.title)}</h2>
                <p class="premium-desc">${escapeHtml(book.description)}</p>
                <ul class="premium-checklist">${book.features.map(feature => `<li><i data-lucide="check-square" aria-hidden="true"></i><span>${escapeHtml(feature)}</span></li>`).join('')}</ul>
                <div class="book-actions">
                    <a href="${escapeHtml(book.downloadUrl)}" target="_blank" rel="noopener" class="premium-btn btn-read-pdf" aria-label="Leer ${escapeHtml(book.title)} (se abre en una pestaña nueva)">
                        <i data-lucide="book-open" aria-hidden="true"></i>Leer ahora
                    </a>
                    <a href="${escapeHtml(book.downloadUrl)}" download class="premium-btn btn-download-pdf" aria-label="Descargar ${escapeHtml(book.title)} en PDF">
                        <i data-lucide="download" aria-hidden="true"></i>Descargar el PDF
                    </a>
                </div>
            </div>
        </article>`).join('');
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>Tus libros de piano</h1>
                <p>Lee y descarga los tres libros que aparecen a continuación. Empieza por las bases, continúa con las piezas y sigue con el reto de 30 días.</p>
            </div></div>
            <div class="premium-hero-cover-container">
                <img src="assets/covers/piano_IMG1_es.png" alt="La colección completa de piano: tres libros en español" class="premium-cover">
            </div>
            <div class="list-container">${cards || '<p>No hay libros disponibles en este momento.</p>'}</div>
        </div>`;
    }

    function assistance() {
        const email = escapeHtml(APP_DATA.config.contactEmail);
        return `<div class="page-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>Soporte</h1><p>Estamos aquí para ayudarte con el acceso y tus materiales.</p>
            </div></div>
            <section class="card-bloco glass-panel support-card">
                <div class="support-icon"><i data-lucide="mail" aria-hidden="true"></i></div>
                <h2>Envíanos un mensaje</h2>
                <p>Copia la dirección de correo electrónico que aparece a continuación o utiliza el botón para escribirnos. Describe tu consulta e indica tu nombre: nuestro equipo te responderá lo antes posible.</p>
                <div class="support-email">${email}</div>
                <a href="${escapeHtml(mailTo())}" class="premium-btn btn-read-pdf"><i data-lucide="mail" aria-hidden="true"></i>Contactar con soporte</a>
            </section>
        </div>`;
    }

    function route() {
        const aliases = { '#livros':'#libros', '#libri':'#libros', '#books':'#libros', '#contato':'#soporte', '#assistenza':'#soporte', '#video':'#videos' };
        let hash = window.location.hash || '#home';
        if (aliases[hash]) {
            hash = aliases[hash];
            history.replaceState(null, '', hash);
        }
        if(['#libros','#videos','#soporte'].includes(hash)) welcome.hidden=true;
        window.PIANO_DEMOS.pause();
        root.innerHTML = hash === '#libros' ? books() : hash === '#videos' ? '' : hash === '#soporte' ? assistance() : home();
        if(hash === '#videos') window.PIANO_DEMOS.render();
        root.insertAdjacentHTML('beforeend', `<footer class="app-footer">&copy; ${new Date().getFullYear()} ${escapeHtml(APP_DATA.config.brandName)}. Todos los derechos reservados.</footer>`);
        nav.classList.toggle('hidden-on-home', !['#libros', '#videos', '#soporte'].includes(hash));
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
        if (!['#libros', '#videos', '#video', '#soporte'].includes(window.location.hash)) window.location.hash = '#libros';
        else route();
        root.focus({ preventScroll: true });
    });
    window.addEventListener('hashchange', route);
    route();
});
