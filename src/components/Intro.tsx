import { useEffect, useRef } from "react";
import introImage from "../assets/intro-profile.jpg";

const ABOUT_ME_PARAGRAPHS = [
  <>I am <strong>Vihanga C. Kumanayaka</strong>, a third-year <strong>B.Sc. (Hons) Mechanical Engineering undergraduate specializing in Mechatronic Systems Engineering at the University of Moratuwa, Sri Lanka</strong>. I am passionate about understanding how mechanical, electronic, and computational systems can be brought together to create intelligent and practical engineering solutions. My technical interests and experience span <strong>robotics, autonomous systems, mechanical engineering design, finite element analysis (FEA), embedded systems, sensor integration, computer vision, and electronic circuit design</strong>. I particularly enjoy working at the boundaries between disciplines, where solving a problem requires both engineering fundamentals and the willingness to explore unfamiliar technologies.</>,
  <>Beyond engineering, I value the qualities that enable ideas to become meaningful results. I am a <strong>hard-working, driven, and team-oriented individual</strong> who is comfortable stepping into unfamiliar territories, learning from the ground up, and pushing forward until a solution is found. My involvement in the <strong>University of Moratuwa Karate Team</strong> has strengthened my discipline, perseverance, ability to perform under pressure, and commitment to continuous improvement. I have been awarded <strong>University of Moratuwa Colours for two consecutive years</strong> for my performance in karate, experiences that have shaped the way I approach both individual and team challenges.</>,
  <>I am driven by curiosity, a willingness to learn, and the desire to continuously become a better engineer. Whether I am exploring a new technical concept, contributing to a team, or working through a difficult engineering problem, I approach it with determination and an open mind. <strong>I see every challenge as an opportunity to learn, build, and move forward.</strong> I invite you to explore my work and discover the experiences, skills, and engineering mindset behind the projects I have developed.</>,
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
        <h2 id="intro-title" className="intro-title">
          Who am I?
        </h2>
        {ABOUT_ME_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className="intro-text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}