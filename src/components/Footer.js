import React from 'react';
import styles from './Footer.module.css'; // Импортируем стили

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#career">Career</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Help</h4>
            <ul>
              <li><a href="#support">Customer Support</a></li>
              <li><a href="#delivery">Delivery Details</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#ebooks">Free eBooks</a></li>
              <li><a href="#tutorials">Development Tutorial</a></li>
              <li><a href="#blog">How to - Blog</a></li>
              <li><a href="#youtube">Youtube Playlist</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Links</h4>
            <ul>
               <li><a href="#ebooks">Free eBooks</a></li>
              <li><a href="#tutorials">Development Tutorial</a></li>
              <li><a href="#blog">How to - Blog</a></li>
              <li><a href="#youtube">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;