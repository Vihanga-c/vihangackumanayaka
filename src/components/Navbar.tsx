import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-glass" aria-label="Main Navigation">
        <a href="#" className="navbar-brand" aria-label="Home">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-name">Vihanga C.</span>
        </a>
        <div className="navbar-links">
          <a href="#about" className="nav-link">
            About me
          </a>
          <a href="#projects" className="nav-link">
            View my projects
          </a>
          <a href="#contact" className="nav-link">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
