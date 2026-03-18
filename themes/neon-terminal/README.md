# Neon Terminal

## Design Philosophy / 디자인 철학

**EN:** A terminal-inspired dark theme with neon green and cyan accents, built for developer talks, hackathons, and CTF presentations. Every element echoes the aesthetics of a command-line interface — monospace typography, prompt symbols, blinking cursors, and subtle scanline overlays. Content feels like it is being rendered in a high-tech terminal, giving presentations an immersive hacker-culture atmosphere.

**KO:** 네온 그린과 시안 액센트를 사용한 터미널 감성의 다크 테마입니다. 개발자 발표, 해커톤, CTF 프레젠테이션을 위해 설계되었습니다. 모든 요소가 커맨드라인 인터페이스의 미학을 반영합니다 — 모노스페이스 타이포그래피, 프롬프트 기호, 깜빡이는 커서, 은은한 스캔라인 오버레이. 콘텐츠가 하이테크 터미널에서 렌더링되는 듯한 느낌을 주어, 해커 문화의 몰입감 있는 분위기를 연출합니다.

---

## Color Palette / 색상 팔레트

| Role | Value | Preview |
|------|-------|---------|
| Background | `#0d1117` | ![#0d1117](https://via.placeholder.com/16/0d1117/0d1117.png) |
| Surface / Cards | `#161b22` | ![#161b22](https://via.placeholder.com/16/161b22/161b22.png) |
| Border | `#30363d` | ![#30363d](https://via.placeholder.com/16/30363d/30363d.png) |
| Primary Text (Neon Green) | `#00ff41` | ![#00ff41](https://via.placeholder.com/16/00ff41/00ff41.png) |
| Secondary Text (Dim Green) | `#4ade80` | ![#4ade80](https://via.placeholder.com/16/4ade80/4ade80.png) |
| Accent (Cyan) | `#00d4ff` | ![#00d4ff](https://via.placeholder.com/16/00d4ff/00d4ff.png) |
| Accent Dim | `#0099cc` | ![#0099cc](https://via.placeholder.com/16/0099cc/0099cc.png) |
| Error / Before | `#f85149` | ![#f85149](https://via.placeholder.com/16/f85149/f85149.png) |

---

## Typography / 타이포그래피

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | JetBrains Mono | 400 | 16px |
| Headline XL | JetBrains Mono | 700 | 48px |
| Headline LG | JetBrains Mono | 700 | 32px |
| Headline MD | JetBrains Mono | 600 | 20px |
| Code | JetBrains Mono | 400 | 14px |
| Tag / Badge | JetBrains Mono | 600 | 12px |
| Fallback Body | Pretendard | 400 | 16px |

---

## Key Design Elements / 주요 디자인 요소

**EN:**
- **Scanline overlay** — Subtle CSS repeating-linear-gradient simulates CRT monitor scanlines
- **Neon glow effects** — Text-shadow with green/cyan creates authentic neon illumination
- **Blinking cursor** — Animated cursor block on title slides mimics terminal input
- **Prompt symbols** — List items prefixed with `$`, `>` for terminal authenticity
- **Terminal window chrome** — Cards and comparison columns styled as terminal windows with dot controls
- **Monospace everything** — JetBrains Mono used universally, Pretendard only as fallback
- **[SYSTEM] tags** — Badges styled as terminal system messages

**KO:**
- **스캔라인 오버레이** — CSS 반복 그라디언트로 CRT 모니터 스캔라인 시뮬레이션
- **네온 글로우 효과** — 그린/시안 text-shadow로 네온 조명 효과 구현
- **깜빡이는 커서** — 타이틀 슬라이드에 터미널 입력 커서 애니메이션
- **프롬프트 기호** — 리스트 항목에 `$`, `>` 프롬프트 접두사 사용
- **터미널 윈도우 크롬** — 카드와 비교 칼럼이 터미널 창 스타일 (도트 컨트롤 포함)
- **모노스페이스 전면 적용** — JetBrains Mono 전체 사용, Pretendard는 폴백 전용
- **[SYSTEM] 태그** — 터미널 시스템 메시지 스타일의 배지

---

## Use Cases / 적합한 용도

**EN:**
- Developer conferences and tech talks
- Hackathon presentations and demos
- CTF (Capture The Flag) event slides
- Security and DevOps presentations
- Open source project launches
- CLI tool and terminal app showcases
- Cybersecurity training materials
- Late-night coding event presentations

**KO:**
- 개발자 컨퍼런스 및 기술 발표
- 해커톤 프레젠테이션 및 데모
- CTF (Capture The Flag) 이벤트 슬라이드
- 보안 및 DevOps 발표
- 오픈소스 프로젝트 런칭
- CLI 도구 및 터미널 앱 쇼케이스
- 사이버보안 교육 자료
- 심야 코딩 이벤트 발표

---

## Slide Types / 슬라이드 타입

`reference.html` includes examples of all supported slide types:

1. **Title** — Large centered headline with blinking cursor, system tag, and date
2. **Agenda/TOC** — Numbered topic list with prompt symbols
3. **Content** — Body text with `$`-prefixed bullet points and highlights
4. **Quote** — Terminal-output style quotation with attribution
5. **Comparison** — Before/After two-column layout as diff output
6. **Flow/Steps** — Horizontal process diagram with bordered step numbers
7. **Cards** — Feature cards styled as terminal windows
8. **Data/Chart** — CSS bar chart with alternating green/cyan bars
9. **Code Block** — Syntax-highlighted code with file header (Prism.js)
10. **Image Placeholder** — Dashed border placeholder with terminal load command
11. **Closing** — Thank you slide with cursor animation and contact links
