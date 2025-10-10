import React from 'react';
import styles from './Widget.module.css'; // Будем использовать общие стили
import { useSubscription } from '../../context/SubscriptionContext';
import accelerationImg from '../../assets/acceleration_package.png';

const PackageWidget = () => {
  const { currentUserPackage } = useSubscription();

  return (
    <div className={`${styles.widget} ${styles.packageWidget}`}>
      {currentUserPackage ? (
        <>
          <div className={styles.packageInfo}>
            <p>My Package</p>
            <h3>{currentUserPackage}</h3>
            <p className={styles.description}>From colors, cards, typography to complex elements, you will find the full documentation.</p>
            <div className={styles.progressInfo}>
              <div className={styles.progressBar}><div style={{width: '60%'}}></div></div>
              <span>60% of features used</span>
            </div>
            <p className={styles.renewDate}>Subscription renews: 02.02.2025</p>
            <div className={styles.actions}>
              <button>Renew</button>
              <button>Upgrade</button>
              <button>View Invoice</button>
            </div>
          </div>
          <div className={styles.packageImage}>
            <img src={accelerationImg} alt={currentUserPackage} />
          </div>
        </>
      ) : (
        <div className={styles.noPackage}>
          <h3>No Active Package</h3>
          <p>Go to Marketplace to select a plan.</p>
          <a href="/dashboard/marketplace" className={styles.upgradeButton}>View Plans</a>
        </div>
      )}
    </div>
  );
};
export default PackageWidget;