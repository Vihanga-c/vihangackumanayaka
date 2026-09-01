import { useEffect, useRef, useState } from "react";
import Grainient from "./Grainient";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hero is 100vh tall, page scroll range is 180vh (intro is 180vh):
    // hero fully exits exactly at max scroll -> rate = 100 / 180 = 0.556.
    // The intro (in flow, 1.2x) overtakes it, so relative speed = 0.644.
    // Applied synchronously on every scroll event so it never lags the
    // current scroll position.
    const RATE = 100 / 180;

    const update = () => {
      section.style.transform = `translateY(${window.scrollY * -RATE}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero" aria-labelledby="hero-title">
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
          <a className="btn btn-secondary" href="#cv">
            Get my CV
          </a>
        </div>
      </div>
    </section>
  );
}