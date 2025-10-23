import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Информация о компании */}
          <div className={styles.footerInfo}>
            <h3>AI PILLS</h3>
            <p>
              Creating innovative AI solutions for the future. 
              We transform ideas into intelligent reality.
            </p>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#growthForm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li>marketing@aipills.ca</li>
              <li>+1 (647) 765-1745
              </li>
              <li>Toronto, Canada</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} AI PILLS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;