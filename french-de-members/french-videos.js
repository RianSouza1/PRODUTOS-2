(() => {
  const {ui, lessons} = APP_DATA.videoCourse;
  const storageKey = `french-one-minute-practice-${document.documentElement.lang}-v3`;
  let activeId = lessons[0].id;
  let filter = 'all';
  let playerCleanup = null;
  let practiced = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) practiced = new Set(saved.filter(id => lessons.some(lesson => lesson.id === id)));
  } catch { /* Practice tracking is optional. */ }
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const clock = duration => `${Math.floor(duration/60)}:${String(Math.floor(duration%60)).padStart(2,'0')}`;
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{
    play:'<path d="m9 5 11 7-11 7z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    ear:'<path d="M6 10a6 6 0 0 1 12 0c0 4-4 4-4 7a4 4 0 0 1-8 0M9 10a3 3 0 0 1 6 0c0 2-3 2-3 5"/>'
  }[name]}</svg>`;
  const stop = () => { playerCleanup?.(); playerCleanup = null; };

  function render(root) {
    root.innerHTML = '<div class="page-view french-course" id="french-course"></div>';
    const page = root.querySelector('#french-course');
    function choose(id) {
      stop();
      activeId = id;
      draw();
      root.scrollTo(0,0);
      page.querySelector('#french-lesson-title').focus({preventScroll:true});
    }
    function drawLibrary() {
      const grid = page.querySelector('.french-lesson-grid');
      grid.innerHTML = lessons.filter(item => filter === 'all' || item.category === filter).map(item => `<button type="button" class="french-lesson${item.id === activeId ? ' is-current' : ''}" data-french-lesson="${esc(item.id)}" aria-pressed="${item.id === activeId}" aria-label="${esc(ui.menu)}: ${esc(item.title)}">
        <img src="${esc(item.poster)}" width="128" height="72" alt="" loading="lazy" referrerpolicy="no-referrer"><span><span class="french-lesson-number">${esc(ui[item.category])} · ${clock(item.duration)}</span><strong>${esc(item.title)}</strong><span class="french-lesson-status">${esc(practiced.has(item.id) ? ui.marked : ui.audio)}</span></span>${icon('play')}</button>`).join('');
      grid.querySelectorAll('[data-french-lesson]').forEach(button => button.addEventListener('click',() => choose(button.dataset.frenchLesson)));
      page.querySelectorAll('[data-french-filter]').forEach(button => button.setAttribute('aria-pressed',button.dataset.frenchFilter === filter));
    }
    function draw() {
      const index = Math.max(0,lessons.findIndex(lesson => lesson.id === activeId));
      const lesson = lessons[index];
      const baseCount = lessons.filter(item => item.category === 'basics').length;
      const tipCount = lessons.length-baseCount;
      page.innerHTML = `
        <div class="hero-card french-course-hero"><div class="hero-text">
          <p class="french-kicker">${esc(ui.kicker)}</p>
          <h1 id="page-heading" tabindex="-1">${esc(ui.title)}</h1><p>${esc(ui.intro)}</p>
          <div class="french-facts"><span>${baseCount} ${esc(ui.basics)}</span><span>${tipCount} ${esc(ui.tips)}</span><span>${esc(ui.maxDuration)}</span><span>${esc(ui.audio)}</span></div>
        </div></div>
        <section class="french-feature" aria-labelledby="french-lesson-title">
          <div class="french-feature-heading"><p class="french-kicker">${esc(ui[lesson.category])} · ${esc(ui.lesson)} ${index+1} / ${lessons.length}</p>
            <h2 id="french-lesson-title" tabindex="-1">${esc(lesson.title)}</h2><p>${esc(lesson.goal)}</p>
          </div>
          <div class="french-study-layout"><div class="french-watch">
            <div class="french-video-frame is-portrait"><div class="french-brand-blur french-brand-blur--header" aria-hidden="true"></div><div class="french-brand-blur french-brand-blur--corner" aria-hidden="true"></div><div class="french-brand-blur french-brand-blur--footer" aria-hidden="true"></div><button type="button" class="french-load-video" aria-label="${esc(ui.play)}: ${esc(lesson.title)}"><img src="${esc(lesson.poster)}" alt="" width="640" height="360" referrerpolicy="no-referrer"><span>${icon('play')}<strong>${esc(ui.play)}</strong></span></button></div>
            
            <div class="french-clip-controls"><button type="button" data-clip-play aria-pressed="false">${esc(ui.play)}</button><button type="button" data-clip-replay>${esc(ui.replay)}</button><button type="button" data-clip-sound aria-pressed="true">${esc(ui.soundOn)}</button><button type="button" data-clip-fullscreen>${esc(ui.fullscreen)}</button><label>${esc(ui.speed)} <select data-clip-speed aria-label="${esc(ui.speed)}"><option value="1">1× · ${esc(ui.normal)}</option><option value="0.75">0,75× · ${esc(ui.slow)}</option></select></label></div>
            <div class="french-clip-timeline"><input type="range" min="0" max="${lesson.duration}" step="0.1" value="0" data-clip-seek aria-label="${esc(ui.progressLabel)}" disabled><span data-clip-clock>0:00 / ${clock(lesson.duration)}</span></div>
            <p class="french-clip-status" data-clip-status role="status" aria-live="polite">${esc(ui.ready)}</p>
            <div class="french-player-tools"><span>${esc(ui.duration)} · ${clock(lesson.duration)}</span><a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.openOriginal)} ↗</a></div>
            <p class="french-caption-help">${esc(ui.playerHelp)}</p>
            <p class="french-teacher">${esc(ui.teacher)}: <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.authorName)}</a></p>
          </div><aside class="french-method"><div class="french-method-icon">${icon('ear')}</div><h3>${esc(ui.method)}</h3><ol>${ui.methodSteps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol><p class="french-tip">${esc(lesson.tip)}</p></aside></div>
          <div class="french-learning-content"><div class="french-vocabulary"><h3>${esc(ui.phrases)}</h3><p class="french-guide-help">${esc(ui.captions)}</p><dl>${lesson.phrases.map(phrase=>`<div><dt lang="fr">${esc(phrase.fr)}</dt><dd>${esc(phrase.translation)}</dd></div>`).join('')}</dl></div>
            <div class="french-practice"><span class="french-practice-icon">${icon('check')}</span><h3>${esc(ui.practice)}</h3><p>${esc(lesson.task)}</p><a href="#${esc(APP_DATA.config.booksRoute)}">${esc(ui.bookLink)} →</a></div>
          </div>
          <details class="french-source"><summary>${esc(ui.source)}</summary><p>${esc(ui.sourceText)} <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(ui.original)}</a>.</p></details>
          <div class="french-actions"><button type="button" class="french-practice-toggle" aria-pressed="${practiced.has(lesson.id)}">${icon('check')}<span>${esc(practiced.has(lesson.id) ? ui.marked : ui.mark)}</span></button>
            <button type="button" class="french-next">${esc(index === lessons.length-1 ? ui.restart : ui.next)}${icon('arrow')}</button></div>
        </section>
        <section class="french-library" aria-labelledby="french-library-heading"><div class="french-library-heading"><h2 id="french-library-heading">${esc(ui.library)}</h2><span data-practice-count>${practiced.size} / ${lessons.length} ${esc(ui.progress)}</span></div>
          <div class="french-filters" role="group" aria-label="${esc(ui.filterLabel)}">${['all','basics','tips'].map(category=>`<button type="button" data-french-filter="${category}" aria-pressed="${filter === category}">${esc(ui[category])} <span>${category === 'all' ? lessons.length : category === 'basics' ? baseCount : tipCount}</span></button>`).join('')}</div>
          <div class="french-lesson-grid"></div>
        </section>`;
      playerCleanup = FRENCH_CLIP_PLAYER.mount(page.querySelector('.french-watch'),lesson,ui);
      page.querySelector('.french-practice-toggle').addEventListener('click',event=>{
        practiced.has(lesson.id) ? practiced.delete(lesson.id) : practiced.add(lesson.id);
        try { localStorage.setItem(storageKey,JSON.stringify([...practiced])); } catch {}
        const done = practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed',done);
        event.currentTarget.querySelector('span').textContent = done ? ui.marked : ui.mark;
        page.querySelector('[data-practice-count]').textContent = `${practiced.size} / ${lessons.length} ${ui.progress}`;
        drawLibrary();
      });
      page.querySelector('.french-next').addEventListener('click',()=>choose(lessons[(index+1)%lessons.length].id));
      page.querySelectorAll('[data-french-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.frenchFilter;drawLibrary();}));
      drawLibrary();
    }
    draw();
  }
  window.FRENCH_VIDEOS = {render,pause:stop};
})();
