(() => {
  const lessons = APP_DATA.videos;
  const u = APP_DATA.videoUI;
  const storageKey = `massas-${document.documentElement.lang}-practice-v1`;
  let activeId = APP_DATA.config.featuredVideo || lessons[0].id;
  let media = null;
  let practiced = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) practiced = new Set(saved.filter(id => lessons.some(item => item.id === id)));
  } catch { /* Progress is optional when local storage is unavailable. */ }

  const esc = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const drawings = {
    play:'<path d="m9 5 11 7-11 7z"/>', pause:'<path d="M8 5v14M16 5v14"/>',
    replay:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
    expand:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',
    check:'<path d="m5 12 4 4L19 6"/>', next:'<path d="M4 12h16m-6-6 6 6-6 6"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name]}</svg>`;
  const clock = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2,'0')}`;

  function render(root) {
    root.innerHTML = '<div class="page-view pasta-video-page" id="pasta-video-page"></div>';
    const page = root.querySelector('#pasta-video-page');

    function select(id) {
      media?.pause();
      activeId = id;
      draw();
      root.scrollTo(0,0);
      page.querySelector('#pasta-lesson-heading').focus({preventScroll:true});
    }

    function draw() {
      const index = Math.max(0,lessons.findIndex(item => item.id === activeId));
      const lesson = lessons[index];
      const isPracticed = practiced.has(lesson.id);
      const shortest = Math.min(...lessons.map(item => item.duration));
      const longest = Math.max(...lessons.map(item => item.duration));
      page.innerHTML = `
        <div class="hero-card glass-panel pasta-video-hero"><div class="hero-text">
          <p class="pasta-kicker">${esc(u.kicker)}</p><h1 id="page-heading" tabindex="-1">${esc(u.title)}</h1>
          <p>${esc(u.intro)}</p>
        </div><div class="pasta-facts"><span>${lessons.length} ${esc(u.demonstrations)}</span><span>${shortest}–${longest} ${esc(u.seconds)}</span><span>${esc(u.silent)}</span></div></div>

        <section class="pasta-feature" aria-labelledby="pasta-lesson-heading">
          <div class="pasta-lesson-heading"><div><p class="pasta-category">${esc(lesson.category)} · ${esc(u.lesson)} ${index+1} / ${lessons.length}</p>
            <h2 id="pasta-lesson-heading" tabindex="-1">${esc(lesson.title)}</h2><p>${esc(lesson.description)}</p>
          </div><span class="pasta-duration">${lesson.duration} s</span></div>
          <p class="pasta-preparation"><strong>${esc(u.before)}</strong> ${esc(lesson.preparation)}</p>

          <div class="pasta-player"><div class="pasta-frame">
            <video class="pasta-media" src="${esc(lesson.videoUrl)}" poster="${esc(lesson.poster)}" preload="none" muted playsinline aria-label="${esc(lesson.title)}: ${esc(u.silent)}"></video>
            <button class="pasta-big-play" type="button" aria-label="${esc(u.watch)}: ${esc(lesson.title)}">${icon('play')}<span>${esc(u.watch)}</span></button>
            <span class="pasta-silent-tag">${esc(u.silentUpper)}</span>
          </div><div class="pasta-caption"><span data-chapter-label></span><p data-chapter-text></p></div>
          <div class="pasta-transport"><div class="pasta-seek-row"><span data-elapsed>0:00</span>
            <input type="range" min="0" max="${lesson.duration}" step="0.05" value="0" aria-label="${esc(u.progress)}" disabled><span data-total>${clock(lesson.duration)}</span>
          </div><div class="pasta-control-row">
            <button class="pasta-play-toggle" type="button">${icon('play')}<span>${esc(u.play)}</span></button>
            <button class="pasta-replay" type="button">${icon('replay')}<span>${esc(u.replay)}</span></button>
            <label class="pasta-speed">${esc(u.speed)} <select aria-label="${esc(u.speedLabel)}"><option value="0.5">0,5×</option><option value="0.75">0,75×</option><option value="1" selected>1×</option></select></label>
            <button class="pasta-fullscreen" type="button" aria-label="${esc(u.fullscreenLabel)}">${icon('expand')}<span>${esc(u.fullscreen)}</span></button>
          </div></div></div>
          <p class="pasta-play-status" role="status" aria-live="polite">${esc(u.initial)}</p>

          ${lesson.ingredients ? `<details class="pasta-ingredients"><summary>${esc(u.ingredients)}</summary><p>${esc(lesson.measureNote)}</p><ul>${lesson.ingredients.map(item => `<li>${esc(item)}</li>`).join('')}</ul><p class="pasta-recipe-time">${esc(lesson.realTime)}</p></details>` : ''}
          <div class="pasta-guidance"><h3>${esc(u.repeatStep)}</h3><p class="pasta-chapter-hint">${esc(u.repeatHint)}</p>
            <ol>${lesson.chapters.map((chapter,number) => `<li><button type="button" data-chapter="${number}" aria-label="${esc(u.repeatAria)} ${number+1}: ${esc(chapter.label)}"><span class="pasta-chapter-heading">${number+1}. ${esc(chapter.label)}<span>${clock(chapter.at)}</span></span>${esc(chapter.text)}</button></li>`).join('')}</ol>
            <p class="pasta-result"><strong>${esc(u.result)}</strong>${esc(lesson.result)}</p>
            <p class="pasta-tip"><strong>${esc(u.tip)}</strong>${esc(lesson.tip)}</p>
            <p class="pasta-book-link">${esc(lesson.bookContext)} <a href="#${APP_DATA.config.booksRoute}">${esc(u.books)}</a></p>
            <details class="pasta-source"><summary>${esc(u.credits)}</summary><p>${esc(u.images)}: ${esc(lesson.creator)} · <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.sourceTitle)}</a> · <a href="${esc(lesson.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.licenseLabel)}</a>. ${esc(lesson.changes)} ${esc(lesson.rightsNote)}</p></details>
            <div class="pasta-practice-row"><button type="button" class="pasta-mark-practice" aria-pressed="${isPracticed}">${icon('check')}<span>${isPracticed ? u.practiced : u.mark}</span></button>
            <button type="button" class="pasta-next">${index===lessons.length-1 ? u.first : u.next}${icon('next')}</button></div>
          </div>
        </section>

        <section class="pasta-library" aria-labelledby="pasta-library-heading"><div class="pasta-library-heading"><div><p class="pasta-kicker">${esc(u.choose)}</p><h2 id="pasta-library-heading">${esc(u.workshop)}</h2></div><span class="pasta-practice-count">${practiced.size} / ${lessons.length} ${u.completed}</span></div>
          <div class="pasta-lessons">${lessons.map((item,number) => `<button type="button" class="pasta-lesson-card${item.id===lesson.id ? ' is-current' : ''}" data-lesson="${esc(item.id)}" aria-pressed="${item.id===lesson.id}">
            <img src="${esc(item.poster)}" alt="" loading="lazy" width="128" height="90"><span class="pasta-card-copy"><span class="pasta-card-category">${number+1}. ${esc(item.category)}</span><strong>${esc(item.title)}</strong><span class="pasta-card-meta">${item.duration} s · ${practiced.has(item.id) ? u.practiced : u.silentUpper}</span></span>${icon('play')}</button>`).join('')}</div>
        </section>`;

      media = page.querySelector('video');
      const current = media;
      const bigPlay = page.querySelector('.pasta-big-play');
      const toggle = page.querySelector('.pasta-play-toggle');
      const status = page.querySelector('.pasta-play-status');
      const seek = page.querySelector('input[type="range"]');
      const chapterButtons = [...page.querySelectorAll('[data-chapter]')];
      let shownChapter = -1;
      let pendingTime = null;

      function updateChapter() {
        let number = 0;
        lesson.chapters.forEach((chapter,position) => { if (current.currentTime>=chapter.at) number=position; });
        if (shownChapter===number) return;
        shownChapter = number;
        page.querySelector('[data-chapter-label]').textContent = `${u.step} ${number+1} / ${lesson.chapters.length} · ${lesson.chapters[number].label}`;
        page.querySelector('[data-chapter-text]').textContent = lesson.chapters[number].text;
        chapterButtons.forEach((button,position) => position===number ? button.setAttribute('aria-current','step') : button.removeAttribute('aria-current'));
      }
      function updatePlayback() {
        const playing = !current.paused && !current.ended;
        toggle.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${playing ? u.pause : u.play}</span>`;
        toggle.setAttribute('aria-label',playing ? u.pauseAria : u.playAria);
        bigPlay.hidden = playing;
        bigPlay.querySelector('span').textContent = current.ended ? u.again : current.currentTime>0 ? u.continue : u.watch;
      }
      async function play() {
        status.textContent = u.loading;
        current.muted = true;
        if (current.error) current.load();
        if (current.ended) current.currentTime=0;
        try { await current.play(); }
        catch (error) { if(error.name!=='AbortError') status.textContent=u.retry; }
      }
      bigPlay.addEventListener('click',play);
      toggle.addEventListener('click',()=>current.paused ? play() : current.pause());
      current.addEventListener('click',()=>current.paused ? play() : current.pause());
      page.querySelector('.pasta-replay').addEventListener('click',()=>{current.currentTime=0;play();});
      page.querySelector('select').addEventListener('change',event=>{current.playbackRate=Number(event.target.value);});
      current.addEventListener('loadedmetadata',()=>{
        seek.max=current.duration;seek.disabled=false;
        page.querySelector('[data-total]').textContent=clock(Math.round(current.duration));
        if(pendingTime!==null){current.currentTime=pendingTime;pendingTime=null;}
      });
      current.addEventListener('timeupdate',()=>{
        seek.value=current.currentTime;
        page.querySelector('[data-elapsed]').textContent=clock(current.currentTime);
        seek.setAttribute('aria-valuetext',`${Math.floor(current.currentTime)} ${u.seconds} / ${Math.ceil(current.duration||lesson.duration)}`);
        updateChapter();
      });
      current.addEventListener('seeked',updateChapter);
      chapterButtons.forEach(button=>button.addEventListener('click',()=>{
        const at=lesson.chapters[Number(button.dataset.chapter)].at;
        if(current.readyState>=1)current.currentTime=at;else pendingTime=at;
        page.querySelector('.pasta-player').scrollIntoView({block:'start'});
        play();
      }));
      seek.addEventListener('input',()=>{current.currentTime=Number(seek.value);});
      current.addEventListener('playing',()=>{updatePlayback();status.textContent=u.playing;});
      current.addEventListener('pause',()=>{updatePlayback();if(!current.ended)status.textContent=u.paused;});
      current.addEventListener('ended',()=>{updatePlayback();status.textContent=u.ended;});
      current.addEventListener('error',()=>{updatePlayback();status.textContent=u.error;});
      page.querySelector('.pasta-fullscreen').addEventListener('click',async()=>{
        try {
          const player=page.querySelector('.pasta-player');
          if(document.fullscreenElement)await document.exitFullscreen();
          else if(player.requestFullscreen)await player.requestFullscreen();
          else if(current.webkitEnterFullscreen)current.webkitEnterFullscreen();
          else status.textContent=u.fullUnavailable;
        }catch{status.textContent=u.fullError;}
      });
      page.querySelector('.pasta-mark-practice').addEventListener('click',event=>{
        if(practiced.has(lesson.id))practiced.delete(lesson.id);else practiced.add(lesson.id);
        try{localStorage.setItem(storageKey,JSON.stringify([...practiced]));}catch{}
        const marked=practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed',marked);
        event.currentTarget.querySelector('span').textContent=marked?u.practiced:u.mark;
        page.querySelector('.pasta-practice-count').textContent=`${practiced.size} / ${lessons.length} ${u.completed}`;
        page.querySelector(`[data-lesson="${lesson.id}"] .pasta-card-meta`).textContent=`${lesson.duration} s · ${marked?u.practiced:u.silentUpper}`;
      });
      page.querySelector('.pasta-next').addEventListener('click',()=>select(lessons[(index+1)%lessons.length].id));
      page.querySelectorAll('[data-lesson]').forEach(button=>button.addEventListener('click',()=>select(button.dataset.lesson)));
      updateChapter();
      updatePlayback();
    }
    draw();
  }
  window.PASTA_VIDEOS={render,pause:()=>media?.pause()};
})();
