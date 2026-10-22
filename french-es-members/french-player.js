/* Page controls for the existing French micro-lessons. Original media stays embedded. */
(() => {
  let apiPromise = null;
  const clock = seconds => `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`;
  function api() {
    if (window.YT?.Player) return Promise.resolve();
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve,reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      const timeout = setTimeout(()=>{apiPromise=null;reject(new Error('Player timeout'));},20000);
      window.onYouTubeIframeAPIReady = () => {
        clearTimeout(timeout);
        if (typeof previous === 'function') previous();
        resolve();
      };
      let script = document.getElementById('french-player-api');
      if (!script) {
        script = document.createElement('script');
        script.id = 'french-player-api';
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.head.append(script);
      }
      script.addEventListener('error',()=>{clearTimeout(timeout);apiPromise=null;script.remove();reject(new Error('Player unavailable'));},{once:true});
    });
    return apiPromise;
  }
  function mount(watch,lesson,ui) {
    let player = null, live = true, ready = false, loading = false, ended = false, muted = false, timer = null, blurTimer = null;
    const frame = watch.querySelector('.french-video-frame');
    const poster = watch.querySelector('.french-load-video');
    const posterText = poster.querySelector('strong');
    const play = watch.querySelector('[data-clip-play]');
    const replay = watch.querySelector('[data-clip-replay]');
    const sound = watch.querySelector('[data-clip-sound]');
    const speed = watch.querySelector('[data-clip-speed]');
    const progress = watch.querySelector('[data-clip-seek]');
    const counter = watch.querySelector('[data-clip-clock]');
    const status = watch.querySelector('[data-clip-status]');
    const fullscreen = watch.querySelector('[data-clip-fullscreen]');
    const headerBlur = watch.querySelector('.french-brand-blur--header');
    const footerBlur = watch.querySelector('.french-brand-blur--footer');
    const setStatus = (message,state) => {
      status.textContent = message;
      watch.dataset.clipState = state;
    };
    const playingButton = playing => {
      play.textContent = playing ? ui.pause : ui.play;
      play.setAttribute('aria-pressed',String(playing));
    };
    function finish() {
      if (!live || ended) return;
      ended = true;
      clearTimeout(blurTimer);
      headerBlur.hidden = false;
      footerBlur.hidden = false;
      poster.hidden = false;
      posterText.textContent = ui.replay;
      progress.value = lesson.duration;
      counter.textContent = `${clock(lesson.duration)} / ${clock(lesson.duration)}`;
      playingButton(false);
      setStatus(ui.finished,'ended');
      try { player?.pauseVideo(); } catch {}
    }
    function resume(fromStart=false) {
      if (!ready) return;
      if (fromStart || ended) { player.seekTo(0,true); progress.value=0; }
      ended = false;
      headerBlur.hidden = false;
      setStatus(ui.loading,'loading');
      if (muted) player.mute(); else { player.setVolume(75);player.unMute(); }
      player.setPlaybackRate(Number(speed.value));
      player.playVideo();
    }
    async function start() {
      if (loading) return;
      if (ready) {
        if (player.getPlayerState() === 1 && !ended) player.pauseVideo();
        else resume();
        return;
      }
      loading = true;
      play.disabled = true;
      setStatus(ui.loading,'loading');
      try {
        await api();
        if (!live) return;
        const slot = document.createElement('div');
        slot.id = 'french-embedded-clip';
        frame.prepend(slot);
        const identity = new URL(lesson.embedUrl).pathname.split('/').pop();
        player = new YT.Player(slot,{
          host:'https://www.youtube-nocookie.com',width:'100%',height:'100%',videoId:identity,
          playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,playsinline:1,rel:0,iv_load_policy:3,hl:document.documentElement.lang,cc_lang_pref:'fr',cc_load_policy:1,origin:window.location.origin},
          events:{
            onReady:event => {
              if (!live) return;
              ready = true;loading = false;play.disabled = false;
              const iframe = event.target.getIframe();
              iframe.title = lesson.title;
              iframe.tabIndex = -1;
              iframe.setAttribute('aria-hidden','true');
              progress.disabled = false;
              resume(true);
              timer = setInterval(()=>{
                if (!live || !ready || ended) return;
                const time = Math.max(0,player.getCurrentTime() || 0);
                progress.value = Math.min(time,lesson.duration);
                counter.textContent = `${clock(time)} / ${clock(lesson.duration)}`;
                if (time >= 60) finish();
              },150);
            },
            onStateChange:event => {
              if (!live) return;
              clearTimeout(blurTimer);
              if (event.data === 1) {
                if (ended) { player.pauseVideo(); return; }
                poster.hidden = true;
                footerBlur.hidden = true;
                playingButton(true);
                setStatus(ui.playing,'playing');
                headerBlur.hidden = false;
                // Keep the identification areas blurred during playback as requested.
              } else if (event.data === 2 && !ended) {
                headerBlur.hidden = false;
                footerBlur.hidden = false;
                playingButton(false);
                setStatus(ui.paused,'paused');
              } else if (event.data === 0) finish();
            },
            onAutoplayBlocked:()=>{if(live){loading=false;play.disabled=false;setStatus(ui.ready,'ready');}},
            onError:()=>{if(live){loading=false;play.disabled=false;poster.hidden=false;posterText.textContent=ui.play;playingButton(false);headerBlur.hidden=false;setStatus(ui.error,'error');}}
          }
        });
      } catch {
        if (!live) return;
        loading = false;play.disabled = false;
        setStatus(ui.error,'error');
      }
    }
    poster.addEventListener('click',()=>{if(ready)resume(ended);else start();});
    play.addEventListener('click',start);
    replay.addEventListener('click',()=>{if(ready)resume(true);else start();});
    sound.addEventListener('click',()=>{
      muted = !muted;
      sound.textContent = muted ? ui.soundOff : ui.soundOn;
      sound.setAttribute('aria-pressed',String(!muted));
      if (ready) {if(muted)player.mute();else{player.setVolume(75);player.unMute();}}
    });
    speed.addEventListener('change',()=>{if(ready)player.setPlaybackRate(Number(speed.value));});
    progress.addEventListener('change',()=>{
      if (!ready) return;
      ended = false;poster.hidden = true;
      player.seekTo(Math.min(Number(progress.value),Math.max(0,player.getDuration()-.3)),true);
    });
    fullscreen.addEventListener('click',async()=>{
      try {if(document.fullscreenElement)await document.exitFullscreen();else await watch.requestFullscreen();}catch{}
    });
    const onFullscreen = () => {fullscreen.textContent=document.fullscreenElement ? ui.exitFullscreen : ui.fullscreen;};
    document.addEventListener('fullscreenchange',onFullscreen);
    return () => {
      live = false;
      clearInterval(timer);clearTimeout(blurTimer);
      document.removeEventListener('fullscreenchange',onFullscreen);
      if (document.fullscreenElement === watch) document.exitFullscreen().catch(()=>{});
      try {player?.destroy();}catch{}
    };
  }
  window.FRENCH_CLIP_PLAYER = {mount};
})();
