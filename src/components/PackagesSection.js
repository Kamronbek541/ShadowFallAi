import React from 'react';
import styles from './PackagesSection.module.css';
import crowsImage from '../assets/min_worn.png'; // Убедись, что картинка здесь
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Данные для карточек тарифов
const packagesData = [
  {
    title: "LAUNCH",
    setupPrice: "C$3,000",
    supportPrice: "C$200",
    features: [
      { name: "Sales Engine", description: "Lead discovery, outreach, follow-ups, and conversions." },
      { name: "Smart SMM", description: "Multi-channel campaigns with trend tracking and engaging content." }
    ]
  },
  {
    title: "ACCELERATION",
    setupPrice: "C$5,000",
    supportPrice: "C$500",
    features: [
      { name: "Everything from Launch", description: "" },
      { name: "Analyzer Module", description: "Tracks client journeys, shows what works, recommends the best content for your niche." },
      { name: "AI-Enhanced CRM", description: "Instant reporting, tailored conversations, and voice imitation for authentic engagement." }
    ]
  },
  {
    title: "FLIGHT",
    setupPrice: "C$10,000",
    supportPrice: "C$1,000",
    features: [
      { name: "Everything from Acceleration", description: "" },
      { name: "Automated Inventory", description: "Real-time stock, booking, deposits/refunds, and smart spreadsheets." },
      { name: "Profit & Performance Analytics", description: "Revenue tracking, order stats, competitor insights, and trend comparisons." }
    ]
  }
];

// Компонент для иконки-галочки
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#A500E1"/>
  </svg>
);

const PackagesSection = () => {
  return (
    <section className={styles.packagesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Packages</h2>
        <div className={styles.cardsContainer}>
          {packagesData.map((pkg, index) => (
            <div className={styles.cardWrapper} key={index}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  <span data-text={pkg.title}>{pkg.title}</span>
                </h3>
                <div className={styles.priceInfo}>
                  <p>Setup from <strong>{pkg.setupPrice}</strong> /one-time</p>
                  <p>Support from <strong>{pkg.supportPrice}</strong> /monthly</p>
                </div>
                <div className={styles.featuresList}>
                  {pkg.features.map((feature, fIndex) => (
                    <div className={styles.featureItem} key={fIndex}>
                      <CheckIcon />
                      <div>
                        <h4>{feature.name}</h4>
                        {feature.description && <p>{feature.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                {/* <button className={`btn ${styles.learnMoreButton}`}>Learn More</button> */}
                {/* <Link to="/pricing" className={`btn ${styles.learnMoreButton}`}>
                  Learn More
                </Link> */}
                <HashLink smooth to="/pricing#compare-table" className={`btn ${styles.learnMoreButton}`}>
                  Learn More
                </HashLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={crowsImage} alt="Decorative crows" className={styles.crowsImage} />
    </section>
  );
};

export default PackagesSection;