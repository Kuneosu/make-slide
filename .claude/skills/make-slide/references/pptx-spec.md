# PPTX Conversion Specification

## Overview
When generating PPTX output, first create HTML slides following PPTX-compatible rules, then convert using PptxGenJS or python-pptx.

## HTML-to-PPTX Constraints

These rules ensure HTML slides convert cleanly to PowerPoint format.

### Text Rules (Critical)
- ALL text MUST be inside `<p>`, `<h1>`-`<h6>`, `<ul>`, or `<ol>` tags
- Text inside raw `<div>` or `<span>` without a text tag will be SILENTLY IGNORED in PPTX
- NEVER use `<br>` tags — use separate text elements for each line
- NEVER use manual bullet symbols (•, -, *) — use `<ul>` or `<ol>` lists

### Font Rules
- Use ONLY web-safe fonts that are universally available in PowerPoint:
  - ✅ Arial, Helvetica, Verdana, Tahoma, Trebuchet MS, Georgia, Times New Roman, Courier New, Impact
  - ❌ Pretendard, JetBrains Mono, SF Pro, Roboto, or any custom/CDN fonts
- For code blocks, use Courier New instead of JetBrains Mono

### Color and Gradient Rules
- NEVER use CSS gradients (`linear-gradient`, `radial-gradient`) — they don't convert to PowerPoint
- If gradients are needed, rasterize them as PNG images first using Sharp/Puppeteer, then reference as `<img>`
- Use solid colors with hex format (#RRGGBB)
- Ensure sufficient contrast for readability

### Layout Rules
- Slide dimensions: 720pt × 405pt (16:9 standard)
- Use `display: flex` on body to prevent margin collapse
- Use `margin` for spacing (padding is included in element size)
- Flexbox positioning works — positions calculated from rendered layout
- For slides with charts/tables, use either:
  - Two-column layout (preferred): header spanning full width, text + content side by side
  - Full-slide layout: let featured content take the entire slide
  - NEVER vertically stack charts/tables below text in a single column

### Shape and Border Rules
- Backgrounds, borders, and shadows ONLY work on `<div>` elements, NOT on text elements
- Supported border styles: `border: 2px solid #333333`
- Partial borders supported: `border-left`, `border-right`, `border-top`, `border-bottom`
- `border-radius: 50%` creates circular shapes
- Box shadows convert to PowerPoint shadows (outer only, inset shadows ignored)

### Image Rules
- Use `<img>` tags with absolute URLs or local file paths
- Inline SVG is NOT supported — convert to PNG first
- Icons/emoji should be rasterized as PNG images

### Animation Rules
- CSS animations do NOT convert to PowerPoint
- PowerPoint animations must be added programmatically via PptxGenJS if needed
- For PPTX mode, skip stagger animations and transitions in HTML

## Conversion Methods

### Method 1: PptxGenJS (Recommended for Node.js)
```bash
npm install pptxgenjs sharp puppeteer
```

Workflow:
1. Create HTML files for each slide (following rules above)
2. Use Puppeteer to render each HTML slide and extract element positions
3. Use PptxGenJS to create native PowerPoint elements at the extracted positions
4. Save as .pptx

### Method 2: python-pptx (Alternative for Python)
```bash
pip install python-pptx Pillow
```

Workflow:
1. Create HTML slides following PPTX-compatible rules
2. Use python-pptx to create slides programmatically
3. Map HTML elements to python-pptx objects:
   - `<p>`, `<h1>`-`<h6>` → `add_textbox()` with `TextFrame`
   - `<ul>`, `<ol>` → `TextFrame` with `level` property for indentation
   - `<div>` with background → `add_shape()` with fill
   - `<img>` → `add_picture()`
4. Save as .pptx

### Method 3: Screenshot-based (Recommended for visual fidelity)
```bash
npm install puppeteer pptxgenjs
```

This is the recommended method when using make-slide themes, because it preserves the exact visual design including custom fonts, gradients, and complex layouts.

Workflow:
1. Generate full HTML presentation (standard mode, no PPTX constraints needed)
2. Use Puppeteer to screenshot each slide as high-resolution PNG
3. Insert each screenshot as a full-slide image in PPTX
4. Note: This produces image-based slides (no editable text) but preserves exact visual design

**Critical implementation details to prevent common issues:**

**Problem: Ghost/residue from previous slides appearing in screenshots**
```javascript
// BEFORE capturing, disable ALL animations and force animated elements to final state
await page.addStyleTag({ 
  content: '*, *::before, *::after { animation: none !important; transition: none !important; animation-delay: 0s !important; } .slide.active .a, .a { opacity: 1 !important; transform: none !important; }' 
});

// Wait for fonts to load before capture
await page.evaluateHandle('document.fonts.ready');

// For each slide, hide ALL others completely
await page.evaluate((idx) => {
  document.querySelectorAll('.slide').forEach((s, i) => {
    if (i === idx) {
      s.style.display = 'flex';
      s.style.opacity = '1';
      s.style.visibility = 'visible';
      s.classList.add('active');
    } else {
      s.style.display = 'none';
      s.style.opacity = '0';
      s.style.visibility = 'hidden';
      s.classList.remove('active');
    }
  });
}, slideIndex);

// Wait for layout to fully settle
await new Promise(r => setTimeout(r, 500));
```

**Problem: Content appears too small with large margins in PPTX**
```javascript
// Set viewport to exact 16:9 dimensions
await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

// Screenshot the full viewport
const screenshot = await page.screenshot({ type: 'png' });

// Insert as FULL-SLIDE image — no margins
slide.addImage({
  data: `image/png;base64,${screenshot.toString('base64')}`,
  x: 0, y: 0, w: '100%', h: '100%'
});
```
Do NOT use percentage-based sizing with margins. The image must cover x:0, y:0 to w:100%, h:100%.

## Design Principles for PPTX

### Color Palette Selection
Choose 3-5 colors that work together:
- 1 dominant background color
- 1-2 supporting/accent colors
- 1 text color with strong contrast
- Use solid colors only (no gradients unless rasterized)

### Typography
- Use 2-3 font sizes max for clear hierarchy:
  - Title: 36-44pt
  - Subtitle/heading: 24-28pt
  - Body: 16-20pt
  - Caption: 12-14pt
- Bold for emphasis, avoid italic for body text

### Layout Tips
- Leave 10% margin on all sides (minimum)
- Align elements to a grid
- Use consistent spacing between elements
- Left-align body text (center-align only for titles)
