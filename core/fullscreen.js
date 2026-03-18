/*
 * make-slide — fullscreen.js
 * F key + button toggle, ESC to exit
 */

(function () {
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen();
    }
  }

  // F key toggle
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Button toggle (if a fullscreen button exists)
  var btn = document.querySelector('.fullscreen-btn');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFullscreen();
    });
  }

  // Expose globally
  window.toggleFullscreen = toggleFullscreen;
})();
