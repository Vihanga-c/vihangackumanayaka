import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const handleScroll = () => {
      if (raf === 0) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          const isScrolled = window.scrollY > 60;
          setCollapsed(isScrolled);
          if (!isScrolled) {
            setMenuOpen(false);
          }
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const handleLinkClick = () => {
    setMenuOpen(false);
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
            <a href="#about" className="nav-link" onClick={handleLinkClick}>
              About me
            </a>
            <a href="#projects" className="nav-link" onClick={handleLinkClick}>
              View my projects
            </a>
            <a href="#contact" className="nav-link" onClick={handleLinkClick}>
              Get in touch
            </a>
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
            <a
              href="#about"
              className="nav-dropdown-link"
              role="menuitem"
              onClick={handleLinkClick}
            >
              About me
            </a>
            <a
              href="#projects"
              className="nav-dropdown-link"
              role="menuitem"
              onClick={handleLinkClick}
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="nav-dropdown-link"
              role="menuitem"
              onClick={handleLinkClick}
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
