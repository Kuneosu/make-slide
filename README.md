# make-slide 🎯

**AI-powered presentation skill that generates stunning single-file HTML slide decks.**
**AI 코딩 에이전트가 단일 HTML 파일로 고품질 프레젠테이션을 생성하는 범용 스킬.**

[![Live Gallery](https://img.shields.io/badge/🎨_Theme_Gallery-Live_Demo-blue?style=for-the-badge)](https://make-slide.vercel.app)
[![npm](https://img.shields.io/npm/v/make-slide?style=for-the-badge)](https://www.npmjs.com/package/make-slide)
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
| 📐 **4 Layout Styles** | Centered, Wide, Split, Editorial — [browse layouts](https://make-slide.vercel.app) |
| 📊 **PPTX Export** | Generate PowerPoint files alongside HTML |
| 🖼️ **Auto Image Search** | Automatically find and place relevant images from Unsplash |
| 🤖 **Works with Any AI Tool** | Claude Code, Gemini CLI, Codex, Cursor, and more |
| 🌍 **Language-Agnostic** | Generates content in whatever language you speak |
| 📊 **CSS-Only Charts** | Bar charts, progress rings, KPI cards — no chart library needed |

---

## 🚀 Quick Start

### Install with npx (Recommended)

```bash
npx make-slide init
```

This will:
1. Copy the skill files into your project's `.claude/skills/make-slide/`
2. Auto-detect your AI config (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursorrules`) and inject the `/make-slide` command
3. You're ready! Type `/make-slide` in Claude Code to create presentations

### Other Commands

```bash
npx make-slide themes    # View all 10 themes
npx make-slide gallery   # Open theme gallery in browser
npx make-slide help      # Show help
```

### Manual Setup (Any AI Tool)

Give your AI coding tool the following instruction:

```
Read SKILL.md from https://github.com/kuneosu/make-slide and create a presentation about [your topic] using the minimal-dark theme.
```

Or fetch it directly:
```
Fetch https://raw.githubusercontent.com/kuneosu/make-slide/main/.claude/skills/make-slide/SKILL.md and follow its instructions to create a presentation about [your topic].
```

> **Tip:** Browse themes first at [make-slide.vercel.app](https://make-slide.vercel.app) and tell your AI which one you like!

---

## ⚙️ How It Works

### The `.claude/skills/` Convention

make-slide uses Claude Code's native skill system. After running `npx make-slide init`, your project gets:

```
your-project/
├── .claude/
│   └── skills/
│       └── make-slide/
│           ├── SKILL.md          ← Main instruction file
│           └── references/
│               ├── themes.md        ← 10 themes + GitHub raw URLs
│               ├── layouts.md       ← 4 layout styles
│               ├── slide-types.md   ← 12 slide type patterns
│               ├── html-spec.md     ← HTML requirements
│               ├── core-features.md ← Copy-paste JS/CSS for features
│               └── pptx-spec.md     ← PPTX conversion rules
├── CLAUDE.md                        ← Auto-updated with /make-slide command
└── ... your project files
```

When you type `/make-slide` in Claude Code, it reads the skill and follows a 10-step workflow:

1. **Analyze input** — mode (topic / content / script), slide count, output format (HTML / PPTX)
2. **Choose a theme** — pick from the [gallery](https://make-slide.vercel.app) or AI recommends
3. **Choose a layout** — Centered, Wide, Split, or Editorial
4. **Image options** — no images / provide URLs / auto-search from Unsplash
5. **Generate outline** — slide-by-slide plan for your approval
6. **Fetch theme + layout reference** — downloads templates from GitHub
7. **Generate HTML** — builds presentation matching theme + layout exactly
8. **Add speaker notes** — popup window with timing cues
9. **Generate script** — full speaking script (optional)
10. **Deliver** — saves `index.html` (and `presentation.pptx` if PPTX mode)

Theme files are fetched from GitHub on demand — nothing heavy is stored locally.

---

## 🎨 Themes

All 10 themes are live at **[make-slide.vercel.app](https://make-slide.vercel.app)**

| # | Theme | Style | Best For |
|:-:|-------|-------|----------|
| 1 | `minimal-dark` | Clean dark, white typography | Tech talks, conferences |
| 2 | `minimal-light` | Bright white, precise type | General, academic |
| 3 | `corporate` | Navy & gold, structured | Business, reports |
| 4 | `gradient-pop` | Vibrant gradients, glassmorphism | Startups, pitches |
| 5 | `neon-terminal` | Terminal green, scanlines | Dev talks, hackathons |
| 6 | `paper` | Kraft paper, serif type | Education, workshops |
| 7 | `keynote-apple` | Dramatic dark, Apple-inspired | Product launches, keynotes |
| 8 | `magazine` | Editorial, asymmetric layout | Design, creative |
| 9 | `data-focus` | Dashboard aesthetic, clean | Data analysis, KPIs |
| 10 | `playful` | Rounded, pastel, bouncy | Workshops, casual talks |

---

## 📁 Project Structure

```
make-slide/
├── package.json            # npm package config
├── bin/cli.js              # CLI (init, themes, gallery)
├── .claude/skills/make-slide/  # Skill template (copied by init)
│   ├── SKILL.md
│   └── references/
│       ├── themes.md
│       ├── layouts.md
│       ├── slide-types.md
│       ├── html-spec.md
│       ├── core-features.md
│       └── pptx-spec.md
├── layouts/                # Layout references (4 styles)
│   ├── centered/
│   ├── wide/
│   ├── split/
│   └── editorial/
├── SKILL.md                # Legacy standalone skill file
├── README.md               # This file
├── LICENSE                  # MIT License
│
├── themes/                 # Theme references (10 themes)
│   ├── minimal-dark/
│   │   ├── README.md           # Design guidelines
│   │   └── reference.html      # Full example presentation
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
├── gallery/                # Theme gallery website (Vercel)
│   └── index.html
│
├── core/                   # Shared JS/CSS source
│   ├── navigation.js
│   ├── fullscreen.js
│   ├── speaker-notes.js
│   ├── pdf-export.css
│   └── base.css
│
└── examples/               # Example presentations
    └── pineone-talk-reference.html
```

---

## 🤝 Contributing

### Adding a New Theme

1. Create a folder in `themes/` with your theme ID (kebab-case):
   ```
   themes/your-theme-name/
   ```

2. Add these files:
   - `reference.html` — Complete 10-slide example with all slide types, navigation, fullscreen, speaker notes, and PDF export
   - `README.md` — Design guidelines: color palette, typography, spacing, philosophy

3. Follow the conventions in `core/` for navigation, fullscreen, speaker notes, and PDF export

4. Submit a PR — your theme will appear in the gallery!

### Guidelines
- Output must be a single `.html` file — all CSS/JS inlined
- Only external dependencies: font CDNs (Pretendard required) + Prism.js (for code blocks)
- All themes must support the full slide type set
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
[![npm](https://img.shields.io/npm/v/make-slide?style=for-the-badge)](https://www.npmjs.com/package/make-slide)
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

## 🚀 빠른 시작

### npx로 설치 (권장)

```bash
npx make-slide init
```

이 명령어는:
1. `.claude/skills/make-slide/`에 스킬 파일 복사
2. AI 설정 파일(`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursorrules`) 자동 감지 후 `/make-slide` 명령어 주입
3. 준비 완료! Claude Code에서 `/make-slide` 입력하면 프레젠테이션 생성

### 기타 명령어

```bash
npx make-slide themes    # 10개 테마 보기
npx make-slide gallery   # 테마 갤러리 열기
npx make-slide help      # 도움말
```

### 수동 설정 (다른 AI 도구)

AI 코딩 도구에 다음과 같이 지시하세요:

```
https://github.com/kuneosu/make-slide 의 SKILL.md를 읽고 [주제]에 대한 프레젠테이션을 minimal-dark 테마로 만들어줘.
```

> **팁:** [make-slide.vercel.app](https://make-slide.vercel.app)에서 테마를 먼저 둘러보고 마음에 드는 것을 AI에게 알려주세요!

---

## ⚙️ 작동 방식

### `.claude/skills/` 컨벤션

`npx make-slide init` 실행 후 프로젝트 구조:

```
your-project/
├── .claude/
│   └── skills/
│       └── make-slide/
│           ├── SKILL.md          ← 메인 지침서
│           └── references/
│               ├── themes.md        ← 10개 테마 + GitHub raw URL
│               ├── layouts.md       ← 4가지 레이아웃 스타일
│               ├── slide-types.md   ← 12가지 슬라이드 타입
│               ├── html-spec.md     ← HTML 요구사항
│               ├── core-features.md ← 기본 기능 JS/CSS 코드
│               └── pptx-spec.md     ← PPTX 변환 규칙
├── CLAUDE.md                     ← /make-slide 명령어 자동 추가
└── ... 프로젝트 파일들
```

Claude Code에서 `/make-slide` 입력하면 9단계 워크플로우를 따릅니다:

1. **입력 분석** — 모드(주제/내용/대본), 슬라이드 수, 출력 형식(HTML/PPTX) 결정
2. **테마 선택** — [갤러리](https://make-slide.vercel.app)에서 선택하거나 AI가 추천
3. **레이아웃 선택** — Centered, Wide, Split, Editorial 중 선택
4. **이미지 옵션** — 없음 / URL 제공 / Unsplash 자동 검색
5. **아웃라인 생성** — 슬라이드별 구성 승인
6. **테마 + 레이아웃 레퍼런스** — GitHub에서 템플릿 다운로드
7. **HTML 생성** — 테마 + 레이아웃에 맞는 프레젠테이션 빌드
8. **발표자 노트** — 팝업 윈도우 방식, 타이밍 큐 포함
9. **대본 생성** — 전체 발표 대본 (선택)
10. **전달** — `index.html` 저장 (PPTX 모드면 `presentation.pptx`도)

테마 파일은 GitHub에서 온디맨드로 가져옵니다 — 로컬에 무거운 파일이 저장되지 않습니다.

---

## 🎨 테마

10개 테마 모두 **[make-slide.vercel.app](https://make-slide.vercel.app)** 에서 확인할 수 있습니다.

| # | 테마 | 스타일 | 추천 용도 |
|:-:|------|--------|-----------|
| 1 | `minimal-dark` | 다크 배경, 화이트 타이포 | 테크 발표, 컨퍼런스 |
| 2 | `minimal-light` | 화이트 배경, 클린 타이포 | 일반 발표, 세미나 |
| 3 | `corporate` | 네이비 & 골드, 구조적 | 비즈니스, 보고 |
| 4 | `gradient-pop` | 비비드 그라디언트, 글라스모피즘 | 스타트업, 피칭 |
| 5 | `neon-terminal` | 터미널 그린, 스캔라인 | 개발자 발표, 해커톤 |
| 6 | `paper` | 크래프트지, 세리프 타이포 | 교육, 워크숍 |
| 7 | `keynote-apple` | 드라마틱 다크, Apple 스타일 | 제품 발표, 키노트 |
| 8 | `magazine` | 에디토리얼, 비대칭 레이아웃 | 디자인, 크리에이티브 |
| 9 | `data-focus` | 대시보드 스타일, 깔끔 | 데이터 분석, KPI |
| 10 | `playful` | 둥근 모서리, 파스텔, 바운스 | 워크숍, 캐주얼 발표 |

---

## 🤝 기여하기

### 새 테마 추가하기

1. `themes/` 안에 테마 ID로 폴더 생성 (케밥 케이스)
2. `reference.html` + `README.md` 추가
3. `core/`의 컨벤션을 따르기
4. PR 제출 — 갤러리에 자동 추가!

---

## 📜 라이선스

[MIT](LICENSE) — 개인 및 상업 프로젝트에 자유롭게 사용하세요.
