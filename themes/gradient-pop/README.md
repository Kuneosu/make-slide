# Gradient Pop

## Design Philosophy / 디자인 철학

**EN:** Vibrant, energetic, and unapologetically bold. Gradient Pop uses flowing purple-to-pink-to-orange gradients as the foundation for every slide, creating a sense of motion and excitement. Each slide features a slightly different gradient angle to keep the visual rhythm dynamic. Glass-morphism cards, bright yellow accents, and bold white typography make content pop against the vivid backgrounds. This theme is built for presentations that need to grab attention and never let go.

**KO:** 강렬하고, 에너지 넘치며, 대담한 테마입니다. Gradient Pop은 보라색에서 핑크, 오렌지로 이어지는 생동감 있는 그라디언트를 모든 슬라이드의 기반으로 사용하여 역동적인 리듬감과 흥분을 만들어냅니다. 각 슬라이드마다 살짝 다른 그라디언트 각도로 시각적 변화를 줍니다. 글래스모피즘 카드, 밝은 노란색 액센트, 그리고 굵은 화이트 타이포그래피가 비비드한 배경 위에서 콘텐츠를 돋보이게 합니다. 시선을 사로잡아야 하는 발표를 위해 만들어진 테마입니다.

---

## Color Palette / 색상 팔레트

| Role | Value | Preview |
|------|-------|---------|
| Gradient Start | `#6366f1` | 🟣 |
| Gradient Mid | `#ec4899` | 🩷 |
| Gradient End | `#f97316` | 🟠 |
| Accent | `#fbbf24` | 🟡 |
| Primary Text | `#ffffff` | ⬜ |
| Secondary Text | `rgba(255,255,255,0.8)` | ⬜ |
| Muted Text | `rgba(255,255,255,0.55)` | ⬜ |
| Surface | `rgba(255,255,255,0.1)` | ⬜ |
| Border | `rgba(255,255,255,0.2)` | ⬜ |
| Code Background | `rgba(0,0,0,0.45)` | ⬛ |

---

## Typography / 타이포그래피

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Body | Pretendard | 400 | 22px | |
| Headline XL | Pretendard | 900 | 84px+ | letter-spacing: -2px |
| Headline LG | Pretendard | 800 | 56px+ | letter-spacing: -1.5px |
| Headline MD | Pretendard | 700 | 36px | letter-spacing: -0.5px |
| Code | JetBrains Mono | 400 | 14px | |
| Tag | Pretendard | 700 | 13px | letter-spacing: 3px, uppercase |

---

## Special Effects / 특수 효과

- **Multi-gradient slides** — Each slide uses a unique gradient combination for visual variety
- **Glass-morphism cards** — `backdrop-filter: blur(16px)` with translucent white backgrounds
- **Glow accents** — Gradient glow lines on flow step cards
- **Bright yellow highlights** — `#fbbf24` accent draws attention to key elements
- **Pill-shaped tags** — Rounded badge elements in contrasting bright colors
- **Text shadows** — Subtle shadows on headings for depth against gradients

---

## Use Cases / 적합한 용도

**EN:**
- Startup pitch decks
- Product launches and announcements
- Creative portfolio presentations
- Marketing campaign reveals
- Conference talks with high energy
- Any presentation requiring visual impact and excitement

**KO:**
- 스타트업 피칭 덱
- 제품 출시 및 발표
- 크리에이티브 포트폴리오 프레젠테이션
- 마케팅 캠페인 공개
- 에너지 넘치는 컨퍼런스 발표
- 시각적 임팩트와 흥분이 필요한 모든 발표

---

## Slide Types / 슬라이드 타입

`reference.html` includes examples of all supported slide types:

1. **Title** — Gradient bg, bold centered headline with tag badge, subtitle, and date
2. **Agenda/TOC** — Gradient bg, numbered topic list with yellow accent badges
3. **Content** — Gradient bg, body text with bullet points and highlighted keywords
4. **Quote** — Deep purple gradient, large quotation with yellow quote mark
5. **Comparison** — Warm gradient, Before/After two-column glass-morphism layout
6. **Flow/Steps** — Cool gradient, horizontal 4-step process with glow accents and arrows
7. **Cards** — Dark pink gradient, 3 glass-morphism feature cards with icons and tags
8. **Data/Chart** — Pink-red gradient, CSS bar chart with gradient-colored bars
9. **Code Block** — Dark indigo gradient, syntax-highlighted code with macOS-style window
10. **Image Placeholder** — Warm reverse gradient, dashed border placeholder area
11. **Closing** — Full-spectrum gradient, bold "Thank You" with contact link pills
