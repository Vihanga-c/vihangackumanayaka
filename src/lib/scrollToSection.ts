// Smooth scrolling to a section. All sections are static now (no parallax
// transforms), so a section's visual top at scroll `y` is simply
// `layoutTop - y` and the correct target scroll offset is `layoutTop`.

export const SECTION_RATES: Record<string, number> = {
  about: 0, // static
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