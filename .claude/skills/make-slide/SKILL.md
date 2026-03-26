---
name: make-slide
description: "Generate single-file HTML presentations with 10 professional themes and speaker notes. Use this skill whenever the user mentions presentations, slides, deck, talk, keynote, pitch, slideshow, or wants to turn any content into a visual presentation — even if they don't explicitly say 'slide'. Also triggers for requests like 'make a talk about', 'create a pitch for', 'turn this into slides', or any request to visualize content for an audience."
---

# make-slide — AI Presentation Skill

## Overview

Generate single-file HTML presentations with speaker notes. The output is always a standalone `.html` file with all CSS and JS inlined — no build step, no framework, no dependencies beyond font CDNs.

**Repository**: [github.com/kuneosu/make-slide](https://github.com/kuneosu/make-slide)
**Theme Gallery**: [make-slide.vercel.app](https://make-slide.vercel.app)

---

## When to Use

Activate this skill when the user's request matches any of these patterns:

- "Make a presentation about..."
- "Create slides for..."
- "Build a slide deck..."
- "Turn this into a presentation"
- "Make a talk about..."
- "Create a pitch deck for..."
- "Generate presentation slides..."
- Any request involving: **presentation**, **slides**, **deck**, **talk**, **keynote**, **pitch**, **slideshow**
- Any request to visualize or structure content for an audience, even without explicit "slide" mention

---

## Input Modes

Determine which mode applies based on the user's input:

### Mode A: Topic Only
The user provides a topic and optionally a duration or audience.
```
"Make a 15-min talk about AI trends"
"Create a presentation on microservices architecture"
```
→ Design the structure, content, and speaker notes from scratch.

### Mode B: Content/Material Provided
The user provides source material (documents, notes, data, articles).
```
"Turn this document into a presentation"
"Create slides based on these meeting notes"
```
→ Organize and distill the material into slides + speaker notes.

### Mode C: Script Provided
The user provides a written speech or speaking script.
```
"Create slides for this speech script"
"Make a visual deck that accompanies this talk"
```
→ Analyze the script's structure and create matching visual slides. The script becomes the speaker notes.

---

## Workflow

Follow these steps in order:

### Step 1: Analyze Input
- Determine the input mode (A, B, or C)
- Estimate the appropriate number of slides:
  - 5-min talk → 8–12 slides
  - 10-min talk → 12–18 slides
  - 15-min talk → 18–25 slides
  - 20-min talk → 25–30 slides
  - 30-min talk → 30–40 slides
- Identify the target audience and tone (technical, business, casual, academic)
- Detect the user's language from the conversation — generate content in that language
- Ask the user about the desired output format (always ask, do not skip):
  > **Which output format would you like?**
  > - **HTML** — Interactive single-file presentation you can open in a browser (navigation, animations, speaker notes built-in)
  > - **PPTX** — PowerPoint file for Office, Google Slides, or Keynote
  
  - If the user already mentioned "PowerPoint", "pptx", "PPT", ".pptx", "Google Slides", or "Keynote" in their request → skip the question and use PPTX mode
  - Otherwise, always ask explicitly before proceeding

### Step 2: Choose a Theme
Present the user with the theme gallery link for browsing:
> **Browse themes here**: https://make-slide.vercel.app

Read `references/themes.md` for the full theme list with GitHub raw URLs and recommendations by context.

If the user doesn't choose a theme, recommend one based on context:
- Tech/developer talk → `minimal-dark` or `neon-terminal`
- Business/corporate → `corporate` or `minimal-light`
- Startup pitch → `gradient-pop` or `keynote-apple`
- Data/analytics → `data-focus`
- Education/workshop → `paper` or `playful`
- Design/creative → `magazine`
- Product launch → `keynote-apple`
- Casual/team event → `playful`

### Step 2.5: Choose a Layout
Ask the user which layout style they prefer:

> **Which layout style would you like?**
> Browse layouts here: https://make-slide.vercel.app (Layouts section)
>
> - **Centered** (default) — Classic centered content, clean and balanced
> - **Wide** — Full-width content, great for data-heavy slides
> - **Split** — Two-column with text + visuals side by side
> - **Editorial** — Magazine-style asymmetric, dramatic typography

If the user doesn't choose, default to **centered**.

Read `references/layouts.md` for layout descriptions and `layouts/{name}/reference.html` for the layout reference code.

When generating HTML, combine the chosen **theme** (colors, fonts, design) with the chosen **layout** (content positioning, spacing, structure).

### Step 3: Image Options
Ask the user which image approach they prefer:

> **How would you like to handle images in your slides?**
> 
> **A) No images** — Use styled CSS placeholders (emoji, icons, shapes) that match the theme. Clean and lightweight.
> 
> **B) I'll provide URLs** — I'll mark image positions in the outline, and you provide the image URLs.
> 
> **C) Auto-search** — I'll search the web for relevant, high-quality images and place them automatically.

- **Option A** → Use CSS placeholders matching the theme (emoji, SVG icons, CSS shapes)
- **Option B** → Mark image positions in the outline, ask user for URLs, use `<img src>` with `loading="lazy"` and descriptive `alt` text
- **Option C** → Automatically search and place images, but be selective:
  1. NOT every slide needs an image. Only add images to slides where a visual genuinely enhances understanding (e.g., concept slides, example slides, section dividers). Skip images for quote slides, code slides, data/chart slides, comparison slides, and agenda slides.
  2. Aim for roughly 30-40% of slides having images — not all of them.
  3. Determine a relevant English search keyword based on the slide content.
  4. Use Unsplash direct photo URLs: `https://images.unsplash.com/photo-{PHOTO_ID}?w=800&h=600&fit=crop`
     - To find valid photo IDs, search the web for `site:unsplash.com {keyword}` and extract the photo ID from the URL.
     - NEVER guess or fabricate Unsplash photo IDs — every URL must come from an actual search result.
  5. After collecting image URLs, verify each one actually returns an image (HTTP 200) before inserting. Replace any 404 URLs with CSS placeholders.
  6. Insert as `<img src="URL" alt="description" loading="lazy">`
  7. Inform the user that images are from Unsplash (Unsplash License, free for commercial use).

### Step 4: Generate Outline
Create a slide-by-slide outline with:
- Slide number
- Slide type (from slide types reference)
- Title
- Key points / content summary
- Image placement (if applicable)

Read `references/slide-types.md` for the 12 available slide type patterns.

Present the outline to the user for confirmation. Wait for approval or modifications before proceeding.

### Step 5: Fetch Theme Reference
Fetch the chosen theme's reference files from GitHub:

1. **reference.html** — The complete example presentation with all slide types, styles, navigation, and interactive features. This is the primary template.
2. **README.md** — Design guidelines including color palette, typography, spacing rules, and design philosophy.

Use the raw GitHub URLs listed in `references/themes.md`.

### Step 6: Generate HTML
Using the theme's reference.html and the layout's reference.html as templates:
- Use the **theme's** reference.html for visual styling (colors, fonts, design elements)
- Use the **layout's** reference.html for content structure and positioning
- Replace the demo content with the user's actual content
- Keep all interactive features (navigation, fullscreen, speaker notes, etc.)
- Match the theme's typography, colors, spacing, and animations
- Ensure all slide types used match the patterns in the reference

Read `references/core-features.md` and use the exact JavaScript code provided for navigation, fullscreen, speaker notes popup, progress bar, and slide counter. Do not rewrite these features — copy the code directly. This ensures consistent behavior across all AI models.

Read `references/html-spec.md` for the full HTML requirements including navigation, fullscreen, PDF export, CDN dependencies, image handling, and code blocks.

### Step 7: Generate Speaker Notes
Add speaker notes as `data-notes` attributes on each slide's `<div>`:
```html
<div class="slide" data-notes="Welcome everyone. Today I'll be talking about...">
```
- Notes should be conversational and natural
- Include timing cues where helpful (e.g., "[PAUSE]", "[2 min]")
- Expand on the slide text — don't just repeat it
- Include transitions between slides (e.g., "Now let's move on to...")

**Speaker Notes Panel must be a separate popup window** using `window.open()`. Do NOT render notes inline at the bottom of the slide — this breaks the slide layout. The `S` key should toggle a popup window that shows the current slide's notes and auto-updates on slide change. See `references/html-spec.md` for the implementation pattern.

### Step 8: Generate Script (Mode A and B only)
For Mode A and B, also generate a separate `script.md` file containing:
- Full speaking script organized by slide
- Timing estimates per section
- Audience interaction cues
- Key points to emphasize

For Mode C, the user already has a script — skip this step.

### Step 9: Save and Deliver
- Save the presentation as `index.html` (or user-specified filename)
- Save the script as `script.md` (if generated)
- Tell the user they can open `index.html` directly in their browser to view the presentation — no server needed
- The file is fully self-contained (all CSS/JS inlined), so it works by simply double-clicking the file or dragging it into a browser

---

## PPTX Output Mode

When the user selects PPTX output, follow this modified workflow:

### PPTX Step 1: Generate HTML Slides (PPTX-Compatible)
Follow the standard HTML generation workflow (Steps 1-7) but with these constraints from the PPTX spec. Read `references/pptx-spec.md` for the complete PPTX conversion rules before generating HTML.

### PPTX Step 2: Convert HTML to PPTX
Use the screenshot-based conversion pipeline with Puppeteer + PptxGenJS:
1. Install dependencies if not present: `npm install pptxgenjs puppeteer`
2. Write a conversion script that:
   - Opens the HTML file in a headless browser with viewport 1280×720 (16:9)
   - For EACH slide:
     a. Navigate to that slide (set it as active, remove active class from others)
     b. **Wait for ALL animations to complete** — add a delay of at least 1000ms after activating the slide, or better: disable all CSS animations/transitions before capturing by injecting `* { animation: none !important; transition: none !important; }`
     c. **Hide all other slides completely** — ensure only the current slide is visible (opacity:1, display:flex) and all others are hidden (opacity:0, display:none). This prevents ghost/residue from previous slides.
     d. Take a full-page screenshot of the viewport at **2x resolution** (deviceScaleFactor: 2) for crisp text
   - Insert each screenshot into PPTX as a **full-slide image** covering the entire slide area (x:0, y:0, w:'100%', h:'100%')
   - Do NOT add margins or padding around the image — it should fill the entire slide
3. Save as `.pptx`

**Critical: Preventing ghost slides and small content**
```javascript
// Before each screenshot, inject this CSS to disable animations
await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; animation-delay: 0s !important; }' });

// Hide all slides, then show only current
await page.evaluate((idx) => {
  document.querySelectorAll('.slide').forEach((s, i) => {
    s.style.display = i === idx ? 'flex' : 'none';
    s.style.opacity = i === idx ? '1' : '0';
    s.classList.toggle('active', i === idx);
  });
}, slideIndex);

// Wait for layout to settle
await new Promise(r => setTimeout(r, 500));

// Screenshot at 2x for crisp text
await page.screenshot({ path: outputPath, type: 'png' });
```

### PPTX Step 3: Validate and Deliver
- Verify the PPTX opens correctly and content fills each slide without excess margins
- Save as `presentation.pptx` (or user-specified filename)
- Offer to also generate the HTML version for preview

---

## Output Rules

1. Always output a single `.html` file with all CSS and JS inlined
2. Only allowed external dependencies: Font CDNs (Pretendard, JetBrains Mono) + Prism.js CDN (conditional)
3. Speaker notes embedded as `data-notes` attributes on each slide `<div>`
4. Optionally output `script.md` for full speaking script (Mode A and B)
5. Generate content in the user's language — detect from the conversation context
6. Filename: `index.html` by default, or as specified by the user
7. Vanilla JS only — no JavaScript frameworks
8. Vanilla CSS only — no CSS frameworks

---

## Tips for Best Results

### Content
- Keep slides concise: max 6–8 bullet points per slide
- One core idea per slide
- Use short phrases, not full sentences, on slides
- Save detailed explanations for speaker notes

### Design
- Use the theme's accent color for emphasis and key terms
- Match typography hierarchy exactly from the reference.html
- Maintain consistent spacing and padding throughout
- Work within the theme's design system — don't override its core design

### Speaker Notes
- Write notes in a conversational tone
- Expand, explain, give examples — don't just repeat slide text
- Include timing hints: "[This section: ~3 minutes]"
- Add transition phrases: "Now let's look at...", "Building on that..."
- Mark audience interaction points: "[ASK AUDIENCE]", "[DEMO]", "[PAUSE]"

### Data Visualization
- Use CSS-only charts when possible (bar charts, progress bars, donut charts)
- Keep numbers round and memorable (say "nearly 50%" not "49.7%")
- Highlight the most important metric with size or color

### Performance
- Keep total HTML file size under 200KB ideally
- Use `loading="lazy"` on images
- Minimize complex CSS animations on slides with heavy content

### Accessibility
- Maintain sufficient color contrast ratios
- Include `alt` text on all images
- Ensure keyboard navigation works for all interactive elements
- Use semantic HTML where appropriate

---

## Quick Start Example

If the user says: *"Make a 10-minute presentation about Python best practices"*

1. **Mode**: A (Topic only)
2. **Slides**: ~15 slides
3. **Theme recommendation**: `minimal-dark` or `neon-terminal` (developer topic)
4. **Ask**: Theme preference + image needs
5. **Generate outline** → Get confirmation
6. **Fetch**: `minimal-dark/reference.html` + `minimal-dark/README.md`
7. **Generate**: `index.html` + `script.md`
8. **Offer**: Local server preview

---

*Skill version: 2.0 | Repository: [kuneosu/make-slide](https://github.com/kuneosu/make-slide) | Gallery: [make-slide.vercel.app](https://make-slide.vercel.app)*
