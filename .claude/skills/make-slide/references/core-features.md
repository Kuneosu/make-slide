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

## 8. Live Edit Mode

Press `E` to toggle edit mode. In edit mode, click any text element to edit it directly. Changes are automatically saved to localStorage and persist across page reloads.

### Edit Mode Toggle Button

```html
<button class="edit-btn" id="editBtn" onclick="toggleEdit()">✏️ Edit</button>
<button class="reset-btn" onclick="resetEdits()">↺ Reset</button>
```

```css
.edit-btn {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  padding: 6px 16px; border-radius: 20px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.6); font-size: 12px; cursor: pointer;
  z-index: 100; font-family: inherit; transition: all 0.2s;
}
.edit-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
.edit-btn.active { background: rgba(59,130,246,0.3); border-color: rgba(59,130,246,0.5); color: #60a5fa; }

/* Edit mode styles */
.edit-mode [contenteditable="true"] {
  outline: 2px dashed rgba(59,130,246,0.4);
  outline-offset: 4px;
  border-radius: 4px;
  min-height: 1em;
}
.edit-mode [contenteditable="true"]:focus {
  outline: 2px solid rgba(59,130,246,0.7);
  background: rgba(59,130,246,0.05);
}
.edit-mode [contenteditable="true"]:hover {
  outline: 2px dashed rgba(59,130,246,0.6);
}

/* Reset button */
.reset-btn {
  position: fixed; bottom: 20px; left: calc(50% + 60px); transform: translateX(-50%);
  padding: 6px 12px; border-radius: 20px;
  background: rgba(239,68,68,0.15); border: 1px solid rgba(239,68,68,0.3);
  color: rgba(239,68,68,0.7); font-size: 11px; cursor: pointer;
  z-index: 100; font-family: inherit; display: none; transition: all 0.2s;
}
.reset-btn:hover { background: rgba(239,68,68,0.25); color: #ef4444; }
.edit-mode .reset-btn { display: block; }

@media print { .edit-btn, .reset-btn { display: none !important; } }
```

```javascript
// ===== Live Edit Mode =====
let editMode = false;
const STORAGE_KEY = 'make-slide-edits-' + location.pathname;

function toggleEdit() {
  editMode = !editMode;
  document.body.classList.toggle('edit-mode', editMode);
  document.getElementById('editBtn').classList.toggle('active', editMode);
  document.getElementById('editBtn').textContent = editMode ? '✏️ Editing' : '✏️ Edit';
  
  // Toggle contenteditable on all text elements within slides
  const editableSelectors = 'h1, h2, h3, h4, h5, h6, p, li, span:not(.placeholder-icon), td, th, blockquote';
  document.querySelectorAll('.slide ' + editableSelectors).forEach(el => {
    if (editMode) {
      el.setAttribute('contenteditable', 'true');
      el.addEventListener('input', saveEdits);
    } else {
      el.removeAttribute('contenteditable');
      el.removeEventListener('input', saveEdits);
    }
  });
}

function saveEdits() {
  const data = {};
  document.querySelectorAll('.slide').forEach((slide, i) => {
    // Save slide content
    const content = slide.innerHTML;
    const notes = slide.dataset.notes || '';
    data[i] = { content, notes };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadEdits() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const data = JSON.parse(saved);
    document.querySelectorAll('.slide').forEach((slide, i) => {
      if (data[i]) {
        slide.innerHTML = data[i].content;
        if (data[i].notes !== undefined) {
          slide.dataset.notes = data[i].notes;
        }
      }
    });
  } catch(e) {}
}

function resetEdits() {
  if (confirm('Reset all edits to original? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// Load saved edits on page load
document.addEventListener('DOMContentLoaded', loadEdits);

// Also handle 'E' key in the main keyboard listener
// Add to the existing keydown handler:
// if (e.key.toLowerCase() === 'e') toggleEdit();
```

### Speaker Notes Editing

When edit mode is active, the speaker notes popup should also allow editing. Update the toggleNotes/updateNotes functions:

```javascript
// Enhanced speaker notes popup with edit support
function toggleNotes() {
  if (notesWindow && !notesWindow.closed) { notesWindow.close(); notesWindow = null; return; }
  notesWindow = window.open('', 'SpeakerNotes', 'width=520,height=420,top=80,left=80');
  notesWindow.document.write(`<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, sans-serif;
         background: #1a1a1a; color: #e0e0e0; padding: 24px; }
  .slide-num { font-size: 12px; color: #888; margin-bottom: 12px; font-family: monospace; }
  .label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
           color: #666; margin-bottom: 8px; }
  .notes { font-size: 16px; line-height: 1.8; color: #ccc; padding: 8px;
           border-radius: 6px; min-height: 100px; }
  .notes:focus { outline: 2px solid rgba(59,130,246,0.5); background: rgba(59,130,246,0.05); }
  .edit-hint { font-size: 11px; color: #555; margin-top: 12px; }
</style></head><body>
  <div class="slide-num" id="sn"></div>
  <div class="label">Speaker Notes</div>
  <div class="notes" id="nt"></div>
  <div class="edit-hint" id="editHint"></div>
</body></html>`);
  notesWindow.document.close();
  
  // Add event listener for notes editing
  setTimeout(() => {
    const ntEl = notesWindow.document.getElementById('nt');
    ntEl.addEventListener('input', () => {
      if (editMode) {
        slides[current].dataset.notes = ntEl.textContent;
        saveEdits();
      }
    });
  }, 100);
  
  updateNotes();
}

function updateNotes() {
  if (!notesWindow || notesWindow.closed) return;
  try {
    const note = slides[current].dataset.notes || '(No notes)';
    const ntEl = notesWindow.document.getElementById('nt');
    ntEl.textContent = note;
    ntEl.setAttribute('contenteditable', editMode ? 'true' : 'false');
    notesWindow.document.getElementById('sn').textContent =
      'Slide ' + (current + 1) + ' / ' + slides.length;
    const hint = notesWindow.document.getElementById('editHint');
    hint.textContent = editMode ? '✏️ Edit mode — click to modify notes' : 'Press E in main window to enable editing';
  } catch(e) {}
}
```

## Usage Note

When generating a presentation, include ALL of the above code. The theme's reference.html contains these features styled for that theme — use the theme's visual styling but ensure the JavaScript logic matches this reference exactly. Do NOT implement speaker notes as an inline panel, bottom bar, or sidebar — it MUST be a popup window.
