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
            <h3>AI PILLS By CARVAY INC</h3>
            <p>
             CARVAY INC presents AI PILLS - a revolutionary automation product.
              We've built smart tools to optimize business processes.
             AI PILLS is the future of efficient business from Carvay.
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
            © {currentYear} AI PILLS. Provided by CARVAY INC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;