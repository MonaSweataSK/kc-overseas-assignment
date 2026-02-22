import { useState, useEffect } from 'react';
import { navLinks } from '../../data/content';
import './Header.css';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`kc-header${scrolled ? ' kc-header--scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="header-logo">
          <img src="/assets/logo.svg" alt="KC Overseas Education" />
        </a>

        <nav className="header-nav desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#" className="nav-cta-btn">Course Finder</a>

        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <img src="/assets/logos/hamburger.svg" alt="Menu" />
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="mobile-nav-link mobile-cta">Course Finder</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
