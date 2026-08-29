# Project Log — Vihanga C. Kumanayaka Portfolio

## READ THIS FILE FIRST (IMPORTANT)

- **Read this file before executing any task in this project.**
- Always refer to it so you know every change, build, module, and discussion that has happened before starting the current task.
- After every change, build, module addition, or meaningful discussion, **update this file** and **commit to GitHub**.

## Project Overview

- **Purpose:** Personal portfolio website showcasing the owner's Engineering Projects and the expertise gained over the years. Presented to potential employers evaluating the owner's work.
- **Owner:** Vihanga C. Kumanayaka
- **Repository:** https://github.com/Vihanga-c/vihangackumanayaka.git
- **Branch:** develop (created 2026-08-29; all changes committed here going forward; `main` reserved for stable releases)

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime / Server | Bun 1.4.0 (built-in HTTP server with routing) |
| Frontend | React 19 + TypeScript |
| Styling | Plain CSS (`src/index.css`) |
| Build | Bun bundler (`bun run build` → `dist/`) |
| Package manager | Bun (`bun.lock`, `bunfig.toml`) |

## Commands

| Command | Purpose |
|---|---|
| `bun install` | Install dependencies |
| `bun dev` | Start dev server with HMR (`bun --hot src/index.ts`) |
| `bun run build` | Production build to `dist/` |
| `bun start` | Run production server |

## Modules

| Module | Status | Description |
|---|---|---|
| `src/App.tsx` | Done (iteration 3) | Root component — renders `<Navbar />`, `<Hero />`, and `<Intro />` |
| `src/components/Navbar.tsx` | Done (iteration 3) | Left-aligned glassmorphic navbar that dynamically morphs between full horizontal menu (in Hero) and 3-line hamburger circle (on scroll), with dropdown menu support |
| `src/components/Hero.tsx` | Done (iteration 4) | Hero landing page: full-viewport Grainient background + name, subtitle, and single glass "Get my CV" CTA |
| `src/components/Intro.tsx` | Done (iteration 3) | White "intro of me" section with `id="about"` anchor — title, paragraphs, and 4:3 right-aligned image tile with rounded corners & thick black border; parallax slides up and covers hero |
| `src/components/Grainient.jsx` + `.css` | Installed | WebGL2 grainy-gradient shader background (shadcn registry `@react-bits/Grainient-JS-CSS`, deps: `ogl`) |
| `components.json` | Created manually | shadcn config (`style: base-nova`, aliases `@/*` → `./src/*`) |
| `src/frontend.tsx` | Done | React entry point — mounts `<App />` into `#root` with StrictMode + HMR support |
| `src/APITester.tsx` | Removed | Template API tester removed (replaced by hero) |
| `src/index.ts` | Template (to be extended) | Bun server — serves the SPA and exposes `/api/hello` routes |
| `src/index.css` | Rewritten | Hero design tokens + styles (dark theme, `--accent: #FF9FFC`, focus ring, reduced-motion support) |
| `src/index.html` | Updated | Title: "Vihanga C. Kumanayaka — Engineering Portfolio" |
| `.claude/skills/react-best-practices` | Installed | React best-practices skill (effects as escape hatches, refs, hooks, composition) |
| `.claude/skills/playwright-skill` | Installed | Playwright testing skill (50+ guides: E2E, API, visual, a11y, CI/CD) |
| `.claude/skills/shadcn` | Installed | shadcn/ui component + CLI skill (registry, presets, component rules) |
| `.claude/skills/frontend-design` | Installed | Frontend design skill (aesthetic direction, tokens, a11y, React/Next patterns) |

## Workflow Rules (owner-mandated)

1. Every change, modification, and build in **every module** gets committed to GitHub.
2. Everything we do and discuss is recorded in this file (`PROJECT_LOG.md`).
3. Before executing any task, read this file first — know all changes and builds before starting.
4. Commit messages should be concise and descriptive of the module(s) touched.
5. **All future changes are committed to the `develop` branch** (created 2026-08-29 from `main`). `main` stays stable; merge `develop` into `main` only when the owner approves a release.

## Changelog / Build Log

### 2026-08-29 — Session 7: Vercel deployment fixes

- First Vercel deployment failed with two errors:
  1. `Unknown lockfile version` — Vercel's build machine used Bun 1.3.14, which cannot parse the `bun.lock` written by local Bun 1.4.0 (`lockfileVersion: 2`).
  2. `No Output Directory named "public"` — build outputs to `dist/`, but Vercel defaults to `public/`.
- **Fixes:**
  - `package.json`: added `"packageManager": "bun@1.4.0"` so Vercel installs and uses the matching Bun version.
  - Created `vercel.json` with `"buildCommand": "bun run build"` and `"outputDirectory": "dist"`.
- **Build verified:** `bun run build` OK (35 modules).
- Commit: vercel config + packageManager pin pushed to GitHub.

## Changelog / Build Log

### 2026-08-27 — Session 1: Project setup & workflow

- Repo already had initial commit `78b61dc` ("first commit") with the default Bun + React template pushed to GitHub.
- Installed four skills into `.claude/skills/`:
  - `react-best-practices` (from github.com/alleneubank/claude-code)
  - `playwright-skill` (from github.com/testdino-hq/playwright-skill)
  - `shadcn` (from github.com/shadcn-ui/ui)
  - `frontend-design` (from github.com/vadimcomanescu/codex-skills)
- Created `PROJECT_LOG.md` (this file) as the master project documentation and change log.
- Created `AGENTS.md` to enforce reading this file before every task.
- Updated `README.md` to describe the portfolio project.
- Committed and pushed all of the above as the setup commit.

## Changelog / Build Log

### 2026-08-27 — Session 2: Grainient WebGL hero landing page

- **shadcn setup:** CLI couldn't auto-init (no supported framework detected in this Bun project), so `components.json` was created manually from `https://ui.shadcn.com/schema.json` (`style: base-nova`, aliases `@/*` → `./src/*`, `tsx: true`, `rsc: false`). The tsconfig already had the `@/*` path alias.
- **Component added:** `bun x --bun shadcn@latest add @react-bits/Grainient-JS-CSS` installed:
  - `src/components/Grainient.jsx` (WebGL2 grainy gradient shader component via `ogl`, with IntersectionObserver/visibility pause + `WeakMap` context reuse)
  - `src/components/Grainient.css` (`.grainient-container` fills its parent)
  - Dependency `ogl@^1.0.11` added to `package.json`; `bun.lock` updated.
  - Reviewed added files per shadcn skill — no import fixes needed (relative imports only).
- **Hero landing page built** (`src/components/Hero.tsx`):
  - Full-viewport hero with the Grainient background using the owner's exact prop values (`#FF9FFC` / `#5227FF` / `#B497CF`, warp `5/2/50`, rotation 500, contrast 1.5, zoom 0.9, etc.).
  - Respects `prefers-reduced-motion` (timeSpeed → 0 via `matchMedia`).
  - Content: eyebrow, name, subtitle, two CTAs (View Projects / Get in Touch) — placeholder copy, editable.
- **Cleanup:** `src/App.tsx` now renders only `<Hero />`; removed template `src/APITester.tsx`; `src/index.css` rewritten as hero design system (tokens: `--ink`, `--ink-muted`, `--accent`, glass surface, focus-visible ring, hero entrance animation, reduced-motion kill switch); page title updated in `src/index.html`.
- **Build verified:** `bun run build` OK (33 modules, 0.45 MB JS incl. ogl). `tsc --noEmit` passes.
- Commit: hero module + shadcn component module pushed to GitHub.

## Changelog / Build Log

### 2026-08-27 — Session 3: Parallax cover effect + "intro of me" section

- **Parallax cover effect:** Hero (100vh) now translates up at 0.66× scroll speed (`translateY(-scrollY * 100/150)`, rAF-throttled, passive listener, `will-change: transform`) while the new intro section (150vh, `z-index: 1`, white) slides up at normal 1× speed and covers it. Cover completes exactly at max scroll; disabled under `prefers-reduced-motion`.
- **New module `src/components/Intro.tsx`:** entirely white section with black text — big right-aligned title "intro of me" (clamp 3rem–6.5rem, weight 800) followed by italic intro paragraphs (placeholder "random words" filler, 2 paragraphs, 58ch right-aligned block; centered on mobile).
- **`src/App.tsx`:** renders `<main>` with `<Hero />` + `<Intro />`.
- **`src/index.css`:** added `.intro`, `.intro-content`, `.intro-title`, `.intro-text` styles; hero gets `z-index: 0` + `will-change: transform`.
- **Build verified:** `bun run build` OK (34 modules), `tsc --noEmit` passes.
- Commit: parallax + intro module pushed to GitHub.

## Changelog / Build Log

### 2026-08-27 — Session 4: Tuned cover parallax (faster relative motion, no dark gap)

- **Relative + absolute motion:** intro now has its own scroll transform (`translateY(-1.2 * scrollY)`, rAF-throttled, `will-change: transform`) — intro moves up at 1.2× while hero moves at 0.556× (100/180), so both rise (absolute) and the intro visibly sweeps in front of the hero (relative 0.644×). Intro fully covers the viewport by ~83vh of scroll.
- **Dark space removed:** `body`/`html` background changed from dark blue `#17102b` to white — any overscroll/gap now shows white, never dark. Intro is flush against the hero (no layout gap) and is now 180vh tall (content stays visible from cover through max scroll).
- **Files:** `src/components/Intro.tsx` (scroll effect added), `src/components/Hero.tsx` (RATE → 100/180), `src/index.css` (white backgrounds, intro 180vh, will-change).
- **Build verified:** `bun run build` OK, `tsc --noEmit` passes.
- Commit: parallax tuning pushed to GitHub.

## Changelog / Build Log

### 2026-08-27 — Session 5: Intro content moved to top-left, room reserved below

- **`src/index.css`:** intro content now `align-items: flex-start` + `justify-content: flex-start`, padding `14vh 4rem` — title + paragraphs sit in the upper-left of the 180vh section; the lower ~100vh stays empty and reserved for future content (projects etc.). Mobile: `10vh 1.5rem`.
- Note: owner sent a screenshot; this model cannot read images, so the layout change was done from the textual description.
- **Build verified:** `bun run build` OK, `tsc --noEmit` passes.
- Commit: intro layout shift pushed to GitHub.

## Changelog / Build Log

### 2026-08-29 — Session 6: Added "Introduction" and "Get my CV" buttons to Hero

- **Hero CTAs added & reordered (`src/components/Hero.tsx`):**
  - Updated CTA actions list to 4 buttons in requested order: "Introduction" (`#intro`), "View Projects" (`#projects`), "Get in Touch" (`#contact`), and "Get my CV" (`#cv`).
  - Styled "Introduction" and "Get my CV" using the secondary translucent glass aesthetic (`btn btn-secondary`).
- **Styling enhancements (`src/index.css`):**
  - Added `backdrop-filter: blur(8px)` / `-webkit-backdrop-filter` on `.btn-secondary` for glassmorphic translucency against the Grainient background.
  - Added `scroll-behavior: smooth` on `html` for smooth transitions when clicking anchors like `#intro`.
- **Anchor link support (`src/components/Intro.tsx`):**
  - Added `id="intro"` to `<section>` in Intro component for anchor navigation.
- **Build verified:** `bun run build` OK (34 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-29 — Session 7: Unified translucent button style & side-by-side row layout

- **All 4 CTAs unified (`src/components/Hero.tsx`):**
  - Changed "View Projects" to `btn-secondary` so all 4 buttons ("Introduction", "View Projects", "Get in Touch", "Get my CV") have the identical translucent glassmorphic design.
- **Single-row side-by-side layout (`src/index.css`):**
  - Expanded `.hero-content` max-width to `920px` to fit all four buttons horizontally on a single line on desktop.
  - Refined button padding (`0.85rem 1.6rem`), font size (`0.95rem`), and added `white-space: nowrap` to prevent awkward wrapping of button labels.
  - Adjusted button and gap scaling in mobile media query.
- **Build verified:** `bun run build` OK (34 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-29 — Session 8: Added Glass Navbar & simplified Hero to single "Get my CV" button

- **New Glass Navbar (`src/components/Navbar.tsx`, `src/App.tsx`, `src/index.css`):**
  - Built a floating glassmorphism navigation bar anchored at the top of the viewport (`z-index: 100`).
  - Styled with translucent dark tint (`rgba(18, 8, 36, 0.62)`), `backdrop-filter: blur(14px) saturate(180%)`, crisp border, subtle inner glow, and smooth scroll state background transition.
  - Links included: "About me" (`#about`), "View my projects" (`#projects`), and "Get in touch" (`#contact`).
  - Added responsive styling for mobile viewports.
- **Hero CTAs simplified (`src/components/Hero.tsx`):**
  - Removed "Introduction", "View Projects", and "Get in Touch" from the hero actions.
  - Kept only "Get my CV" with the translucent glass button styling.
- **Anchor IDs updated (`src/components/Intro.tsx`):**
  - Updated section anchor to `id="about"` to support "About me" navigation link.
- **Build verified:** `bun run build` OK (35 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-29 — Session 9: Left-aligned transparent glass navbar & removed brand dot

- **Navbar refined (`src/components/Navbar.tsx` & `src/index.css`):**
  - Removed brand element (pink dot + "Vihanga C.") from the navbar.
  - Left-aligned the navigation bar container (`justify-content: flex-start`, padding `0 2.5rem`, top `1.5rem`).
  - Applied the transparent glass design (`var(--surface-glass)`, `backdrop-filter: blur(10px)`, border `1px solid rgba(255, 255, 255, 0.3)`) so the background remains visible through it.
  - Retained navigation links: "About me", "View my projects", "Get in touch".
- **Build verified:** `bun run build` OK (35 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-29 — Session 10: Scroll-synced morphing Navbar (Full extended bar in Hero -> 3-line circle on scroll)

- **Scroll-synced Navbar morphing (`src/components/Navbar.tsx` & `src/index.css`):**
  - Hero state (top of page): Navbar is in full extended view displaying all navigation links ("About me", "View my projects", "Get in touch") inside the translucent glass pill.
  - Scrolled state: As the user scrolls down, the navbar smoothly collapses into a 48px circular glass button containing 3 horizontal lines (hamburger icon).
  - Return to Hero: Scrolling back up to the Hero section seamlessly re-extends the navbar back into full display.
  - Interactive menu in collapsed state: Clicking the collapsed circular button opens a floating glass dropdown menu with the navigation links, and morphs the 3 hamburger lines into a close 'X'. Clicking a link or clicking outside smoothly closes the dropdown.
  - Added full responsive support for mobile screens.
- **Build verified:** `bun run build` OK (35 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-29 — Session 11: Smoother and relaxed Navbar collapse motion

- **Animation timing & curves (`src/index.css`):**
  - Added `--ease-smooth: cubic-bezier(0.16, 1, 0.3, 1)` for smooth easing curves.
  - Increased pill-to-circle morph duration from 0.4s to 0.75s for a more relaxed and graceful feel.
  - Added staggered transition delays on links (fading out smoothly before closing, revealing with a gentle delay when expanding) and hamburger icon (subtly rotating and scaling into place).
- **Scroll hysteresis (`src/components/Navbar.tsx`):**
  - Added hysteresis trigger thresholds (collapses past 80px, expands back under 40px) to prevent flickering near the hero scroll boundary.
- **Build verified:** `bun run build` OK (35 modules), `tsc --noEmit` passes cleanly.

## Changelog / Build Log

### 2026-08-30 — Session 12: Added 4:3 right-aligned image tile with rounded corners and thick black border to Intro section

- **Intro layout updated (`src/components/Intro.tsx`):**
  - Restructured `<section className="intro">` with `.intro-container` housing both the textual intro on the left and a dedicated `.intro-image-wrapper` on the right.
  - Linked engineering showcase image asset (`src/assets/intro-profile.jpg`).
  - Maintained parallax scroll lockstep with the intro section.
- **Image tile styling (`src/index.css`):**
  - Styled `.intro-image-tile` with strict `aspect-ratio: 4 / 3;`.
  - Configured vertical height taking the viewport view in the intro section (`height: clamp(320px, 72vh, 660px)`).
  - Applied rounded corners (`border-radius: 28px; overflow: hidden;`).
  - Added thick black border (`border: 6px solid #000000;`).
  - Added smooth hover lift and elevation shadows (`box-shadow: 0 20px 48px rgba(0, 0, 0, 0.1)`).
  - Added full responsive support for tablet and mobile breakpoints (`@media (max-width: 1100px)` and `@media (max-width: 640px)`).
- **Asset handling & TypeScript declarations (`bun-env.d.ts`):**
  - Added image module declarations (`*.jpg`, `*.png`, `*.webp`, `*.jpeg`) for clean imports.
- **Build verified:** `bun run build` OK (36 modules, image asset bundled), `tsc --noEmit` passes with 0 errors.

## Discussion Notes

- Portfolio goal (2026-08-27): showcase Engineering Projects and professional expertise to potential employers.
- The default template UI (Bun + React boilerplate) is expected to be replaced by actual portfolio content in future sessions.
- No portfolio content (projects, expertise sections) has been defined yet — awaiting owner input.

## Next Steps (not yet started)

- Define portfolio content: projects list, expertise/skills sections, about section.
- Design system: replace template CSS with a branded portfolio theme (use `frontend-design` skill).
- Wire up modules/features as agreed with the owner.