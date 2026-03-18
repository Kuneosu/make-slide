# Keynote Apple

## Design Philosophy / 디자인 철학

**EN:** Inspired by Apple's iconic keynote presentations. Dramatic, bold, and visually stunning. Alternates between pitch-black slides and gradient backgrounds to create rhythm and impact. Every slide feels like a product reveal.

**KO:** Apple의 상징적인 키노트 발표에서 영감을 받은 테마입니다. 드라마틱하고, 대담하고, 시각적으로 인상적입니다. 칠흑 같은 슬라이드와 그라디언트 배경을 번갈아 사용하여 리듬감과 임팩트를 만듭니다. 모든 슬라이드가 제품 공개의 순간처럼 느껴집니다.

---

## Color Palette / 색상 팔레트

| Role | Value | Preview |
|------|-------|---------|
| Dark Background | `#000000` | ⬛ |
| Dark Surface | `#111111` | ⬛ |
| Gradient Start | `#1a1a2e` | ⬛ |
| Gradient Mid | `#16213e` | ⬛ |
| Gradient End | `#0f3460` | ⬛ |
| Light Background | `#ffffff` | ⬜ |
| Primary Text (dark) | `#ffffff` | ⬜ |
| Primary Text (light) | `#1a1a1a` | ⬛ |
| Accent | `#007AFF` | 🔵 |
| Code Background | `#0a0a0a` | ⬛ |

---

## Typography / 타이포그래피

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Body | Pretendard | 400 | 22px | |
| Headline XL | Pretendard | 900 | 80px+ | letter-spacing: -2px |
| Headline LG | Pretendard | 900 | 56px+ | letter-spacing: -1px |
| Headline MD | Pretendard | 800 | 44px | |
| Code | JetBrains Mono | 400 | 15px | |
| Overline | Pretendard | 500 | 14px | letter-spacing: 6px |

---

## Special Effects / 특수 효과

- **Gradient text** — `background-clip: text` for dramatic headings
- **Glass-morphism cards** — `backdrop-filter: blur(10px)` with translucent backgrounds
- **Glow effects** — Subtle gradient lines on flow steps
- **Colorful chart bars** — Each bar has a unique Apple-palette gradient
- **Mixed slide modes** — `.slide-dark`, `.slide-gradient`, `.slide-light`

---

## Use Cases / 적합한 용도

**EN:**
- Product launches and demos
- Startup pitch decks
- Keynote presentations at conferences
- Brand and marketing presentations
- Executive briefings
- Any high-impact, dramatic presentation

**KO:**
- 제품 출시 및 데모
- 스타트업 피칭
- 컨퍼런스 키노트 발표
- 브랜드 및 마케팅 발표
- 임원 브리핑
- 강렬한 인상이 필요한 모든 발표

---

## Slide Types / 슬라이드 타입

`reference.html` includes examples of all supported slide types:

1. **Title** — Black bg, massive centered title, product-launch feel
2. **Agenda/TOC** — Dark bg, numbered list with accent badges
3. **Content** — Gradient bg, large key message
4. **Quote** — Black bg, elegant thin-weight quote
5. **Comparison** — White bg, two-column contrast layout
6. **Flow/Steps** — Dark bg, glow-effect process steps
7. **Cards** — Dark bg, glass-morphism feature cards
8. **Data/Chart** — Dark bg, colorful gradient bars
9. **Code Block** — Dark bg, macOS-style code window
10. **Image Placeholder** — Gradient bg, centered placeholder
11. **Closing** — Black bg, gradient-text "Thank You"
