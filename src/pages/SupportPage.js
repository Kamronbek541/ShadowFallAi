import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './SupportPage.module.css';
import supportImage from '../assets/support_dash.png';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const SupportPage = () => {
  return (
    <DashboardLayout currentPage="Support">
      <div className={styles.supportPage}>
        <div className={styles.quickLinks}>
          <div className={styles.linkCard}>
            <div className={styles.cardContent}>
              <p>Find answer on your question in</p>
              <h3>FAQ</h3>
              <p>Explore our FAQ to quickly find solutions, understand your package, and get the most out of AI PILLS.</p>
              <Link to="/faq" className={styles.button}>Go to FAQ Section</Link>
            </div>
            <div className={styles.iconsWrapper}>
              <div className={`${styles.cardIcon} ${styles.blurred}`}>?</div>
              <div className={styles.cardIcon}>?</div>
              <div className={`${styles.cardIcon} ${styles.blurred}`}>?</div>
            </div>
          </div>
          <div className={styles.linkCard}>
            <div className={styles.cardContent}>
              <h3>24/7 Support</h3>
              <p>Need help anytime? Our support team is available 24/7 to guide you, solve issues, and keep your business running without interruptions.</p>
            </div>
            {/* ИЗМЕНЕНИЕ: Отдельные элементы для 24/7 и часов */}
            <div className={styles.iconsWrapper}>

              <div className={`${styles.cardIcon} ${styles.largeText}`}>24/7</div>
            </div>
          </div>
        </div>

        {/* --- Нижняя секция с формой --- */}
        <div className={styles.contactFormSection}>
          <div className={styles.formWrapper}>
            <h3>Need help of our team member? Send us inquiry</h3>
            <form>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Title of problem</label>
                  <input type="text" id="title"  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="accountNumber">Account number</label>
                  <input type="text" id="accountNumber"  />
                </div>
                 <div className={styles.formGroup}>
                  <label htmlFor="field">Field of problem</label>
                  <input type="text" id="field"/>
                </div>
                <div className={`${styles.formGroup} ${styles.descriptionGroup}`}>
                  <label htmlFor="description">Description</label>
                  <textarea id="description" rows="7" placeholder="..."></textarea>
                </div>
              </div>
              <button type="submit" className={styles.button}>Send Message</button>
            </form>
          </div>
          <div className={styles.imageWrapper}>
            <img src={supportImage} alt="Support" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SupportPage;