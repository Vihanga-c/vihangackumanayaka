// Parallax-aware smooth scrolling.
//
// Sections are moved by `translateY(-scrollY * RATE)` on every scroll frame, so
// native anchor navigation (href="#...") targets the *untransformed* layout
// position and lands in the wrong place. Instead, compute the scroll offset at
// which the section's visual top sits exactly at the top of the viewport:
//
//   visualTop(y) = layoutTop - RATE * y - y   (transform + scroll offset)
//   visualTop(y) = 0  ->  y = layoutTop / (RATE + 1)
//
// layoutTop is the transform-invariant document position, recovered from the
// current rect (rect.top + scrollY + RATE * scrollY).

export const SECTION_RATES: Record<string, number> = {
  about: 1.2, // Intro
  projects: 1.45, // Projects
  contact: 1.6, // Contact
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
  const rect = el.getBoundingClientRect();
  const layoutTop = rect.top + window.scrollY + rate * window.scrollY;

  const target = layoutTop / (rate + 1);
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  const clamped = Math.max(0, Math.min(target, maxScroll));

  window.scrollTo({ top: clamped, behavior });
}
