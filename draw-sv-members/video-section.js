/* Short filmed drawing-technique demonstrations, played through the creator's YouTube embeds. */
(() => {
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const playIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
  const thumbnail = lesson => lesson.thumbnail || `https://i.ytimg.com/vi/${lesson.youtubeId}/hq2.jpg`;
  const clips = lesson => lesson.segments?.length ? lesson.segments : [{start:lesson.start,end:lesson.end}];
  const duration = lesson => clips(lesson).reduce((total,clip)=>total+clip.end-clip.start,0);
  let selected = 0, player = null, timer = null, retryTimer = null, generation = 0, apiPromise = null, speed = 1, loading = false, clipIndex = 0, revealAfter = 0;

  function coverCut(visible) {
    const cover=document.getElementById('draw-cut-cover');
    if(cover)cover.hidden=!visible;
  }
  function resetClips(lesson) {
    clipIndex=0;
    revealAfter=performance.now()+400;
    coverCut(Boolean(lesson.segments?.length));
  }

  function destroy() {
    generation++;
    clearInterval(timer); timer=null;
    clearTimeout(retryTimer); retryTimer=null; loading=false;
    if(player) { try { player.destroy(); } catch {} player=null; }
  }
  function status(message, state='ready') {
    const element=document.getElementById('draw-status');
    if(element) element.textContent=message;
    const card=document.getElementById('draw-lesson-card');
    if(card) card.dataset.playerState=state;
  }
  function setPlayButton(playing) {
    const button=document.querySelector('[data-draw-play]');
    if(button) { button.textContent=playing?APP_DATA.videoUI.pause:APP_DATA.videoUI.play; button.setAttribute('aria-pressed',String(playing)); }
  }
  function finish() {
    if(!player) return;
    player.pauseVideo();
    setPlayButton(false);
    document.getElementById('draw-progress').value=100;
    document.getElementById('draw-ended').hidden=false;
    status(APP_DATA.videoUI.finished,'ended');
  }
  function api() {
    if(window.YT?.Player) return Promise.resolve();
    if(apiPromise) return apiPromise;
    apiPromise=new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>{apiPromise=null;reject(new Error('YouTube timeout'));},20000);
      const previous=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{clearTimeout(timeout);if(typeof previous==='function')previous();resolve();};
      let script=document.getElementById('draw-youtube-api');
      if(!script){script=document.createElement('script');script.id='draw-youtube-api';script.src='https://www.youtube.com/iframe_api';script.async=true;document.head.appendChild(script);}
      script.addEventListener('error',()=>{clearTimeout(timeout);apiPromise=null;script.remove();reject(new Error('YouTube unavailable'));},{once:true});
    });
    return apiPromise;
  }
  async function start() {
    const lesson=APP_DATA.videos[selected], ui=APP_DATA.videoUI, token=generation;
    if(loading)return;
    if(player){
      if(document.getElementById('draw-lesson-card').dataset.playerState==='error'){
        resetClips(lesson);
        document.getElementById('draw-ended').hidden=true;
        player.mute();player.loadVideoById({videoId:lesson.youtubeId,startSeconds:lesson.start,endSeconds:lesson.end});status(ui.loading,'loading');return;
      }
      if(document.getElementById('draw-ended').hidden&&player.getPlayerState()===1){player.pauseVideo();return;}
      if(!document.getElementById('draw-ended').hidden||player.getCurrentTime()>=lesson.end-0.5){resetClips(lesson);player.seekTo(lesson.start,true);}
      document.getElementById('draw-ended').hidden=true;
      player.mute();player.playVideo();return;
    }
    const button=document.querySelector('[data-draw-play]');
    loading=true;
    button.disabled=true;
    status(ui.loading,'loading');
    try{
      await api();
      if(token!==generation||!document.getElementById('draw-player'))return;
      const poster=document.getElementById('draw-poster');
      resetClips(lesson);
      poster.hidden=true;
      let retried=false;
      player=new YT.Player('draw-player',{
        host:'https://www.youtube-nocookie.com',
        width:'100%',height:'100%',videoId:lesson.youtubeId,
        playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,iv_load_policy:3,playsinline:1,rel:0,hl:document.documentElement.lang,cc_load_policy:0,mute:1,start:lesson.start,end:lesson.end,origin:window.location.origin},
        events:{
          onReady:event=>{
            if(token!==generation)return;
            loading=false;
            button.disabled=false;
            event.target.getIframe().setAttribute('title',lesson.title);
            event.target.getIframe().setAttribute('tabindex','-1');
            event.target.mute();event.target.setVolume(0);
            event.target.setPlaybackRate(speed);
            if(lesson.segments?.length){revealAfter=performance.now()+400;event.target.seekTo(lesson.start,true);}
            event.target.playVideo();
            timer=setInterval(()=>{
              if(!player||token!==generation)return;
              const time=player.getCurrentTime();
              if(!Number.isFinite(time))return;
              if(!player.isMuted())player.mute();if(player.getVolume()!==0)player.setVolume(0);
              const passages=clips(lesson), clip=passages[clipIndex];
              const ended=!document.getElementById('draw-ended').hidden;
              if(!ended&&time>=clip.end-0.35&&clipIndex<passages.length-1){
                clipIndex++;
                coverCut(true);revealAfter=performance.now()+400;
                player.seekTo(passages[clipIndex].start,true);
                player.playVideo();
                return;
              }
              if(lesson.segments?.length&&!ended){
                if(time<clip.start-0.05){
                  coverCut(true);
                  if(player.getPlayerState()===1)player.seekTo(clip.start,true);
                }else if(time<clip.end-0.35&&player.getPlayerState()===1&&performance.now()>=revealAfter)coverCut(false);
              }
              const progress=document.getElementById('draw-progress');
              const elapsed=passages.slice(0,clipIndex).reduce((total,item)=>total+item.end-item.start,0)+Math.max(0,Math.min(clip.end-clip.start,time-clip.start));
              if(progress)progress.value=ended?100:Math.max(0,Math.min(100,elapsed/duration(lesson)*100));
              if(time>=lesson.end-0.35&&document.getElementById('draw-ended').hidden)finish();
              else if(player.getPlayerState()===1&&time<lesson.start-0.5)player.seekTo(lesson.start,true);
            },200);
          },
          onStateChange:event=>{
            if(token!==generation)return;
            if(event.data===1){
              event.target.mute();event.target.setVolume(0);
              if(!document.getElementById('draw-ended').hidden){event.target.pauseVideo();setPlayButton(false);status(ui.finished,'ended');return;}
              if(event.target.getPlaybackRate()!==speed)event.target.setPlaybackRate(speed);
              setPlayButton(true);status(ui.playing,'playing');
            }
            else if(event.data===2){setPlayButton(false);if(!document.getElementById('draw-ended').hidden)return;status(ui.paused,'paused');}
            else if(event.data===0)finish();
          },
          onError:event=>{
            if(token!==generation)return;
            loading=false;button.disabled=false;setPlayButton(false);
            document.getElementById('draw-lesson-card').dataset.playerErrorCode=String(event.data);
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
    root.innerHTML=`<div class="page-view draw-videos-view">
      <div class="hero-card glass-panel"><div class="hero-text"><p class="draw-eyebrow">${escape(ui.eyebrow)}</p><h1 id="page-heading" tabindex="-1">${escape(ui.heading)}</h1><p>${escape(ui.intro)}</p></div><div class="draw-hero-tags"><span>${lessons.length} ${escape(ui.shortLessons)}</span><span>${escape(ui.noSound)}</span><span>${escape(ui.closeUp)}</span></div></div>
      <div class="draw-lesson-layout">
        <section class="draw-lesson-card" id="draw-lesson-card" data-player-state="ready" aria-labelledby="draw-lesson-title">
          <div class="draw-lesson-heading"><p class="draw-eyebrow">${escape(ui.lesson)} ${selected+1} / ${lessons.length} · ${escape(lesson.categoryName)}</p><h2 id="draw-lesson-title">${escape(lesson.title)}</h2><div class="draw-lesson-tags"><span>${duration(lesson)} ${escape(ui.seconds)} · ${escape(ui.excerpt)}</span><span>${escape(ui.noSound)}</span></div></div>
          <div class="draw-video-frame" id="draw-video-frame" data-video-shape="${escape(lesson.videoShape || 'default')}"><div id="draw-player"></div><div id="draw-cut-cover" class="draw-cut-cover" aria-hidden="true" hidden><img src="${escape(thumbnail(lesson))}" alt="" referrerpolicy="strict-origin-when-cross-origin"></div><button type="button" id="draw-poster" class="draw-poster" data-draw-start aria-label="${escape(ui.play)}: ${escape(lesson.title)}"><img src="${escape(thumbnail(lesson))}" alt="${escape(lesson.title)}" referrerpolicy="strict-origin-when-cross-origin"><span class="draw-poster-action">${playIcon}<strong>${escape(ui.watch)}</strong></span></button></div>
          <div class="draw-playback-controls"><button type="button" class="draw-play-button" data-draw-play aria-pressed="false">${escape(ui.play)}</button><button type="button" data-draw-replay>${escape(ui.replay)}</button><button type="button" data-draw-fullscreen>${escape(ui.fullscreen)}</button><div class="draw-speed-buttons" role="group" aria-label="${escape(ui.speed)}"><button type="button" data-draw-speed="0.5" aria-pressed="${speed===0.5}">0,5×</button><button type="button" data-draw-speed="0.75" aria-pressed="${speed===0.75}">0,75×</button><button type="button" data-draw-speed="1" aria-pressed="${speed===1}">1×</button></div></div>
          <div class="draw-progress-wrap"><progress id="draw-progress" max="100" value="0" aria-label="${escape(ui.progress)}"></progress><p id="draw-status" role="status">${escape(ui.ready)}</p></div>
          <div class="draw-ended" id="draw-ended" hidden><p>${escape(ui.finished)}</p><button type="button" data-draw-next>${escape(selected<lessons.length-1?ui.next:ui.first)}</button></div>
          <div class="draw-lesson-details"><p>${escape(lesson.description)}</p><h3>${escape(ui.practice)}</h3><ol>${lesson.steps.map(step=>`<li>${escape(step)}</li>`).join('')}</ol><p class="draw-tip"><strong>${escape(ui.tip)}:</strong> ${escape(lesson.tip)}</p></div>
        </section>
        <aside class="draw-library" aria-labelledby="draw-choose"><div class="draw-library-heading"><h2 id="draw-choose">${escape(ui.choose)}</h2></div><div class="draw-lesson-list">${lessons.map((item,index)=>`<button type="button" class="draw-lesson-choice ${index===selected?'selected':''}" data-draw-lesson="${index}" aria-pressed="${index===selected}"><img src="${escape(thumbnail(item))}" loading="lazy" alt="" referrerpolicy="strict-origin-when-cross-origin"><span class="draw-choice-copy"><span class="draw-choice-number">${String(index+1).padStart(2,'0')} · ${escape(item.categoryName)}</span><strong>${escape(item.title)}</strong><span>${duration(item)} ${escape(ui.seconds)}</span></span>${playIcon}</button>`).join('')}</div></aside>
      </div><p class="draw-library-note">${escape(ui.note)}</p>
    </div>`;
  }
  window.DRAW_DEMOS={render,pause:destroy,getPlayer:()=>player};
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('app-root').addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      if(button.hasAttribute('data-draw-play')||button.hasAttribute('data-draw-start')){start();return;}
      const change=button.dataset.drawLesson;
      if(change!==undefined){const index=Number(change);if(!Number.isInteger(index)||index<0||index>=APP_DATA.videos.length)return;selected=index;window.dispatchEvent(new Event('hashchange'));requestAnimationFrame(()=>document.getElementById('draw-lesson-title')?.scrollIntoView({block:'start'}));return;}
      if(button.hasAttribute('data-draw-next')){selected=selected<APP_DATA.videos.length-1?selected+1:0;window.dispatchEvent(new Event('hashchange'));return;}
      if(button.hasAttribute('data-draw-replay')){if(loading)return;if(!player){start();return;}resetClips(APP_DATA.videos[selected]);document.getElementById('draw-ended').hidden=true;player.mute();player.loadVideoById({videoId:APP_DATA.videos[selected].youtubeId,startSeconds:APP_DATA.videos[selected].start,endSeconds:APP_DATA.videos[selected].end});player.setPlaybackRate(speed);return;}
      if(button.hasAttribute('data-draw-fullscreen')){
        const frame=document.getElementById('draw-video-frame');
        if(document.fullscreenElement){document.exitFullscreen?.();}
        else if(frame.requestFullscreen){frame.requestFullscreen().catch(()=>{});}
        else if(frame.webkitRequestFullscreen){frame.webkitRequestFullscreen();}
        return;
      }
      if(button.dataset.drawSpeed){speed=Number(button.dataset.drawSpeed);if(typeof player?.setPlaybackRate==='function')player.setPlaybackRate(speed);document.querySelectorAll('[data-draw-speed]').forEach(item=>item.setAttribute('aria-pressed',String(Number(item.dataset.drawSpeed)===speed)));return;}
    });
  });
})();
