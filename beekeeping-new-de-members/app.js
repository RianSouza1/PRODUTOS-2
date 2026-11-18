const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const STORAGE_KEY = 'beekeeping-new-de-v1';
let library, searchIndex, searchPromise, pdfModule, currentBook, currentPage = 1;
let loadingTask, pdfDocument, renderTask, renderVersion = 0, readerVersion = 0;
let toastTimer, searchTimer, resizeTimer, storageWarningShown = false;
let state = {last: null, marks: [], notes: {}};
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  if (saved && typeof saved === 'object') {
    const validPosition = item => item && [1,2,3].includes(item.book) && Number.isInteger(item.page) && item.page >= 1 && item.page <= 60;
    state.last = validPosition(saved.last) ? {book: saved.last.book, page: saved.last.page} : null;
    state.marks = Array.isArray(saved.marks) ? saved.marks.filter(validPosition).slice(0,180).map(({book,page}) => ({book,page})) : [];
    if (saved.notes && typeof saved.notes === 'object') for (const [key,value] of Object.entries(saved.notes)) {
      if (/^[123]-(?:[1-9]|[1-5]\d|60)$/.test(key) && typeof value === 'string') state.notes[key] = value.slice(0,4000);
    }
  }
} catch { /* The page remains usable when browser storage is unavailable. */ }

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('visible'), 3500);
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { if (!storageWarningShown) { toast('Dieser Browser kann deine Inhalte gerade nicht speichern.'); storageWarningShown = true; } }
}
const bookById = id => library.books.find(book => book.id === Number(id));
const pdfURL = id => new URL(`materials/buch-${id}.pdf`, document.baseURI).href;

function renderBooks() {
  $('#home-books').innerHTML = library.books.map(book => `<article class="book-card"><div class="book-art" data-book="${book.id}"><img src="assets/book-${book.id}.png" alt="Buchcover: ${escapeHTML(book.title)}" width="581" height="752" loading="lazy"></div><div class="book-body"><span class="book-category">${book.category}</span><h3>${book.title}</h3><p>${book.description}</p><div class="book-meta"><span>60 Seiten</span><span>PDF · ${book.size}</span></div><div class="book-actions"><button class="button dark" data-read="${book.id}" data-page="2">Buch lesen</button><a class="download-icon" href="materials/buch-${book.id}.pdf" download="${book.title}.pdf" aria-label="${book.title}: PDF herunterladen">${icon('download')}</a></div></div></article>`).join('');
  $('#library-books').innerHTML = library.books.map(book => `<article class="library-book"><div class="book-art" data-book="${book.id}"><img src="assets/book-${book.id}.png" alt="Buchcover: ${escapeHTML(book.title)}" width="581" height="752" loading="lazy"></div><div class="library-content"><span class="book-category">${book.category}</span><h2>${book.title}</h2><p>${book.description}</p><div class="book-meta"><span>Daniel Westbrook</span><span>60 Seiten</span><span>${book.size}</span></div><div class="book-actions"><button class="button dark" data-read="${book.id}" data-page="2">${icon('book')}Im Lesemodus öffnen</button><a class="button outline" href="materials/buch-${book.id}.pdf" download="${book.title}.pdf">${icon('download')}PDF herunterladen</a></div><details class="chapters-details"><summary>Kapitel direkt öffnen</summary><div class="chapter-list">${book.chapters.map(([page,title]) => `<button data-read="${book.id}" data-page="${page}">${title}<span>S. ${page}</span></button>`).join('')}</div></details></div></article>`).join('');
}
function renderResume() {
  if (state.last) {
    $('#resume-kicker').textContent = 'DEINE LETZTE LESESTELLE';
    $('#resume-title').textContent = bookById(state.last.book).title;
    $('#resume-description').textContent = `Zuletzt geöffnet: Seite ${state.last.page}. Hier kannst du weiterlesen.`;
    $('#resume-button').textContent = 'Weiterlesen';
  } else {
    $('#resume-button').textContent = 'Jetzt loslesen';
  }
}
function renderBookmarks() {
  $('#saved-bookmarks').innerHTML = state.marks.length ? state.marks.map(mark => `<div class="saved-item"><button data-read="${mark.book}" data-page="${mark.page}">${icon('mark')}<span><strong>${bookById(mark.book).title}</strong><small>Seite ${mark.page}</small></span></button><button class="icon-button" data-remove-mark="${mark.book}-${mark.page}" aria-label="Lesezeichen entfernen: ${escapeHTML(bookById(mark.book).title)}, Seite ${mark.page}">${icon('close')}</button></div>`).join('') : `<div class="empty-state">${icon('mark')}<p>Hier findest du deine gespeicherten Seiten. Setze im Lesemodus ein Lesezeichen, um wichtige Stellen schnell wiederzufinden.</p></div>`;
}

function route() {
  let name = location.hash.slice(1) || 'willkommen';
  if (!['willkommen','start','bibliothek','hilfe'].includes(name)) name = 'start';
  const welcome = name === 'willkommen';
  const previousScreen = document.body.dataset.screen;
  $('#welcome-screen').hidden = !welcome;
  $('#member-area').hidden = welcome;
  document.body.dataset.screen = welcome ? 'welcome' : 'members';
  if (welcome) {
    if (previousScreen === 'members') $('#welcome-title').focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
    return;
  }
  $$('.view').forEach(node => node.hidden = node.id !== `view-${name}`);
  $$('.main-nav a').forEach(link => link.dataset.route === name ? link.setAttribute('aria-current','page') : link.removeAttribute('aria-current'));
  $('#page-label').textContent = {start:'Schön, dass du da bist.',bibliothek:'Deine Bücher. Jederzeit griffbereit.',hilfe:'Deine Fragen, einfach beantwortet.'}[name];
  if (previousScreen === 'welcome') $('#main').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'instant'});
}

async function getIndex() {
  if (searchIndex) return searchIndex;
  if (!searchPromise) searchPromise = fetch('assets/search-index.json').then(response => {
    if (!response.ok) throw new Error('index');
    return response.json();
  }).then(data => searchIndex = data).catch(error => { searchPromise = null; throw error; });
  return searchPromise;
}
function openSearch() {
  $('#search-dialog').showModal();
  $('#search-input').focus();
}
async function search() {
  const query = $('#search-input').value.trim();
  const status = $('#search-status'), results = $('#search-results');
  if (query.length < 2) { status.textContent = 'Gib mindestens zwei Zeichen ein. Suche in allen drei Büchern.'; results.replaceChildren(); return; }
  status.textContent = 'Deine Bücher werden durchsucht …';
  try {
    const pages = await getIndex();
    if ($('#search-input').value.trim() !== query) return;
    const terms = query.toLocaleLowerCase('de').split(/\s+/);
    const matches = pages.filter(item => terms.every(term => item.text.toLocaleLowerCase('de').includes(term)));
    status.textContent = matches.length ? `${matches.length} passende ${matches.length === 1 ? 'Seite' : 'Seiten'}${matches.length > 30 ? ' · Die ersten 30 Treffer werden angezeigt.' : ''}` : 'Keine Treffer. Versuche einen anderen Begriff, zum Beispiel „Bienen“ oder „Honig“.';
    results.innerHTML = matches.slice(0,30).map(item => {
      const clean = item.text.replace(/\s+/g,' ');
      const position = clean.toLocaleLowerCase('de').indexOf(terms[0]);
      const start = Math.max(0,position-65), snippet = clean.slice(start,start+220);
      const pattern = new RegExp(`(${terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`, 'gi');
      const marked = snippet.split(pattern).map(part => terms.includes(part.toLocaleLowerCase('de')) ? `<mark>${escapeHTML(part)}</mark>` : escapeHTML(part)).join('');
      return `<button class="search-result" data-read="${item.book}" data-page="${item.page}"><small>${bookById(item.book).title} · Seite ${item.page}</small><strong>${escapeHTML(item.title)}</strong><p>${start ? '… ' : ''}${marked} …</p></button>`;
    }).join('');
  } catch { status.textContent = 'Die Suche konnte nicht geladen werden. Bitte versuche es erneut.'; }
}

async function closeDocument() {
  renderVersion++;
  if (renderTask) { renderTask.cancel(); try { await renderTask.promise; } catch {} renderTask = null; }
  const oldTask = loadingTask;
  loadingTask = null;
  pdfDocument = null;
  if (oldTask) { try { await oldTask.destroy(); } catch {} }
}
async function openBook(id,page) {
  if (!library) return;
  const book = bookById(id);
  if (!book) return;
  $('#search-dialog').close();
  const dialog = $('#reader-dialog');
  if (dialog.open && currentBook?.id === book.id && pdfDocument) { await renderPage(page); return; }
  const version = ++readerVersion;
  if (!dialog.open) dialog.showModal();
  $('#reader-title').textContent = book.title;
  $('#pdf-canvas').hidden = true;
  $('#page-text-details').hidden = true;
  $('#reader-status').hidden = false;
  $('#reader-status').textContent = 'Dein Buch wird geladen …';
  $('#page-prev').disabled = true;
  $('#page-next').disabled = true;
  $('#reader-mark').disabled = true;
  $('#page-number').disabled = true;
  await closeDocument();
  if (version !== readerVersion || !dialog.open) return;
  currentBook = book;
  currentPage = Math.max(1,Math.min(60,Number(page)||2));
  $('#reader-original').href = `${pdfURL(book.id)}#page=${currentPage}`;
  $('#reader-download').href = pdfURL(book.id);
  $('#reader-download').download = `${book.title}.pdf`;
  $('#reader-chapters').innerHTML = book.chapters.map(([chapterPage,title]) => `<button data-read="${book.id}" data-page="${chapterPage}">${title}<span>S. ${chapterPage}</span></button>`).join('');
  $('#reader-zoom').value = '1';
  $('#page-note').value = '';
  setPanel(window.innerWidth > 1050);
  try {
    if (!pdfModule) pdfModule = await import('./vendor/pdfjs/pdf.js');
    if (version !== readerVersion || !dialog.open) return;
    pdfModule.GlobalWorkerOptions.workerSrc = new URL('vendor/pdfjs/pdf.worker.js', document.baseURI).href;
    loadingTask = pdfModule.getDocument({url:pdfURL(book.id),standardFontDataUrl:new URL('vendor/pdfjs/standard_fonts/',document.baseURI).href,wasmUrl:new URL('vendor/pdfjs/wasm/',document.baseURI).href});
    const loaded = await loadingTask.promise;
    if (version !== readerVersion || !dialog.open) return;
    pdfDocument = loaded;
    await renderPage(currentPage);
  } catch {
    if (version !== readerVersion || !dialog.open) return;
    $('#reader-status').hidden = false;
    $('#reader-status').innerHTML = `Das Buch konnte hier nicht angezeigt werden. Du kannst <a href="${pdfURL(book.id)}#page=${currentPage}" target="_blank" rel="noopener">das Original-PDF öffnen</a> oder es über „Inhalt & Notizen“ herunterladen.`;
  }
}
async function renderPage(requestedPage) {
  if (!pdfDocument || !$('#reader-dialog').open) return;
  const pageNumber = Math.max(1,Math.min(pdfDocument.numPages,Number(requestedPage)||1));
  const version = ++renderVersion;
  if (renderTask) { renderTask.cancel(); try { await renderTask.promise; } catch {} }
  if (version !== renderVersion) return;
  const documentForPage = pdfDocument;
  const book = currentBook;
  try {
    const page = await documentForPage.getPage(pageNumber);
    if (version !== renderVersion || !$('#reader-dialog').open) return;
    const canvas = $('#pdf-canvas'), stage = $('#reader-pages');
    const base = page.getViewport({scale:1});
    const style = getComputedStyle(stage);
    const available = stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const fit = Math.min(available,1000) / base.width;
    const viewport = page.getViewport({scale:fit * Number($('#reader-zoom').value)});
    const ratio = Math.min(window.devicePixelRatio||1,2);
    canvas.width = Math.floor(viewport.width*ratio);
    canvas.height = Math.floor(viewport.height*ratio);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;
    canvas.hidden = false;
    $('#reader-status').hidden = true;
    canvas.setAttribute('aria-label',`${book.title}, Seite ${pageNumber} von ${pdfDocument.numPages}`);
    renderTask = page.render({canvasContext:canvas.getContext('2d'),viewport,transform:ratio!==1?[ratio,0,0,ratio,0,0]:null});
    await renderTask.promise;
    if (version !== renderVersion) return;
    renderTask = null;
    currentPage = pageNumber;
    $('#page-number').value = pageNumber;
    $('#page-number').disabled = false;
    $('#page-prev').disabled = pageNumber === 1;
    $('#page-next').disabled = pageNumber === documentForPage.numPages;
    $('#reader-mark').disabled = false;
    $('#page-note').value = state.notes[`${book.id}-${pageNumber}`] || '';
    $('#reader-original').href = `${pdfURL(book.id)}#page=${pageNumber}`;
    $('#page-text-details').hidden = false;
    $('#page-text-details').open = false;
    $('#page-text').textContent = '';
    const activeChapter = [...book.chapters].reverse().find(([chapterPage]) => chapterPage <= pageNumber);
    $$('#reader-chapters button').forEach(button => {
      if (activeChapter && Number(button.dataset.page) === activeChapter[0]) button.setAttribute('aria-current','page');
      else button.removeAttribute('aria-current');
    });
    stage.scrollTo({top:0,left:0,behavior:'instant'});
    state.last = {book:book.id,page:pageNumber};
    persist();
    updateMarkButton();
    renderResume();
  } catch (error) {
    if (version !== renderVersion || error?.name === 'RenderingCancelledException') return;
    $('#reader-status').hidden = false;
    $('#reader-status').textContent = 'Diese Seite konnte nicht angezeigt werden. Versuche eine andere Seite oder öffne das Original-PDF.';
  }
}
function setPanel(open) {
  $('.reader-body').classList.toggle('panel-open',open);
  $('#reader-panel-toggle').setAttribute('aria-expanded',String(open));
}
function updateMarkButton() {
  if (!currentBook) return;
  const marked = state.marks.some(mark => mark.book === currentBook.id && mark.page === currentPage);
  $('#reader-mark').setAttribute('aria-pressed',String(marked));
  $('#reader-mark span').textContent = marked ? 'Gespeichert' : 'Lesezeichen';
}
function exportNotes() {
  const notes = Object.entries(state.notes).filter(([,text]) => text.trim());
  if (!notes.length) { toast('Du hast noch keine Notizen gespeichert.'); return; }
  const text = 'MEINE NOTIZEN · IMKERN FÜR ANFÄNGER\n\n' + notes.map(([key,value]) => {
    const [book,page] = key.split('-').map(Number);
    return `${bookById(book).title} · Seite ${page}\n${value}\n`;
  }).join('\n---\n\n');
  const url = URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a'); link.href=url; link.download='Meine-Imker-Notizen.txt'; link.click();
  setTimeout(() => URL.revokeObjectURL(url),3000);
}

document.addEventListener('click',event => {
  const readerLink = event.target.closest('[data-read]');
  if (readerLink) {
    event.preventDefault();
    openBook(Number(readerLink.dataset.read),Number(readerLink.dataset.page));
    if ($('#reader-dialog').open && window.innerWidth <= 760) setPanel(false);
  }
  if (event.target.closest('[data-open-search]')) openSearch();
  const remove = event.target.closest('[data-remove-mark]');
  if (remove) {
    const [book,page] = remove.dataset.removeMark.split('-').map(Number);
    state.marks = state.marks.filter(mark => mark.book !== book || mark.page !== page);
    persist(); renderBookmarks(); updateMarkButton(); toast('Lesezeichen entfernt.');
  }
});
$('#resume-button').addEventListener('click',() => openBook(state.last?.book || 1,state.last?.page || 3));
$('[data-close-search]').addEventListener('click',() => $('#search-dialog').close());
$('#search-input').addEventListener('input',() => { clearTimeout(searchTimer); searchTimer=setTimeout(search,180); });
$('#search-input').addEventListener('keydown',event => {
  if (event.key === 'Escape') { event.preventDefault(); $('#search-dialog').close(); }
});
$('#reader-close').addEventListener('click',() => $('#reader-dialog').close());
$('#reader-dialog').addEventListener('close',() => { readerVersion++; closeDocument(); renderBookmarks(); });
$('#page-prev').addEventListener('click',() => renderPage(currentPage-1));
$('#page-next').addEventListener('click',() => renderPage(currentPage+1));
$('#page-number').addEventListener('change',event => renderPage(event.target.value));
$('#page-number').addEventListener('keydown',event => { if (event.key === 'Enter') renderPage(event.target.value); });
$('#reader-zoom').addEventListener('change',() => renderPage(currentPage));
$('#reader-panel-toggle').addEventListener('click',() => {
  setPanel(!$('.reader-body').classList.contains('panel-open'));
  if (window.innerWidth > 760) renderPage(currentPage);
});
$('#panel-close').addEventListener('click',() => { setPanel(false); if (window.innerWidth>760) renderPage(currentPage); });
$('#reader-mark').addEventListener('click',() => {
  if (!currentBook || !pdfDocument || $('#reader-mark').disabled) return;
  const position = {book:currentBook.id,page:currentPage};
  const exists = state.marks.some(mark => mark.book === position.book && mark.page === position.page);
  state.marks = exists ? state.marks.filter(mark => mark.book !== position.book || mark.page !== position.page) : [...state.marks,position];
  persist(); updateMarkButton(); renderBookmarks(); toast(exists ? 'Lesezeichen entfernt.' : 'Lesezeichen gespeichert.');
});
$('#page-note').addEventListener('input',event => {
  if (!currentBook || !pdfDocument) return;
  const key = `${currentBook.id}-${currentPage}`;
  if (event.target.value) state.notes[key] = event.target.value; else delete state.notes[key];
  persist();
});
$('#page-text-details').addEventListener('toggle',async () => {
  if (!$('#page-text-details').open || !currentBook) return;
  const book=currentBook.id, page=currentPage;
  $('#page-text').textContent='Seitentext wird geladen …';
  try {
    const index=await getIndex();
    if (currentBook.id===book && currentPage===page) $('#page-text').textContent=index.find(item=>item.book===book&&item.page===page)?.text || 'Kein Seitentext verfügbar.';
  } catch { $('#page-text').textContent='Der Seitentext konnte nicht geladen werden.'; }
});
$('#export-notes').addEventListener('click',exportNotes);
window.addEventListener('hashchange',route);
window.addEventListener('resize',() => { clearTimeout(resizeTimer); resizeTimer=setTimeout(() => { if ($('#reader-dialog').open && pdfDocument) renderPage(currentPage); },200); });
document.addEventListener('keydown',event => {
  if ($('#member-area').hidden) return;
  const input = event.target.closest('input,textarea,select,[contenteditable]');
  if (input || event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === '/' && !$('#reader-dialog').open) { event.preventDefault(); openSearch(); }
  if ($('#reader-dialog').open && pdfDocument) {
    if (event.key === 'ArrowRight' && currentPage<60) { event.preventDefault(); renderPage(currentPage+1); }
    if (event.key === 'ArrowLeft' && currentPage>1) { event.preventDefault(); renderPage(currentPage-1); }
  }
});

route();
try {
  const response = await fetch('assets/library.json');
  if (!response.ok) throw new Error('library');
  library = await response.json();
  renderBooks(); renderResume(); renderBookmarks(); route();
} catch {
  $('#load-error').hidden = false;
}
