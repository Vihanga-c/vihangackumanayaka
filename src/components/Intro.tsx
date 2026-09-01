import { useEffect, useRef } from "react";
import introImage from "../assets/intro-profile.jpg";

const PLACEHOLDER_PARAGRAPHS = [
  "Velocities collide with gradients wherever systems learn to hum, and between static laws and dynamic dreams the machinery of intent keeps turning. Resilience polishes friction into torque, while iterative discipline converts scattered sketches into shipping artifacts.",
  "Amplitude is not noise when the waveform is deliberate — every prototype whispers a hypothesis, every deployment answers it. Constant refactoring sharpens the lens; curiosity fuels the burner, and craftsmanship becomes the torque that moves the whole assembly forward.",
];

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The intro moves up faster than the hero (1.2x vs 0.556x), so it
    // slides in front of the hero and covers it. The shift saturates at
    // RATE * T: once the intro's visual top reaches the top of the screen
    // (scrollY = T), it scrolls away naturally at 1x — the content never
    // freezes and nothing ever overshoots past the viewport.
    //
    // The transform is applied synchronously in the scroll handler (no rAF
    // delay), so it always matches the current scroll position exactly.
    const RATE = 1.2;

    let layoutTop = 0; // transform-invariant document top of the section
    let lastShift = 0;

    const measureLayoutTop = () => {
      layoutTop = section.getBoundingClientRect().top + window.scrollY + lastShift;
    };

    const shiftAt = (y: number) => {
      const T = layoutTop / (RATE + 1);
      const maxShift = RATE * T;
      if (y <= 0.85 * T) return RATE * y;
      if (y >= T) return maxShift;
      // Gentle deceleration into the natural phase (smoothstep, C1-continuous).
      const t = (y - 0.85 * T) / (0.15 * T);
      const s = t * t * (3 - 2 * t);
      return RATE * 0.85 * T + (maxShift - RATE * 0.85 * T) * s;
    };

    const update = () => {
      const y = window.scrollY;
      const shift = shiftAt(y);
      lastShift = shift;
      section.style.transform = `translateY(${-shift}px)`;
    };
    const onResize = () => {
      measureLayoutTop();
      update();
    };

    measureLayoutTop();
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="intro"
      aria-labelledby="intro-title"
    >
      <div className="intro-container">
        <div className="intro-content">
          <h2 id="intro-title" className="intro-title">
            intro of me
          </h2>
          {PLACEHOLDER_PARAGRAPHS.map((text, i) => (
            <p key={i} className="intro-text">
              {text}
            </p>
          ))}
        </div>
        <div className="intro-image-wrapper">
          <div className="intro-image-tile">
            <img
              src={introImage}
              alt="Vihanga C. Kumanayaka introduction showcase"
              className="intro-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}