/* Short filmed piano demonstrations, played through the creator's YouTube embeds. */
(() => {
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const playIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
  const thumbnail = lesson => lesson.thumbnail || `https://i.ytimg.com/vi/${lesson.youtubeId}/hq2.jpg`;
  let selected = 0, player = null, timer = null, retryTimer = null, generation = 0, apiPromise = null, speed = 1, loading = false;

  function destroy() {
    generation++;
    clearInterval(timer); timer=null;
    clearTimeout(retryTimer); retryTimer=null; loading=false;
    if(player) { try { player.destroy(); } catch {} player=null; }
  }
  function status(message, state='ready') {
    const element=document.getElementById('piano-status');
    if(element) element.textContent=message;
    const card=document.getElementById('piano-lesson-card');
    if(card) card.dataset.playerState=state;
  }
  function setPlayButton(playing) {
    const button=document.querySelector('[data-piano-play]');
    if(button) { button.textContent=playing?APP_DATA.videoUI.pause:APP_DATA.videoUI.play; button.setAttribute('aria-pressed',String(playing)); }
  }
  function finish() {
    if(!player) return;
    player.pauseVideo();
    setPlayButton(false);
    document.getElementById('piano-progress').value=100;
    document.getElementById('piano-ended').hidden=false;
    status(APP_DATA.videoUI.finished,'ended');
  }
  function api() {
    if(window.YT?.Player) return Promise.resolve();
    if(apiPromise) return apiPromise;
    apiPromise=new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>{apiPromise=null;reject(new Error('YouTube timeout'));},20000);
      const previous=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);if(typeof previous==='function')previous();resolve();};
      let script=document.getElementById('piano-youtube-api');
      if(!script){script=document.createElement('script');script.id='piano-youtube-api';script.src='https://www.youtube.com/iframe_api';script.async=true;document.head.appendChild(script);}
      script.addEventListener('error',()=>{clearTimeout(timeout);apiPromise=null;script.remove();reject(new Error('YouTube unavailable'));},{once:true});
    });
    return apiPromise;
  }
  async function start() {
    const lesson=APP_DATA.videos[selected], ui=APP_DATA.videoUI, token=generation;
    if(loading)return;
    if(player){
      if(document.getElementById('piano-lesson-card').dataset.playerState==='error'){
        document.getElementById('piano-ended').hidden=true;
        player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});status(ui.loading,'loading');return;
      }
      if(document.getElementById('piano-ended').hidden&&player.getPlayerState()===1){player.pauseVideo();return;}
      if(player.getCurrentTime()>=lesson.end-0.5)player.seekTo(lesson.start,true);
      document.getElementById('piano-ended').hidden=true;
      player.playVideo();return;
    }
    const button=document.querySelector('[data-piano-play]');
    loading=true;
    button.disabled=true;
    status(ui.loading,'loading');
    try{
      await api();
      if(token!==generation||!document.getElementById('piano-player'))return;
      const poster=document.getElementById('piano-poster');
      poster.hidden=true;
      let retried=false;
      player=new YT.Player('piano-player',{
        host:'https://www.youtube-nocookie.com',
        width:'100%',height:'100%',videoId:lesson.youtubeId,
        playerVars:{autoplay:0,controls:1,playsinline:1,rel:0,hl:document.documentElement.lang,cc_load_policy:0,mute:0,start:lesson.start,end:lesson.end,origin:window.location.origin},
        events:{
          onReady:event=>{
            if(token!==generation)return;
            loading=false;
            button.disabled=false;
            event.target.getIframe().setAttribute('title',lesson.title);
            event.target.setVolume(65);event.target.unMute();
            event.target.setPlaybackRate(speed);
            event.target.playVideo();
            timer=setInterval(()=>{
              if(!player||token!==generation)return;
              const time=player.getCurrentTime();
              if(!Number.isFinite(time))return;
              
              const progress=document.getElementById('piano-progress');
              if(progress)progress.value=document.getElementById('piano-ended').hidden?Math.max(0,Math.min(100,(time-lesson.start)/(lesson.end-lesson.start)*100)):100;
              if(time>=lesson.end-0.35&&document.getElementById('piano-ended').hidden)finish();
              else if(player.getPlayerState()===1&&time<lesson.start-0.5)player.seekTo(lesson.start,true);
            },200);
          },
          onStateChange:event=>{
            if(token!==generation)return;
            if(event.data===1){

              if(!document.getElementById('piano-ended').hidden){event.target.pauseVideo();setPlayButton(false);status(ui.finished,'ended');return;}
              if(event.target.getPlaybackRate()!==speed)event.target.setPlaybackRate(speed);
              setPlayButton(true);status(ui.playing,'playing');
            }
            else if(event.data===2){setPlayButton(false);if(!document.getElementById('piano-ended').hidden)return;status(ui.paused,'paused');}
            else if(event.data===0)finish();
          },
          onError:event=>{
            if(token!==generation)return;
            loading=false;button.disabled=false;setPlayButton(false);
            document.getElementById('piano-lesson-card').dataset.playerErrorCode=String(event.data);
            if(event.data===5&&!retried){
              retried=true;status(ui.loading,'loading');
              retryTimer=setTimeout(()=>{if(token===generation&&player){player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});}},1000);
            }else status(ui.error,'error');
          }
        }
      });
    }catch{
      if(token!==generation)return;
      loading=false;
      button.disabled=false;
      status(ui.error,'error');
    }
  }
  function render() {
    destroy();
    const root=document.getElementById('app-root'), ui=APP_DATA.videoUI, lessons=APP_DATA.videos, lesson=lessons[selected];
    root.innerHTML=`<div class="page-view piano-videos-view">
      <div class="hero-card glass-panel"><div class="hero-text"><p class="piano-eyebrow">${escape(ui.eyebrow)}</p><h1 id="page-heading" tabindex="-1">${escape(ui.heading)}</h1><p>${escape(ui.intro)}</p></div><div class="piano-hero-tags"><span>${lessons.length} ${escape(ui.shortLessons)}</span><span>${escape(ui.noSound)}</span><span>${escape(ui.closeUp)}</span></div></div>
      <div class="piano-lesson-layout">
        <section class="piano-lesson-card" id="piano-lesson-card" data-player-state="ready" aria-labelledby="piano-lesson-title">
          <div class="piano-lesson-heading"><p class="piano-eyebrow">${escape(ui.lesson)} ${selected+1} / ${lessons.length} · ${escape(lesson.categoryName)}</p><h2 id="piano-lesson-title">${escape(lesson.title)}</h2><div class="piano-lesson-tags"><span>${lesson.end-lesson.start} ${escape(ui.seconds)} · ${escape(ui.excerpt)}</span><span>${escape(ui.noSound)}</span></div></div>
          <div class="piano-video-frame" id="piano-video-frame"><div id="piano-player"></div><button type="button" id="piano-poster" class="piano-poster" data-piano-start aria-label="${escape(ui.play)}: ${escape(lesson.title)}"><img src="${escape(thumbnail(lesson))}" alt="${escape(lesson.title)}" referrerpolicy="strict-origin-when-cross-origin"><span class="piano-poster-action">${playIcon}<strong>${escape(ui.watch)}</strong></span></button></div>
          <div class="piano-playback-controls"><button type="button" class="piano-play-button" data-piano-play aria-pressed="false">${escape(ui.play)}</button><button type="button" data-piano-replay>${escape(ui.replay)}</button><div class="piano-speed-buttons" role="group" aria-label="${escape(ui.speed)}"><button type="button" data-piano-speed="0.75" aria-pressed="${speed===0.75}">0,75×</button><button type="button" data-piano-speed="1" aria-pressed="${speed===1}">1×</button></div></div>
          <div class="piano-progress-wrap"><progress id="piano-progress" max="100" value="0" aria-label="${escape(ui.progress)}"></progress><p id="piano-status" role="status">${escape(ui.ready)}</p></div>
          <div class="piano-ended" id="piano-ended" hidden><p>${escape(ui.finished)}</p><button type="button" data-piano-next>${escape(selected<lessons.length-1?ui.next:ui.first)}</button></div>
          <div class="piano-lesson-details"><p>${escape(lesson.description)}</p><h3>${escape(ui.practice)}</h3><ol>${lesson.steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol><p class="piano-tip"><strong>${escape(ui.tip)}:</strong> ${escape(lesson.tip)}</p><p class="piano-source">${escape(ui.source)}: ${escape(lesson.creator)} · <a href="https://www.youtube.com/watch?v=${lesson.youtubeId}&t=${lesson.start}s" target="_blank" rel="noopener">${escape(ui.original)}</a></p></div>
        </section>
        <aside class="piano-library" aria-labelledby="piano-choose"><div class="piano-library-heading"><h2 id="piano-choose">${escape(ui.choose)}</h2></div><div class="piano-lesson-list">${lessons.map((item,index)=>`<button type="button" class="piano-lesson-choice ${index===selected?'selected':''}" data-piano-lesson="${index}" aria-pressed="${index===selected}"><img src="${escape(thumbnail(item))}" loading="lazy" alt="" referrerpolicy="strict-origin-when-cross-origin"><span class="piano-choice-copy"><span class="piano-choice-number">${String(index+1).padStart(2,'0')} · ${escape(item.categoryName)}</span><strong>${escape(item.title)}</strong><span>${item.end-item.start} ${escape(ui.seconds)}</span></span>${playIcon}</button>`).join('')}</div></aside>
      </div><p class="piano-library-note">${escape(ui.note)}</p>
    </div>`;
  }
  window.PIANO_DEMOS={render,pause:destroy,getPlayer:()=>player};
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('app-root').addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.hasAttribute('data-piano-play')||button.hasAttribute('data-piano-start')){start();return;}
      const change=button.dataset.pianoLesson;
      if(change!==undefined){const index=Number(change);if(!Number.isInteger(index)||index<0||index>=APP_DATA.videos.length)return;selected=index;window.dispatchEvent(new Event('hashchange'));requestAnimationFrame(()=>document.getElementById('piano-lesson-title')?.scrollIntoView({block:'start'}));return;}
      if(button.hasAttribute('data-piano-next')){selected=selected<APP_DATA.videos.length-1?selected+1:0;window.dispatchEvent(new Event('hashchange'));return;}
      if(button.hasAttribute('data-piano-replay')){if(loading)return;if(!player){start();return;}document.getElementById('piano-ended').hidden=true;player.loadVideoById({videoId:APP_DATA.videos[selected].youtubeId,startSeconds:APP_DATA.videos[selected].start,endSeconds:APP_DATA.videos[selected].end});player.setPlaybackRate(speed);return;}
      if(button.dataset.pianoSpeed){speed=Number(button.dataset.pianoSpeed);if(typeof player?.setPlaybackRate==='function')player.setPlaybackRate(speed);document.querySelectorAll('[data-piano-speed]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.pianoSpeed)===speed)));return;}
    });
  });
})();
