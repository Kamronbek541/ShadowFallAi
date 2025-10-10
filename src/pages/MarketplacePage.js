import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './MarketplacePage.module.css';
import PackageSelection from '../components/dashboard/PackageSelection';
import PackageComparisonTable from '../components/dashboard/PackageComparisonTable'; // 1. Импортируем

const MarketplacePage = () => {
  return (
    <DashboardLayout currentPage="Marketplace">
      <div className={styles.marketplace}>
        <PackageSelection />
        <PackageComparisonTable /> {/* 2. Добавляем компонент */}
      </div>
    </DashboardLayout>
  );
};

export default MarketplacePage;