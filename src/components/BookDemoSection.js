import React from 'react';
import styles from './BookDemoSection.module.css';
import contactImage from '../assets/contact_price.png';

const BookDemoSection = () => {
  return (
    <section className={styles.demoSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Book a demo</h2>
        <div className={styles.formCard}>
          <div className={styles.formWrapper}>
            <h3>Get your growth formula now</h3>
            <form className={styles.demoForm}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Last Name*" required />
                <input type="text" placeholder="First Name*" required />
              </div>
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Phone Number*" required />
              <input type="text" placeholder="Business Name / Website (optional)" />
              <button type="submit" className={`btn ${styles.submitButton}`}>Let's automate & scale</button>
            </form>
          </div>
          <div className={styles.imageWrapper}>
            <img src={contactImage} alt="Book a demo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;