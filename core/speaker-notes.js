/*
 * make-slide — speaker-notes.js
 * S key to toggle notes panel
 * Shows current slide notes + next slide preview
 */

(function () {
  var notesPanel = document.getElementById('notes-panel');
  var notesText = document.getElementById('notes-text');
  var notesNextTitle = document.getElementById('notes-next');
  var notesSlideNum = document.getElementById('notes-slide-num');
  var isOpen = false;

  function updateNotes() {
    if (!notesPanel) return;

    var slides = window.slideGetSlides ? window.slideGetSlides() : [...document.querySelectorAll('.slide')];
    var cur = window.slideGetCurrent ? window.slideGetCurrent() : 0;
    var total = window.slideGetTotal ? window.slideGetTotal() : slides.length;

    // Current slide notes
    var currentSlide = slides[cur];
    var notes = currentSlide ? (currentSlide.dataset.notes || '') : '';
    if (notesText) {
      notesText.textContent = notes || '(No notes)';
    }

    // Slide number
    if (notesSlideNum) {
      notesSlideNum.textContent = 'Slide ' + (cur + 1) + ' / ' + total;
    }

    // Next slide preview
    if (notesNextTitle) {
      if (cur + 1 < slides.length) {
        var nextSlide = slides[cur + 1];
        var nextTitle = nextSlide.querySelector('.xl, .lg, .md, h1, h2, h3');
        notesNextTitle.textContent = nextTitle ? nextTitle.textContent : '(Next slide)';
      } else {
        notesNextTitle.textContent = '(End)';
      }
    }
  }

  function toggleNotes() {
    if (!notesPanel) return;
    isOpen = !isOpen;
    notesPanel.classList.toggle('open', isOpen);
    if (isOpen) updateNotes();
  }

  // S key toggle
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggleNotes();
    }
  });

  // Listen for slide changes
  window.addEventListener('slidechange', updateNotes);

  // Expose globally
  window.toggleNotes = toggleNotes;
})();
