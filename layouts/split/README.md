# Split Layout

## What It Looks Like
Two equal columns side by side. Text on one side, visuals on the other. A clear visual separation between the two halves. Content feels balanced but dynamic, like an open book.

## When to Use
- Image + text combination slides
- Before/after comparisons
- Pros/cons lists
- Feature highlights with screenshots
- Any content that has two complementary parts

## Key CSS Properties
```css
.slide {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* two equal columns */
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

## How It Differs from Others
- **vs Centered**: Two columns vs single centered column
- **vs Wide**: Split 50/50 vs full-width single flow
- **vs Editorial**: Symmetric grid vs asymmetric dramatic positioning
