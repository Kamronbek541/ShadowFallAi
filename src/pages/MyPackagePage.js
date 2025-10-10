import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './MyPackagePage.module.css';
import { useSubscription } from '../context/SubscriptionContext';
import PackageSelection from '../components/dashboard/PackageSelection';
import MyPackageDetails from '../components/dashboard/MyPackageDetails'; // 1. Импортируем новый компонент

const MyPackagePage = () => {
  const { currentUserPackage } = useSubscription();

  return (
    <DashboardLayout currentPage="My Package">
      {!currentUserPackage ? (
        // Состояние, когда пакет НЕ выбран
        <div className={styles.emptyState}>
          <h2>You don't have an active package yet.</h2>
          <p>Upgrade your package in order to use our features.</p>
        </div>
      ) : (
        // Состояние, когда пакет ВЫБРАН (используем новый компонент)
        <MyPackageDetails />
      )}

       <div className={styles.packageSelection}>
        <h3 className={styles.selectionTitle}>Upgrade or Downgrade Your Package</h3>
        <PackageSelection />
      </div>

    </DashboardLayout>
  );
};

export default MyPackagePage;