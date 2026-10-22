(() => {
  const lessons = APP_DATA.videos;
  const storageKey = 'massas-es-practice-v1';
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
          <p class="pasta-kicker">APRENDE COCINANDO</p><h1 id="page-heading" tabindex="-1">Técnicas de pasta, paso a paso</h1>
          <p>Mira las manos, sigue cada paso y practica con tus recetarios. Demostraciones reales, con indicaciones en español y tiempo para observar cada gesto.</p>
        </div><div class="pasta-facts"><span>${lessons.length} demostraciones</span><span>${shortest}–${longest} segundos</span><span>Sin diálogos · Sin sonido</span></div></div>

        <section class="pasta-feature" aria-labelledby="pasta-lesson-heading">
          <div class="pasta-lesson-heading"><div><p class="pasta-category">${esc(lesson.category)} · Clase ${index+1} / ${lessons.length}</p>
            <h2 id="pasta-lesson-heading" tabindex="-1">${esc(lesson.title)}</h2><p>${esc(lesson.description)}</p>
          </div><span class="pasta-duration">${lesson.duration} s</span></div>
          <p class="pasta-preparation"><strong>Antes de empezar</strong> ${esc(lesson.preparation)}</p>

          <div class="pasta-player"><div class="pasta-frame">
            <video class="pasta-media" src="${esc(lesson.videoUrl)}" poster="${esc(lesson.poster)}" preload="none" muted playsinline aria-label="${esc(lesson.title)}: demostración sin sonido"></video>
            <button class="pasta-big-play" type="button" aria-label="Ver la demostración: ${esc(lesson.title)}">${icon('play')}<span>Ver demostración</span></button>
            <span class="pasta-silent-tag">SIN SONIDO</span>
          </div><div class="pasta-caption"><span data-chapter-label></span><p data-chapter-text></p></div>
          <div class="pasta-transport"><div class="pasta-seek-row"><span data-elapsed>0:00</span>
            <input type="range" min="0" max="${lesson.duration}" step="0.05" value="0" aria-label="Progreso del vídeo" disabled><span data-total>${clock(lesson.duration)}</span>
          </div><div class="pasta-control-row">
            <button class="pasta-play-toggle" type="button">${icon('play')}<span>Reproducir</span></button>
            <button class="pasta-replay" type="button">${icon('replay')}<span>Repetir</span></button>
            <label class="pasta-speed">Velocidad <select aria-label="Velocidad de reproducción"><option value="0.5">0,5×</option><option value="0.75">0,75×</option><option value="1" selected>1×</option></select></label>
            <button class="pasta-fullscreen" type="button" aria-label="Mostrar el vídeo en pantalla completa">${icon('expand')}<span>Pantalla completa</span></button>
          </div></div></div>
          <p class="pasta-play-status" role="status" aria-live="polite">Pulsa Reproducir y observa el primer gesto.</p>

          ${lesson.ingredients ? `<details class="pasta-ingredients"><summary>Ingredientes y tiempos reales</summary><p>${esc(lesson.measureNote)}</p><ul>${lesson.ingredients.map(item => `<li>${esc(item)}</li>`).join('')}</ul><p class="pasta-recipe-time">${esc(lesson.realTime)}</p></details>` : ''}
          <div class="pasta-guidance"><h3>Repite una etapa</h3><p class="pasta-chapter-hint">Pulsa un paso para ver ese momento de nuevo. Puedes bajar la velocidad a 0,5×.</p>
            <ol>${lesson.chapters.map((chapter,number) => `<li><button type="button" data-chapter="${number}" aria-label="Repetir el paso ${number+1}: ${esc(chapter.label)}"><span class="pasta-chapter-heading">${number+1}. ${esc(chapter.label)}<span>${clock(chapter.at)}</span></span>${esc(chapter.text)}</button></li>`).join('')}</ol>
            <p class="pasta-result"><strong>Qué debes conseguir</strong>${esc(lesson.result)}</p>
            <p class="pasta-tip"><strong>El detalle que marca la diferencia</strong>${esc(lesson.tip)}</p>
            <p class="pasta-book-link">${esc(lesson.bookContext)} <a href="#${APP_DATA.config.booksRoute}">Abrir mis recetarios →</a></p>
            <details class="pasta-source"><summary>Créditos y licencia</summary><p>Imágenes: ${esc(lesson.creator)} · <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.sourceTitle)}</a> · <a href="${esc(lesson.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.licenseLabel)}</a>. ${esc(lesson.changes)} ${esc(lesson.rightsNote)}</p></details>
            <div class="pasta-practice-row"><button type="button" class="pasta-mark-practice" aria-pressed="${isPracticed}">${icon('check')}<span>${isPracticed ? 'Ya lo he practicado' : 'Marcar como practicado'}</span></button>
            <button type="button" class="pasta-next">${index===lessons.length-1 ? 'Volver a la primera clase' : 'Siguiente clase'}${icon('next')}</button></div>
          </div>
        </section>

        <section class="pasta-library" aria-labelledby="pasta-library-heading"><div class="pasta-library-heading"><div><p class="pasta-kicker">ELIGE QUÉ PRACTICAR</p><h2 id="pasta-library-heading">Tu taller de pasta</h2></div><span class="pasta-practice-count">${practiced.size} / ${lessons.length} clases practicadas</span></div>
          <div class="pasta-lessons">${lessons.map((item,number) => `<button type="button" class="pasta-lesson-card${item.id===lesson.id ? ' is-current' : ''}" data-lesson="${esc(item.id)}" aria-pressed="${item.id===lesson.id}">
            <img src="${esc(item.poster)}" alt="" loading="lazy" width="128" height="90"><span class="pasta-card-copy"><span class="pasta-card-category">${number+1}. ${esc(item.category)}</span><strong>${esc(item.title)}</strong><span class="pasta-card-meta">${item.duration} s · ${practiced.has(item.id) ? 'Practicado' : 'Sin sonido'}</span></span>${icon('play')}</button>`).join('')}</div>
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
        page.querySelector('[data-chapter-label]').textContent = `PASO ${number+1} / ${lesson.chapters.length} · ${lesson.chapters[number].label}`;
        page.querySelector('[data-chapter-text]').textContent = lesson.chapters[number].text;
        chapterButtons.forEach((button,position) => position===number ? button.setAttribute('aria-current','step') : button.removeAttribute('aria-current'));
      }
      function updatePlayback() {
        const playing = !current.paused && !current.ended;
        toggle.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${playing ? 'Pausar' : 'Reproducir'}</span>`;
        toggle.setAttribute('aria-label',playing ? 'Pausar el vídeo' : 'Reproducir el vídeo');
        bigPlay.hidden = playing;
        bigPlay.querySelector('span').textContent = current.ended ? 'Ver de nuevo' : current.currentTime>0 ? 'Continuar' : 'Ver demostración';
      }
      async function play() {
        status.textContent = 'Cargando la demostración…';
        current.muted = true;
        if (current.error) current.load();
        if (current.ended) current.currentTime=0;
        try { await current.play(); }
        catch (error) { if(error.name!=='AbortError') status.textContent='Pulsa Reproducir de nuevo para iniciar el vídeo.'; }
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
        seek.setAttribute('aria-valuetext',`${Math.floor(current.currentTime)} segundos de ${Math.ceil(current.duration||lesson.duration)}`);
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
      current.addEventListener('playing',()=>{updatePlayback();status.textContent='Observa las manos y la textura del alimento. Pausa cuando quieras.';});
      current.addEventListener('pause',()=>{updatePlayback();if(!current.ended)status.textContent='En pausa: tómate un momento para observar el gesto.';});
      current.addEventListener('ended',()=>{updatePlayback();status.textContent='Demostración terminada. Repite un paso o elige otra clase.';});
      current.addEventListener('error',()=>{updatePlayback();status.textContent='No se ha podido cargar el vídeo. Pulsa Repetir para intentarlo de nuevo.';});
      page.querySelector('.pasta-fullscreen').addEventListener('click',async()=>{
        try {
          const player=page.querySelector('.pasta-player');
          if(document.fullscreenElement)await document.exitFullscreen();
          else if(player.requestFullscreen)await player.requestFullscreen();
          else if(current.webkitEnterFullscreen)current.webkitEnterFullscreen();
          else status.textContent='La pantalla completa no está disponible en este navegador.';
        }catch{status.textContent='No se puede abrir la pantalla completa en este momento.';}
      });
      page.querySelector('.pasta-mark-practice').addEventListener('click',event=>{
        if(practiced.has(lesson.id))practiced.delete(lesson.id);else practiced.add(lesson.id);
        try{localStorage.setItem(storageKey,JSON.stringify([...practiced]));}catch{}
        const marked=practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed',marked);
        event.currentTarget.querySelector('span').textContent=marked?'Ya lo he practicado':'Marcar como practicado';
        page.querySelector('.pasta-practice-count').textContent=`${practiced.size} / ${lessons.length} clases practicadas`;
        page.querySelector(`[data-lesson="${lesson.id}"] .pasta-card-meta`).textContent=`${lesson.duration} s · ${marked?'Practicado':'Sin sonido'}`;
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
