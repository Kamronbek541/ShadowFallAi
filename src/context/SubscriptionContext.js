import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Создаем контекст
const SubscriptionContext = createContext();

// 2. Создаем Провайдер, который будет "владеть" состоянием
export const SubscriptionProvider = ({ children }) => {
  // --- СОСТОЯНИЕ ДЛЯ ПОЛЬЗОВАТЕЛЯ ---
  const [user, setUser] = useState(() => {
    // При первой загрузке пытаемся достать пользователя из localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // --- СОСТОЯНИЕ ДЛЯ ПОДПИСКИ ПОЛЬЗОВАТЕЛЯ ---
  const [currentUserPackage, setCurrentUserPackage] = useState(
    () => localStorage.getItem('userPackage') || null
  );

  // --- СОСТОЯНИЕ ДЛЯ СТАТИСТИКИ ---
  const [packageStats, setPackageStats] = useState(
    () => {
      const savedStats = localStorage.getItem('packageStats');
      return savedStats ? JSON.parse(savedStats) : {
        launch: { users: 124, leadGrowth: 30, revenueIncrease: 40 },
        acceleration: { users: 89, leadGrowth: 50, revenueIncrease: 60 },
        flight: { users: 56, leadGrowth: 70, revenueIncrease: 90 },
      };
    }
  );

  // --- ЭФФЕКТЫ ДЛЯ СОХРАНЕНИЯ В LOCALSTORAGE ---

  // Этот useEffect срабатывает каждый раз, когда меняется `user`
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Этот useEffect срабатывает каждый раз, когда меняется `currentUserPackage`
  useEffect(() => {
    if (currentUserPackage) {
      localStorage.setItem('userPackage', currentUserPackage);
    } else {
      localStorage.removeItem('userPackage');
    }
  }, [currentUserPackage]);

  // Этот useEffect срабатывает каждый раз, когда меняется `packageStats`
  useEffect(() => {
    localStorage.setItem('packageStats', JSON.stringify(packageStats));
  }, [packageStats]);
  
  // --- ФУНКЦИИ ДЛЯ УПРАВЛЕНИЯ СОСТОЯНИЕМ ---

  // Функция для "входа" пользователя
  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token); // Сохраняем токен отдельно
    // Устанавливаем текущий пакет пользователя из его данных
    setCurrentUserPackage(userData.subscription || null);
  };
  
  // Функция для "выхода"
  const logout = () => {
    setUser(null);
    setCurrentUserPackage(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('userPackage');
    // В реальном приложении можно было бы сбросить и статистику или обновить ее с сервера
  };

  // Функция для "выбора/покупки" пакета
  const selectPackage = (packageName) => {
    if (currentUserPackage !== packageName) {
      setPackageStats(prevStats => ({
        ...prevStats,
        [packageName.toLowerCase()]: {
          ...prevStats[packageName.toLowerCase()],
          users: prevStats[packageName.toLowerCase()].users + 1
        }
      }));
    }
    setCurrentUserPackage(packageName);
    // В реальном приложении здесь был бы запрос на бэкенд для обновления подписки пользователя
  };
  
  // Все значения, которые мы хотим сделать доступными для всего приложения
  const value = {
    user,
    currentUserPackage,
    packageStats,
    login,
    logout,
    selectPackage
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

// 3. Создаем хук для удобного использования контекста в других компонентах
export const useSubscription = () => {
  return useContext(SubscriptionContext);
};