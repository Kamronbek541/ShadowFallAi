import React from 'react';
import styles from './DashboardLayout.module.css';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader'; // 1. Импортируем

const DashboardLayout = ({ children, currentPage }) => { // 2. Принимаем currentPage
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <DashboardHeader currentPage={currentPage} /> {/* 3. Вставляем и передаем prop */}
        <div className={styles.pageContent}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;