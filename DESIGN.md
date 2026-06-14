# AgentAI — Landing Page Design Specification

> A pixel-faithful design document for the AgentAI landing page. Dark, dramatic, red-accented AI agency website with a jellyfish hero visual and bold editorial typography.

---

## 1. Design DNA

| Property | Value |
|---|---|
| **Theme** | Dark / Black |
| **Aesthetic** | Luxury tech · Editorial · Cinematic dark |
| **Primary Accent** | Red / Crimson `#E02020` |
| **Vibe** | Bold, aggressive, premium AI agency |
| **Motion Style** | Smooth fade-ins, subtle scroll-triggered reveals |

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0A` | Page background |
| `--bg-card` | `#111111` | Card / panel backgrounds |
| `--bg-card-hover` | `#181818` | Hovered card backgrounds |
| `--accent-red` | `#E02020` | CTA buttons, active nav pill, highlight text |
| `--accent-red-soft` | `#FF3333` | Gradient glows, jellyfish bloom |
| `--accent-red-muted` | `#7A1010` | Subtle red tints, badge borders |
| `--text-primary` | `#FFFFFF` | Headlines, body text |
| `--text-secondary` | `#999999` | Subtitles, captions, labels |
| `--text-muted` | `#555555` | Footnotes, secondary labels |
| `--border` | `#222222` | Card borders, dividers |
| `--border-bright` | `#333333` | Highlighted borders on active elements |

---

## 3. Typography

| Role | Font Family | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| **Logotype** | `Syne` | 700 | 16px | "AgentAI" in navbar |
| **Hero Display** | `Syne` | 800 | 72–96px | "Your AI Sprint Team On Demand" |
| **Hero Annotation** | `DM Mono` | 400 | 11px | "From idea to launch" superscript beside "AI" |
| **Section Heading** | `Syne` | 700 | 48–56px | "We design and deploy…", "End-to-End AI Services" |
| **Subheading** | `Syne` | 600 | 28–36px | Card titles, stat numbers |
| **Body Copy** | `Inter` | 400 | 14–16px | Description paragraphs |
| **Label / Badge** | `DM Mono` | 500 | 11px | "AI-Driven Agency", "Services" badge labels |
| **Stat Number** | `Syne` | 800 | 48px | "3M+", "95%", "88%", "230+", "400+", "120+" |
| **Nav Links** | `Inter` | 500 | 14px | Home, Services, Works, About, Contact |

### Accent Text Colors in Copy
- Words like **"design"**, **"AI solutions"**, **"system enhances"**, **"Montréal, Canada"** are rendered in `--accent-red` / `#E02020`.
- Hero headline uses white for main text; red for "On Demand" or specific highlight words.

---

## 4. Layout & Spacing

- **Max content width**: `1280px`, centered.
- **Section padding (Y)**: `80px–120px`.
- **Card border-radius**: `16px`.
- **Grid system**: 12-column CSS Grid.
- **Navbar height**: `56px`.

---

## 5. Component Breakdown

### 5.1 Navbar

```
[Red Logo "AgentAI"]   [Home(active)] [Services] [Works] [About] [Contact]   [Menu Grid-icon]
```

- Background: `transparent` on scroll-top → `rgba(10,10,10,0.85)` with `backdrop-filter: blur(12px)` on scroll.
- **Active nav item** ("Home"): Pill-shaped red background `#E02020`, white text, `border-radius: 20px`, `padding: 6px 16px`.
- Inactive nav items: `#FFFFFF` text, no background.
- **"Menu" button** (right): Red pill with grid icon, same red pill style as active nav.
- Logo: Red circular icon + "AgentAI" bold text.

---

### 5.2 Hero Section

**Layout**: Full-viewport-height, dark background, dramatic centered jellyfish image as the hero visual.

#### Left Column (text)
- **Badge**: Small pill `"AI-Driven Agency"` — dark border `#333`, small red dot, uppercase mono font.
- **Main Headline** (large, stacked):
  - "Your AI Sprint Team" → White, `font-size: 80px+`, bold.
  - "On Demand" → **Red** (`#E02020`).
  - "From idea / to launch" → Small annotation, right-aligned beside "AI", mono font, muted color.

- **Body Copy** (below headline):
  > "From discovery to deployment, we plug into your stack to prototype, validate, and launch AI experiences your users actually love."
  - Color: `#999`, `font-size: 15px`.

- **CTA Buttons** (side by side):
  - `Explore Services` — Dark outlined button, `border: 1px solid #333`, white text, `border-radius: 8px`.
  - `View Pricing Plans` — Filled red `#E02020`, white text, `border-radius: 8px`.

- **Stats Row** (below CTAs, 3 columns):

| Stat | Label |
|---|---|
| `3M+` | Happy people |
| `95%` | ROI Improvement |
| `88%` | Client Retention |

  - Each stat uses huge bold number + smaller label below + subtle avatar/icon cluster.

#### Center / Background: Jellyfish
- A **glowing red jellyfish** image dominates the center-right of the hero.
- The jellyfish emits a dramatic radial red glow/bloom effect behind it.
- Style: `position: absolute`, `z-index: 1`, overlapping the layout columns.
- The tentacles trail downward, fading out.

#### Right Column (stats card)
A dark floating card (`#111`, `border: 1px solid #222`, `border-radius: 16px`) with:
- Top row: "AgentAI" label · `01/04` pagination · small jellyfish thumbnail.
- **`230+`** — Large bold white number.
  - Sub-label: "Projects successfully launched worldwide"
- **`400+`** — Large bold white number.
  - Sub-label: "Trusted Partner"
  - Partner logos row: 5–6 small partner/brand logos in muted gray.
- **`Book a call`** CTA — Red filled button, full width.

#### Far Right: Social Icons
Vertical stack, right edge of screen:
- `SOCIAL PRESENCE` label (vertical text, `#555`, mono).
- `f` (Facebook), Instagram icon, X/Twitter icon links, white.

#### Far Right Corner: Disciplines
Vertical text (small, muted):
```
BRANDING
ART DIRECTION
MOTION
```
Color: `--text-muted`, mono font, `font-size: 10px`.

---

### 5.3 About / Mission Statement Section

**Layout**: Two columns, `min-height: 200px`, `padding: 80px 0`.

- **Left**: `← About Us` link — small red arrow + white text.
- **Right**: Large editorial copy:
  > "We **design** and deploy **AI solutions** with people at the core, ensuring every **system enhances** real user experiences."
  - White base text, red highlights on key phrases (`design`, `AI solutions`, `system enhances`).
  - Font: `Syne`, `font-size: 42–48px`, `font-weight: 700`.
  - Line-height: `1.2`.

---

### 5.4 Split Cards Section ("Based in Montréal" + "120+ Clients")

Two cards side-by-side:

#### Left Card (dark, `#111`)
- **Red dot badge**: `● Available for worldwide project`
- **Headline**: `Based in` **Montréal, Canada** — "Montréal, Canada" in red `#E02020`.
- **CTA**: `Start a Project` — dark outlined button.
- **Image**: Photo of team/workspace bathed in red light, fills bottom half of card.
  - `border-radius: 12px`, `overflow: hidden`.

#### Right Card (dark, `#111`)
- **Caption**: "Trusted by 120+ clients across 4 industries · shipping AI from idea to production in 8–10 weeks."
- **Stars**: 5 stars (gold), `font-size: 20px`.
- **Stat**: `120+` — Huge white number, `font-size: 96px`, `font-weight: 800`.
- **Testimonial block**:
  - Avatar image (person photo, `border-radius: 50%`, ~`72px`).
  - Quote icon.
  - Quote text: _"Good AI feels obvious—because the hard work is hidden."_
  - Attribution: **Ava Collins** | AgentAI's Design Lead.

---

### 5.5 Logo Marquee / Trusted Brands

Full-width scrolling/static row.

- Left label: `Trusted by 100+ top-tier brands.`
- Row of partner/brand logos: Logoipsum (x3), abstract brand icons.
- Color: All logos are muted `#555` (desaturated / low opacity).
- Style: Horizontally spaced with generous gaps, `align-items: center`.

---

### 5.6 Services Section

**Layout**: Two columns.

#### Left Column
- **Badge**: `● Services` — red dot + small pill.
- **Heading**: `End-to-End AI Services` — White, `Syne`, bold, large.
- **Body**:
  > "We turn ambiguous AI ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation."
- Color: `#999`, `font-size: 15px`.

#### Right Column (Service Card)
Dark card (`#111`):
- **Service Number**: `01` (top right, muted gray).
- **Service Title**: `AI Strategy & Mapping` — white, bold.
- **Description**: "Identify high-ROI use cases and define a realistic, measurable AI roadmap."
- **Tags/Chips** (pill-shaped, dark border):
  - `Stakeholder discovery`
  - `Value model & KPI definition`
  - `Data readiness assessment`
- Tag style: `border: 1px solid #333`, `border-radius: 20px`, `padding: 6px 14px`, `font-size: 12px`, `color: #ccc`.

---

## 6. Visual Effects & Motion

| Effect | Details |
|---|---|
| **Jellyfish glow** | `radial-gradient` behind jellyfish — deep red `#8B0000` → transparent, `600px` radius |
| **Page background** | Pure `#0A0A0A`, no texture — let the jellyfish be the only visual noise |
| **Card hover** | `transform: translateY(-4px)`, `box-shadow: 0 20px 60px rgba(224,32,32,0.12)` |
| **Button hover** | Red buttons: `filter: brightness(1.15)`, subtle scale `1.02` |
| **Scroll fade-in** | `opacity: 0 → 1`, `translateY(20px → 0)`, `transition: 0.6s ease` using IntersectionObserver |
| **Nav scroll** | Background transitions from transparent to blurred dark on scroll |
| **Marquee** | Logo row slowly scrolls left with `animation: marquee 30s linear infinite` |

---

## 7. Micro-Interactions

- **Nav active pill**: Smooth background slide via `transition: background 0.2s`.
- **CTA buttons**: Press scale `0.97` on `mousedown`.
- **Stats**: Could animate counting up on scroll enter.
- **Service tags**: `background: rgba(224,32,32,0.08)` on hover.

---

## 8. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1280px` | Full layout as described |
| `1024px – 1280px` | Slightly reduced font sizes, tighter padding |
| `768px – 1024px` | Stacked hero columns, jellyfish shrinks |
| `< 768px` | Single column, nav collapses to hamburger, stats stack vertically |

---

## 9. Assets Required

| Asset | Description |
|---|---|
| `jellyfish-hero.png` | Glowing red jellyfish on transparent/black bg, high-res |
| `team-photo.jpg` | Team in red-lit workspace for "Based in Montréal" card |
| `avatar-ava.jpg` | Headshot of "Ava Collins" for testimonial |
| `partner-logos/` | 5–6 partner brand logos (SVG, gray) |
| `logo-icon.svg` | Red circular AgentAI logo mark |

---

## 10. Full Page Section Order

```
1. Navbar
2. Hero (jellyfish + headline + stats + social sidebar)
3. About / Mission Statement
4. Split Cards (Location + Social Proof)
5. Trusted Brands Marquee
6. Services Section
   ... (additional sections below the fold)
```

---

## 11. CSS Custom Properties Reference

```css
:root {
  /* Colors */
  --bg-primary:        #0A0A0A;
  --bg-card:           #111111;
  --bg-card-hover:     #181818;
  --accent-red:        #E02020;
  --accent-red-soft:   #FF3333;
  --accent-red-muted:  #7A1010;
  --text-primary:      #FFFFFF;
  --text-secondary:    #999999;
  --text-muted:        #555555;
  --border:            #222222;
  --border-bright:     #333333;

  /* Typography */
  --font-display:  'Syne', sans-serif;
  --font-body:     'Inter', sans-serif;
  --font-mono:     'DM Mono', monospace;

  /* Spacing */
  --section-py:    100px;
  --card-radius:   16px;
  --btn-radius:    8px;
  --pill-radius:   20px;

  /* Transitions */
  --transition-fast:   0.15s ease;
  --transition-base:   0.3s ease;
  --transition-slow:   0.6s ease;
}
```

---

## 12. Button Styles

### Primary (Red Filled)
```css
.btn-primary {
  background: var(--accent-red);
  color: #fff;
  border: none;
  border-radius: var(--btn-radius);
  padding: 12px 24px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: filter var(--transition-fast), transform var(--transition-fast);
}
.btn-primary:hover  { filter: brightness(1.15); transform: scale(1.02); }
.btn-primary:active { transform: scale(0.97); }
```

### Secondary (Dark Outlined)
```css
.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid var(--border-bright);
  border-radius: var(--btn-radius);
  padding: 12px 24px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}
.btn-secondary:hover { border-color: var(--accent-red); background: rgba(224,32,32,0.06); }
```

---

*Design Reference: AgentAI — Landing Page Design.jpg*
