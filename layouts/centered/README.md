# Centered Layout

## What It Looks Like
Content is centered both vertically and horizontally on every slide. Clean, balanced whitespace on all sides. This is the classic presentation style used by most keynote speakers.

## When to Use
- General-purpose presentations and talks
- Pitch decks and proposals
- Conference keynotes
- Any presentation where simplicity and clarity matter

## Key CSS Properties
```css
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;  /* vertical center */
  align-items: center;       /* horizontal center */
  text-align: center;
  padding: 60px 80px;
}
```

## How It Differs from Others
- **vs Wide**: Centered uses ~60-70% of horizontal space; Wide uses ~90-100%
- **vs Split**: Single column vs two columns
- **vs Editorial**: Symmetric and balanced vs asymmetric and dramatic
