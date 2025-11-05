import React, { useState } from 'react';
import styles from './Header.module.css';
import { HashLink } from 'react-router-hash-link';
import aipillsLogo from '../assets/aiPillsLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Логотип теперь показывается только на мобилке */}
          <div className={styles.logo}>
            <HashLink smooth to="/#">AI PILLS</HashLink>
          </div>

          <nav className={styles.mainNav}>
            <ul>
              {/* <li><HashLink smooth to="/">About Us</HashLink></li> */}
              <li>
              <HashLink smooth to="/#">
              <img src={aipillsLogo} alt="AI PILLS Logo" />
            </HashLink>
            </li>
              <li><a href="/benefits">Benefits</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="https://cabinet.aipills.ca">Login</a></li>
              <li><a href="https://cabinet.aipills.ca/workflows">Signup</a></li>
            </ul>
          </nav>
          {/* <a href="/sign-in" className={`btn ${styles.quoteButton}`}>Get Quote</a> */}
          {/* <a href="/sign-in" className={`btn ${styles.quoteButton} ${styles.desktopOnly}`}> */}

        {/* Get Quote кнопка */}
        <a href="https://cabinet.aipills.ca/workflows" className={`btn ${styles.quoteButton} ${styles.desktopOnly}`}>
          {/* <a href="/#growthForm" className={`btn ${styles.quoteButton} ${styles.desktopOnly}`}> */}
            <span>Get a Quote</span>
            <svg
              className={styles.quoteBorder}
              width="100%"
              height="100%"
              viewBox="0 0 160 50"
              preserveAspectRatio="none"
            >
              <path d="M1,1 H159 V39 L149,49 H1 V1 Z" />
            </svg>
          </a>

          <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        <nav>
          <ul>
            <li onClick={() => setIsMenuOpen(false)}><a href="/benefits">Benefits</a></li>
            <li onClick={() => setIsMenuOpen(false)}><HashLink smooth to="/#features">Features</HashLink></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="/pricing">Pricing</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="/faq">FAQ</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="https://cabinet.aipills.ca">Login</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="https://cabinet.aipills.ca/workflows">Signup</a></li>
          </ul>
        </nav>
      </div>

      {/* <div className={styles.headerDivider}>
        <svg width="100%" height="20" viewBox="0 0 1920 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1 L800 1 L840 19 L1080 19 L1120 1 L1920 1" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" fill="none"/>
        </svg>
      </div> */}
    </header>
  );
};

export default Header;



