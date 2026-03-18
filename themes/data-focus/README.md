# Data Focus

## Design Philosophy / 디자인 철학

**EN:** A clean, data-centric theme built for presenting metrics, charts, and analytical insights. White backgrounds with a subtle grid pattern evoke a spreadsheet or dashboard aesthetic. Numbers render in monospace for precision, trend indicators use color coding (green for positive, red for negative), and CSS-only charts (bar charts, donut charts) keep everything lightweight and self-contained. The design prioritizes clarity and legibility so the data speaks for itself.

**KO:** 지표, 차트, 분석 결과를 발표하기 위해 설계된 깔끔한 데이터 중심 테마입니다. 은은한 격자 패턴이 있는 화이트 배경이 스프레드시트나 대시보드 분위기를 연출합니다. 숫자는 모노스페이스 글꼴로 정밀하게 표시되며, 추세 지표는 색상 코딩(녹색: 상승, 빨강: 하락)을 사용합니다. CSS 전용 차트(막대 차트, 도넛 차트)로 가볍고 자체 완결적인 구조를 유지합니다. 데이터 자체가 명확히 전달되도록 가독성과 명료함을 최우선으로 합니다.

---

## Color Palette / 색상 팔레트

| Role | Value | Preview |
|------|-------|---------|
| Background | `#ffffff` | ![#ffffff](https://via.placeholder.com/16/ffffff/ffffff) |
| Surface / Cards | `#f9fafb` | ![#f9fafb](https://via.placeholder.com/16/f9fafb/f9fafb) |
| Border | `#e5e7eb` | ![#e5e7eb](https://via.placeholder.com/16/e5e7eb/e5e7eb) |
| Primary Text | `#1a1a2e` | ![#1a1a2e](https://via.placeholder.com/16/1a1a2e/1a1a2e) |
| Secondary Text | `#6b7280` | ![#6b7280](https://via.placeholder.com/16/6b7280/6b7280) |
| Tertiary Text | `#9ca3af` | ![#9ca3af](https://via.placeholder.com/16/9ca3af/9ca3af) |
| Accent (Blue) | `#2563eb` | ![#2563eb](https://via.placeholder.com/16/2563eb/2563eb) |
| Positive (Green) | `#10b981` | ![#10b981](https://via.placeholder.com/16/10b981/10b981) |
| Negative (Red) | `#ef4444` | ![#ef4444](https://via.placeholder.com/16/ef4444/ef4444) |
| Chart Amber | `#f59e0b` | ![#f59e0b](https://via.placeholder.com/16/f59e0b/f59e0b) |
| Chart Purple | `#8b5cf6` | ![#8b5cf6](https://via.placeholder.com/16/8b5cf6/8b5cf6) |

---

## Typography / 타이포그래피

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | Pretendard | 400 | 20px |
| Headline XL | Pretendard | 800 | 64px |
| Headline LG | Pretendard | 700 | 48px |
| Headline MD | Pretendard | 700 | 36px |
| Code | JetBrains Mono | 400 | 14px |
| Stat Values | JetBrains Mono | 700 | 36px |
| Overline | JetBrains Mono | 400 | 14px |
| Tag / Label | JetBrains Mono | 600 | 12px |

---

## Use Cases / 적합한 용도

**EN:**
- Data analysis and research presentations
- Quarterly business reports and financial reviews
- KPI dashboards and performance summaries
- Scientific research findings
- Market analysis and competitive reports
- Project metrics and progress tracking
- Survey results and statistical summaries

**KO:**
- 데이터 분석 및 리서치 발표
- 분기별 사업 보고 및 재무 검토
- KPI 대시보드 및 성과 요약
- 과학적 연구 결과 발표
- 시장 분석 및 경쟁사 보고서
- 프로젝트 지표 및 진행 현황 추적
- 설문 결과 및 통계 요약

---

## Slide Types / 슬라이드 타입

`reference.html` includes examples of all supported slide types:

1. **Title** — Data-oriented headline with report metadata
2. **Agenda/TOC** — Numbered items with monospace indices
3. **Content** — Body text with inline data highlights
4. **Quote** — Pull-quote with attribution
5. **Comparison** — Before/After two-column analysis
6. **Flow/Steps** — Horizontal process diagram (4 steps with arrows)
7. **Stat Cards** — 4-column KPI grid (big number + label + trend indicator)
8. **Bar Chart** — CSS bar chart with grid lines and value labels
9. **Donut Chart** — CSS conic-gradient donut with legend
10. **Code Block** — Syntax-highlighted code with file header (Prism.js)
11. **Image Placeholder** — Dashed placeholder area for visuals
12. **Closing** — Thank you slide with contact links

---

## Data Visualization Components / 데이터 시각화 컴포넌트

**EN:** This theme includes specialized CSS-only data visualization components not found in other themes:

- **Stat Cards**: Large monospace numbers with trend arrows (green up / red down)
- **Bar Chart**: Horizontal grid lines behind bars, value labels above each bar
- **Donut Chart**: `conic-gradient` rendering with center hole and color-coded legend
- **Data Table**: Clean table with alternating row colors and monospace number cells

**KO:** 이 테마에는 다른 테마에 없는 CSS 전용 데이터 시각화 컴포넌트가 포함되어 있습니다:

- **스탯 카드**: 추세 화살표(녹색 상승 / 빨강 하락)가 있는 대형 모노스페이스 숫자
- **막대 차트**: 막대 뒤에 수평 격자선, 각 막대 위에 값 레이블
- **도넛 차트**: 중앙 구멍과 색상 범례가 있는 `conic-gradient` 렌더링
- **데이터 테이블**: 교대 행 색상과 모노스페이스 숫자 셀이 있는 깔끔한 테이블
