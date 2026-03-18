/*
 * make-slide — navigation.js
 * Keyboard (←→, Space), click/touch navigation, slide counter, progress bar
 */

(function () {
  const slides = [...document.querySelectorAll('.slide')];
  let cur = 0;
  let busy = false;

  const progressEl = document.getElementById('progress');
  const counterEl = document.getElementById('counter');

  function update() {
    if (progressEl) {
      progressEl.style.width = (cur / (slides.length - 1) * 100) + '%';
    }
    if (counterEl) {
      counterEl.textContent = (cur + 1) + ' / ' + slides.length;
    }
    // Dispatch custom event for other modules (speaker notes, etc.)
    window.dispatchEvent(new CustomEvent('slidechange', { detail: { current: cur, total: slides.length } }));
  }

  function go(to) {
    if (busy || to === cur || to < 0 || to >= slides.length) return;
    busy = true;

    const old = slides[cur];
    const nxt = slides[to];

    // Fade out current slide
    old.style.transition = 'opacity 0.15s ease';
    old.style.opacity = '0';

    setTimeout(function () {
      old.classList.remove('active');
      old.style.transition = '';

      nxt.style.opacity = '0';
      nxt.classList.add('active');

      // Force reflow then fade in
      nxt.offsetHeight;
      nxt.style.transition = 'opacity 0.2s ease';
      nxt.style.opacity = '1';

      cur = to;
      update();

      setTimeout(function () {
        nxt.style.transition = '';
        busy = false;
      }, 200);
    }, 150);
  }

  // Expose globally for other modules
  window.slideGo = go;
  window.slideGetCurrent = function () { return cur; };
  window.slideGetTotal = function () { return slides.length; };
  window.slideGetSlides = function () { return slides; };

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    // Skip if typing in an input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case ' ':
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        go(cur + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        go(cur - 1);
        break;
    }
  });

  // Click navigation (left third = back, right two-thirds = forward)
  document.addEventListener('click', function (e) {
    // Don't navigate if clicking a button, link, or interactive element
    if (e.target.closest('button, a, .notes-panel, .fullscreen-btn')) return;
    if (e.clientX < window.innerWidth / 3) {
      go(cur - 1);
    } else {
      go(cur + 1);
    }
  });

  // Touch/swipe navigation
  let touchStartX = 0;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? go(cur + 1) : go(cur - 1);
    }
  }, { passive: true });

  // Initialize
  update();
})();
