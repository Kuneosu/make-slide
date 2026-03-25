# Layout System

> **Themes vs Layouts**: Themes control visual appearance (colors, fonts, design elements). Layouts control content positioning and structure. They are independent and can be combined freely — any theme works with any layout.

## Available Layouts

### 1. Centered (Default)

**Description**: Content centered both vertically and horizontally. Classic presentation style with balanced whitespace.

**Best for**: Most presentations, talks, pitches, general-purpose slides.

**Key CSS**:
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 80px;
}
```

**HTML Structure**:
```html
<div class="slide" data-notes="Speaker notes here">
  <h1 class="a">Slide Title</h1>
  <p class="a">Centered content paragraph</p>
  <ul class="a">
    <li>Bullet point</li>
  </ul>
</div>
```

---

### 2. Wide

**Description**: Content uses full width with generous padding. Left-aligned text with wide content area for maximum horizontal space.

**Best for**: Data-heavy presentations, technical content, tables, code walkthroughs.

**Key CSS**:
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 60px 80px;
}

.slide h1, .slide h2 {
  width: 100%;
}

.slide .content {
  width: 100%;
  max-width: 100%;
}
```

**HTML Structure**:
```html
<div class="slide" data-notes="Speaker notes here">
  <h2 class="a">Slide Title</h2>
  <div class="content a">
    <p>Full-width left-aligned content</p>
    <table>...</table>
  </div>
</div>
```

---

### 3. Split

**Description**: Two-column layout with text on one side and visuals on the other. Columns are separated by a clear visual boundary.

**Best for**: Comparisons, image + text combinations, before/after, pros/cons.

**Key CSS**:
```css
.slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 60px;
  text-align: left;
}

.slide .col-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide .col-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**HTML Structure**:
```html
<div class="slide" data-notes="Speaker notes here">
  <div class="col-text">
    <h2 class="a">Title</h2>
    <p class="a">Description text on the left</p>
  </div>
  <div class="col-visual a">
    <img src="..." alt="Visual" />
  </div>
</div>
```

---

### 4. Editorial

**Description**: Magazine-style asymmetric layout with dramatic typography. Large titles, off-center positioning, bold visual hierarchy.

**Best for**: Creative presentations, design portfolios, brand showcases, storytelling.

**Key CSS**:
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  padding: 60px 80px 80px;
}

.slide h1, .slide h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 70%;
}

.slide p {
  max-width: 50%;
  font-size: 1.1rem;
  line-height: 1.7;
}
```

**HTML Structure**:
```html
<div class="slide" data-notes="Speaker notes here">
  <h1 class="a">Big Bold Statement</h1>
  <p class="a">Supporting text that doesn't span full width, creating asymmetry</p>
  <span class="a tag">Category Label</span>
</div>
```

---

## Layout Selection Guide

| Layout | Alignment | Content Width | Best Slide Types |
|--------|-----------|---------------|-----------------|
| Centered | Center | 60-70% | Title, quote, closing, section divider |
| Wide | Left | 90-100% | Data, code, table, comparison, timeline |
| Split | Left (2-col) | 50/50 | Image+text, before/after, pros/cons |
| Editorial | Left-bottom | 50-70% | Title, statement, storytelling, creative |
