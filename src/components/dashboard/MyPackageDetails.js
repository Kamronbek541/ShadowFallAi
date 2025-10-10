import React from 'react';
import styles from './MyPackageDetails.module.css';
import { useSubscription } from '../../context/SubscriptionContext';
import { MdFolder, MdLock } from 'react-icons/md';

// Импортируем картинки для каждого пакета
import launchImg from '../../assets/launch_package.png';
import accelerationImg from '../../assets/acceleration_package.png';
import flightImg from '../../assets/flight_package.png';

const packageImages = {
  Launch: launchImg,
  Acceleration: accelerationImg,
  Flight: flightImg,
};

// Все возможные фичи
const allFeatures = [
    // ... (массив allFeatures остается без изменений)
    { name: 'Sales Engine', details: ['lead discovery', 'tracking', 'outreach', 'follow-ups', 'conversions'], availableIn: ['Launch', 'Acceleration', 'Flight'] },
    { name: 'Smart SMM', details: ['multi-channel campaigns', 'trend tracking', 'content creation'], availableIn: ['Launch', 'Acceleration', 'Flight'] },
    { name: 'Analyzer Module', details: ['client journey tracking', 'content recommendations', 'audience insights'], availableIn: ['Acceleration', 'Flight'] },
    { name: 'AI-Enhanced CRM', details: ['order intake', 'instant reports', 'tone/style adjustment', 'voice imitation'], availableIn: ['Acceleration', 'Flight'] },
    { name: 'Automated Inventory Management', details: ['Real-time product availability', 'Client data entry', 'booking confirmation', 'Deposits/refunds'], availableIn: ['Flight'] },
    { name: 'Profit & Performance Analytics', details: ['Earnings tracking', 'Order stats', 'Trend comparison vs. past results', 'Competitor analysis'], availableIn: ['Flight'] },
];

const MyPackageDetails = () => {
    const { currentUserPackage } = useSubscription();

    if (!currentUserPackage) return null;

    return (
        // Главная белая карточка
        <div className={styles.detailsCard}>
            {/* Левая колонка с информацией */}
            <div className={styles.infoColumn}>
                <div className={styles.header}>
                    <p>My Package</p>
                    <h2>{currentUserPackage}</h2>
                </div>
                
                <div className={styles.featuresGrid}>
                    {allFeatures.map(feature => {
                        const isAvailable = feature.availableIn.includes(currentUserPackage);
                        return (
                            <div key={feature.name} className={`${styles.featureBlock} ${!isAvailable ? styles.locked : ''}`}>
                                <div className={styles.featureHeader}>
                                    {isAvailable ? <MdFolder className={styles.icon} /> : <MdLock className={styles.icon} />}
                                    <h4>{feature.name}</h4>
                                </div>
                                <ul>
                                    {feature.details.map(detail => <li key={detail}>{detail}</li>)}
                                </ul>
                                {!isAvailable && (
                                    <div className={styles.upgradePrompt}>
                                        <span>Available at "Flight"</span>
                                        <button className={styles.miniUpgradeBtn}>Upgrade</button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className={styles.footer}>
                    <p>Subscription renews: 02.02.2025</p>
                    <div className={styles.actions}>
                        <button className={styles.renewBtn}>Renew</button>
                        <button className={styles.upgradeBtn}>Upgrade</button>
                        <button className={styles.invoiceBtn}>View Invoice</button>
                    </div>
                </div>
            </div>

            {/* Правая колонка с картинкой */}
            <div className={styles.imageColumn}>
                <img src={packageImages[currentUserPackage]} alt={`${currentUserPackage} package`} />
            </div>
        </div>
    );
};

export default MyPackageDetails;