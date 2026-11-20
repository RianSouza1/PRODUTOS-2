const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=name=>`<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const code=document.documentElement.lang;
const key=`puzzle-kids-${code}-v1`;
let data,ui,last,pdfModule,documentTask,pdfDocument,renderTask,book,pageNumber=2,readerVersion=0,renderVersion=0,resizeTimer;
try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved&&[1,2,3].includes(saved.book)&&Number.isInteger(saved.page)&&saved.page>0&&saved.page<=60)last=saved;}catch{}
const pdfURL=id=>new URL(`materials/book-${id}.pdf`,document.baseURI).href;
function route(){
  if(!ui)return;
  const hash=location.hash.slice(1)||ui.routes.welcome;
  const name=Object.keys(ui.routes).find(k=>ui.routes[k]===hash)||'home';
  const welcome=name==='welcome',previous=$('#app').hidden;
  $('#welcome').hidden=!welcome;$('#app').hidden=welcome;
  $$('.view').forEach(view=>view.hidden=view.id!==`view-${name}`);
  $$('.main-nav a').forEach(link=>link.dataset.route===name?link.setAttribute('aria-current','page'):link.removeAttribute('aria-current'));
  if(previous&&!welcome)$('#main').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'instant'});
}
function renderBooks(){
  $('#home-books').innerHTML=data.books.map(b=>`<article class="book-card book-${b.id}"><div class="cover"><img src="assets/book-${b.id}.png" width="540" height="700" alt="${escapeHTML(b.title)}" loading="lazy"><span class="book-number">0${b.id}</span></div><div class="book-copy"><span class="eyebrow">${escapeHTML(b.category)}</span><h3>${escapeHTML(b.title)}</h3><p>${escapeHTML(b.description)}</p><span class="book-meta">${b.pages} ${ui.pages} · PDF</span><button class="button outline" data-read="${b.id}" data-page="2">${ui.read}</button></div></article>`).join('');
  $('#library-books').innerHTML=data.books.map(b=>`<article class="library-book book-${b.id}"><div class="cover"><img src="assets/book-${b.id}.png" width="540" height="700" alt="${escapeHTML(b.title)}" loading="lazy"></div><div class="book-copy"><span class="eyebrow">${ui.bookLabel} 0${b.id} · ${escapeHTML(b.category)}</span><h2>${escapeHTML(b.title)}</h2><p>${escapeHTML(b.description)}</p><div class="book-meta"><span>${b.pages} ${ui.pages}</span><span>PDF · ${b.size}</span><span>Clara Morgan</span></div><div class="book-actions"><button class="button primary" data-read="${b.id}" data-page="2">${icon('book')}${ui.read}</button><a class="button outline" href="materials/book-${b.id}.pdf" download="${escapeHTML(b.title)}.pdf">${icon('download')}${ui.download}</a></div><a class="print-link" href="materials/book-${b.id}.pdf" target="_blank" rel="noopener">${icon('print')}${ui.print}</a></div></article>`).join('');
}
function resume(){
  if(!last)return;
  const selected=data.books.find(b=>b.id===last.book);if(!selected)return;
  $('#resume').hidden=false;$('#resume-title').textContent=selected.title;$('#resume-page').textContent=`${ui.page} ${last.page} / ${selected.pages}`;
}
async function closeDocument(){
  renderVersion++;
  if(renderTask){renderTask.cancel();try{await renderTask.promise;}catch{}renderTask=null;}
  const oldTask=documentTask;documentTask=null;pdfDocument=null;
  if(oldTask)try{await oldTask.destroy();}catch{}
}
async function openBook(id,requestedPage){
  if(!data)return;
  const selected=data.books.find(b=>b.id===id);if(!selected)return;
  const version=++readerVersion;
  if(!$('#reader').open)$('#reader').showModal();
  $('#reader-title').textContent=selected.title;$('#reader-status').textContent=ui.loading;$('#reader-status').hidden=false;$('#pdf-canvas').hidden=true;
  $('#page-number').disabled=true;$('#previous').disabled=true;$('#next').disabled=true;
  await closeDocument();if(version!==readerVersion||!$('#reader').open)return;
  book=selected;pageNumber=Math.max(1,Math.min(selected.pages,Number(requestedPage)||2));
  $('#reader-original').href=pdfURL(id)+`#page=${pageNumber}`;
  $('#reader-download').href=pdfURL(id);$('#reader-download').download=selected.title+'.pdf';
  $('#reader-download').setAttribute('aria-label',ui.download);
  $('#page-total').textContent=selected.pages;$('#page-number').max=selected.pages;$('#zoom').value='1';
  try{
    if(!pdfModule)pdfModule=await import('./vendor/pdfjs/pdf.js');
    if(version!==readerVersion||!$('#reader').open)return;
    pdfModule.GlobalWorkerOptions.workerSrc=new URL('vendor/pdfjs/pdf.worker.js',document.baseURI).href;
    documentTask=pdfModule.getDocument({url:pdfURL(id),standardFontDataUrl:new URL('vendor/pdfjs/standard_fonts/',document.baseURI).href,wasmUrl:new URL('vendor/pdfjs/wasm/',document.baseURI).href});
    const loaded=await documentTask.promise;if(version!==readerVersion||!$('#reader').open)return;
    pdfDocument=loaded;await renderPage(pageNumber);
  }catch{
    if(version!==readerVersion||!$('#reader').open)return;
    $('#reader-status').textContent=ui.readerError;$('#reader-status').hidden=false;
  }
}
async function renderPage(requested){
  if(!pdfDocument||!$('#reader').open)return;
  const target=Math.max(1,Math.min(pdfDocument.numPages,Number(requested)||1));
  const version=++renderVersion;
  if(renderTask){renderTask.cancel();try{await renderTask.promise;}catch{}}
  if(version!==renderVersion)return;
  const current=pdfDocument;
  try{
    const page=await current.getPage(target);if(version!==renderVersion||!$('#reader').open)return;
    const canvas=$('#pdf-canvas'),stage=$('#reader-stage'),style=getComputedStyle(stage),available=stage.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
    const base=page.getViewport({scale:1}),viewport=page.getViewport({scale:Math.min(available,1050)/base.width*Number($('#zoom').value)}),ratio=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.floor(viewport.width*ratio);canvas.height=Math.floor(viewport.height*ratio);canvas.style.width=Math.floor(viewport.width)+'px';canvas.style.height=Math.floor(viewport.height)+'px';
    canvas.hidden=false;$('#reader-status').hidden=true;
    canvas.setAttribute('aria-label',`${book.title} · ${ui.page} ${target} / ${current.numPages}`);
    renderTask=page.render({canvasContext:canvas.getContext('2d'),viewport,transform:ratio!==1?[ratio,0,0,ratio,0,0]:null});await renderTask.promise;
    if(version!==renderVersion)return;
    renderTask=null;pageNumber=target;$('#page-number').value=target;$('#page-number').disabled=false;
    $('#previous').disabled=target===1;$('#next').disabled=target===current.numPages;
    $('#reader-original').href=pdfURL(book.id)+`#page=${target}`;
    stage.scrollTo({top:0,left:0,behavior:'instant'});
    last={book:book.id,page:target};try{localStorage.setItem(key,JSON.stringify(last));}catch{}resume();
  }catch(error){if(version===renderVersion&&error?.name!=='RenderingCancelledException'){$('#reader-status').textContent=ui.readerError;$('#reader-status').hidden=false;}}
}
document.addEventListener('click',event=>{const target=event.target.closest('[data-read]');if(target){event.preventDefault();openBook(Number(target.dataset.read),Number(target.dataset.page));}});
$('#reader-close').addEventListener('click',()=>$('#reader').close());
$('#reader').addEventListener('close',()=>{readerVersion++;closeDocument();});
$('#previous').addEventListener('click',()=>renderPage(pageNumber-1));$('#next').addEventListener('click',()=>renderPage(pageNumber+1));
$('#page-number').addEventListener('change',event=>renderPage(event.target.value));
$('#page-number').addEventListener('keydown',event=>{if(event.key==='Enter')renderPage(event.target.value);});
$('#zoom').addEventListener('change',()=>renderPage(pageNumber));
$('#resume-button').addEventListener('click',()=>{if(last)openBook(last.book,last.page);});
window.addEventListener('hashchange',route);
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if($('#reader').open&&pdfDocument)renderPage(pageNumber);},180);});
document.addEventListener('keydown',event=>{if(event.target.closest('input,select,textarea')||event.ctrlKey||event.metaKey||event.altKey)return;if($('#reader').open&&pdfDocument){if(event.key==='ArrowRight'){event.preventDefault();renderPage(pageNumber+1);}if(event.key==='ArrowLeft'){event.preventDefault();renderPage(pageNumber-1);}}});
try{const response=await fetch('assets/library.json');if(!response.ok)throw Error('library');data=await response.json();ui=data.ui;renderBooks();resume();route();}catch{$('#load-error').hidden=false;$('#app').hidden=false;}
