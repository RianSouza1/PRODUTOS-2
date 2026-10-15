/* Short filmed saxophone demonstrations, played through the creator's YouTube embeds. */
(() => {
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const playIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
  const thumbnail = lesson => lesson.thumbnail || `https://i.ytimg.com/vi/${lesson.youtubeId}/hq2.jpg`;
  let selected = 0, player = null, timer = null, retryTimer = null, generation = 0, apiPromise = null, speed = 1, loading = false, sound = true;

  function destroy() {
    generation++;
    clearInterval(timer); timer=null;
    clearTimeout(retryTimer); retryTimer=null; loading=false;
    if(player) { try { player.destroy(); } catch {} player=null; }
  }
  function status(message, state='ready') {
    const element=document.getElementById('sax-status');
    if(element) element.textContent=message;
    const card=document.getElementById('sax-lesson-card');
    if(card) card.dataset.playerState=state;
  }
  function setPlayButton(playing) {
    const button=document.querySelector('[data-sax-play]');
    if(button) { button.textContent=playing?APP_DATA.videoUI.pause:APP_DATA.videoUI.play; button.setAttribute('aria-pressed',String(playing)); }
  }
  function finish() {
    if(!player) return;
    player.mute();player.setVolume(0);player.pauseVideo();
    setPlayButton(false);
    document.getElementById('sax-progress').value=100;
    document.getElementById('sax-ended').hidden=false;
    status(APP_DATA.videoUI.finished,'ended');
  }
  function api() {
    if(window.YT?.Player) return Promise.resolve();
    if(apiPromise) return apiPromise;
    apiPromise=new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>{apiPromise=null;reject(new Error('YouTube timeout'));},20000);
      const previous=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);if(typeof previous==='function')previous();resolve();};
      let script=document.getElementById('sax-youtube-api');
      if(!script){script=document.createElement('script');script.id='sax-youtube-api';script.src='https://www.youtube.com/iframe_api';script.async=true;document.head.appendChild(script);}
      script.addEventListener('error',()=>{clearTimeout(timeout);apiPromise=null;script.remove();reject(new Error('YouTube unavailable'));},{once:true});
    });
    return apiPromise;
  }
  async function start() {
    const lesson=APP_DATA.videos[selected], ui=APP_DATA.videoUI, token=generation;
    if(loading)return;
    if(player){
      if(document.getElementById('sax-lesson-card').dataset.playerState==='error'){
        document.getElementById('sax-ended').hidden=true;
        player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});status(ui.loading,'loading');return;
      }
      if(document.getElementById('sax-ended').hidden&&player.getPlayerState()===1){player.pauseVideo();return;}
      if(player.getCurrentTime()>=lesson.end-0.5)player.seekTo(lesson.start,true);
      document.getElementById('sax-ended').hidden=true;
      player.playVideo();return;
    }
    const button=document.querySelector('[data-sax-play]');
    loading=true;
    button.disabled=true;
    status(ui.loading,'loading');
    try{
      await api();
      if(token!==generation||!document.getElementById('sax-player'))return;
      const poster=document.getElementById('sax-poster');
      poster.hidden=true;
      let retried=false;
      player=new YT.Player('sax-player',{
        host:'https://www.youtube-nocookie.com',
        width:'100%',height:'100%',videoId:lesson.youtubeId,
        playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,playsinline:1,rel:0,hl:document.documentElement.lang,cc_load_policy:0,mute:1,start:lesson.start,end:lesson.end,origin:window.location.origin},
        events:{
          onReady:event=>{
            if(token!==generation)return;
            loading=false;
            button.disabled=false;
            event.target.getIframe().setAttribute('title',lesson.title);
            event.target.getIframe().setAttribute('tabindex','-1');
            event.target.mute();event.target.setVolume(0);
            event.target.setPlaybackRate(speed);
            event.target.playVideo();
            timer=setInterval(()=>{
              if(!player||token!==generation)return;
              const time=player.getCurrentTime();
              if(!Number.isFinite(time))return;
              if(!document.getElementById('sax-ended').hidden || time < lesson.start || time >= lesson.end-0.3) { player.mute();player.setVolume(0); }
              else if(sound) { player.setVolume(65);player.unMute(); }
              else { player.mute();player.setVolume(0); }
              const clock=document.getElementById('sax-clock');
              if(clock)clock.textContent=`${document.getElementById('sax-ended').hidden?Math.floor(Math.max(0,Math.min(lesson.end-lesson.start,time-lesson.start))):lesson.end-lesson.start} / ${lesson.end-lesson.start} ${ui.seconds}`;
              const progress=document.getElementById('sax-progress');
              if(progress)progress.value=document.getElementById('sax-ended').hidden?Math.max(0,Math.min(100,(time-lesson.start)/(lesson.end-lesson.start)*100)):100;
              if(time>=lesson.end-0.35&&document.getElementById('sax-ended').hidden)finish();
              else if(player.getPlayerState()===1&&time<lesson.start-0.5)player.seekTo(lesson.start,true);
            },100);
          },
          onStateChange:event=>{
            if(token!==generation)return;
            if(event.data===1){

              if(!document.getElementById('sax-ended').hidden){event.target.pauseVideo();setPlayButton(false);status(ui.finished,'ended');return;}
              if(event.target.getCurrentTime()<lesson.start || event.target.getCurrentTime()>=lesson.end) {event.target.mute();event.target.setVolume(0);}
              if(event.target.getPlaybackRate()!==speed)event.target.setPlaybackRate(speed);
              setPlayButton(true);status(ui.playing,'playing');
            }
            else if(event.data===2){setPlayButton(false);if(!document.getElementById('sax-ended').hidden)return;status(ui.paused,'paused');}
            else if(event.data===0)finish();
          },
          onError:event=>{
            if(token!==generation)return;
            loading=false;button.disabled=false;setPlayButton(false);
            document.getElementById('sax-lesson-card').dataset.playerErrorCode=String(event.data);
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
    root.innerHTML=`<div class="page-view sax-videos-view">
      <div class="hero-card glass-panel"><div class="hero-text"><p class="sax-eyebrow">${escape(ui.eyebrow)}</p><h1 id="page-heading" tabindex="-1">${escape(ui.heading)}</h1><p>${escape(ui.intro)}</p></div><div class="sax-hero-tags"><span>${lessons.length} ${escape(ui.shortLessons)}</span><span>${escape(ui.noSound)}</span><span>${escape(ui.closeUp)}</span></div></div>
      <div class="sax-lesson-layout">
        <section class="sax-lesson-card" id="sax-lesson-card" data-player-state="ready" aria-labelledby="sax-lesson-title">
          <div class="sax-lesson-heading"><p class="sax-eyebrow">${escape(ui.lesson)} ${selected+1} / ${lessons.length} · ${escape(lesson.categoryName)}</p><h2 id="sax-lesson-title">${escape(lesson.title)}</h2><div class="sax-lesson-tags"><span>${lesson.end-lesson.start} ${escape(ui.seconds)} · ${escape(ui.excerpt)}</span><span>${escape(ui.noSound)}</span></div></div>
          <div class="sax-video-frame" id="sax-video-frame"><div id="sax-player"></div><button type="button" id="sax-poster" class="sax-poster" data-sax-start aria-label="${escape(ui.play)}: ${escape(lesson.title)}"><img src="${escape(thumbnail(lesson))}" alt="${escape(lesson.title)}" referrerpolicy="strict-origin-when-cross-origin"><span class="sax-poster-action">${playIcon}<strong>${escape(ui.watch)}</strong></span></button></div>
          <div class="sax-playback-controls"><button type="button" class="sax-play-button" data-sax-play aria-pressed="false">${escape(ui.play)}</button><button type="button" data-sax-replay>${escape(ui.replay)}</button><button type="button" data-sax-sound aria-label="${escape(ui.soundLabel)}" aria-pressed="${sound}">${escape(sound?ui.soundOn:ui.soundOff)}</button><button type="button" data-sax-fullscreen>${escape(ui.fullscreen)}</button><div class="sax-speed-buttons" role="group" aria-label="${escape(ui.speed)}"><button type="button" data-sax-speed="0.75" aria-pressed="${speed===0.75}">0,75×</button><button type="button" data-sax-speed="1" aria-pressed="${speed===1}">1×</button></div></div>
          <div class="sax-progress-wrap"><progress id="sax-progress" max="100" value="0" aria-label="${escape(ui.progress)}"></progress><span id="sax-clock">0 / ${lesson.end-lesson.start} ${escape(ui.seconds)}</span><p id="sax-status" role="status">${escape(ui.ready)}</p></div>
          <div class="sax-ended" id="sax-ended" hidden><p>${escape(ui.finished)}</p><button type="button" data-sax-next>${escape(selected<lessons.length-1?ui.next:ui.first)}</button></div>
          <div class="sax-lesson-details"><p>${escape(lesson.description)}</p><h3>${escape(ui.practice)}</h3><ol>${lesson.steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol><p class="sax-tip"><strong>${escape(ui.tip)}:</strong> ${escape(lesson.tip)}</p><details class="sax-source"><summary>${escape(ui.source)}</summary><p>${escape(lesson.creator)} · <a href="https://www.youtube.com/watch?v=${lesson.youtubeId}&t=${lesson.start}s" target="_blank" rel="noopener">${escape(ui.original)}</a></p></details></div>
        </section>
        <aside class="sax-library" aria-labelledby="sax-choose"><div class="sax-library-heading"><h2 id="sax-choose">${escape(ui.choose)}</h2></div><div class="sax-lesson-list">${lessons.map((item,index)=>`<button type="button" class="sax-lesson-choice ${index===selected?'selected':''}" data-sax-lesson="${index}" aria-pressed="${index===selected}"><img src="${escape(thumbnail(item))}" loading="lazy" alt="" referrerpolicy="strict-origin-when-cross-origin"><span class="sax-choice-copy"><span class="sax-choice-number">${String(index+1).padStart(2,'0')} · ${escape(item.categoryName)}</span><strong>${escape(item.title)}</strong><span>${item.end-item.start} ${escape(ui.seconds)}</span></span>${playIcon}</button>`).join('')}</div></aside>
      </div><p class="sax-library-note">${escape(ui.note)}</p>
    </div>`;
  }
  window.SAX_DEMOS={render,pause:destroy};
  document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('fullscreenchange',()=>{
      const button=document.querySelector('[data-sax-fullscreen]');
      if(button)button.textContent=document.fullscreenElement?APP_DATA.videoUI.exitFullscreen:APP_DATA.videoUI.fullscreen;
    });
    document.getElementById('app-root').addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.hasAttribute('data-sax-play')||button.hasAttribute('data-sax-start')){start();return;}
      const change=button.dataset.saxLesson;
      if(change!==undefined){const index=Number(change);if(!Number.isInteger(index)||index<0||index>=APP_DATA.videos.length)return;selected=index;window.dispatchEvent(new Event('hashchange'));requestAnimationFrame(()=>document.getElementById('sax-lesson-title')?.scrollIntoView({block:'start'}));return;}
      if(button.hasAttribute('data-sax-next')){selected=selected<APP_DATA.videos.length-1?selected+1:0;window.dispatchEvent(new Event('hashchange'));return;}
      if(button.hasAttribute('data-sax-replay')){if(loading)return;if(!player){start();return;}document.getElementById('sax-ended').hidden=true;player.mute();player.setVolume(0);player.loadVideoById({videoId:APP_DATA.videos[selected].youtubeId,startSeconds:APP_DATA.videos[selected].start,endSeconds:APP_DATA.videos[selected].end});player.setPlaybackRate(speed);return;}
      if(button.hasAttribute('data-sax-sound')){sound=!sound;button.textContent=sound?APP_DATA.videoUI.soundOn:APP_DATA.videoUI.soundOff;button.setAttribute('aria-pressed',String(sound));if(player&&!sound){player.mute();player.setVolume(0);}return;}
      if(button.hasAttribute('data-sax-fullscreen')){const card=document.getElementById('sax-lesson-card');if(document.fullscreenElement)document.exitFullscreen?.();else card?.requestFullscreen?.();return;}
      if(button.dataset.saxSpeed){speed=Number(button.dataset.saxSpeed);if(typeof player?.setPlaybackRate==='function')player.setPlaybackRate(speed);document.querySelectorAll('[data-sax-speed]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.saxSpeed)===speed)));return;}
    });
  });
})();
