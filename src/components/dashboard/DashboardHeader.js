import React from 'react';
import styles from './DashboardHeader.module.css';
import { MdHome, MdSearch, MdPerson, MdSettings, MdNotifications } from 'react-icons/md';
import { useSubscription } from '../../context/SubscriptionContext';

// Мы будем передавать название текущей страницы как prop
const DashboardHeader = ({ currentPage = "Dashboard" }) => {
    const { user } = useSubscription();
  return (
    <header className={styles.header}>
      <div className={styles.breadcrumbs}>
        <MdHome className={styles.homeIcon} />
        <span className={styles.path}>Pages / {currentPage}</span>
        <h3 className={styles.currentPage}>{currentPage}</h3>
      </div>
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <MdSearch className={styles.searchIcon} />
          <input type="text" placeholder="Type here..." />
        </div>
<div className={styles.signInLink}>
          <MdPerson />
          <span>{user ? user.username : 'Sign In'}</span>
        </div>
        <button className={styles.iconButton}>
          <MdSettings />
        </button>
        <button className={styles.iconButton}>
          <MdNotifications />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;