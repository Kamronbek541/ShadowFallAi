import React from 'react';
import styles from './ContactForm.module.css';
import supportImage from '../../assets/support_dash.png';

const ContactForm = ({ title = "Still Need Help?", subtitle = "Need help of our team member? Send us inquiry" }) => {
  return (
    <div className={styles.contactFormSection}>
        <h2 className={styles.mainTitle}>{title}</h2>
        <div className={styles.card}>
            <div className={styles.formWrapper}>
                <h3>{subtitle}</h3>
                <form>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Full Name</label>
                      <input type="text" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Title of problem</label>
                      <input type="text" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Account number</label>
                      <input type="text" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Field of problem</label>
                      <input type="text" />
                    </div>
                    {/* ---> CORRECCIÓN: Añadido .formGroup para consistencia <--- */}
                    <div className={`${styles.formGroup} ${styles.descriptionGroup}`}>
                      <label>Description</label>
                      <textarea rows="7" placeholder="..."></textarea>
                    </div>
                  </div>
                  <button type="submit" className={styles.button}>Send Message</button>
                </form>
            </div>
            <div className={styles.imageWrapper}>
                <img src={supportImage} alt="Support"/>
            </div>
        </div>
    </div>
  );
};

export default ContactForm;