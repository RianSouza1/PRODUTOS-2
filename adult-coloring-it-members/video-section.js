/* Filmed tutorial excerpts, edited into silent guided practice. See VIDEO_SOURCES.md. */
(() => {
  const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const storageKey = `skillvault-adult-coloring-${document.documentElement.lang}-practice-v1`;
  let selected = 0, step = 0, video = null, timer = null, state = 'ready', speed = 1, generation = 0;
  let completed = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) completed = new Set(saved.filter(id => typeof id === 'string'));
  } catch {}
  const ui = () => APP_DATA.videoUI;
  const lesson = () => APP_DATA.videos[selected];
  const range = () => lesson().chapters[step];

  function pause() {
    generation++;
    clearInterval(timer);
    timer = null;
    if (video) video.pause();
    video = null;
  }

  function setState(next) {
    state = next;
    const card = document.getElementById('coloring-main');
    if (!card) return;
    card.dataset.state = next;
    const messages = {ready:'ready', loading:'loading', playing:'playing', paused:'paused', practice:'practiceNow', error:'error'};
    document.getElementById('coloring-status').textContent = ui()[messages[next] || 'ready'];
    const playing = next === 'playing';
    document.querySelectorAll('[data-coloring-play]').forEach(play => {
      play.textContent = next === 'error' ? ui().retry : playing ? ui().pause : ui().play;
      play.setAttribute('aria-pressed', String(playing));
      play.disabled = next === 'loading';
    });
    document.getElementById('coloring-status').hidden = next === 'practice';
    document.getElementById('coloring-practice-prompt').hidden = next !== 'practice';
    document.getElementById('coloring-continue-overlay').hidden = next !== 'practice';
    document.getElementById('coloring-start').hidden = !['ready', 'error'].includes(next);
    document.getElementById('coloring-start').textContent = next === 'error' ? ui().retry : '▶ ' + ui().play;
  }

  function guidance() {
    const current = lesson();
    document.getElementById('coloring-step-count').textContent = `${ui().step} ${step + 1} ${ui().of} ${current.steps.length}`;
    document.getElementById('coloring-step-text').textContent = current.steps[step];
    document.querySelector('[data-coloring-previous]').disabled = step === 0;
    document.querySelectorAll('[data-coloring-next]').forEach(button => { button.textContent = step === current.steps.length - 1 ? ui().nextLesson : ui().nextStep; });
    document.querySelectorAll('[data-coloring-step]').forEach(button => {
      const active = Number(button.dataset.coloringStep) === step;
      button.setAttribute('aria-pressed', String(active));
      if (active) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
    });
    document.getElementById('coloring-progress').value = 0;
  }

  function finishStep() {
    if (!video || state === 'practice') return;
    if (lesson().flow === 'continuous' && step < lesson().steps.length - 1) {
      step++;
      guidance();
      return;
    }
    video.pause();
    document.getElementById('coloring-progress').value = 100;
    setState('practice');
  }

  async function play() {
    if (!video || state === 'loading') return;
    if (!video.paused && state === 'playing') {
      video.pause();
      setState('paused');
      return;
    }
    const token = generation;
    const target = video;
    const current = range();
    const restart = state === 'practice' || state === 'error' || target.currentTime < current.start || target.currentTime >= current.end - 0.12;
    const failed = state === 'error';
    setState('loading');
    try {
      if (failed) target.load();
      if (target.readyState < 1) {
        await new Promise((resolve, reject) => {
          const cleanup = () => {
            clearTimeout(timeout);
            target.removeEventListener('loadedmetadata', success);
            target.removeEventListener('error', failure);
          };
          const success = () => { cleanup(); resolve(); };
          const failure = () => { cleanup(); reject(new Error('Video unavailable')); };
          const timeout = setTimeout(failure, 20000);
          target.addEventListener('loadedmetadata', success, {once:true});
          target.addEventListener('error', failure, {once:true});
          target.load();
        });
      }
      if (token !== generation || target !== video) return;
      target.muted = true;
      target.volume = 0;
      target.playbackRate = speed;
      if (restart) target.currentTime = current.start;
      await target.play();
      if (token !== generation || target !== video) { target.pause(); return; }
      setState('playing');
    } catch {
      if (token === generation && target === video) setState('error');
    }
  }

  function goStep(index) {
    if (!video || !Number.isInteger(index) || index < 0 || index >= lesson().steps.length || state === 'loading') return;
    video.pause();
    step = index;
    guidance();
    if (video.readyState >= 1) video.currentTime = range().start;
    setState('ready');
    play();
  }

  function render() {
    pause();
    step = 0;
    const current = lesson(), words = ui(), total = APP_DATA.videos.length;
    const books = APP_DATA.books.filter(book => current.relatedBookIds.includes(book.id));
    document.getElementById('app-root').innerHTML = `<div class="page-view coloring-page">
      <div class="hero-card glass-panel"><div class="hero-text"><h1 id="page-heading" tabindex="-1">${esc(words.title)}</h1><p>${esc(words.intro)}</p></div></div>
      <div class="coloring-layout">
        <section class="coloring-main" id="coloring-main" data-state="ready" aria-labelledby="coloring-title">
          <header class="coloring-lesson-heading"><div><p class="coloring-eyebrow">${esc(words.lesson)} ${selected + 1} ${esc(words.of)} ${total}</p><h2 id="coloring-title">${esc(current.title)}</h2><p>${esc(current.description)}</p></div><span class="coloring-duration">${Math.round(current.duration)} s</span></header>
          <div class="coloring-guidance"><div class="coloring-step-top"><strong id="coloring-step-count"></strong><div class="coloring-step-dots" aria-label="${esc(words.step)}">${current.steps.map((_,index)=>`<button type="button" data-coloring-step="${index}" aria-label="${esc(words.step)} ${index+1}" aria-pressed="${index===0}">${index+1}</button>`).join('')}</div></div><p id="coloring-step-text"></p><progress id="coloring-progress" value="0" max="100" aria-label="${esc(words.step)}"></progress><p id="coloring-practice-prompt" class="coloring-practice-prompt" hidden>${esc(words.practiceNow)}</p></div>
          <div class="coloring-stage"><video id="coloring-video" src="${esc(current.videoUrl)}" poster="${esc(current.poster)}" preload="none" playsinline muted disablepictureinpicture aria-label="${esc(current.title)}"></video><span class="coloring-silent">${esc(words.silent)}</span><button id="coloring-start" type="button" data-coloring-play>▶ ${esc(words.play)}</button></div>
          <div class="coloring-continue-overlay" id="coloring-continue-overlay" hidden><button type="button" class="coloring-primary" data-coloring-next>${esc(words.nextStep)}</button><button type="button" data-coloring-repeat>${esc(words.repeat)}</button></div><p class="coloring-credit">${esc(words.credit)}: ${esc(current.creator)}</p>
          <div class="coloring-controls"><button type="button" class="coloring-primary" data-coloring-play aria-pressed="false">${esc(words.play)}</button><button type="button" data-coloring-repeat>${esc(words.repeat)}</button><button type="button" data-coloring-fullscreen>${esc(words.fullscreen)}</button><div class="coloring-speed"><span>${esc(words.speed)}</span><button type="button" data-coloring-speed="0.75" aria-pressed="${speed===0.75}">0.75×</button><button type="button" data-coloring-speed="1" aria-pressed="${speed===1}">1×</button></div></div>
          <p id="coloring-status" class="coloring-status" role="status" aria-live="polite">${esc(words.ready)}</p>
          <div class="coloring-step-nav"><button type="button" data-coloring-previous disabled>← ${esc(words.previous)}</button><button type="button" class="coloring-primary" data-coloring-next>${esc(words.nextStep)} →</button></div>
          <div class="coloring-related"><h3>${esc(words.related)}</h3>${books.map(book=>`<a href="${esc(book.downloadUrl)}" target="_blank" rel="noopener">${esc(book.title)} <span aria-hidden="true">↗</span></a>`).join('')}<button type="button" data-coloring-practice class="coloring-practice${completed.has(current.id)?' done':''}" aria-pressed="${completed.has(current.id)}">${esc(completed.has(current.id)?words.practiced:words.practice)}</button></div>
        </section>
        <aside class="coloring-playlist" aria-label="${esc(words.playlist)}"><h2>${esc(words.playlist)}</h2><div>${APP_DATA.videos.map((item,index)=>`<button type="button" class="coloring-item${index===selected?' active':''}" data-coloring-lesson="${index}" aria-current="${index===selected?'true':'false'}"><img src="${esc(item.poster)}" alt="" loading="lazy"><span><small>${index+1} · ${Math.round(item.duration)} s</small><strong>${esc(item.title)}</strong>${completed.has(item.id)?`<em>${esc(words.practiced)}</em>`:''}</span></button>`).join('')}</div><section class="coloring-prep"><h3>${esc(words.prepTitle)}</h3><p>${esc(words.prepBody)}</p></section></aside>
      </div></div>`;
    video = document.getElementById('coloring-video');
    const target = video, token = generation;
    const active = () => token === generation && video === target;
    guidance();
    setState('ready');
    target.addEventListener('error', () => { if(active()) setState('error'); });
    target.addEventListener('ended', () => { if(active()) finishStep(); });
    target.addEventListener('waiting', () => { if(active() && state === 'playing') setState('loading'); });
    target.addEventListener('playing', () => { if(active() && state !== 'practice') setState('playing'); });
    target.addEventListener('pause', () => { if(active() && state === 'playing') setState('paused'); });
    timer = setInterval(() => {
      if (!active() || video.paused) return;
      const current = range();
      document.getElementById('coloring-progress').value = Math.max(0,Math.min(100,(video.currentTime-current.start)/(current.end-current.start)*100));
      if (video.currentTime >= current.end - 0.08) finishStep();
    }, 80);
  }

  window.COLORING_DEMOS = {render, pause};
  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || !document.getElementById('coloring-main') || button.disabled) return;
    if (button.hasAttribute('data-coloring-play')) { play(); return; }
    if (button.hasAttribute('data-coloring-step')) { goStep(Number(button.dataset.coloringStep)); return; }
    if (button.hasAttribute('data-coloring-repeat')) { goStep(step); return; }
    if (button.hasAttribute('data-coloring-previous')) { goStep(step - 1); return; }
    if (button.hasAttribute('data-coloring-next')) {
      if (step < lesson().steps.length - 1) goStep(step + 1);
      else { selected = (selected + 1) % APP_DATA.videos.length; window.dispatchEvent(new Event('hashchange')); }
      return;
    }
    if (button.hasAttribute('data-coloring-lesson')) {
      selected = Number(button.dataset.coloringLesson);
      window.dispatchEvent(new Event('hashchange'));
      return;
    }
    if (button.hasAttribute('data-coloring-fullscreen')) {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else document.getElementById('coloring-main').requestFullscreen?.().catch(()=>{});
      return;
    }
    if (button.hasAttribute('data-coloring-speed')) {
      speed = Number(button.dataset.coloringSpeed);
      if (video) video.playbackRate = speed;
      document.querySelectorAll('[data-coloring-speed]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.coloringSpeed)===speed)));
      return;
    }
    if (button.hasAttribute('data-coloring-practice')) {
      const id = lesson().id;
      if (completed.has(id)) completed.delete(id); else completed.add(id);
      try { localStorage.setItem(storageKey,JSON.stringify([...completed])); } catch {}
      button.textContent = completed.has(id)?ui().practiced:ui().practice;
      button.classList.toggle('done',completed.has(id));
      button.setAttribute('aria-pressed',String(completed.has(id)));
    }
  });
  document.addEventListener('visibilitychange', () => {
    if(document.hidden && video && !video.paused) { video.pause(); setState('paused'); }
  });
})();
