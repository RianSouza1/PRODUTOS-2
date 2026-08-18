/**
 * SPA Engine — Zpracování dřeva & Woodworking (Čeština)
 */

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("app-root");
  const navItems = document.querySelectorAll(".tab-item");
  const brandTitleEl = document.getElementById("brand-title");

  if (brandTitleEl && typeof APP_DATA !== "undefined") {
    brandTitleEl.innerText = APP_DATA.config.brandName || "Zpracování dřeva";
  }

  function handleRoute() {
    const hash = window.location.hash.replace("#", "") || "livros";
    
    navItems.forEach(item => {
      if (item.getAttribute("data-tab") === hash) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (hash === "contato") {
      renderContato();
    } else {
      renderLivros();
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
    window.scrollTo(0, 0);
  }

  function renderLivros() {
    if (!APP_DATA.books || APP_DATA.books.length === 0) {
      rootEl.innerHTML = `<div class="glass-panel"><p style="color:var(--text-muted);">V současné době nejsou registrovány žádné knihy.</p></div>`;
      return;
    }

    let booksHTML = APP_DATA.books.map(book => {
      let featuresHTML = book.features ? book.features.map(f => `<li>${f}</li>`).join("") : "";
      
      return `
        <div class="book-card">
          ${book.badgeText ? `<span class="book-badge" style="background:${book.badgeColor || 'var(--primary)'}">${book.badgeText}</span>` : ""}
          <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='assets/covers/wood_IMG1_cs.png'">
          </div>
          <div class="book-info">
            <h3>${book.title}</h3>
            <p>${book.description}</p>
            ${featuresHTML ? `<ul class="feature-list">${featuresHTML}</ul>` : ""}
          </div>
          <a href="${book.downloadUrl}" class="download-btn" download target="_blank">
            <i data-lucide="download"></i>
            <span>${book.buttonText || "Stáhnout PDF"}</span>
          </a>
        </div>
      `;
    }).join("");

    rootEl.innerHTML = `
      <div class="page-view">
        <div class="hero-card">
          <div class="hero-text">
            <h1>Vítejte, vážený člene!</h1>
            <p>Vaše kompletní kolekce e-knih o zpracování dřeva je připravena ke stažení.</p>
          </div>
        </div>

        <h2 class="section-title">
          <i data-lucide="book-open" style="color:var(--primary)"></i>
          <span>Vaše knihy a manuály</span>
        </h2>

        <div class="books-grid">
          ${booksHTML}
        </div>

        <footer>
          <p>&copy; 2026 Zpracování dřeva & Woodworking. Všechna práva vyhrazena.</p>
        </footer>
      </div>
    `;
  }

  function renderContato() {
    rootEl.innerHTML = `
      <div class="page-view">
        <div class="hero-card">
          <div class="hero-text">
            <h1>Podpora členů</h1>
            <p>Vaše spokojenost je naší prioritou.</p>
          </div>
        </div>

        <div class="glass-panel" style="text-align: center; padding: 2.5rem 1.5rem;">
          <div style="margin: 0 auto 1.5rem; width: 64px; height: 64px; background:var(--primary-light); color:var(--primary); border-radius:18px; display:flex; align-items:center; justify-content:center; border: 1px solid var(--border-card)">
            <i data-lucide="mail" style="width: 32px; height: 32px"></i>
          </div>

          <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color:var(--text-dark)">Odeslat zprávu</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 2rem; line-height:1.5;">
            Zkopírujte níže uvedenou e-mailovou adresu a pošlete nám svůj dotaz. Náš tým podpory vám odpoví co nejdříve.
          </p>

          <div style="background:var(--bg-main); border:1px solid var(--border-card); padding:1rem; border-radius:8px; display:inline-block;">
            <span style="font-size: 1.1rem; font-weight: 700; color:var(--primary); user-select: auto;">${APP_DATA.config.contactEmail}</span>
          </div>
        </div>

        <footer>
          <p>&copy; 2026 Zpracování dřeva & Woodworking. Všechna práva vyhrazena.</p>
        </footer>
      </div>
    `;
  }

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
});
