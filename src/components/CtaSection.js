import React from 'react';
import styles from './CtaSection.module.css'; // Не забудь импортировать стили

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBanner}>
          <h2>
            It will help you improve your writing
            <br />
            & bring ideas more clearly.
          </h2>
          <button className={`btn ${styles.ctaButton}`}>
            Start 14 Days Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;