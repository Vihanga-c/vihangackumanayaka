import { useEffect, useRef } from "react";

const CONTACT_METHODS = [
  {
    id: "mobile",
    label: "Mobile Phone",
    value: "+94 71 234 5678",
    href: "tel:+94712345678",
  },
  {
    id: "email",
    label: "Email",
    value: "vihanga.kumanayaka@example.com",
    href: "mailto:vihanga.kumanayaka@example.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/vihanga-kumanayaka",
    href: "https://www.linkedin.com/in/vihanga-kumanayaka",
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const RATE = 1.6;
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
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner">
        <h2 id="contact-title" className="contact-title">
          Contact Me
        </h2>
        <div className="contact-methods">
          {CONTACT_METHODS.map((method) => (
            <div key={method.id} className={`contact-method ${method.id}`}>
              <span className="contact-method-label">{method.label}</span>
              <a className="contact-method-link" href={method.href}>
                {method.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;