import React from 'react';
import styles from './GrowthFormSection.module.css';
import silhouetteImage from '../assets/background_contact.png'; // Убедись, что картинка здесь

const GrowthFormSection = () => {
  // Мы задаем фон через inline style, чтобы React правильно обработал путь к картинке
  const sectionStyle = {
    backgroundImage: `url(${silhouetteImage}), linear-gradient(120deg, #5F0A87 0%, #A500E1 100%)`
  };

  return (
    <section className={styles.growthSection} style={sectionStyle}>
      <div className={`container ${styles.growthContainer}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2>Ready to craft smoother operations, higher profits, and consistent growth with AI PILLS?</h2>
            <p>
              Please fill in the form below — we'll call you within 24 hours to show how AI PILLS fits
              your business & arrange a <span className={styles.highlight}>free trial/demo</span>
            </p>
          </div>
          <div className={styles.formContainer}>
            <h3>Get your growth formula now</h3>
            <form className={styles.growthForm}>
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
        </div>
      </div>
    </section>
  );
};

export default GrowthFormSection;