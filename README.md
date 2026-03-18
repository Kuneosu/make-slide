# make-slide 🎯

**AI-powered presentation skill that generates stunning single-file HTML slide decks.**
**AI 코딩 에이전트가 단일 HTML 파일로 고품질 프레젠테이션을 생성하는 범용 스킬.**

[![Live Gallery](https://img.shields.io/badge/🎨_Theme_Gallery-Live_Demo-blue?style=for-the-badge)](https://make-slide.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## What is make-slide?

**make-slide** is a skill (instruction set) for AI coding agents — like Claude Code, Gemini CLI, Codex, Cursor, and others — that enables them to generate professional presentation slides as a **single HTML file**.

Instead of crafting designs from scratch every time (wasting tokens and producing inconsistent results), the AI references pre-built theme templates from this repository. The result is:

- **Token-efficient** — AI fetches a reference file instead of inventing layouts
- **Consistent quality** — every presentation follows a polished, tested design system
- **Zero dependencies** — output is one `.html` file you can open anywhere

> Think of it as a **design system for AI-generated presentations**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **10 Themes** | From dark minimal to playful pastels — [browse the gallery](https://make-slide.vercel.app) |
| 📄 **Single HTML Output** | One file, no build step, no framework — just open in a browser |
| 🎤 **Speaker Notes** | Built-in presenter mode with per-slide notes (press `S`) |
| 🖨️ **PDF Export** | Print-ready via `Ctrl+P` with clean `@media print` styles |
| 🖥️ **Fullscreen** | One-key fullscreen toggle (press `F`) |
| ⌨️ **Keyboard Navigation** | Arrow keys, spacebar, touch/swipe support |
| 📥 **3 Input Modes** | Topic only / Content provided / Script provided |
| 🤖 **Works with Any AI Tool** | Claude Code, Gemini CLI, Codex, Cursor, and more |
| 🌍 **Language-Agnostic** | Generates content in whatever language you speak |
| 📊 **CSS-Only Charts** | Bar charts, progress rings, KPI cards — no chart library needed |

---

## 🚀 Quick Start

Give your AI coding tool the following instruction:

### Claude Code
```
Read SKILL.md from https://github.com/kuneosu/make-slide and create a presentation about [your topic] using the minimal-dark theme.
```

### Gemini CLI
```
Follow the instructions in SKILL.md at https://github.com/kuneosu/make-slide to build a 10-slide presentation about [your topic].
```

### Any AI Coding Tool
```
Fetch https://raw.githubusercontent.com/kuneosu/make-slide/main/SKILL.md and follow its instructions to create a presentation about [your topic].
```

> **Tip:** Browse themes first at [make-slide.vercel.app](https://make-slide.vercel.app) and tell your AI which one you like!

---

## 🎨 Themes

All 10 themes are live at **[make-slide.vercel.app](https://make-slide.vercel.app)**

| # | Theme | Style | Best For |
|:-:|-------|-------|----------|
| 1 | [`minimal-dark`](https://make-slide.vercel.app) | Clean dark, white typography | Tech talks, conferences |
| 2 | [`minimal-light`](https://make-slide.vercel.app) | Bright white, precise type | General, academic |
| 3 | [`corporate`](https://make-slide.vercel.app) | Navy & gold, structured | Business, reports |
| 4 | [`gradient-pop`](https://make-slide.vercel.app) | Vibrant gradients, glassmorphism | Startups, pitches |
| 5 | [`neon-terminal`](https://make-slide.vercel.app) | Terminal green, scanlines | Dev talks, hackathons |
| 6 | [`paper`](https://make-slide.vercel.app) | Kraft paper, serif type | Education, workshops |
| 7 | [`keynote-apple`](https://make-slide.vercel.app) | Dramatic dark, Apple-inspired | Product launches, keynotes |
| 8 | [`magazine`](https://make-slide.vercel.app) | Editorial, asymmetric layout | Design, creative |
| 9 | [`data-focus`](https://make-slide.vercel.app) | Dashboard aesthetic, clean | Data analysis, KPIs |
| 10 | [`playful`](https://make-slide.vercel.app) | Rounded, pastel, bouncy | Workshops, casual talks |

---

## ⚙️ How It Works

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. AI reads │────▶│ 2. User picks│────▶│ 3. AI fetches│────▶│ 4. AI builds │
│   SKILL.md   │     │    theme     │     │  reference   │     │  your slides │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

1. **AI reads `SKILL.md`** — the universal instruction file that any AI coding tool can follow
2. **User picks a theme** — from the [gallery](https://make-slide.vercel.app) or AI recommends one
3. **AI fetches theme reference** — `reference.html` (full example) + `README.md` (design guide) from GitHub
4. **AI generates your presentation** — a single `index.html` file with speaker notes, matching the theme perfectly

---

## 📁 Project Structure

```
make-slide/
├── README.md              # This file
├── SKILL.md               # AI agent instruction file (the "skill")
├── LICENSE                 # MIT License
│
├── themes/                # Theme references (10 themes)
│   ├── minimal-dark/
│   │   ├── README.md          # Design guidelines
│   │   ├── reference.html     # Full example presentation
│   │   └── preview.png        # Theme thumbnail
│   ├── minimal-light/
│   ├── corporate/
│   ├── gradient-pop/
│   ├── neon-terminal/
│   ├── paper/
│   ├── keynote-apple/
│   ├── magazine/
│   ├── data-focus/
│   └── playful/
│
├── gallery/               # Theme gallery website (Vercel)
│   ├── index.html             # Gallery page
│   └── public/previews/       # Theme screenshots
│
├── core/                  # Shared JS/CSS source
│   ├── navigation.js          # Keyboard + touch navigation
│   ├── fullscreen.js          # Fullscreen toggle
│   ├── speaker-notes.js       # Speaker notes panel
│   ├── pdf-export.css         # Print styles
│   └── base.css               # Reset + utilities
│
└── examples/              # Example presentations
    └── pineone-talk-reference.html
```

---

## 🤝 Contributing

### Adding a New Theme

1. **Create a folder** in `themes/` with your theme ID (kebab-case):
   ```
   themes/your-theme-name/
   ```

2. **Add three files:**
   - `reference.html` — A complete 10-slide example presentation showcasing all slide types (title, content, comparison, code, data, quote, closing, etc.) with navigation, fullscreen, speaker notes, and PDF export all working
   - `README.md` — Design guidelines: color palette, typography, spacing, design philosophy, and use cases
   - `preview.png` — A 1280×720 screenshot of the title slide

3. **Follow the conventions** in `core/` for navigation, fullscreen, speaker notes, and PDF export functionality

4. **Submit a PR** — and your theme will appear in the gallery!

### Guidelines
- Output must be a single `.html` file — all CSS/JS inlined
- Only external dependencies allowed: font CDNs (Pretendard required) + Prism.js (for code blocks)
- All themes must support the full slide type set defined in `SKILL.md`
- Test keyboard navigation, fullscreen, speaker notes, and print export

---

## 📜 License

[MIT](LICENSE) — use freely for personal and commercial projects.

---
---

<br>

# make-slide 🎯 (한국어)

**AI 코딩 에이전트가 단일 HTML 파일로 고품질 프레젠테이션을 생성하는 범용 스킬.**

[![테마 갤러리](https://img.shields.io/badge/🎨_테마_갤러리-라이브_데모-blue?style=for-the-badge)](https://make-slide.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## make-slide란?

**make-slide**는 Claude Code, Gemini CLI, Codex, Cursor 등 AI 코딩 에이전트를 위한 스킬(지침서)입니다. AI가 이 스킬을 읽고 따라하면 전문적인 프레젠테이션 슬라이드를 **단일 HTML 파일**로 생성합니다.

매번 처음부터 디자인을 만드는 대신(토큰 낭비 + 일관성 없는 결과), AI가 이 레포의 사전 제작된 테마 템플릿을 참조합니다:

- **토큰 절약** — AI가 레이아웃을 발명하는 대신 레퍼런스 파일을 가져옴
- **일관된 품질** — 모든 프레젠테이션이 검증된 디자인 시스템을 따름
- **제로 의존성** — 결과물은 어디서나 열 수 있는 `.html` 파일 하나

> **AI 생성 프레젠테이션을 위한 디자인 시스템**이라고 생각하세요.

---

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🎨 **10개 테마** | 다크 미니멀부터 플레이풀 파스텔까지 — [갤러리 둘러보기](https://make-slide.vercel.app) |
| 📄 **단일 HTML 출력** | 파일 하나, 빌드 불필요, 프레임워크 없음 — 브라우저에서 바로 열기 |
| 🎤 **발표자 노트** | 슬라이드별 발표 노트 내장 (`S` 키로 토글) |
| 🖨️ **PDF 내보내기** | `Ctrl+P`로 깔끔하게 인쇄 (`@media print` 스타일 적용) |
| 🖥️ **전체화면** | `F` 키로 풀스크린 전환 |
| ⌨️ **키보드 네비게이션** | 방향키, 스페이스바, 터치/스와이프 지원 |
| 📥 **3가지 입력 모드** | 주제만 / 내용 제공 / 대본 제공 |
| 🤖 **모든 AI 도구 호환** | Claude Code, Gemini CLI, Codex, Cursor 등 |
| 🌍 **언어 무관** | 사용자의 언어로 콘텐츠 생성 |
| 📊 **CSS 전용 차트** | 바 차트, 프로그레스 링, KPI 카드 — 차트 라이브러리 불필요 |

---

## 🚀 빠른 시작

AI 코딩 도구에 다음과 같이 지시하세요:

### Claude Code
```
https://github.com/kuneosu/make-slide 의 SKILL.md를 읽고 [주제]에 대한 프레젠테이션을 minimal-dark 테마로 만들어줘.
```

### Gemini CLI
```
https://github.com/kuneosu/make-slide 의 SKILL.md 지침을 따라 [주제]에 대한 10장짜리 프레젠테이션을 만들어줘.
```

### 기타 AI 코딩 도구
```
https://raw.githubusercontent.com/kuneosu/make-slide/main/SKILL.md 를 가져와서 지침에 따라 [주제]에 대한 프레젠테이션을 만들어줘.
```

> **팁:** [make-slide.vercel.app](https://make-slide.vercel.app)에서 테마를 먼저 둘러보고 마음에 드는 것을 AI에게 알려주세요!

---

## 🎨 테마

10개 테마 모두 **[make-slide.vercel.app](https://make-slide.vercel.app)** 에서 확인할 수 있습니다.

| # | 테마 | 스타일 | 추천 용도 |
|:-:|------|--------|-----------|
| 1 | [`minimal-dark`](https://make-slide.vercel.app) | 다크 배경, 화이트 타이포 | 테크 발표, 컨퍼런스 |
| 2 | [`minimal-light`](https://make-slide.vercel.app) | 화이트 배경, 클린 타이포 | 일반 발표, 세미나 |
| 3 | [`corporate`](https://make-slide.vercel.app) | 네이비 & 골드, 구조적 | 비즈니스, 보고 |
| 4 | [`gradient-pop`](https://make-slide.vercel.app) | 비비드 그라디언트, 글라스모피즘 | 스타트업, 피칭 |
| 5 | [`neon-terminal`](https://make-slide.vercel.app) | 터미널 그린, 스캔라인 | 개발자 발표, 해커톤 |
| 6 | [`paper`](https://make-slide.vercel.app) | 크래프트지, 세리프 타이포 | 교육, 워크숍 |
| 7 | [`keynote-apple`](https://make-slide.vercel.app) | 드라마틱 다크, Apple 스타일 | 제품 발표, 키노트 |
| 8 | [`magazine`](https://make-slide.vercel.app) | 에디토리얼, 비대칭 레이아웃 | 디자인, 크리에이티브 |
| 9 | [`data-focus`](https://make-slide.vercel.app) | 대시보드 스타일, 깔끔 | 데이터 분석, KPI |
| 10 | [`playful`](https://make-slide.vercel.app) | 둥근 모서리, 파스텔, 바운스 | 워크숍, 캐주얼 발표 |

---

## ⚙️ 작동 방식

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ 1. AI가      │────▶│ 2. 사용자가   │────▶│ 3. AI가      │────▶│ 4. AI가      │
│ SKILL.md 읽기│     │  테마 선택    │     │ 레퍼런스 참조 │     │ 슬라이드 생성 │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

1. **AI가 `SKILL.md`를 읽습니다** — 모든 AI 코딩 도구가 따를 수 있는 범용 지침서
2. **사용자가 테마를 선택합니다** — [갤러리](https://make-slide.vercel.app)에서 선택하거나 AI가 추천
3. **AI가 테마 레퍼런스를 가져옵니다** — GitHub에서 `reference.html`(풀 예시) + `README.md`(디자인 가이드) fetch
4. **AI가 프레젠테이션을 생성합니다** — 테마에 맞는 단일 `index.html` 파일 + 발표자 노트

---

## 📁 프로젝트 구조

```
make-slide/
├── README.md              # 이 파일
├── SKILL.md               # AI 에이전트 지침서 (스킬)
├── LICENSE                 # MIT 라이선스
│
├── themes/                # 테마 레퍼런스 (10개)
│   ├── minimal-dark/
│   │   ├── README.md          # 디자인 가이드라인
│   │   ├── reference.html     # 전체 예시 프레젠테이션
│   │   └── preview.png        # 테마 썸네일
│   ├── minimal-light/
│   ├── corporate/
│   ├── ... (총 10개)
│   └── playful/
│
├── gallery/               # 테마 갤러리 웹사이트 (Vercel)
│   ├── index.html             # 갤러리 페이지
│   └── public/previews/       # 테마 스크린샷
│
├── core/                  # 공통 JS/CSS 소스
│   ├── navigation.js          # 키보드 + 터치 네비게이션
│   ├── fullscreen.js          # 전체화면 토글
│   ├── speaker-notes.js       # 발표자 노트 패널
│   ├── pdf-export.css         # 인쇄 스타일
│   └── base.css               # 리셋 + 유틸리티
│
└── examples/              # 예시 프레젠테이션
    └── pineone-talk-reference.html
```

---

## 🤝 기여하기

### 새 테마 추가하기

1. `themes/` 안에 테마 ID로 폴더를 생성하세요 (케밥 케이스):
   ```
   themes/your-theme-name/
   ```

2. **세 가지 파일을 추가하세요:**
   - `reference.html` — 모든 슬라이드 타입(타이틀, 콘텐츠, 비교, 코드, 데이터, 인용, 클로징 등)을 포함하는 10장짜리 전체 예시 프레젠테이션. 네비게이션, 전체화면, 발표자 노트, PDF 내보내기 모두 동작해야 함
   - `README.md` — 디자인 가이드라인: 컬러 팔레트, 타이포그래피, 간격, 디자인 철학, 용도
   - `preview.png` — 타이틀 슬라이드의 1280×720 스크린샷

3. `core/`의 네비게이션, 전체화면, 발표자 노트, PDF 내보내기 기능 **컨벤션을 따르세요**

4. **PR을 제출하세요** — 갤러리에 테마가 추가됩니다!

### 가이드라인
- 결과물은 반드시 단일 `.html` 파일 — 모든 CSS/JS 인라인
- 허용되는 외부 의존성: 폰트 CDN (Pretendard 필수) + Prism.js (코드 블록용)
- 모든 테마는 `SKILL.md`에 정의된 전체 슬라이드 타입 세트를 지원해야 함
- 키보드 네비게이션, 전체화면, 발표자 노트, 인쇄 내보내기 테스트 필수

---

## 📜 라이선스

[MIT](LICENSE) — 개인 및 상업 프로젝트에 자유롭게 사용하세요.
