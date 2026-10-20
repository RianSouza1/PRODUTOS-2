(() => {
  const lessons = APP_DATA.videos;
  const storageKey = 'baking-fr-practice-v1';
  let activeId = APP_DATA.config.featuredVideo || lessons[0].id;
  let media = null;
  let practiced = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) practiced = new Set(saved.filter(id => lessons.some(lesson => lesson.id === id)));
  } catch { /* Practice remains available when storage is disabled. */ }

  const esc = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const drawings = {
    play: '<path d="m9 5 11 7-11 7z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    replay: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
    expand: '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    next: '<path d="M4 12h16m-6-6 6 6-6 6"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name]}</svg>`;
  const clock = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

  function render(root) {
    root.innerHTML = '<div class="page-view baking-video-page" id="baking-video-page"></div>';
    const page = root.querySelector('#baking-video-page');

    function select(id) {
      media?.pause();
      activeId = id;
      draw();
      root.scrollTo(0, 0);
      page.querySelector('#baking-lesson-heading').focus({preventScroll:true});
    }

    function draw() {
      const index = Math.max(0, lessons.findIndex(lesson => lesson.id === activeId));
      const lesson = lessons[index];
      const isPracticed = practiced.has(lesson.id);
      page.innerHTML = `
        <div class="hero-card glass-panel baking-video-hero">
          <div class="hero-text"><p class="baking-kicker">L’ATELIER DE PÂTISSERIE</p>
            <h1 id="page-heading" tabindex="-1">Les techniques en vidéo</h1>
            <p>Observez le geste en gros plan, ralentissez si besoin, puis essayez à votre rythme.</p>
          </div>
          <div class="baking-facts"><span>8 démonstrations</span><span>7 à 20 secondes</span><span>Sans paroles · sans son</span></div>
        </div>

        <section class="baking-feature" aria-labelledby="baking-lesson-heading">
          <div class="baking-lesson-heading"><div><p class="baking-category">${esc(lesson.category)} · Technique ${index + 1} / ${lessons.length}</p>
            <h2 id="baking-lesson-heading" tabindex="-1">${esc(lesson.title)}</h2>
            <p>${esc(lesson.description)}</p></div><span class="baking-duration">${lesson.duration} s</span></div>

          <div class="baking-player" id="baking-player">
            <div class="baking-frame">
              <video class="baking-media" src="${esc(lesson.videoUrl)}" poster="${esc(lesson.poster)}" preload="none" muted playsinline aria-label="${esc(lesson.title)} — démonstration sans son"></video>
              <button class="baking-big-play" type="button" aria-label="Voir la technique : ${esc(lesson.title)}">${icon('play')}<span>Voir le geste</span></button>
              <span class="baking-silent-tag">SANS SON</span>
            </div>
            <div class="baking-transport">
              <div class="baking-seek-row"><span data-elapsed>0:00</span><input type="range" min="0" max="${lesson.duration}" step="0.05" value="0" aria-label="Progression de la vidéo" disabled><span data-total>${clock(lesson.duration)}</span></div>
              <div class="baking-control-row">
                <button type="button" class="baking-play-toggle">${icon('play')}<span>Lire</span></button>
                <button type="button" class="baking-replay">${icon('replay')}<span>Revoir</span></button>
                <label class="baking-speed">Vitesse <select aria-label="Vitesse de lecture"><option value="0.5">0,5×</option><option value="0.75">0,75×</option><option value="1" selected>1×</option></select></label>
                <button type="button" class="baking-fullscreen" aria-label="Afficher la vidéo en plein écran">${icon('expand')}<span>Plein écran</span></button>
              </div>
            </div>
          </div>
          <p class="baking-play-status" role="status" aria-live="polite">Prêt à observer ? Lancez la vidéo.</p>

          <div class="baking-guidance"><h3>Les gestes à observer</h3><ol>${lesson.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>
            <p class="baking-tip"><strong>Le petit conseil</strong> ${esc(lesson.tip)}</p>
            <div class="baking-practice-row"><button type="button" class="baking-mark-practice" aria-pressed="${isPracticed}">${icon('check')}<span>${isPracticed ? 'Geste essayé' : 'J’ai essayé ce geste'}</span></button>
              <button type="button" class="baking-next">${index === lessons.length - 1 ? 'Revenir à la première technique' : 'Technique suivante'}${icon('next')}</button></div>
          </div>
        </section>

        <section class="baking-library" aria-labelledby="baking-library-heading"><div class="baking-library-heading"><div><p class="baking-kicker">VOTRE PARCOURS</p><h2 id="baking-library-heading">Choisissez votre prochain geste</h2></div><span class="baking-practice-count">${practiced.size} / ${lessons.length} gestes essayés</span></div>
          <div class="baking-lessons">${lessons.map((item, number) => `<button type="button" class="baking-lesson-card${item.id === lesson.id ? ' is-current' : ''}" data-lesson="${esc(item.id)}" aria-pressed="${item.id === lesson.id}">
            <img src="${esc(item.poster)}" alt="" loading="lazy" width="128" height="90"><span class="baking-card-copy"><span class="baking-card-category">${number + 1}. ${esc(item.category)}</span><strong>${esc(item.title)}</strong><span class="baking-card-meta">${item.duration} s · ${practiced.has(item.id) ? 'Geste essayé' : 'Sans son'}</span></span>${icon('play')}
          </button>`).join('')}</div>
        </section>`;

      media = page.querySelector('video');
      const currentMedia = media;
      const bigPlay = page.querySelector('.baking-big-play');
      const toggle = page.querySelector('.baking-play-toggle');
      const status = page.querySelector('.baking-play-status');
      const seek = page.querySelector('input[type="range"]');
      const elapsed = page.querySelector('[data-elapsed]');
      const total = page.querySelector('[data-total]');

      function updatePlayback() {
        const playing = !currentMedia.paused && !currentMedia.ended;
        toggle.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${playing ? 'Pause' : 'Lire'}</span>`;
        toggle.setAttribute('aria-label', playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo');
        bigPlay.hidden = playing;
        bigPlay.querySelector('span').textContent = currentMedia.ended ? 'Revoir le geste' : currentMedia.currentTime > 0 ? 'Continuer' : 'Voir le geste';
      }

      async function play() {
        status.textContent = 'Chargement de la démonstration…';
        currentMedia.muted = true;
        if (currentMedia.error) currentMedia.load();
        if (currentMedia.ended) currentMedia.currentTime = 0;
        try { await currentMedia.play(); }
        catch (error) {
          if (error.name !== 'AbortError') status.textContent = 'La lecture n’a pas démarré. Appuyez de nouveau sur Lire pour réessayer.';
        }
      }

      bigPlay.addEventListener('click', play);
      toggle.addEventListener('click', () => currentMedia.paused ? play() : currentMedia.pause());
      currentMedia.addEventListener('click', () => currentMedia.paused ? play() : currentMedia.pause());
      page.querySelector('.baking-replay').addEventListener('click', () => { currentMedia.currentTime = 0; play(); });
      page.querySelector('select').addEventListener('change', event => { currentMedia.playbackRate = Number(event.target.value); });
      currentMedia.addEventListener('loadedmetadata', () => {
        seek.max = currentMedia.duration;
        seek.disabled = false;
        total.textContent = clock(currentMedia.duration);
      });
      currentMedia.addEventListener('timeupdate', () => {
        seek.value = currentMedia.currentTime;
        elapsed.textContent = clock(currentMedia.currentTime);
        seek.setAttribute('aria-valuetext', `${Math.floor(currentMedia.currentTime)} secondes sur ${Math.ceil(currentMedia.duration || lesson.duration)}`);
      });
      seek.addEventListener('input', () => { currentMedia.currentTime = Number(seek.value); });
      currentMedia.addEventListener('playing', () => { updatePlayback(); status.textContent = 'Observez la position des mains et le mouvement de l’ustensile.'; });
      currentMedia.addEventListener('pause', () => { updatePlayback(); if (!currentMedia.ended) status.textContent = 'En pause : prenez le temps de regarder le geste.'; });
      currentMedia.addEventListener('ended', () => { updatePlayback(); status.textContent = 'Démonstration terminée. Rejouez le geste ou essayez la technique suivante.'; });
      currentMedia.addEventListener('error', () => { updatePlayback(); status.textContent = 'La vidéo n’a pas pu être chargée. Utilisez Revoir pour réessayer.'; });

      page.querySelector('.baking-fullscreen').addEventListener('click', async () => {
        const player = page.querySelector('.baking-player');
        try {
          if (document.fullscreenElement) await document.exitFullscreen();
          else if (player.requestFullscreen) await player.requestFullscreen();
          else if (currentMedia.webkitEnterFullscreen) currentMedia.webkitEnterFullscreen();
          else status.textContent = 'Le plein écran n’est pas disponible dans ce navigateur.';
        } catch { status.textContent = 'Le plein écran n’est pas disponible pour le moment.'; }
      });
      page.querySelector('.baking-mark-practice').addEventListener('click', event => {
        if (practiced.has(lesson.id)) practiced.delete(lesson.id); else practiced.add(lesson.id);
        try { localStorage.setItem(storageKey, JSON.stringify([...practiced])); } catch { /* Optional local progress. */ }
        const marked = practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed', marked);
        event.currentTarget.querySelector('span').textContent = marked ? 'Geste essayé' : 'J’ai essayé ce geste';
        page.querySelector('.baking-practice-count').textContent = `${practiced.size} / ${lessons.length} gestes essayés`;
        page.querySelector(`[data-lesson="${lesson.id}"] .baking-card-meta`).textContent = `${lesson.duration} s · ${marked ? 'Geste essayé' : 'Sans son'}`;
      });
      page.querySelector('.baking-next').addEventListener('click', () => select(lessons[(index + 1) % lessons.length].id));
      page.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => select(button.dataset.lesson)));
    }
    draw();
  }

  window.BAKING_VIDEOS = {render, pause: () => media?.pause()};
})();
