(() => {
  const lessons = APP_DATA.videos;
  const storageKey = 'baking-fi-practice-v1';
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
  const durationRange = `${Math.min(...lessons.map(lesson => lesson.duration))}–${Math.max(...lessons.map(lesson => lesson.duration))} sekuntia`;

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
          <div class="hero-text"><p class="baking-kicker">OMA LEIVONTAKEITTIÖSI</p>
            <h1 id="page-heading" tabindex="-1">Reseptit alusta alkaen videolla</h1>
            <p>Raaka-aineista valmiiseen lopputulokseen. Seuraa kuvia ja suomenkielisiä määrä- ja valmistusohjeita. Avaa ainesluettelo ja kertaa vaiheet omaan tahtiisi.</p>
          </div>
          <div class="baking-facts"><span>${lessons.length} reseptiä ja valmistusohjetta alusta alkaen</span><span>${durationRange}</span><span>Ei puhetta · ei ääntä</span></div>
        </div>

        <section class="baking-feature" aria-labelledby="baking-lesson-heading">
          <div class="baking-lesson-heading"><div><p class="baking-category">${esc(lesson.category)} · Video ${index + 1} / ${lessons.length}</p>
            <h2 id="baking-lesson-heading" tabindex="-1">${esc(lesson.title)}</h2>
            <p>${esc(lesson.description)}</p></div><span class="baking-duration">${lesson.duration} s</span></div>

          <p class="baking-preparation"><strong>Ennen aloittamista</strong> ${esc(lesson.preparation)}</p>
          <div class="baking-player" id="baking-player">
            <div class="baking-frame">
              <video class="baking-media" src="${esc(lesson.videoUrl)}" poster="${esc(lesson.poster)}" preload="none" muted playsinline aria-label="${esc(lesson.title)} — Äänetön valmistusvideo"></video>
              <button class="baking-big-play" type="button" aria-label="Katso resepti : ${esc(lesson.title)}">${icon('play')}<span>Katso resepti</span></button>
              <span class="baking-silent-tag">ÄÄNETÖN</span>
            </div>
            <div class="baking-caption"><span data-chapter-label></span><p data-chapter-text></p></div>
            <div class="baking-transport">
              <div class="baking-seek-row"><span data-elapsed>0:00</span><input type="range" min="0" max="${lesson.duration}" step="0.05" value="0" aria-label="Videon toistokohta" disabled><span data-total>${clock(lesson.duration)}</span></div>
              <div class="baking-control-row">
                <button type="button" class="baking-play-toggle">${icon('play')}<span>Toista</span></button>
                <button type="button" class="baking-replay">${icon('replay')}<span>Toista uudelleen</span></button>
                <label class="baking-speed">Nopeus <select aria-label="Toistonopeus"><option value="0.5">0,5×</option><option value="0.75">0,75×</option><option value="1" selected>1×</option></select></label>
                <button type="button" class="baking-fullscreen" aria-label="Näytä video koko näytöllä">${icon('expand')}<span>Koko näyttö</span></button>
              </div>
            </div>
          </div>
          <p class="baking-play-status" role="status" aria-live="polite">Oletko valmis? Käynnistä video.</p>
          ${lesson.ingredients ? `<details class="baking-ingredients"><summary>Ainekset ja ohjeet ennen aloittamista</summary><p>${esc(lesson.measureNote)}</p><ul>${lesson.ingredients.map(item => `<li>${esc(item)}</li>`).join('')}</ul><p class="baking-recipe-time">${esc(lesson.realTime)}</p></details>` : ''}

          <div class="baking-guidance"><h3>Kertaa vaihe</h3><p class="baking-chapter-hint">Valitse vaihe, josta haluat jatkaa videota.</p><ol>${lesson.chapters.map((chapter, number) => `<li><button type="button" data-chapter="${number}" aria-label="Toista vaihe ${number + 1} : ${esc(chapter.label)}"><span class="baking-chapter-heading">${number + 1}. ${esc(chapter.label)} <span>${clock(chapter.at)}</span></span>${esc(chapter.text)}</button></li>`).join('')}</ol>
            <p class="baking-result"><strong>Tältä lopputuloksen pitäisi näyttää</strong> ${esc(lesson.result)}</p>
            <p class="baking-tip"><strong>Muista tämä</strong> ${esc(lesson.tip)}</p>
            <details class="baking-source"><summary>Videon lähde ja käyttöehdot</summary><p>Kuvamateriaali: ${esc(lesson.creator)} · <a href="${esc(lesson.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.sourceTitle)}</a>. Käyttöehdot: <a href="${esc(lesson.licenseUrl || 'https://creativecommons.org/licenses/by/3.0/deed.fi')}" target="_blank" rel="noopener noreferrer">${esc(lesson.licenseLabel || 'CC BY 3.0')}</a>. ${esc(lesson.changes || 'Lyhennetty äänetön video, johon on lisätty ohjeet.')} ${esc(lesson.rightsNote || 'Lisenssi koskee tämän videon kuvamateriaalia.')}</p>${lesson.recipeUrl ? `<p>Reseptiversiomme ainesmäärät: <a href="${esc(lesson.recipeUrl)}" target="_blank" rel="noopener noreferrer">${esc(lesson.recipeTitle)}</a>.</p>` : ''}</details>
            <div class="baking-practice-row"><button type="button" class="baking-mark-practice" aria-pressed="${isPracticed}">${icon('check')}<span>${isPracticed ? 'Resepti kokeiltu' : 'Olen kokeillut reseptiä'}</span></button>
              <button type="button" class="baking-next">${index === lessons.length - 1 ? 'Ensimmäiseen videoon' : 'Seuraava video'}${icon('next')}</button></div>
          </div>
        </section>

        <section class="baking-library" aria-labelledby="baking-library-heading"><div class="baking-library-heading"><div><p class="baking-kicker">KEHITY LEIPOJANA</p><h2 id="baking-library-heading">Valitse seuraava reseptisi</h2></div><span class="baking-practice-count">${practiced.size} / ${lessons.length} reseptiä kokeiltu</span></div>
          <div class="baking-lessons">${lessons.map((item, number) => `<button type="button" class="baking-lesson-card${item.id === lesson.id ? ' is-current' : ''}" data-lesson="${esc(item.id)}" aria-pressed="${item.id === lesson.id}">
            <img src="${esc(item.poster)}" alt="" loading="lazy" width="128" height="90"><span class="baking-card-copy"><span class="baking-card-category">${number + 1}. ${esc(item.category)}</span><strong>${esc(item.title)}</strong><span class="baking-card-meta">${item.duration} s · ${practiced.has(item.id) ? 'Resepti kokeiltu' : 'Äänetön'}</span></span>${icon('play')}
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
      const chapterLabel = page.querySelector('[data-chapter-label]');
      const chapterText = page.querySelector('[data-chapter-text]');
      const chapterButtons = [...page.querySelectorAll('[data-chapter]')];
      let shownChapter = -1;
      let requestedTime = null;

      function updateChapter() {
        let number = 0;
        lesson.chapters.forEach((chapter, position) => { if (currentMedia.currentTime >= chapter.at) number = position; });
        if (shownChapter === number) return;
        shownChapter = number;
        chapterLabel.textContent = `VAIHE ${number + 1} / ${lesson.chapters.length} · ${lesson.chapters[number].label}`;
        chapterText.textContent = lesson.chapters[number].text;
        chapterButtons.forEach((button, position) => {
          if (position === number) button.setAttribute('aria-current', 'step');
          else button.removeAttribute('aria-current');
        });
      }
      updateChapter();

      function updatePlayback() {
        const playing = !currentMedia.paused && !currentMedia.ended;
        toggle.innerHTML = `${icon(playing ? 'pause' : 'play')}<span>${playing ? 'Keskeytä' : 'Toista'}</span>`;
        toggle.setAttribute('aria-label', playing ? 'Keskeytä video' : 'Toista video');
        bigPlay.hidden = playing;
        bigPlay.querySelector('span').textContent = currentMedia.ended ? 'Katso resepti uudelleen' : currentMedia.currentTime > 0 ? 'Jatka' : 'Katso resepti';
      }

      async function play() {
        status.textContent = 'Videota ladataan…';
        currentMedia.muted = true;
        if (currentMedia.error) currentMedia.load();
        if (currentMedia.ended) currentMedia.currentTime = 0;
        try { await currentMedia.play(); }
        catch (error) {
          if (error.name !== 'AbortError') status.textContent = 'Toisto ei käynnistynyt. Yritä uudelleen painamalla Toista.';
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
        total.textContent = clock(Math.round(currentMedia.duration));
        if (requestedTime !== null) { currentMedia.currentTime = requestedTime; requestedTime = null; }
      });
      currentMedia.addEventListener('timeupdate', () => {
        seek.value = currentMedia.currentTime;
        elapsed.textContent = clock(currentMedia.currentTime);
        seek.setAttribute('aria-valuetext', `${Math.floor(currentMedia.currentTime)} sekuntia / ${Math.ceil(currentMedia.duration || lesson.duration)}`);
        updateChapter();
      });
      currentMedia.addEventListener('seeked', updateChapter);
      chapterButtons.forEach(button => button.addEventListener('click', () => {
        const at = lesson.chapters[Number(button.dataset.chapter)].at;
        if (currentMedia.readyState >= 1) currentMedia.currentTime = at;
        else requestedTime = at;
        page.querySelector('.baking-player').scrollIntoView({block:'start'});
        play();
      }));
      seek.addEventListener('input', () => { currentMedia.currentTime = Number(seek.value); });
      currentMedia.addEventListener('playing', () => { updatePlayback(); status.textContent = 'Seuraa käsien liikkeitä ja välineiden käyttöä.'; });
      currentMedia.addEventListener('pause', () => { updatePlayback(); if (!currentMedia.ended) status.textContent = 'Video on keskeytetty. Katso työvaihe rauhassa.'; });
      currentMedia.addEventListener('ended', () => { updatePlayback(); status.textContent = 'Video päättyi. Kertaa vaihe tai siirry seuraavaan videoon.'; });
      currentMedia.addEventListener('error', () => { updatePlayback(); status.textContent = 'Videota ei voitu ladata. Yritä uudelleen painamalla Toista uudelleen.'; });

      page.querySelector('.baking-fullscreen').addEventListener('click', async () => {
        const player = page.querySelector('.baking-player');
        try {
          if (document.fullscreenElement) await document.exitFullscreen();
          else if (player.requestFullscreen) await player.requestFullscreen();
          else if (currentMedia.webkitEnterFullscreen) currentMedia.webkitEnterFullscreen();
          else status.textContent = 'Selain ei tue koko näytön tilaa.';
        } catch { status.textContent = 'Koko näytön tila ei ole juuri nyt käytettävissä.'; }
      });
      page.querySelector('.baking-mark-practice').addEventListener('click', event => {
        if (practiced.has(lesson.id)) practiced.delete(lesson.id); else practiced.add(lesson.id);
        try { localStorage.setItem(storageKey, JSON.stringify([...practiced])); } catch { /* Optional local progress. */ }
        const marked = practiced.has(lesson.id);
        event.currentTarget.setAttribute('aria-pressed', marked);
        event.currentTarget.querySelector('span').textContent = marked ? 'Resepti kokeiltu' : 'Olen kokeillut reseptiä';
        page.querySelector('.baking-practice-count').textContent = `${practiced.size} / ${lessons.length} reseptiä kokeiltu`;
        page.querySelector(`[data-lesson="${lesson.id}"] .baking-card-meta`).textContent = `${lesson.duration} s · ${marked ? 'Resepti kokeiltu' : 'Äänetön'}`;
      });
      page.querySelector('.baking-next').addEventListener('click', () => select(lessons[(index + 1) % lessons.length].id));
      page.querySelectorAll('[data-lesson]').forEach(button => button.addEventListener('click', () => select(button.dataset.lesson)));
    }
    draw();
  }

  window.BAKING_VIDEOS = {render, pause: () => media?.pause()};
})();
