# Editorial Layout

## What It Looks Like
Magazine-style asymmetric design with dramatic typography. Content is positioned toward the bottom-left with large headlines and narrow body text that doesn't span the full width. Creates visual tension and sophistication through deliberate asymmetry.

## When to Use
- Creative and design-focused presentations
- Brand showcases and portfolio reviews
- Storytelling and narrative-driven talks
- Any presentation where visual impact matters more than information density

## Key CSS Properties
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;    /* content anchored to bottom */
  align-items: flex-start;       /* left-aligned */
  text-align: left;
  padding: 60px 80px 80px;
}

.slide h1, .slide h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 70%;              /* doesn't span full width */
}

.slide p {
  max-width: 50%;              /* narrow body text = asymmetry */
  font-size: 1.1rem;
  line-height: 1.7;
}
```

## How It Differs from Others
- **vs Centered**: Bottom-left anchored vs dead center; asymmetric vs symmetric
- **vs Wide**: Narrow constrained content (50-70%) vs full-width content
- **vs Split**: Single dramatic column vs two equal columns
