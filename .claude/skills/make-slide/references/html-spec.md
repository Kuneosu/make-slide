# HTML Specification

Every generated presentation includes all of the following features. These ensure consistent, professional output across all themes.

## File Structure
- Single standalone `.html` file
- All CSS inlined in `<style>` tags
- All JS inlined in `<script>` tags
- No external files except CDN links listed below

## Required CDN Dependencies
```html
<!-- Pretendard Font (always include) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">

<!-- JetBrains Mono for code blocks -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap">

<!-- Prism.js for syntax highlighting (ONLY if code blocks exist) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<!-- Add language components as needed -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
```

## Navigation & Controls

### Keyboard Navigation
- `←` / `→` Arrow keys: Previous / Next slide
- `Space`: Next slide
- `F`: Toggle fullscreen
- `S`: Toggle speaker notes panel
- `Escape`: Exit fullscreen

### Slide Counter
- Display current slide number and total: `3 / 25`
- Position: bottom-right or as defined by the theme

### Progress Bar
- Visual progress indicator showing position in the deck
- Updates on each slide transition

### Fullscreen
- `F` key toggles fullscreen mode
- Fullscreen button in the UI controls
- Uses the Fullscreen API (`requestFullscreen`)

### Speaker Notes Panel
- `S` key toggles the speaker notes panel
- Implementation: Open a **separate popup window** using `window.open()`, not an inline panel
- The popup window displays:
  - Current slide number and total
  - Current slide's notes (from `data-notes` attribute)
  - Next slide preview text (when possible)
- The popup auto-updates when the main presentation changes slides
- Popup styling should be clean and readable (large font, good contrast)
- The main slide view must NOT be affected by the notes panel
- Example implementation pattern:
  ```javascript
  let notesWindow = null;
  function toggleNotes() {
    if (notesWindow && !notesWindow.closed) { notesWindow.close(); notesWindow = null; return; }
    notesWindow = window.open('', 'SpeakerNotes', 'width=500,height=400');
    // Write styled HTML to notesWindow.document
    updateNotes();
  }
  function updateNotes() {
    if (!notesWindow || notesWindow.closed) return;
    // Update content with current slide's data-notes
  }
  ```

### Touch/Swipe Navigation
- Swipe left → Next slide
- Swipe right → Previous slide
- Implement using touch event listeners (`touchstart`, `touchend`)

## PDF Export
```css
@media print {
  /* Hide all UI controls */
  .controls, .progress-bar, .slide-counter,
  .fullscreen-btn, .speaker-notes-panel,
  nav, button { display: none !important; }

  /* Each slide = 1 page, landscape */
  .slide {
    page-break-after: always;
    width: 100vw;
    height: 100vh;
  }

  @page {
    size: landscape;
    margin: 0;
  }
}
```

## Slide Transitions
- Fade transition between slides (CSS transitions or animations)
- Smooth and professional — no jarring jumps

## Staggered Element Animations
- Elements within a slide animate in sequentially (stagger effect)
- Use CSS animations with incremental `animation-delay`
- Trigger animations when the slide becomes active

## Layout

### Aspect Ratio
- 16:9 aspect ratio for all slides
- Centered on screen with letterboxing if needed

### Responsive Design
- Scales to fit various screen sizes
- Text remains readable at all resolutions
- Controls adapt to screen size

### Content Overflow
- Apply `overflow-y: auto` on slide content areas to prevent clipping
- Scrollbar should be subtle and match the theme

## Image Handling

### Default: CSS Placeholders
When no image URLs are provided, use styled placeholders that match the theme:
```html
<!-- Emoji-based placeholder -->
<div class="image-placeholder">
  <span class="placeholder-icon">🚀</span>
  <span class="placeholder-label">Product Screenshot</span>
</div>

<!-- CSS shape placeholder -->
<div class="image-placeholder gradient-bg">
  <svg>...</svg>
</div>
```

### When User Provides URLs
```html
<img src="https://example.com/image.jpg" alt="Description" loading="lazy">
```
- Always include descriptive `alt` text
- Use `loading="lazy"` for images below the fold
- Style images to fit within the slide layout without overflow

## Code Blocks

### Syntax Highlighting with Prism.js
- Only include Prism.js CDN when code blocks are present in the presentation
- If no code blocks exist, omit all Prism.js `<link>` and `<script>` tags

### Supported Languages
Include Prism.js language components as needed:
- `prism-javascript.min.js` — JavaScript
- `prism-typescript.min.js` — TypeScript
- `prism-python.min.js` — Python
- `prism-markup.min.js` — HTML/XML (included in core)
- `prism-css.min.js` — CSS (included in core)
- `prism-bash.min.js` — Bash/Shell
- `prism-json.min.js` — JSON
- `prism-java.min.js` — Java
- `prism-go.min.js` — Go
- `prism-rust.min.js` — Rust

### Code Block Markup
```html
<pre><code class="language-javascript">
function hello() {
  console.log("Hello, World!");
}
</code></pre>
```
- Use `JetBrains Mono` font for all code blocks
- Ensure adequate contrast for readability
- Match the code theme to the presentation theme (dark themes → dark code, light themes → light code)
