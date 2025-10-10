import React from 'react';
import styles from './Sidebar.module.css';
// Используем иконки для красоты
import { MdDashboard, MdOutlineAccountBalanceWallet, MdStore, MdSchool, MdPerson, MdBugReport, MdSupport, MdHelp, MdPages, MdSettings, MdLogout } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span>AI CROW</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/dashboard" className={styles.active}><MdDashboard /> Dashboard</a></li>
<li><a href="/dashboard/my-package"><MdOutlineAccountBalanceWallet /> My Package</a></li>
<li><a href="/dashboard/marketplace"><MdStore /> Marketplace</a></li>
<li><a href="/dashboard/education"><MdSchool /> Education</a></li>
<li><a href="/dashboard/blog"><MdBugReport /> Blog</a></li>
<li><a href="/dashboard/support"><MdSupport /> Support</a></li>
<li><a href="/dashboard/faq"><MdPages /> FAQ</a></li>
          <li><a href="#"><MdPages /> Reviews</a></li>
        </ul>
        <h5 className={styles.navSectionTitle}>ACCOUNT PAGES</h5>
        <ul>
        <li><a href="/dashboard/profile"><MdPerson /> Profile</a></li>
        <li><a href="/dashboard/support"><MdSupport /> Support</a></li>
          <li><a href="#"><MdSettings /> Settings</a></li>
          <li><a href="#"><MdLogout /> Logout</a></li>
        </ul>
      </nav>
      <div className={styles.helpBox}>
        <div className={styles.helpIcon}><MdHelp /></div>
        <h4>Need help?</h4>
        <p>Please check our docs</p>
        <button>DOCUMENTATION</button>
      </div>
    </aside>
  );
};

export default Sidebar;