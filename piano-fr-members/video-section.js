/* Short piano demonstrations. All visible text comes from APP_DATA.videoUI. */
(() => {
    let selectedLesson = 0;
    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));

    function pause() {
        const player = document.getElementById('piano-player');
        if (player) player.pause();
    }

    function status(message) {
        const element = document.getElementById('video-status');
        if (element) {
            element.textContent = message;
            element.hidden = false;
        }
    }

    function render() {
        const root = document.getElementById('app-root');
        const ui = APP_DATA.videoUI;
        const lessons = APP_DATA.videos;
        const lesson = lessons[selectedLesson] || lessons[0];
        const legend = ui.fingerNames.map((name, index) => `${index + 1} = ${name}`).join(' · ');
        root.innerHTML = `<div class="page-view piano-videos-view">
            <div class="hero-card glass-panel"><div class="hero-text">
                <h1>${escapeHtml(ui.heading)}</h1><p>${escapeHtml(ui.intro)}</p>
            </div></div>
            <section class="piano-lesson-card" aria-labelledby="lesson-title">
                <div class="piano-lesson-heading">
                    <div><p class="piano-lesson-eyebrow">${escapeHtml(ui.demo)} ${selectedLesson + 1} ${escapeHtml(ui.of)} ${lessons.length} · ${escapeHtml(lesson.category)}</p>
                    <h2 id="lesson-title">${escapeHtml(lesson.title)}</h2></div>
                    <span class="piano-lesson-badge">${escapeHtml(lesson.duration)} · ${escapeHtml(ui.sound)}</span>
                </div>
                <video id="piano-player" class="piano-demo-player" controls playsinline preload="none" poster="${escapeHtml(lesson.poster)}" aria-label="${escapeHtml(ui.demo)}: ${escapeHtml(lesson.title)}" aria-describedby="lesson-description">
                    <source src="${escapeHtml(lesson.videoUrl)}" type="video/mp4">
                    ${escapeHtml(ui.unsupported)} <a href="${escapeHtml(lesson.videoUrl)}">${escapeHtml(ui.open)}</a>.
                </video>
                <p id="video-status" class="piano-player-status" role="status" hidden></p>
                <div class="piano-playback-tools">
                    <div class="piano-speed-tools" role="group" aria-label="${escapeHtml(ui.speed)}">
                        <span>${escapeHtml(ui.speed)}</span>
                        <button type="button" data-piano-speed="0.75" aria-pressed="false">${escapeHtml(new Intl.NumberFormat(document.documentElement.lang).format(.75))}×</button>
                        <button type="button" data-piano-speed="1" aria-pressed="true">1×</button>
                    </div>
                    <button type="button" data-piano-replay><i data-lucide="rotate-ccw" aria-hidden="true"></i>${escapeHtml(ui.replay)}</button>
                </div>
                <div class="piano-lesson-details">
                    <p id="lesson-description">${escapeHtml(lesson.description)}</p>
                    <h3>${escapeHtml(ui.practice)}</h3>
                    <ol>${lesson.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
                    <p class="piano-finger-legend">${escapeHtml(ui.fingers)}: ${escapeHtml(legend)}.</p>
                </div>
            </section>
            <section class="piano-lesson-library" aria-labelledby="choose-lesson">
                <h2 id="choose-lesson">${escapeHtml(ui.choose)}</h2>
                <div class="piano-lesson-list">${lessons.map((item, index) => `<button type="button" class="piano-lesson-choice ${index === selectedLesson ? 'selected' : ''}" data-piano-lesson="${index}" aria-pressed="${index === selectedLesson}">
                    <span class="piano-lesson-number">${String(index+1).padStart(2, '0')}</span>
                    <span class="piano-lesson-choice-text"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.category)} · ${escapeHtml(item.duration)}</span></span>
                    <i data-lucide="${index === selectedLesson ? 'check-circle' : 'play-circle'}" aria-hidden="true"></i>
                </button>`).join('')}</div>
            </section>
            <p class="piano-sound-credits">${escapeHtml(ui.creditsLabel)}: <a href="https://github.com/Tonejs/audio/tree/master/salamander" target="_blank" rel="noopener">Salamander Grand Piano — Alexander Holm</a>, ${escapeHtml(ui.creditsAdapted)}. <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a>.</p>
        </div>`;
        root.querySelector('#piano-player').addEventListener('error', () => status(ui.loadError));
        root.querySelector('source').addEventListener('error', () => status(ui.loadError));
    }

    window.PIANO_DEMOS = { render, pause };
    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('app-root');
        root.addEventListener('click', event => {
            const choice = event.target.closest('button[data-piano-lesson]');
            if (choice) {
                const index = Number(choice.dataset.pianoLesson);
                if (Number.isInteger(index) && index >= 0 && index < APP_DATA.videos.length) {
                    selectedLesson = index;
                    window.dispatchEvent(new Event('hashchange'));
                    root.focus({ preventScroll: true });
                }
                return;
            }
            const player = document.getElementById('piano-player');
            if (!player) return;
            const speed = event.target.closest('button[data-piano-speed]');
            if (speed) {
                player.playbackRate = Number(speed.dataset.pianoSpeed);
                root.querySelectorAll('button[data-piano-speed]').forEach(button => button.setAttribute('aria-pressed', String(button === speed)));
            }
            if (event.target.closest('button[data-piano-replay]')) {
                player.currentTime = 0;
                player.play().catch(() => status(APP_DATA.videoUI.playHint));
            }
        });
    });
})();
