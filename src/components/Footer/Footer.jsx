import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">

        {/* ── Left: Logo + Tagline ── */}
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src="/img/navbarlogo.svg" alt="4 Seasons Logo" className="footer__logo" />
            <span className="footer__brand-text">4 SEASONS</span>
          </div>
          <p className="footer__tagline-small">DO YOU NEED OUR HELP</p>
          <p className="footer__tagline-big">
            In Your Next <span className="footer__tagline-red">Event?</span>
          </p>
        </div>

        <div className="footer__cols">
          {/* ── Company Links ── */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-list">
              <li><a href="#about" className="footer__link">About Us</a></li>
              <li><a href="#services" className="footer__link">Our Services</a></li>
              <li><a href="#projects" className="footer__link">Our Projects</a></li>
              <li><a href="#certifications" className="footer__link">Certifications</a></li>
              <li><a href="#contact" className="footer__link">Contact Us</a></li>
            </ul>
          </div>

          {/* ── We Provide ── */}
          <div className="footer__col">
            <h4 className="footer__col-title">We Provide</h4>
            <ul className="footer__col-list">
              <li><a href="#about" className="footer__link">Camp Services</a></li>
              <li><a href="#projects" className="footer__link">Logistics Services</a></li>
              <li><a href="#services" className="footer__link">waste management Services</a></li>
              <li><a href="#services" className="footer__link">Transportation Services</a></li>
              <li><a href="#services" className="footer__link">General Maintenance</a></li>
              <li><a href="#services" className="footer__link">Management Pest Control Serivces</a></li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer__col">
            <h4 className="footer__col-title">Cotact Informations</h4>
            <ul className="footer__col-list footer__col-list--contact">
              <li className="footer__contact-item">Iraq – Baghdad – Al – Arasat/ Block929, St11</li>
              <li className="footer__contact-item">Iraq – Basrah, Basrah sport city street</li>
              <li className="footer__contact-item">info@4seasons-iraq.com</li>
              <li className="footer__contact-item">+964 782 777 7893</li>
            </ul>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copy">© 2024 4Seasons Iraq. All Rights Reserved.</p>
        <div className="footer__socials">
          <a href="#services" className="footer__social-link" aria-label="X / Twitter">
            <img src="/img/Vector (1).svg" alt="X" className="footer__social-icon" />
          </a>
          <a href="#services" className="footer__social-link" aria-label="YouTube">
            <img src="/img/youtube.svg" alt="YouTube" className="footer__social-icon" />
          </a>
          <a href="#services" className="footer__social-link" aria-label="Facebook">
            <img src="/img/Vector (2).svg" alt="Facebook" className="footer__social-icon" />
          </a>
          <a href="#services" className="footer__social-link" aria-label="Instagram">
            <img src="/img/instagram.svg" alt="Instagram" className="footer__social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
