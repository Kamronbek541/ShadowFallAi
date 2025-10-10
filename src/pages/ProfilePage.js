import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './ProfilePage.module.css';
import ProfileHeader from '../components/dashboard/ProfileHeader';
import AccountSettings from '../components/dashboard/AccountSettings';
import { useSubscription } from '../context/SubscriptionContext';

const ProfilePage = () => {
  // 1. Получаем реального пользователя из нашего глобального контекста
  const { user } = useSubscription();

  // 2. Добавляем проверку на случай, если данные еще загружаются или пользователь не вошел
  if (!user) {
    return (
      <DashboardLayout currentPage="Profile">
        <div className={styles.loading}>Loading profile...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout currentPage="Profile">
      {/* 3. Передаем РЕАЛЬНЫЕ username и email в ProfileHeader */}
      <ProfileHeader username={user.username} email={user.email} />
      
      <div className={styles.grid}>
        {/* 4. AccountSettings тоже нужно будет обновить, чтобы он принимал данные */}
        <AccountSettings userData={user} />
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;