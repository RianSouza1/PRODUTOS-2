(() => {
  const {ui, lessons} = APP_DATA.videoCourse;
  const storageKey = `french-beginner-practice-${document.documentElement.lang}-v1`;
  let activeId = lessons[0].id;
  let media = null;
  let practiced = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) practiced = new Set(saved.filter(id => lessons.some(lesson => lesson.id === id)));
  } catch { /* Practice tracking is optional. */ }
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clock = duration => `${Math.floor(duration/60)}:${String(Math.floor(duration%60)).padStart(2,'0')}`;
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{
    play:'<path d="m9 5 11 7-11 7z"/>',
    repeat:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    ear:'<path d="M6 10a6 6 0 0 1 12 0c0 4-4 4-4 7a4 4 0 0 1-8 0M9 10a3 3 0 0 1 6 0c0 2-3 2-3 5"/>'
  }[name]}</svg>`;

  function render(root) {
    root.innerHTML = '<div class="page-view french-course" id="french-course"></div>';
    const page = root.querySelector('#french-course');
    function choose(id) {
      media?.pause();
      activeId = id;
      draw();
      root.scrollTo(0,0);
      page.querySelector('#french-lesson-title').focus({preventScroll:true});
    }
    function draw() {
      const index = Math.max(0,lessons.findIndex(lesson => lesson.id === activeId));
      const lesson = lessons[index];
      page.innerHTML = `
        <div class="hero-card french-course-hero"><div class="hero-text">
          <p class="french-kicker">${esc(ui.kicker)}</p>
          <h1 id="page-heading" tabindex="-1">${esc(ui.title)}</h1><p>${esc(ui.intro)}</p>
          <div class="french-facts"><span>${lessons.length} ${esc(ui.lessons)}</span><span>${esc(ui.audio)}</span><span>A1 · ${esc(ui.beginner)}</span></div>
        </div></div>
        <section class="french-feature" aria-labelledby="french-lesson-title">
          <div class="french-feature-heading"><p class="french-kicker">${esc(ui.lesson)} ${index+1} / ${lessons.length}</p>
            <h2 id="french-lesson-title" tabindex="-1">${esc(lesson.title)}</h2><p>${esc(lesson.goal)}</p>
          </div>
          <div class="french-study-layout"><div class="french-watch">
            <div class="french-video-frame"><video controls playsinline preload="metadata" width="640" height="480" src="${esc(lesson.videoUrl)}" poster="${esc(lesson.poster)}" aria-label="${esc(ui.play)}: ${esc(lesson.title)}">
            </video></div>
            <div class="french-player-tools"><span>${esc(ui.duration)} · ${clock(lesson.duration)}</span>
              <label>${esc(ui.speed)} <select aria-label="${esc(ui.speed)}"><option value="0.75" selected>0,75× · ${esc(ui.slow)}</option><option value="1">1× · ${esc(ui.normal)}</option></select></label>
              <button type="button" data-replay>${icon('repeat')}<span>${esc(ui.replay)}</span></button>
            </div>
            <p class="french-caption-help">${esc(ui.captions)}</p>
            <p class="french-video-status" role="status" aria-live="polite" hidden></p>
          </div><aside class="french-method"><div class="french-method-icon">${icon('ear')}</div><h3>${esc(ui.method)}</h3><p>${esc(ui.methodText)}</p><p class="french-tip">${esc(lesson.tip)}</p></aside></div>
          <div class="french-learning-content"><div class="french-vocabulary"><h3>${esc(ui.phrases)}</h3><dl>${lesson.phrases.map(phrase => `<div><dt lang="fr">${esc(phrase.fr)}</dt><dd>${esc(phrase.translation)}</dd></div>`).join('')}</dl></div>
            <div class="french-practice"><span class="french-practice-icon">${icon('check')}</span><h3>${esc(ui.practice)}</h3><p>${esc(lesson.task)}</p><a href="#${esc(APP_DATA.config.booksRoute)}">${esc(ui.bookLink)} →</a></div>
          </div>
          <details class="french-source"><summary>${esc(ui.source)}</summary><p>${esc(ui.sourceText)} <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.original)}</a> · <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">${esc(ui.license)}</a>.</p></details>
          <div class="french-actions"><button type="button" class="french-practice-toggle" aria-pressed="${practiced.has(lesson.id)}">${icon('check')}<span>${esc(practiced.has(lesson.id) ? ui.marked : ui.mark)}</span></button>
            <button type="button" class="french-next">${esc(index === lessons.length-1 ? ui.restart : ui.next)}${icon('arrow')}</button></div>
        </section>
        <section class="french-library" aria-labelledby="french-library-heading"><div class="french-library-heading"><h2 id="french-library-heading">${esc(ui.library)}</h2><span data-practice-count>${practiced.size} / ${lessons.length} ${esc(ui.progress)}</span></div>
          <div class="french-lesson-grid">${lessons.map((item,number) => `<button type="button" class="french-lesson${item.id === lesson.id ? ' is-current' : ''}" data-french-lesson="${esc(item.id)}" aria-pressed="${item.id === lesson.id}" aria-label="${esc(ui.menu)}: ${esc(item.title)}">
            <img src="${esc(item.poster)}" width="128" height="96" alt="" loading="lazy"><span><span class="french-lesson-number">${esc(ui.lesson)} ${number+1} · ${clock(item.duration)}</span><strong>${esc(item.title)}</strong><span class="french-lesson-status">${esc(practiced.has(item.id) ? ui.marked : ui.audio)}</span></span>${icon('play')}</button>`).join('')}</div>
        </section>`;
      media = page.querySelector('video');
      const video = media;
      const speed = page.querySelector('select');
      const updateSpeed = () => { video.playbackRate = Number(speed.value); video.preservesPitch = true; };
      video.muted = false;
      video.addEventListener('loadedmetadata',updateSpeed);
      speed.addEventListener('change',updateSpeed);
      updateSpeed();
      const status = page.querySelector('.french-video-status');
      video.addEventListener('error',()=>{status.textContent = ui.error; status.hidden = false;});
      video.addEventListener('playing',()=>{status.hidden = true;});
      page.querySelector('[data-replay]').addEventListener('click',async()=>{
        video.currentTime = 0;
        try { await video.play(); } catch { status.textContent = ui.ready; status.hidden = false; }
      });
      page.querySelector('.french-practice-toggle').addEventListener('click',event=>{
        practiced.has(lesson.id) ? practiced.delete(lesson.id) : practiced.add(lesson.id);
        try { localStorage.setItem(storageKey,JSON.stringify([...practiced])); } catch {}
        const done = practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed',done);
        event.currentTarget.querySelector('span').textContent = done ? ui.marked : ui.mark;
        page.querySelector('[data-practice-count]').textContent = `${practiced.size} / ${lessons.length} ${ui.progress}`;
        page.querySelector(`[data-french-lesson="${lesson.id}"] .french-lesson-status`).textContent = done ? ui.marked : ui.audio;
      });
      page.querySelector('.french-next').addEventListener('click',()=>choose(lessons[(index+1)%lessons.length].id));
      page.querySelectorAll('[data-french-lesson]').forEach(button=>button.addEventListener('click',()=>choose(button.dataset.frenchLesson)));
    }
    draw();
  }
  window.FRENCH_VIDEOS = {render,pause:()=>media?.pause()};
})();
