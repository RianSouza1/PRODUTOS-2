/* Short human chair-exercise demonstrations, played through the creator's YouTube embeds. */
(() => {
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const playIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
  let selected = 0, player = null, timer = null, retryTimer = null, generation = 0, apiPromise = null, speed = 1, loading = false;

  function destroy() {
    generation++;
    clearInterval(timer); timer=null;
    clearTimeout(retryTimer); retryTimer=null; loading=false;
    if(player) { try { player.destroy(); } catch {} player=null; }
  }
  function status(message, state='ready') {
    const element=document.getElementById('chair-status');
    if(element) element.textContent=message;
    const card=document.getElementById('chair-lesson-card');
    if(card) card.dataset.playerState=state;
  }
  function setPlayButton(playing) {
    const button=document.querySelector('[data-chair-play]');
    if(button) { button.textContent=playing?APP_DATA.videoUI.pause:APP_DATA.videoUI.play; button.setAttribute('aria-pressed',String(playing)); }
  }
  function finish() {
    if(!player) return;
    player.pauseVideo();
    setPlayButton(false);
    document.getElementById('chair-progress').value=100;
    document.getElementById('chair-ended').hidden=false;
    status(APP_DATA.videoUI.finished,'ended');
  }
  function api() {
    if(window.YT?.Player) return Promise.resolve();
    if(apiPromise) return apiPromise;
    apiPromise=new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>{apiPromise=null;reject(new Error('YouTube timeout'));},20000);
      const previous=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);if(typeof previous==='function')previous();resolve();};
      let script=document.getElementById('chair-youtube-api');
      if(!script){script=document.createElement('script');script.id='chair-youtube-api';script.src='https://www.youtube.com/iframe_api';script.async=true;document.head.appendChild(script);}
      script.addEventListener('error',()=>{clearTimeout(timeout);apiPromise=null;script.remove();reject(new Error('YouTube unavailable'));},{once:true});
    });
    return apiPromise;
  }
  async function start() {
    const lesson=APP_DATA.videos[selected], ui=APP_DATA.videoUI, token=generation;
    if(loading)return;
    if(player){
      if(document.getElementById('chair-lesson-card').dataset.playerState==='error'){
        document.getElementById('chair-ended').hidden=true;
        player.mute();player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});status(ui.loading,'loading');return;
      }
      if(document.getElementById('chair-ended').hidden&&player.getPlayerState()===1){player.pauseVideo();return;}
      if(player.getCurrentTime()>=lesson.end-0.5)player.seekTo(lesson.start,true);
      document.getElementById('chair-ended').hidden=true;
      player.mute();player.playVideo();return;
    }
    const button=document.querySelector('[data-chair-play]');
    loading=true;
    button.disabled=true;
    status(ui.loading,'loading');
    try{
      await api();
      if(token!==generation||!document.getElementById('chair-player'))return;
      const poster=document.getElementById('chair-poster');
      poster.hidden=true;
      let retried=false;
      player=new YT.Player('chair-player',{
        host:'https://www.youtube-nocookie.com',
        width:'100%',height:'100%',videoId:lesson.youtubeId,
        playerVars:{autoplay:0,controls:1,playsinline:1,rel:0,hl:document.documentElement.lang,cc_load_policy:0,mute:1,start:lesson.start,end:lesson.end,origin:window.location.origin},
        events:{
          onReady:event=>{
            if(token!==generation)return;
            loading=false;
            button.disabled=false;
            event.target.getIframe().setAttribute('title',lesson.title);
            event.target.mute();event.target.setVolume(0);
            event.target.setPlaybackRate(speed);
            event.target.playVideo();
            timer=setInterval(()=>{
              if(!player||token!==generation)return;
              const time=player.getCurrentTime();
              if(!Number.isFinite(time))return;
              if(!player.isMuted())player.mute();if(player.getVolume()!==0)player.setVolume(0);
              const progress=document.getElementById('chair-progress');
              if(progress)progress.value=document.getElementById('chair-ended').hidden?Math.max(0,Math.min(100,(time-lesson.start)/(lesson.end-lesson.start)*100)):100;
              if(time>=lesson.end-0.35&&document.getElementById('chair-ended').hidden)finish();
              else if(player.getPlayerState()===1&&time<lesson.start-0.5)player.seekTo(lesson.start,true);
            },200);
          },
          onStateChange:event=>{
            if(token!==generation)return;
            if(event.data===1){
              event.target.mute();event.target.setVolume(0);
              if(!document.getElementById('chair-ended').hidden){event.target.pauseVideo();setPlayButton(false);status(ui.finished,'ended');return;}
              if(event.target.getPlaybackRate()!==speed)event.target.setPlaybackRate(speed);
              setPlayButton(true);status(ui.playing,'playing');
            }
            else if(event.data===2){setPlayButton(false);if(!document.getElementById('chair-ended').hidden)return;status(ui.paused,'paused');}
            else if(event.data===0)finish();
          },
          onError:event=>{
            if(token!==generation)return;
            loading=false;button.disabled=false;setPlayButton(false);
            document.getElementById('chair-lesson-card').dataset.playerErrorCode=String(event.data);
            if(event.data===5&&!retried){
              retried=true;status(ui.loading,'loading');
              retryTimer=setTimeout(()=>{if(token===generation&&player){player.mute();player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});}},1000);
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
    root.innerHTML=`<div class="page-view chair-videos-view">
      <div class="hero-card glass-panel"><div class="hero-text"><p class="chair-eyebrow">${escape(ui.eyebrow)}</p><h1 id="page-heading" tabindex="-1">${escape(ui.heading)}</h1><p>${escape(ui.intro)}</p></div><div class="chair-hero-tags"><span>${lessons.length} ${escape(ui.shortLessons)}</span><span>${escape(ui.noSound)}</span><span>${escape(ui.closeUp)}</span></div></div>
      <div class="chair-lesson-layout">
        <section class="chair-lesson-card" id="chair-lesson-card" data-player-state="ready" aria-labelledby="chair-lesson-title">
          <div class="chair-lesson-heading"><p class="chair-eyebrow">${escape(ui.lesson)} ${selected+1} / ${lessons.length} · ${escape(lesson.categoryName)}</p><h2 id="chair-lesson-title">${escape(lesson.title)}</h2><div class="chair-lesson-tags"><span>${lesson.end-lesson.start} ${escape(ui.seconds)} · ${escape(ui.excerpt)}</span><span>${escape(ui.noSound)}</span></div></div>
          <div class="chair-video-frame" id="chair-video-frame"><div id="chair-player"></div><button type="button" id="chair-poster" class="chair-poster" data-chair-start aria-label="${escape(ui.play)}: ${escape(lesson.title)}"><img src="https://i.ytimg.com/vi/${lesson.youtubeId}/hqdefault.jpg" alt="${escape(lesson.title)}" referrerpolicy="strict-origin-when-cross-origin"><span class="chair-poster-action">${playIcon}<strong>${escape(ui.watch)}</strong></span></button></div>
          <div class="chair-playback-controls"><button type="button" class="chair-play-button" data-chair-play aria-pressed="false">${escape(ui.play)}</button><button type="button" data-chair-replay>${escape(ui.replay)}</button><div class="chair-speed-buttons" role="group" aria-label="${escape(ui.speed)}"><button type="button" data-chair-speed="0.75" aria-pressed="${speed===0.75}">0,75×</button><button type="button" data-chair-speed="1" aria-pressed="${speed===1}">1×</button></div></div>
          <div class="chair-progress-wrap"><progress id="chair-progress" max="100" value="0" aria-label="${escape(ui.progress)}"></progress><p id="chair-status" role="status">${escape(ui.ready)}</p></div>
          <div class="chair-ended" id="chair-ended" hidden><p>${escape(ui.finished)}</p><button type="button" data-chair-next>${escape(selected<lessons.length-1?ui.next:ui.first)}</button></div>
          <div class="chair-lesson-details"><p>${escape(lesson.description)}</p><h3>${escape(ui.practice)}</h3><ol>${lesson.steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol><p class="chair-tip"><strong>${escape(ui.tip)}:</strong> ${escape(lesson.tip)}</p><p class="chair-source">${escape(ui.source)}: ${escape(lesson.creator)} · <a href="https://www.youtube.com/watch?v=${lesson.youtubeId}&t=${lesson.start}s" target="_blank" rel="noopener">${escape(ui.original)}</a></p></div>
        </section>
        <aside class="chair-library" aria-labelledby="chair-choose"><div class="chair-library-heading"><h2 id="chair-choose">${escape(ui.choose)}</h2></div><div class="chair-lesson-list">${lessons.map((item,index)=>`<button type="button" class="chair-lesson-choice ${index===selected?'selected':''}" data-chair-lesson="${index}" aria-pressed="${index===selected}"><img src="https://i.ytimg.com/vi/${item.youtubeId}/mqdefault.jpg" loading="lazy" alt="" referrerpolicy="strict-origin-when-cross-origin"><span class="chair-choice-copy"><span class="chair-choice-number">${String(index+1).padStart(2,'0')} · ${escape(item.categoryName)}</span><strong>${escape(item.title)}</strong><span>${item.end-item.start} ${escape(ui.seconds)}</span></span>${playIcon}</button>`).join('')}</div></aside>
      </div><p class="chair-library-note">${escape(ui.note)}</p>
    </div>`;
  }
  window.CHAIR_DEMOS={render,pause:destroy,getPlayer:()=>player};
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('app-root').addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.hasAttribute('data-chair-play')||button.hasAttribute('data-chair-start')){start();return;}
      const change=button.dataset.chairLesson;
      if(change!==undefined){const index=Number(change);if(!Number.isInteger(index)||index<0||index>=APP_DATA.videos.length)return;selected=index;window.dispatchEvent(new Event('hashchange'));requestAnimationFrame(()=>document.getElementById('chair-lesson-title')?.scrollIntoView({block:'start'}));return;}
      if(button.hasAttribute('data-chair-next')){selected=selected<APP_DATA.videos.length-1?selected+1:0;window.dispatchEvent(new Event('hashchange'));return;}
      if(button.hasAttribute('data-chair-replay')){if(loading)return;if(!player){start();return;}document.getElementById('chair-ended').hidden=true;player.mute();player.loadVideoById({videoId:APP_DATA.videos[selected].youtubeId,startSeconds:APP_DATA.videos[selected].start,endSeconds:APP_DATA.videos[selected].end});player.setPlaybackRate(speed);return;}
      if(button.dataset.chairSpeed){speed=Number(button.dataset.chairSpeed);if(typeof player?.setPlaybackRate==='function')player.setPlaybackRate(speed);document.querySelectorAll('[data-chair-speed]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.chairSpeed)===speed)));return;}
    });
  });
})();
