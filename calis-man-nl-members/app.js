/**
 * Calisthenics voor Mannen — App Logic (Nederlands)
 */

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('app-root');
    const navItems = document.querySelectorAll('.tab-item');

    function handleRoute() {
        const hash = location.hash.replace('#', '') || 'livros';
        
        navItems.forEach(item => {
            if (item.dataset.tab === hash) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        if (hash === 'contato') {
            renderContato();
        } else {
            renderLivros();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderLivros() {
        const books = APP_DATA.books || [];
        
        const booksHTML = books.map((book) => {
            const featuresHTML = (book.features || []).map(f => `
                <li style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; color:var(--text-muted); margin-bottom:0.35rem;">
                    <i data-lucide="check-circle-2" style="width:16px; height:16px; color:var(--primary); flex-shrink:0;"></i>
                    <span>${f}</span>
                </li>
            `).join('');

            return `
                <div class="card-bloco glass-panel" style="padding:1.5rem; margin-bottom:1.5rem; border-radius:16px;">
                    <div style="display:flex; flex-direction:column; gap:1.25rem;">
                        <div style="width:100%; max-width:280px; margin:0 auto; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.15);">
                            <img src="${book.coverImage}" alt="${book.title}" style="width:100%; height:auto; display:block; object-fit:cover;">
                        </div>
                        <div style="flex:1;">
                            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                                <span style="background:${book.badgeColor || 'var(--primary)'}; color:#fff; font-size:0.75rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:20px; text-transform:uppercase;">
                                    ${book.badgeText}
                                </span>
                            </div>
                            <h2 style="font-size:1.25rem; font-weight:700; color:var(--text-dark); margin-bottom:0.5rem; line-height:1.3;">
                                ${book.title}
                            </h2>
                            <p style="font-size:0.925rem; color:var(--text-muted); margin-bottom:1rem; line-height:1.5;">
                                ${book.description}
                            </p>
                            <ul style="list-style:none; padding:0; margin:0 0 1.25rem 0;">
                                ${featuresHTML}
                            </ul>
                            <a href="${book.downloadUrl}" download class="download-btn" style="display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; width:100%; padding:0.85rem 1.25rem; background:var(--primary); color:#fff; font-weight:700; border-radius:10px; text-decoration:none; transition:all 0.2s ease;">
                                <i data-lucide="download" style="width:18px; height:18px;"></i>
                                <span>${book.buttonText}</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        rootEl.innerHTML = `
            <div class="page-view">
                <div class="hero-card glass-panel" style="padding:1.5rem; margin-bottom:1.5rem; border-radius:16px; text-align:center; background:linear-gradient(135deg, rgba(30,58,138,0.1), rgba(6,95,70,0.1));">
                    <h1 style="font-size:1.5rem; font-weight:800; color:var(--text-dark); margin-bottom:0.5rem;">
                        Welkom bij Calisthenics voor Mannen
                    </h1>
                    <p style="font-size:0.95rem; color:var(--text-muted); max-width:600px; margin:0 auto;">
                        Download hieronder je complete gidsen voor calisthenics, spieropbouw en voeding.
                    </p>
                </div>
                ${booksHTML}
            </div>
        `;

        if (window.lucide) lucide.createIcons();
    }

    function renderContato() {
        const config = APP_DATA.config || {};
        
        rootEl.innerHTML = `
            <div class="page-view">
                <div class="glass-panel" style="padding:1.5rem; border-radius:16px; text-align:center;">
                    <div style="width:56px; height:56px; border-radius:50%; background:rgba(30,58,138,0.1); color:var(--primary); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem auto;">
                        <i data-lucide="help-circle" style="width:28px; height:28px;"></i>
                    </div>
                    <h2 style="font-size:1.35rem; font-weight:700; color:var(--text-dark); margin-bottom:0.5rem;">
                        Hulp nodig met je toegang?
                    </h2>
                    <p style="font-size:0.925rem; color:var(--text-muted); margin-bottom:1.5rem; line-height:1.5;">
                        Als je vragen hebt over de materialen of hulp nodig hebt bij het downloaden, neem dan gerust contact op met ons supportteam.
                    </p>
                    <a href="mailto:${config.contactEmail}?subject=${encodeURIComponent(config.emailSubject || '')}&body=${encodeURIComponent(config.emailBodyTemplate || '')}" 
                       class="download-btn" 
                       style="display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; padding:0.85rem 1.5rem; background:var(--primary); color:#fff; font-weight:700; border-radius:10px; text-decoration:none;">
                        <i data-lucide="mail" style="width:18px; height:18px;"></i>
                        <span>Contact opnemen via E-mail</span>
                    </a>
                </div>
            </div>
        `;

        if (window.lucide) lucide.createIcons();
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
});
