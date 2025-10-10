import React from 'react';
import styles from './SeoSection.module.css';
import dashboardImage from '../assets/dash.png';

const SeoSection = () => {
  // ИЗМЕНЕНИЕ: Теперь data-атрибут нам не нужен, так как текст будет разбит на строки
  const titleLine1 = "Boost your";
  const titleLine2 = "rankings with AI.";

  return (
    <section className={styles.seoSection}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.newBadge}>
            <span>NEW</span> Latest integration just arrived
          </div>
          
          {/* ИЗМЕНЕНИЕ: Используем <br /> для переноса строки */}
          <h2 className={styles.title}>
            Boost your <br /> rankings with AI.
          </h2>

          <p className={styles.subheading}>
            Elevate your site's visibility effortlessly with AI, where smart 
            technology meets user-friendly SEO tools.
          </p>
          <button className={`btn ${styles.ctaButton}`}>Start for free</button>
        </div>

        <div className={styles.dashboardContainer}>
          <img 
            src={dashboardImage} 
            alt="SEO Dashboard Analytics" 
            className={styles.dashboardImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default SeoSection;