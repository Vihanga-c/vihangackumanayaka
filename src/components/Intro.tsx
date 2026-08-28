import { useEffect, useRef } from "react";

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
    // slides in front of the hero and covers it by scrollY ~= 83vh.
    const RATE = 1.2;

    let raf = 0;
    const update = () => {
      raf = 0;
      section.style.transform = `translateY(${window.scrollY * -RATE}px)`;
    };
    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="intro"
      aria-labelledby="intro-title"
    >
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
    </section>
  );
}