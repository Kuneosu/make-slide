# make-slide — AI Presentation Skill

## Overview

**make-slide** is a universal skill for AI coding agents that generates single-file HTML presentations with speaker notes. The output is always a standalone `.html` file with all CSS and JS inlined — no build step, no framework, no dependencies beyond font CDNs.

Any AI coding tool (Claude Code, Gemini CLI, Codex, Cursor, etc.) can read this file and follow the instructions to generate professional presentations.

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

---

## Input Modes

Determine which mode applies based on the user's input:

### Mode A: Topic Only
The user provides a topic and optionally a duration or audience.
```
"Make a 15-min talk about AI trends"
"Create a presentation on microservices architecture"
```
→ You design the structure, content, and speaker notes from scratch.

### Mode B: Content/Material Provided
The user provides source material (documents, notes, data, articles).
```
"Turn this document into a presentation"
"Create slides based on these meeting notes"
```
→ You organize and distill the material into slides + speaker notes.

### Mode C: Script Provided
The user provides a written speech or speaking script.
```
"Create slides for this speech script"
"Make a visual deck that accompanies this talk"
```
→ You analyze the script's structure and create matching visual slides. The script becomes the speaker notes.

---

## Workflow

Follow these steps in order:

### Step 1: Analyze Input
- Determine the input mode (A, B, or C)
- Estimate the appropriate number of slides:
  - 5-min talk → 8-12 slides
  - 10-min talk → 12-18 slides
  - 15-min talk → 18-25 slides
  - 20-min talk → 25-30 slides
  - 30-min talk → 30-40 slides
- Identify the target audience and tone (technical, business, casual, academic)
- Detect the user's language from the conversation (generate content in that language)

### Step 2: Choose a Theme
Present the user with the theme gallery link for browsing:
> **Browse themes here**: https://make-slide.vercel.app

If the user doesn't choose a theme, recommend one based on context:
- Tech/developer talk → `minimal-dark` or `neon-terminal`
- Business/corporate → `corporate` or `minimal-light`
- Startup pitch → `gradient-pop` or `keynote-apple`
- Data/analytics → `data-focus`
- Education/workshop → `paper` or `playful`
- Design/creative → `magazine`
- Product launch → `keynote-apple`
- Casual/team event → `playful`

### Step 3: Check Image Needs
Ask the user:
> "Would you like me to identify image insertion points in the slides? If yes, I'll mark them in the outline and you can provide image URLs. If no, I'll use styled placeholders."

- **Yes** → Mark image positions in the outline, ask user for image URLs
- **No** → Use CSS placeholders (emoji, SVG icons, CSS shapes) that match the theme

### Step 4: Generate Outline
Create a slide-by-slide outline with:
- Slide number
- Slide type (from Slide Types Reference below)
- Title
- Key points / content summary
- Image placement (if applicable)

Present the outline to the user for confirmation. Wait for approval or modifications before proceeding.

### Step 5: Fetch Theme Reference
Fetch the chosen theme's reference files from GitHub:

1. **reference.html** — The complete example presentation with all slide types, styles, navigation, and interactive features. This is your primary template.
2. **README.md** — Design guidelines including color palette, typography, spacing rules, and design philosophy.

Use the raw GitHub URLs listed in the Theme List section below.

### Step 6: Generate HTML
Using the reference.html as your template:
- Replicate the exact HTML structure, CSS styles, and JS functionality
- Replace the demo content with the user's actual content
- Keep all interactive features (navigation, fullscreen, speaker notes, etc.)
- Match the theme's typography, colors, spacing, and animations
- Ensure all slide types used match the patterns in the reference

### Step 7: Generate Speaker Notes
Add speaker notes as `data-notes` attributes on each slide's `<div>`:
```html
<div class="slide" data-notes="Welcome everyone. Today I'll be talking about...">
```
- Notes should be conversational and natural
- Include timing cues where helpful (e.g., "[PAUSE]", "[2 min]")
- Don't just repeat the slide text — expand on it
- Include transitions between slides (e.g., "Now let's move on to...")

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
- Offer to start a local server for preview:
  ```bash
  # Python
  python -m http.server 8000
  # Node.js
  npx serve .
  ```

---

## Theme List

| # | Theme ID | Style | Best For | Reference HTML | README |
|---|----------|-------|----------|---------------|--------|
| 1 | `minimal-dark` | Clean dark background, white typography, modern minimal | Tech conferences, developer talks, open source presentations | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/minimal-dark/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/minimal-dark/README.md) |
| 2 | `minimal-light` | Bright white background, precise typography, Apple-inspired | General presentations, corporate meetings, academic lectures | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/minimal-light/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/minimal-light/README.md) |
| 3 | `corporate` | Navy and gold accents, professional structured layout | Business presentations, investor meetings, quarterly reports | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/corporate/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/corporate/README.md) |
| 4 | `gradient-pop` | Vibrant purple-pink-orange gradients, glass-morphism cards | Startup pitches, product launches, marketing campaigns | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/gradient-pop/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/gradient-pop/README.md) |
| 5 | `neon-terminal` | Terminal-style dark theme, neon green/cyan, scanline effects | Developer conferences, hackathons, CTF events, security talks | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/neon-terminal/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/neon-terminal/README.md) |
| 6 | `paper` | Warm kraft-paper aesthetic, serif typography, terracotta accents | Educational talks, academic conferences, workshops, research | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/paper/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/paper/README.md) |
| 7 | `keynote-apple` | Dramatic dark/gradient backgrounds, Apple keynote-inspired | Product launches, keynote conferences, executive briefings | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/keynote-apple/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/keynote-apple/README.md) |
| 8 | `magazine` | Editorial magazine layout, asymmetric design, dramatic typography | Design presentations, portfolio reviews, brand guidelines | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/magazine/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/magazine/README.md) |
| 9 | `data-focus` | Clean data-centric layout, dashboard aesthetics, trend indicators | Data analysis, KPI dashboards, financial reviews, statistical reports | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/data-focus/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/data-focus/README.md) |
| 10 | `playful` | Rounded corners, pastel colors, emoji accents, bouncy animations | Team workshops, casual tech talks, retrospectives, community events | [reference.html](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/playful/reference.html) | [README.md](https://raw.githubusercontent.com/kuneosu/make-slide/main/themes/playful/README.md) |

---

## HTML Requirements

Every generated presentation **MUST** include all of the following features. These are non-negotiable.

### File Structure
- Single standalone `.html` file
- All CSS inlined in `<style>` tags
- All JS inlined in `<script>` tags
- No external files except CDN links listed below

### Required CDN Dependencies
```html
<!-- Pretendard Font (MANDATORY) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">

<!-- JetBrains Mono for code blocks -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap">

<!-- Prism.js for syntax highlighting (ONLY if code blocks exist) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<!-- Add language components as needed -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
```

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
- Panel displays:
  - Current slide's notes (from `data-notes` attribute)
  - Next slide preview (when possible)
- Panel should not obstruct the main slide view

### PDF Export
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

### Touch/Swipe Navigation
- Swipe left → Next slide
- Swipe right → Previous slide
- Implement using touch event listeners (`touchstart`, `touchend`)

### Slide Transitions
- Fade transition between slides (CSS transitions or animations)
- Smooth and professional — no jarring jumps

### Staggered Element Animations
- Elements within a slide animate in sequentially (stagger effect)
- Use CSS animations with incremental `animation-delay`
- Trigger animations when the slide becomes active

### Aspect Ratio
- 16:9 aspect ratio for all slides
- Centered on screen with letterboxing if needed

### Responsive Design
- Scales to fit various screen sizes
- Text remains readable at all resolutions
- Controls adapt to screen size

### Content Overflow
- Apply `overflow-y: auto` on slide content areas
- Prevents content from being clipped if a slide has more content than fits
- Scrollbar should be subtle and match the theme

---

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

---

## Code Blocks

### Syntax Highlighting with Prism.js
- **Only include Prism.js CDN when code blocks are present** in the presentation
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

---

## Output Rules

1. **Always output a single `.html` file** with all CSS and JS inlined
2. **Only allowed external dependencies**: Font CDNs (Pretendard, JetBrains Mono) + Prism.js CDN (conditional)
3. **Speaker notes** embedded as `data-notes` attributes on each slide `<div>`
4. **Optionally output `script.md`** for full speaking script (Mode A and B)
5. **Generate content in the user's language** — detect from the conversation context
6. **Filename**: `index.html` by default, or as specified by the user
7. **Do not use any JavaScript frameworks** — vanilla JS only
8. **Do not use any CSS frameworks** — vanilla CSS only

---

## Slide Types Reference

Every theme supports these common slide types. Use the appropriate type based on content needs:

### 1. Title Slide
The opening slide with presentation title, subtitle, presenter name, and date.
```
[Large Title]
[Subtitle or tagline]
[Presenter Name — Date]
```

### 2. Agenda / Table of Contents
Overview of the presentation structure with numbered sections.
```
[Agenda heading]
01. First Section
02. Second Section
03. Third Section
...
```

### 3. Section Divider
Marks the beginning of a new section. Usually has a big number or icon.
```
[Big Number: 01]
[Section Title]
[Optional brief description]
```

### 4. Content Slide
Standard slide with heading and bullet points or paragraphs.
```
[Heading]
• Point one
• Point two
• Point three
[Optional supporting text]
```

### 5. Quote Slide
Features a prominent quotation with attribution.
```
"The best way to predict the future is to invent it."
— Alan Kay
```

### 6. Comparison Slide
Side-by-side columns comparing two concepts, approaches, or options.
```
[Left Column: Option A]     [Right Column: Option B]
- Feature 1                 - Feature 1
- Feature 2                 - Feature 2
```

### 7. Flow / Process Slide
Step-by-step process visualization with arrows or connectors.
```
[Step 1] → [Step 2] → [Step 3] → [Step 4]
```

### 8. Card Grid Slide
2-4 cards arranged in a grid, each with an icon, title, and description.
```
[🎯 Card 1]  [🚀 Card 2]
[Title]       [Title]
[Desc]        [Desc]

[💡 Card 3]  [⚡ Card 4]
[Title]       [Title]
[Desc]        [Desc]
```

### 9. Data / Chart Slide
Statistics, metrics, bar charts, or KPI displays. Use CSS-only charts when possible.
```
[Metric: 95%]  [Metric: 2.5x]  [Metric: 10K+]
[CSS bar chart or visual representation]
```

### 10. Code Block Slide
Syntax-highlighted code with optional title and description.
```
[Title: Implementation Example]
┌──────────────────────────┐
│ function example() {     │
│   return "hello";        │
│ }                        │
└──────────────────────────┘
[Optional explanation below]
```

### 11. Image Slide
Slide featuring an image (or placeholder) with optional caption.
```
[Image or Placeholder]
[Caption text]
```

### 12. Closing Slide
Final slide with thank you message, contact info, or call to action.
```
[Thank You]
[Contact info / Social links / QR code]
[Call to action]
```

---

## Tips for Best Results

### Content
- Keep slides concise: **max 6-8 bullet points** per slide
- One core idea per slide
- Use short phrases, not full sentences, on slides
- Save detailed explanations for speaker notes

### Design
- Use the theme's accent color for emphasis and key terms
- Match typography hierarchy exactly from the reference.html
- Maintain consistent spacing and padding throughout
- Don't override the theme's core design — work within its system

### Speaker Notes
- Write notes in a conversational tone
- Don't just repeat the slide text — expand, explain, give examples
- Include timing hints: "[This section: ~3 minutes]"
- Add transition phrases: "Now let's look at...", "Building on that..."
- Mark audience interaction points: "[ASK AUDIENCE]", "[DEMO]", "[PAUSE]"

### Data Visualization
- Use CSS-only charts when possible (bar charts, progress bars, donut charts)
- Keep numbers round and memorable (say "nearly 50%" not "49.7%")
- Highlight the most important metric with size or color

### Performance
- Keep total HTML file size reasonable (under 200KB ideally)
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

*Skill version: 1.0 | Repository: [kuneosu/make-slide](https://github.com/kuneosu/make-slide)*
