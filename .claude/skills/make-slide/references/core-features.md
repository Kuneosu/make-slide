# Core Features — Required Implementation Code

These code snippets are REQUIRED in every generated presentation. Copy them exactly — do not rewrite or simplify.

## 1. Slide Navigation (Keyboard + Touch)

```javascript
// Slide navigation
const slides = [...document.querySelectorAll('.slide')];
let current = 0;

function goTo(index) {
  if (index < 0 || index >= slides.length) return;
  slides[current].classList.remove('active');
  slides[index].classList.add('active');
  current = index;
  updateProgress();
  updateCounter();
  updateNotes();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goTo(current + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
  if (e.key.toLowerCase() === 'f') toggleFullscreen();
  if (e.key.toLowerCase() === 's') toggleNotes();
});

// Touch/swipe
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? goTo(current + 1) : goTo(current - 1);
});
```

## 2. Progress Bar

```html
<div class="progress" id="progress"></div>
```

```css
.progress {
  position: fixed; top: 0; left: 0; height: 3px;
  background: var(--accent, #0066cc);
  z-index: 100; transition: width 0.3s ease;
}
```

```javascript
function updateProgress() {
  document.getElementById('progress').style.width =
    (current / (slides.length - 1) * 100) + '%';
}
```

## 3. Slide Counter

```html
<div class="counter" id="counter"></div>
```

```css
.counter {
  position: fixed; bottom: 20px; right: 30px;
  font-size: 12px; color: rgba(255,255,255,0.5);
  font-family: monospace; z-index: 100;
}
```

```javascript
function updateCounter() {
  document.getElementById('counter').textContent =
    (current + 1) + ' / ' + slides.length;
}
```

## 4. Fullscreen Toggle

```javascript
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
```

## 5. Speaker Notes — MUST BE POPUP WINDOW

This is the most commonly mis-implemented feature. Speaker notes MUST open in a **separate popup window**, NOT as an inline panel at the bottom of the slide.

```javascript
let notesWindow = null;

function toggleNotes() {
  if (notesWindow && !notesWindow.closed) {
    notesWindow.close();
    notesWindow = null;
    return;
  }
  notesWindow = window.open('', 'SpeakerNotes', 'width=520,height=420,top=80,left=80');
  notesWindow.document.write(`<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, sans-serif;
         background: #1a1a1a; color: #e0e0e0; padding: 24px; }
  .slide-num { font-size: 12px; color: #888; margin-bottom: 12px; font-family: monospace; }
  .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
           color: #666; margin-bottom: 8px; }
  .notes { font-size: 16px; line-height: 1.8; color: #ccc; }
</style></head><body>
  <div class="slide-num" id="sn"></div>
  <div class="label">Speaker Notes</div>
  <div class="notes" id="nt"></div>
</body></html>`);
  notesWindow.document.close();
  updateNotes();
}

function updateNotes() {
  if (!notesWindow || notesWindow.closed) return;
  try {
    const note = slides[current].dataset.notes || '(No notes)';
    notesWindow.document.getElementById('nt').textContent = note;
    notesWindow.document.getElementById('sn').textContent =
      'Slide ' + (current + 1) + ' / ' + slides.length;
  } catch(e) {}
}
```

## 6. PDF Export (Print CSS)

```css
@media print {
  .progress, .counter, .controls, nav, button,
  [class*="hint"], [class*="btn"] { display: none !important; }

  .slide {
    page-break-after: always;
    position: relative !important;
    opacity: 1 !important;
    display: flex !important;
    width: 100vw; height: 100vh;
  }

  @page { size: landscape; margin: 0; }
}
```

## 7. Base Slide CSS

```css
.slide {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  text-align: center; padding: 60px 80px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
}

.slide.active {
  opacity: 1; pointer-events: auto; z-index: 2;
}

/* Stagger animation for child elements */
.slide.active .a {
  opacity: 0;
  animation: fadeInUp 0.4s ease forwards;
}
.a:nth-child(1) { animation-delay: 0.05s; }
.a:nth-child(2) { animation-delay: 0.1s; }
.a:nth-child(3) { animation-delay: 0.15s; }
.a:nth-child(4) { animation-delay: 0.2s; }
.a:nth-child(5) { animation-delay: 0.25s; }
.a:nth-child(6) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Usage Note

When generating a presentation, include ALL of the above code. The theme's reference.html contains these features styled for that theme — use the theme's visual styling but ensure the JavaScript logic matches this reference exactly. Do NOT implement speaker notes as an inline panel, bottom bar, or sidebar — it MUST be a popup window.
