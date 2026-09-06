import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Grainient from "./Grainient";

export function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const degreesRef = useRef<HTMLDivElement>(null);
  const degreeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Keep the name and the degree line exactly the same rendered width, and
  // never let the name overflow its container (both stay on a single line).
  // On narrow screens the degree wraps naturally instead of becoming tiny.
  useLayoutEffect(() => {
    const name = nameRef.current;
    const degrees = degreesRef.current;
    const degree = degreeRef.current;
    if (!name || !degrees || !degree) return;

    const syncWidths = () => {
      // Restore the CSS-declared sizes first so each pass measures cleanly.
      degrees.style.fontSize = "";
      name.style.fontSize = "";

      const availableW = name.clientWidth;
      const baseNameFont = parseFloat(getComputedStyle(name).fontSize);
      const neededNameW = name.scrollWidth;
      const nameFont =
        neededNameW > availableW
          ? (baseNameFont * availableW) / neededNameW
          : baseNameFont;
      name.style.fontSize = `${nameFont}px`;
      const nameW = name.scrollWidth;

      if (!window.matchMedia("(max-width: 640px)").matches) {
        const baseDegreeFont = parseFloat(getComputedStyle(degree).fontSize);
        const neededDegreeW = degree.scrollWidth;
        degrees.style.fontSize = `${(baseDegreeFont * nameW) / neededDegreeW}px`;
      }
    };

    syncWidths();
    window.addEventListener("resize", syncWidths);
    return () => window.removeEventListener("resize", syncWidths);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          timeSpeed={reducedMotion ? 0 : 0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Engineering Portfolio</p>
        <h1 id="hero-title" ref={nameRef}>
          Vihanga C. Kumanayaka
        </h1>
        <div className="hero-degrees" ref={degreesRef}>
          <p className="hero-degree" ref={degreeRef}>
            B.Sc (Hons) Mechanical Engineering, Specialising in Mechatronic
            Systems Engineering
          </p>
          <p className="hero-university">(University of Moratuwa)</p>
        </div>
        <p className="hero-subtitle">
          Engineering projects, experiences and the skills honed along the way.
          Designed, Built, Executed and Documented.
        </p>
        <div className="hero-actions">
          <a className="btn btn-secondary" href="#cv">
            Get my CV
          </a>
        </div>
      </div>
    </section>
  );
}