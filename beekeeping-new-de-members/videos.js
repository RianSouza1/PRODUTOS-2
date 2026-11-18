const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const time = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2,'0')}`;
const symbols = {
  play:'<path d="m9 5 11 7-11 7Z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  full:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${symbols[name]}</svg>`;

export function createVideoSection(root) {
  let lessons, loading, media, activeId, guided=true, stage=0, boundaryHold=false, hasEnded=false;
  let lastTime=0, currentDuration=0;

  const pause = () => media?.pause();
  async function activate() {
    if (lessons) return;
    if (loading) return loading;
    loading = fetch('assets/video-lessons.json?v=20261118-praxis').then(response => {
      if (!response.ok) throw new Error('lessons');
      return response.json();
    }).then(data => {
      lessons=data.lessons;
      if (!Array.isArray(lessons) || !lessons.length) throw new Error('lessons');
      activeId=lessons[0].id;
      draw();
    }).catch(() => {
      root.innerHTML='<div class="notice"><p>Die Praxisvideos konnten nicht geladen werden. Bitte versuche es erneut.</p><button type="button" class="button outline" data-video-retry>Erneut versuchen</button></div>';
      root.querySelector('[data-video-retry]').addEventListener('click',activate);
      lessons=undefined;
    }).finally(() => {loading=null;});
    return loading;
  }
  function select(id) {
    pause();
    if (media) {media.removeAttribute('src');media.load();}
    activeId=id;
    draw();
    root.querySelector('.practice-feature').scrollIntoView({block:'start',behavior:'instant'});
    root.querySelector('#practice-lesson-title').focus({preventScroll:true});
  }
  function draw() {
    const lesson=lessons.find(item=>item.id===activeId)||lessons[0];
    stage=0; boundaryHold=false; hasEnded=false; lastTime=0; currentDuration=lesson.duration;
    root.innerHTML=`<div class="practice-facts"><span>${lessons.length} kurze Vorführungen</span><span>Alle unter 1 Minute</span><span>Echte Aufnahmen · ohne Ton</span></div>
      <section class="practice-feature" aria-labelledby="practice-lesson-title">
        <div class="practice-heading"><div><span class="eyebrow">${esc(lesson.category)}</span><h2 id="practice-lesson-title" tabindex="-1">${esc(lesson.title)}</h2><p>${esc(lesson.description)}</p></div><span class="practice-duration">${time(lesson.duration)}</span></div>
        <details class="practice-preparation"><summary>Vorbereitung für die Praxis</summary><p>${esc(lesson.preparation)}</p></details>
        <div class="practice-player" id="practice-player">
          <div class="practice-frame"><video src="${esc(lesson.video)}" poster="${esc(lesson.poster)}" muted playsinline preload="none" disablepictureinpicture controlslist="nodownload noremoteplayback" aria-label="${esc(lesson.title)} – Vorführung ohne Ton" aria-describedby="practice-caption"></video><span class="practice-silent">OHNE TON</span><button type="button" class="practice-big-play">${icon('play')}<span>Vorführung starten</span></button></div>
          <div class="practice-caption" id="practice-caption" aria-live="polite"><span data-stage-label></span><p data-stage-text></p></div>
          <div class="practice-transport"><div class="practice-seek"><span data-elapsed>0:00</span><input type="range" min="0" max="${lesson.duration}" value="0" step="0.05" disabled aria-label="Wiedergabeposition"><span data-total>${time(lesson.duration)}</span></div><div class="practice-controls"><button type="button" class="practice-toggle">${icon('play')}<span>Abspielen</span></button><button type="button" class="practice-repeat">Schritt wiederholen</button><label>Tempo <select aria-label="Wiedergabetempo"><option value="1">1×</option><option value="0.75">0,75×</option><option value="0.5">0,5×</option></select></label><button type="button" class="practice-full">${icon('full')}<span>Vollbild</span></button></div></div>
        </div>
        <div class="practice-mode"><label><input type="checkbox" ${guided?'checked':''}><span><strong>Schritt für Schritt</strong><small>Nach jedem Schritt automatisch anhalten</small></span></label><p class="practice-status" role="status">Starte die Vorführung. Du bestimmst das Tempo.</p></div>
        <div class="practice-steps" style="--step-count:${lesson.chapters.length}" aria-label="Schritte dieser Vorführung">${lesson.chapters.map((chapter,index)=>`<button type="button" data-stage="${index}"><span class="practice-step-number">${index+1}</span><span><strong>${esc(chapter.label)}</strong><small>Ab ${time(chapter.at)}</small></span></button>`).join('')}</div>
        <div class="practice-summary"><div><strong>Darauf kommt es an</strong><p>${esc(lesson.takeaway)}</p></div><button class="button outline" data-read="${lesson.book}" data-page="${lesson.page}"><svg aria-hidden="true"><use href="#i-book"/></svg>${esc(lesson.reading)} öffnen</button></div>
      </section>
      <div class="section-heading practice-list-heading"><div><span class="eyebrow">PASSEND ZU DEINEN BÜCHERN</span><h2>Wähle einen Handgriff</h2></div></div><div class="practice-library">${lessons.map(item=>`<button type="button" class="practice-card${item.id===lesson.id?' selected':''}" data-lesson="${esc(item.id)}" aria-pressed="${item.id===lesson.id}"><img src="${esc(item.poster)}" alt="" loading="lazy" width="160" height="90"><span><small>${esc(item.category)} · ${time(item.duration)}</small><strong>${esc(item.title)}</strong><span>${item.chapters.length} Schritte · Ohne Ton</span></span>${icon('play')}</button>`).join('')}</div>`;
    media=root.querySelector('video');
    const current=media;
    const big=root.querySelector('.practice-big-play');
    const toggle=root.querySelector('.practice-toggle');
    const seek=root.querySelector('input[type=range]');
    const status=root.querySelector('.practice-status');
    const player=root.querySelector('.practice-player');
    const stepButtons=[...root.querySelectorAll('[data-stage]')];
    const full=root.querySelector('.practice-full');

    function showStage(index) {
      stage=Math.max(0,Math.min(index,lesson.chapters.length-1));
      root.querySelector('[data-stage-label]').textContent=`SCHRITT ${stage+1} VON ${lesson.chapters.length} · ${lesson.chapters[stage].label}`;
      root.querySelector('[data-stage-text]').textContent=lesson.chapters[stage].text;
      stepButtons.forEach((button,number)=>number===stage?button.setAttribute('aria-current','step'):button.removeAttribute('aria-current'));
    }
    function updateButtons() {
      const playing=!current.paused&&!current.ended;
      toggle.innerHTML=`${icon(playing?'pause':'play')}<span>${playing?'Pause':boundaryHold?'Nächster Schritt':hasEnded?'Erneut ansehen':'Abspielen'}</span>`;
      big.hidden=playing;
      big.querySelector('span').textContent=boundaryHold?'Nächsten Schritt ansehen':hasEnded?'Erneut ansehen':current.currentTime>0?'Fortsetzen':'Vorführung starten';
    }
    function seekTo(value, index) {
      current.pause();
      boundaryHold=false; hasEnded=false;
      if (current.readyState===0) current.load();
      const apply=()=>{
        current.currentTime=Math.min(Math.max(value,0),currentDuration-.03);
        lastTime=current.currentTime;
        showStage(index??Math.max(0,lesson.chapters.findLastIndex(chapter=>chapter.at<=value)));
        seek.value=current.currentTime;
        root.querySelector('[data-elapsed]').textContent=time(current.currentTime);
        updateButtons();
      };
      if(current.readyState>0)apply();else current.addEventListener('loadedmetadata',apply,{once:true});
      status.textContent=`Schritt ${index!==undefined?index+1:stage+1} ist bereit. Starte die Wiedergabe.`;
    }
    async function play() {
      if(!current.paused){current.pause();return;}
      if(hasEnded){hasEnded=false;boundaryHold=false;current.currentTime=0;lastTime=0;showStage(0);}
      if(boundaryHold){
        const next=Math.min(stage+1,lesson.chapters.length-1);
        boundaryHold=false;current.currentTime=lesson.chapters[next].at+.01;lastTime=current.currentTime;showStage(next);
      }
      current.muted=true;
      if(current.error)current.load();
      status.textContent='Die Vorführung wird geladen …';
      try{
        await current.play();
        status.textContent=guided?'Die Wiedergabe hält nach diesem Schritt an.':'Die Vorführung läuft ohne Unterbrechung.';
      }catch{status.textContent='Die Wiedergabe konnte nicht starten. Bitte versuche es noch einmal.';updateButtons();}
    }
    big.addEventListener('click',play); toggle.addEventListener('click',play);
    root.querySelector('.practice-repeat').addEventListener('click',()=>seekTo(lesson.chapters[stage].at+.01,stage));
    root.querySelector('select').addEventListener('change',event=>{current.playbackRate=Number(event.target.value);});
    root.querySelector('.practice-mode input').addEventListener('change',event=>{
      guided=event.target.checked;
      if(!guided)boundaryHold=false;
      status.textContent=guided?'Schrittmodus eingeschaltet. Nach jedem Schritt hält die Vorführung an.':'Die Vorführung läuft beim nächsten Start durchgehend.';
      updateButtons();
    });
    stepButtons.forEach((button,index)=>button.addEventListener('click',()=>seekTo(lesson.chapters[index].at+.01,index)));
    seek.addEventListener('input',event=>seekTo(Number(event.target.value)));
    current.addEventListener('loadedmetadata',()=>{
      currentDuration=current.duration;
      seek.max=current.duration;seek.disabled=false;
      root.querySelector('[data-total]').textContent=time(current.duration);
    });
    current.addEventListener('timeupdate',()=>{
      if(guided&&!current.paused&&stage<lesson.chapters.length-1){
        const end=lesson.chapters[stage+1].at;
        if(current.currentTime>=end&&lastTime<end){
          current.pause();boundaryHold=true;current.currentTime=Math.max(0,end-.04);
          status.textContent=`Schritt ${stage+1} abgeschlossen. Wähle „Nächsten Schritt ansehen“, wenn du bereit bist.`;
          updateButtons();
        }
      }
      if(!boundaryHold){
        const index=Math.max(0,lesson.chapters.findLastIndex(chapter=>chapter.at<=current.currentTime));
        if(index!==stage)showStage(index);
      }
      lastTime=current.currentTime;
      seek.value=current.currentTime;
      root.querySelector('[data-elapsed]').textContent=time(current.currentTime);
    });
    current.addEventListener('play',updateButtons);
    current.addEventListener('pause',updateButtons);
    current.addEventListener('ended',()=>{hasEnded=true;boundaryHold=false;status.textContent='Vorführung beendet. Du kannst sie erneut ansehen oder einen einzelnen Schritt wiederholen.';updateButtons();});
    current.addEventListener('error',()=>{status.textContent='Das Video konnte nicht geladen werden. Prüfe deine Verbindung und starte es erneut.';updateButtons();});
    full.hidden=!document.fullscreenEnabled;
    full.addEventListener('click',async()=>{
      try{if(document.fullscreenElement)await document.exitFullscreen();else await player.requestFullscreen();}
      catch{status.textContent='Vollbild ist in diesem Browser gerade nicht verfügbar.';}
    });
    root.querySelectorAll('[data-lesson]').forEach(button=>button.addEventListener('click',()=>select(button.dataset.lesson)));
    showStage(0);updateButtons();
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
  return {activate,pause};
}
