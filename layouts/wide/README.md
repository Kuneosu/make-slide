# Wide Layout

## What It Looks Like
Content spans the full width of the slide with left-aligned text. Generous horizontal padding but no centering — everything flows from left to right, utilizing maximum screen real estate.

## When to Use
- Data-heavy presentations with tables or charts
- Technical content and code walkthroughs
- Detailed comparison slides
- Any presentation where horizontal space matters

## Key CSS Properties
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  /* left-aligned */
  text-align: left;
  padding: 60px 80px;
}

.slide .content {
  width: 100%;              /* full width content */
  max-width: 100%;
}
```

## How It Differs from Others
- **vs Centered**: Left-aligned with full width vs centered with constrained width
- **vs Split**: Single full-width column vs two equal columns
- **vs Editorial**: Consistent full-width vs dramatic asymmetric positioning
