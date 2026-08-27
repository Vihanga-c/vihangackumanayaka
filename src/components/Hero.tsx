import { useEffect, useState } from "react";
import Grainient from "./Grainient";

export function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
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
        <h1 id="hero-title">Vihanga C. Kumanayaka</h1>
        <p className="hero-subtitle">
          Engineering projects and the expertise gained along the way — built,
          shipped, and documented.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}