# Playful

## Design Philosophy / 디자인 철학

**EN:** A warm, friendly, and approachable theme built on rounded corners, pastel colors, and fun emoji accents. Every element feels soft and inviting — from the bouncy spring animations to the pill-shaped tags and tilting cards. Designed to make presentations feel less like formal lectures and more like creative conversations.

**KO:** 둥근 모서리, 파스텔 색상, 재미있는 이모지 악센트를 기반으로 한 따뜻하고 친근하며 다가가기 쉬운 테마입니다. 바운스 스프링 애니메이션부터 알약 모양 태그, 기울어지는 카드까지 모든 요소가 부드럽고 매력적입니다. 발표가 딱딱한 강의가 아닌 창의적인 대화처럼 느껴지도록 설계되었습니다.

---

## Color Palette / 색상 팔레트

| Role | Value | Preview |
|------|-------|---------|
| Background | `#fef7f0` | ![#fef7f0](https://via.placeholder.com/16/fef7f0/fef7f0) |
| Surface | `#ffffff` | ![#ffffff](https://via.placeholder.com/16/ffffff/ffffff) |
| Primary Text | `#2d2d2d` | ![#2d2d2d](https://via.placeholder.com/16/2d2d2d/2d2d2d) |
| Secondary Text | `#777777` | ![#777777](https://via.placeholder.com/16/777777/777777) |
| Accent Coral | `#ff6b6b` | ![#ff6b6b](https://via.placeholder.com/16/ff6b6b/ff6b6b) |
| Accent Mint | `#51cf66` | ![#51cf66](https://via.placeholder.com/16/51cf66/51cf66) |
| Accent Sky | `#74c0fc` | ![#74c0fc](https://via.placeholder.com/16/74c0fc/74c0fc) |
| Accent Lavender | `#cc5de8` | ![#cc5de8](https://via.placeholder.com/16/cc5de8/cc5de8) |
| Accent Yellow | `#ffd43b` | ![#ffd43b](https://via.placeholder.com/16/ffd43b/ffd43b) |
| Border | `#f0e0d0` | ![#f0e0d0](https://via.placeholder.com/16/f0e0d0/f0e0d0) |

---

## Typography / 타이포그래피

| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Body | Pretendard | 400 | 20px | |
| Headline XL | Pretendard | 800 | 64px | letter-spacing: -2px, gradient text on title |
| Headline LG | Pretendard | 700 | 42px | letter-spacing: -1px |
| Headline MD | Pretendard | 600 | 28px | |
| Code | JetBrains Mono | 400 | 14px | |
| Tags | Pretendard | 600 | 13px | pill-shaped, pastel backgrounds |

---

## Special Effects / 특수 효과

- **Bouncy spring animations** — `cubic-bezier(0.34, 1.56, 0.64, 1)` for overshoot/bounce on all transitions
- **Gradient text** — `background-clip: text` on title and closing slides using coral-lavender-sky gradient
- **Tilting cards** — `transform: rotate(-1deg)` on hover for a playful, hand-placed feel
- **Colorful chart bars** — Each bar uses a different pastel accent color
- **Pastel rainbow progress bar** — Gradient across coral, yellow, mint, sky, lavender
- **Emoji accents** — Used as icons in cards, agenda items, flow steps, and slide headers
- **Pill-shaped tags** — Rounded badges with pastel backgrounds throughout
- **Colored bullet dots** — Each bullet point gets a different pastel circle marker
- **Comparison columns** — Pastel red (before) vs pastel green (after) with check/cross markers

---

## Use Cases / 적합한 용도

**EN:**
- Team workshops and brainstorming sessions
- Casual tech talks and meetups
- Retrospectives and sprint reviews
- Educational presentations and tutorials
- Community and volunteer presentations
- Any talk that benefits from a warm, approachable tone

**KO:**
- 팀 워크숍 및 브레인스토밍 세션
- 캐주얼 기술 발표 및 밋업
- 회고 및 스프린트 리뷰
- 교육 프레젠테이션 및 튜토리얼
- 커뮤니티 및 자원봉사 발표
- 따뜻하고 친근한 톤이 필요한 모든 발표

---

## Slide Types / 슬라이드 타입

`reference.html` includes examples of all supported slide types:

1. **Title** — Colorful gradient headline with emoji accent and pill-shaped tags
2. **Agenda/TOC** — Numbered list with emoji icons and pastel-colored number badges
3. **Content** — Body text with colorful circle bullet points
4. **Quote** — Coral-colored quotation marks with centered attribution
5. **Comparison** — Before/After two-column layout with pastel red vs green styling
6. **Flow/Steps** — Four horizontal steps with emoji circles and pastel backgrounds
7. **Cards** — Three feature cards with emoji icons, tilt-on-hover animation
8. **Data/Chart** — CSS bar chart with each bar in a different pastel color
9. **Code Block** — Light Prism syntax highlighting with colored dot header
10. **Image Placeholder** — Dashed border area with gradient pastel background
11. **Closing** — Gradient "Thank You" title with pill-shaped contact link buttons
