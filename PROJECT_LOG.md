# Project Log — Vihanga C. Kumanayaka Portfolio

## READ THIS FILE FIRST (IMPORTANT)

- **Read this file before executing any task in this project.**
- Always refer to it so you know every change, build, module, and discussion that has happened before starting the current task.
- After every change, build, module addition, or meaningful discussion, **update this file** and **commit to GitHub**.

## Project Overview

- **Purpose:** Personal portfolio website showcasing the owner's Engineering Projects and the expertise gained over the years. Presented to potential employers evaluating the owner's work.
- **Owner:** Vihanga C. Kumanayaka
- **Repository:** https://github.com/Vihanga-c/vihangackumanayaka.git
- **Branch:** main

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
| `src/App.tsx` | Done (iteration 2) | Root component — renders `<Hero />` |
| `src/components/Hero.tsx` | Done | Hero landing page: full-viewport Grainient background + name, subtitle, CTAs; respects `prefers-reduced-motion` |
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

## Discussion Notes

- Portfolio goal (2026-08-27): showcase Engineering Projects and professional expertise to potential employers.
- The default template UI (Bun + React boilerplate) is expected to be replaced by actual portfolio content in future sessions.
- No portfolio content (projects, expertise sections) has been defined yet — awaiting owner input.

## Next Steps (not yet started)

- Define portfolio content: projects list, expertise/skills sections, about section.
- Design system: replace template CSS with a branded portfolio theme (use `frontend-design` skill).
- Wire up modules/features as agreed with the owner.