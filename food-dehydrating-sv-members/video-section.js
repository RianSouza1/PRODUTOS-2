/* Selected filmed demonstrations, played through the creators' official embeds. */
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const duration = lesson => lesson.steps.reduce((sum, step) => sum + step.end - step.start, 0);
  const poster = lesson => `https://i.ytimg.com/vi/${lesson.youtubeId}/hq2.jpg`;
  const $ = id => document.getElementById(id);
  let selected = 0, stage = 0, player, interval, apiPromise, generation = 0;
  let loading = false, pending = false, finished = false, revealAt = 0, speed = 1, seekPending = false;
  const lesson = () => APP_DATA.videos[selected];

  function destroy() {
    generation++;
    clearInterval(interval);
    interval = null;
    loading = false;
    if (player) { try { player.destroy(); } catch {} }
    player = null;
  }
  function cover(visible) { if ($('food-cover')) $('food-cover').hidden = !visible; }
  function message(text) { if ($('food-status')) $('food-status').textContent = text; }
  function buttonLabel(text) { if ($('food-play')) $('food-play').textContent = text; }
  function updateStep() {
    const step = lesson().steps[stage];
    $('food-step-number').textContent = `STEG ${stage + 1} AV ${lesson().steps.length}`;
    $('food-step-title').textContent = step.title;
    $('food-step-instruction').textContent = step.instruction;
    document.querySelectorAll('[data-food-step]').forEach(button => {
      const active = Number(button.dataset.foodStep) === stage;
      button.setAttribute('aria-pressed', String(active));
    });
    $('food-back').disabled = stage === 0;
    $('food-forward').disabled = stage === lesson().steps.length - 1;
  }
  function complete() {
    finished = true;
    cover(true);
    player?.pauseVideo();
    $('food-progress').value = duration(lesson());
    $('food-time').textContent = `${duration(lesson())} / ${duration(lesson())} s`;
    buttonLabel('Se igen');
    $('food-cover-label').textContent = 'Klart! Se igen eller välj nästa film';
    message('Bra jobbat! Öva på handgreppen och fortsätt i den relaterade boken.');
  }
  function goToStep(index, play = true) {
    if (loading) return;
    stage = index;
    pending = false;
    finished = false;
    seekPending = true;
    cover(true);
    revealAt = performance.now() + 450;
    updateStep();
    $('food-cover-label').textContent = play ? 'Filmen laddas…' : 'Fortsätt';
    if (!player) { if (play) start(); return; }
    player.mute();
    player.setVolume(0);
    player.seekTo(lesson().steps[stage].start, true);
    if (play) player.playVideo();
  }
  function api() {
    if (window.YT?.Player) return Promise.resolve();
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => { apiPromise = null; reject(new Error('Video API timeout')); }, 20000);
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { clearTimeout(timeout); previous?.(); resolve(); };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => { clearTimeout(timeout); script.remove(); apiPromise = null; reject(new Error('Video API unavailable')); };
      document.head.appendChild(script);
    });
    return apiPromise;
  }
  async function start() {
    if (loading) return;
    if (player) {
      if (finished) { goToStep(0); return; }
      if (pending) { goToStep(stage + 1); return; }
      if (player.getPlayerState() === 1) {
        cover(true); player.pauseVideo();
        $('food-cover-label').textContent = 'Fortsätt';
        return;
      }
      cover(true); revealAt = performance.now() + 450;
      player.mute(); player.setVolume(0); player.playVideo();
      return;
    }
    const token = generation;
    loading = true;
    cover(true);
    $('food-cover-label').textContent = 'Filmen laddas…';
    buttonLabel('Laddar…');
    message('Förbereder din korta demonstration utan ljud.');
    try {
      await api();
      if (token !== generation || !$('food-player')) return;
      player = new YT.Player('food-player', {
        host: 'https://www.youtube-nocookie.com', width: '100%', height: '100%', videoId: lesson().youtubeId,
        playerVars: { controls: 0, disablekb: 1, fs: 0, playsinline: 1, rel: 0, iv_load_policy: 3, mute: 1, hl: 'sv', start: lesson().steps[stage].start, end: lesson().steps.at(-1).end, origin: location.origin },
        events: {
          onReady: event => {
            if (token !== generation) return;
            loading = false;
            event.target.getIframe().setAttribute('title', lesson().title);
            event.target.getIframe().setAttribute('tabindex', '-1');
            event.target.getIframe().setAttribute('aria-hidden', 'true');
            event.target.mute(); event.target.setVolume(0);
            event.target.setPlaybackRate(speed);
            revealAt = performance.now() + 450;
            seekPending = true;
            event.target.loadVideoById({videoId: lesson().youtubeId, startSeconds: lesson().steps[stage].start, endSeconds: lesson().steps.at(-1).end});
            interval = setInterval(() => {
              if (!player || token !== generation || finished || pending) return;
              const now = player.getCurrentTime(), clip = lesson().steps[stage];
              if (!Number.isFinite(now)) return;
              player.mute();
              if (player.getVolume() !== 0) player.setVolume(0);
              if (seekPending) {
                if (now >= clip.start - .1 && now < clip.end - .15) seekPending = false;
                else { cover(true); return; }
              }
              if (now >= clip.end - .15) {
                cover(true);
                if (stage === lesson().steps.length - 1) { complete(); return; }
                if ($('food-step-pause').checked) {
                  pending = true; player.pauseVideo();
                  buttonLabel('Nästa steg');
                  $('food-cover-label').textContent = 'Steget är klart · Nästa steg →';
                  message('Paus för att öva. Tryck på Nästa steg när du är redo.');
                } else goToStep(stage + 1);
                return;
              }
              if (now < clip.start - .1) {
                cover(true);
                if (player.getPlayerState() === 1) player.seekTo(clip.start, true);
                return;
              }
              if (player.getPlayerState() === 1 && performance.now() >= revealAt) cover(false);
              const elapsed = lesson().steps.slice(0, stage).reduce((sum, s) => sum + s.end - s.start, 0) + Math.max(0, Math.min(clip.end - clip.start, now - clip.start));
              $('food-progress').value = elapsed;
              $('food-time').textContent = `${Math.floor(elapsed)} / ${duration(lesson())} s`;
            }, 100);
          },
          onStateChange: event => {
            if (token !== generation) return;
            if (event.data === 1) {
              event.target.mute(); event.target.setVolume(0);
              if (finished || pending) { event.target.pauseVideo(); return; }
              buttonLabel('Pausa'); message('Utan ljud · Följ instruktionen under filmen.');
            } else if (event.data === 2 && !pending && !finished) {
              cover(true); buttonLabel('Fortsätt'); message('Pausad · Ta den tid du behöver för att öva.');
            } else if (event.data === 3) { cover(true); revealAt = performance.now() + 450; }
            else if (event.data === 0 && !finished && stage === lesson().steps.length - 1) complete();
          },
          onError: () => {
            if (token !== generation) return;
            destroy(); cover(true); buttonLabel('Försök igen');
            $('food-cover-label').textContent = 'Försök igen';
            message('Filmen kunde inte laddas. Försök igen eller välj en annan film. Du kan fortsätta med PDF-böckerna nedan.');
          }
        }
      });
    } catch {
      if (token !== generation) return;
      loading = false; buttonLabel('Försök igen');
      $('food-cover-label').textContent = 'Försök igen';
      message('Filmen kunde inte laddas. Kontrollera anslutningen och försök igen.');
    }
  }
  function render() {
    stage = 0; pending = false; finished = false;
    const item = lesson();
    return `<div class="page-view food-films">
      <div class="hero-card glass-panel"><div class="hero-text"><p class="food-kicker">SE · PAUSA · ÖVA</p><h1 id="page-heading" tabindex="-1">Lär dig handgreppen</h1><p>Fyra korta filmer som kompletterar dina böcker. Se riktiga händer arbeta och följ ett tydligt steg i taget.</p><div class="food-tags"><span>25–54 sekunder</span><span>Utan ljud</span><span>Instruktioner på svenska</span></div></div></div>
      <div class="food-film-layout"><section class="food-film-card" aria-labelledby="food-title">
        <header class="food-film-heading"><p class="food-kicker">FILM ${selected + 1} AV ${APP_DATA.videos.length} · ${esc(item.category)}</p><h2 id="food-title">${esc(item.title)}</h2><p>${esc(item.description)}</p><div class="food-tags"><span>${duration(item)} s film</span><span>${item.steps.length} steg</span></div></header>
        <div id="food-frame" class="food-frame"><div id="food-player"></div><div class="food-muted">UTAN LJUD</div><button id="food-cover" class="food-cover" data-food-action="play"><img src="${poster(item)}" alt="" referrerpolicy="strict-origin-when-cross-origin"><span id="food-cover-label">▶ Se demonstrationen</span></button></div>
        <div class="food-current-step"><p id="food-step-number" class="food-kicker">STEG 1 AV ${item.steps.length}</p><h3 id="food-step-title">${esc(item.steps[0].title)}</h3><p id="food-step-instruction">${esc(item.steps[0].instruction)}</p></div>
        <div class="food-controls"><button id="food-play" class="food-primary" data-food-action="play">Spela filmen</button><button data-food-action="repeat">Upprepa steget</button><button id="food-back" data-food-action="back" disabled>← Föregående</button><button id="food-forward" data-food-action="forward">Nästa →</button><button data-food-action="fullscreen">Helskärm</button></div>
        <div class="food-options"><label><input id="food-step-pause" type="checkbox" checked> Pausa efter varje steg</label><label>Hastighet <select id="food-speed"><option value="1">1×</option><option value="0.75">0,75×</option><option value="0.5">0,5×</option></select></label></div>
        <div class="food-progress"><progress id="food-progress" max="${duration(item)}" value="0" aria-label="Framsteg i filmen"></progress><span id="food-time">0 / ${duration(item)} s</span><p id="food-status" role="status">Tryck på Spela filmen. Filmen pausar efter varje steg så att du kan öva.</p></div>
        <div class="food-details"><h3>Dina steg</h3><ol class="food-chapters">${item.steps.map((s,i)=>`<li><button data-food-step="${i}" aria-pressed="${i===0}"><span>${i+1}</span><strong>${esc(s.title)}</strong><small>${s.end-s.start} s</small></button></li>`).join('')}</ol>
          <h3>Innan du börjar</h3><p>${esc(item.preparation)}</p><div class="food-waiting"><h3>Väntetiden är bortklippt</h3><p>${esc(item.waiting)}</p></div><h3>Ett enkelt tips</h3><p>${esc(item.tip)}</p><h3>Fortsätt i dina böcker</h3><p>${esc(item.storage)}</p><div class="food-book-links">${item.books.map(id=>{const b=APP_DATA.books.find(book=>book.id===id);return `<a href="${esc(b.downloadUrl)}" target="_blank" rel="noopener">Bok ${id.slice(1)} · ${esc(b.badgeText.split(' · ')[0])} ↗</a>`;}).join('')}</div>
          <details class="food-sources"><summary>Filmkälla och läs mer</summary><p>Film: <a href="https://www.youtube.com/watch?v=${item.youtubeId}" target="_blank" rel="noopener">${esc(item.sourceTitle)}</a> av ${esc(item.creator)}. Här visas utvalda avsnitt utan ljud, med egna svenska instruktioner.</p><p>Förvaring: <a href="https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/" target="_blank" rel="noopener">National Center for Home Food Preservation</a> (engelska).</p></details>
        </div></section>
        <aside class="food-playlist" aria-labelledby="food-choose"><p class="food-kicker">DIN LILLA ÖVNINGSSKOLA</p><h2 id="food-choose">Välj ett handgrepp</h2><p>Börja med äpplena och prova sedan nästa råvara.</p><div class="food-choices">${APP_DATA.videos.map((v,i)=>`<button data-food-lesson="${i}" aria-pressed="${i===selected}"><img src="${poster(v)}" loading="lazy" alt="" referrerpolicy="strict-origin-when-cross-origin"><span><small>${String(i+1).padStart(2,'0')} · ${esc(v.category)}</small><strong>${esc(v.title)}</strong><small>${duration(v)} s · ${v.steps.length} steg</small></span></button>`).join('')}</div><div class="food-practice"><strong>Se → pausa → prova</strong><p>Låt filmen stanna mellan stegen. Tryck på Upprepa steget om du vill titta en gång till.</p></div></aside>
      </div></div>`;
  }
  window.FOOD_DEMOS = {render, destroy};
  document.addEventListener('DOMContentLoaded', () => {
    const root = $('app-root');
    root.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.foodLesson !== undefined) {
        selected = Number(button.dataset.foodLesson); speed = 1;
        window.dispatchEvent(new Event('hashchange'));
        $('food-title')?.scrollIntoView({block:'start'});
        return;
      }
      if (button.dataset.foodStep !== undefined) { goToStep(Number(button.dataset.foodStep)); return; }
      switch (button.dataset.foodAction) {
        case 'play': start(); break;
        case 'repeat': goToStep(stage); break;
        case 'back': if(stage>0) goToStep(stage-1); break;
        case 'forward': if(stage<lesson().steps.length-1) goToStep(stage+1); break;
        case 'fullscreen': {
          const card = document.querySelector('.food-film-card');
          if (document.fullscreenElement) document.exitFullscreen?.().catch(()=>{});
          else card?.requestFullscreen?.().catch(()=>message('Helskärm stöds inte i den här webbläsaren.'));
          break;
        }
      }
    });
    root.addEventListener('change', event => {
      if (event.target.id === 'food-speed') {
        speed = Number(event.target.value);
        player?.setPlaybackRate(speed);
      }
    });
  });
})();
