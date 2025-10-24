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
        <a href="#growthForm" className={`btn ${styles.ctaButton}`}>
                    Start 3 Days Free Trial
                  </a>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;