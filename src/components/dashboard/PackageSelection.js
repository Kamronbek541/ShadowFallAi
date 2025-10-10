import React from 'react';
import styles from './PackageSelection.module.css';
import { useSubscription } from '../../context/SubscriptionContext';

// Данные для карточек (можно вынести, но для простоты оставим здесь)
const packagesData = [
  {
    name: "Launch",
    setupPrice: "3,000",
    supportPrice: "200",
    features: ["Sales Engine", "Smart SMM"]
  },
  {
    name: "Acceleration",
    setupPrice: "5,000",
    supportPrice: "500",
    features: ["Sales Engine", "Smart SMM", "Analyzer Module", "AI-Enhanced CRM"]
  },
  {
    name: "Flight",
    setupPrice: "10,000",
    supportPrice: "1,000",
    features: ["Sales Engine", "Smart SMM", "Analyzer Module", "AI-Enhanced CRM", "Automated Inventory", "Profit & Performance Analytics"]
  }
];

const PackageSelection = () => {
  const { currentUserPackage, selectPackage } = useSubscription();

  return (
    <div className={styles.selectionContainer}>
      {packagesData.map((pkg) => {
        // Определяем, является ли этот пакет текущим пакетом пользователя
        const isCurrentPackage = currentUserPackage === pkg.name;

        return (
          <div key={pkg.name} className={`${styles.card} ${isCurrentPackage ? styles.current : ''}`}>
            <div className={styles.priceInfo}>
              <h4>{pkg.name}</h4>
              <p>Setup <span>${pkg.setupPrice}</span>/one-time</p>
              <p>Support <span>${pkg.supportPrice}</span>/monthly</p>
            </div>

            <div className={styles.featuresList}>
              {pkg.features.map((feature, index) => (
                <p key={index} className={styles.featureItem}>{feature}</p>
              ))}
            </div>

            <div className={styles.buttonWrapper}>
              <button 
                onClick={() => selectPackage(pkg.name)} 
                className={`${styles.mainButton} ${isCurrentPackage ? styles.currentButton : ''}`}
                disabled={isCurrentPackage} // Нельзя выбрать уже активный пакет
              >
                {isCurrentPackage ? "Current Plan" : "Upgrade"}
              </button>
              {!isCurrentPackage && (
                <a href="#" className={styles.trialLink}>Start Your 30 Day Free Trial</a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageSelection;