import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { scrollToSection } from "../lib/scrollToSection";

const NAV_ITEMS = [
  { id: "about", label: "About me" },
  { id: "projects", label: "View my projects" },
  { id: "contact", label: "Get in touch" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const updateActive = () => {
      const threshold = window.innerHeight * 0.45;
      let current: SectionId | null = null;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (raf === 0) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          const scrollY = window.scrollY;
          setCollapsed((prev) => {
            if (scrollY > 80) return true;
            if (scrollY < 40) {
              setMenuOpen(false);
              return false;
            }
            return prev;
          });
          updateActive();
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleToggle = () => {
    if (collapsed) {
      setMenuOpen((prev) => !prev);
    }
  };

  const handleNavClick = (e: ReactMouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`navbar-wrapper ${collapsed ? "scrolled" : ""}`}>
      <div ref={containerRef} className="navbar-container">
        <nav
          className={`navbar-glass ${collapsed ? "collapsed" : "extended"} ${
            menuOpen ? "menu-open" : ""
          }`}
          aria-label="Main Navigation"
          onClick={collapsed ? handleToggle : undefined}
          role={collapsed ? "button" : "navigation"}
          tabIndex={collapsed ? 0 : undefined}
          onKeyDown={
            collapsed
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle();
                  }
                }
              : undefined
          }
          aria-expanded={collapsed ? menuOpen : undefined}
        >
          {/* Extended links for Hero view */}
          <div className="navbar-links-group" aria-hidden={collapsed}>
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link ${
                  activeSection === id ? "active" : ""
                }`}
                aria-current={activeSection === id ? "true" : undefined}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* 3-line hamburger icon when collapsed */}
          <div className="hamburger-toggle" aria-hidden={!collapsed}>
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </div>
        </nav>

        {/* Floating glass dropdown menu when collapsed & opened */}
        {collapsed && menuOpen && (
          <div className="navbar-dropdown" role="menu">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-dropdown-link ${
                  activeSection === id ? "active" : ""
                }`}
                role="menuitem"
                aria-current={activeSection === id ? "true" : undefined}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
