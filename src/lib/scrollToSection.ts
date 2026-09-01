// Parallax-aware smooth scrolling.
//
// The intro section is moved by `translateY(-shift)` where the shift saturates
// once the intro's visual top reaches the top of the viewport, so native
// anchor navigation (href="#...") targets the *untransformed* layout position
// and lands in the wrong place. Instead, compute the scroll offset at which
// the section's visual top sits exactly at the top of the viewport:
//
//   moving section:   visualTop(y) = layoutTop - shift(y)  ->  y = layoutTop / (RATE + 1)
//   static section:   visualTop(y) = layoutTop - y         ->  y = layoutTop
//
// layoutTop is the transform-invariant document position. For moving sections
// it is measured by briefly neutralizing the inline parallax transform
// (restored immediately — no repaint happens in between), so it stays correct
// regardless of the current scroll position or clamp state.

export const SECTION_RATES: Record<string, number> = {
  about: 1.2, // Intro — only parallax section left
  projects: 0, // static
  contact: 0, // static
};

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  // Without motion the sections are never transformed, so no rate correction.
  const rate = reducedMotion ? 0 : SECTION_RATES[sectionId] ?? 0;

  let layoutTop: number;
  if (rate > 0) {
    const prevTransform = el.style.transform;
    el.style.transform = "";
    layoutTop = el.getBoundingClientRect().top + window.scrollY;
    el.style.transform = prevTransform;
  } else {
    layoutTop = el.getBoundingClientRect().top + window.scrollY;
  }

  const target = layoutTop / (rate + 1);
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  const clamped = Math.max(0, Math.min(target, maxScroll));

  window.scrollTo({ top: clamped, behavior: reducedMotion ? "auto" : behavior });
}