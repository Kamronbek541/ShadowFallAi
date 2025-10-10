import React, { useState, useEffect } from 'react';
import styles from './AccountSettings.module.css';

// 1. Компонент теперь принимает `userData`
const AccountSettings = ({ userData }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // 2. Используем useEffect, чтобы заполнить форму, когда данные пользователя загрузятся
  useEffect(() => {
    if (userData) {
      setFormData(prev => ({
        ...prev,
        username: userData.username,
        email: userData.email,
      }));
    }
  }, [userData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Profile updated successfully!");
    console.log("Saving data:", formData);
  };

  return (
    <div className={styles.card}>
      <h4>Account Settings</h4>
      <p className={styles.subtitle}>Here you can change your account information</p>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={formData.username} // Теперь здесь реальные данные
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email} // И здесь тоже
              onChange={handleChange}
            />
          </div>

          <hr className={styles.divider} />

          {/* CHANGE PASSWORD */}
          <h5 className={styles.formSectionTitle}>Change Password</h5>
          <div className={styles.formGroup}>
            <label htmlFor="currentPassword">Current Password</label>
            <input 
              type="password" 
              id="currentPassword" 
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter your current password"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword">New Password</label>
            <input 
              type="password" 
              id="newPassword" 
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your new password"
            />
          </div>
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.saveButton}>Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;