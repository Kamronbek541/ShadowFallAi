// src/components/dashboard/PlatformSettings.js
import React from 'react';
import styles from './PlatformSettings.module.css';
const Switch = ({ label, checked = false }) => (
  <div className={styles.settingRow}>
    <label className={styles.switch}><input type="checkbox" defaultChecked={checked} /><span className={styles.slider}></span></label>
    <span>{label}</span>
  </div>
);
const PlatformSettings = () => (
  <div className={styles.card}>
    <h4>Platform Settings</h4>
    <p className={styles.sectionTitle}>ACCOUNT</p>
    <Switch label="Email me when someone follows me" checked={true} />
    <Switch label="Email me when someone answers on my post" />
    <Switch label="Email me when someone mentions me" checked={true} />
    <p className={styles.sectionTitle}>APPLICATION</p>
    <Switch label="New launches and projects" />
    <Switch label="Monthly product updates" />
    <Switch label="Subscribe to newsletter" checked={true} />
  </div>
);
export default PlatformSettings;