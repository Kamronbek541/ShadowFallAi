// src/components/dashboard/ProfileHeader.js
import React from 'react';
import styles from './ProfileHeader.module.css';
import { FaPen } from 'react-icons/fa';

const ProfileHeader = ({ username, email }) => { // Принимаем данные пользователя
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.banner}></div>
      <div className={styles.profileCard}>
        <div className={styles.avatarPlaceholder}>
          {username ? username.charAt(0).toUpperCase() : '?'}
          <button className={styles.editAvatarBtn}><FaPen /></button>
        </div>
        <div className={styles.userInfo}>
          <h2>{username}</h2>
          <p>{email}</p>
        </div>
        <div className={styles.tabs}>
          <button className={styles.active}>OVERVIEW</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;