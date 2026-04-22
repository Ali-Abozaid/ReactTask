import React, { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Our certifications', href: '#certifications' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo + Brand */}
        <a href="#home" className="navbar__brand">
          <img
            src="/img/navbarlogo.svg"
            alt="4 Seasons Logo"
            className="navbar__logo"
          />
          <span className="navbar__brand-text">4 SEASONS</span>
        </a>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a
                href={link.href}
                className={`navbar__link ${active === link.label ? 'navbar__link--active' : ''}`}
                onClick={() => {
                  setActive(link.label);
                  setMenuOpen(false);
                }}
              >
                {link.label}
                <span className="navbar__dot" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="navbar__cta">
          CONTACT US
        </a>
      </div>
    </nav>
  );
}
