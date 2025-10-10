// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // !!! ВАЖНО: СЕЙЧАС МЫ СИМУЛИРУЕМ УСПЕШНЫЙ ВХОД !!!
  // В будущем здесь будет проверка реального токена авторизации
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    return <Navigate to="/sign-in" />;
  }

  // Если авторизован, показываем запрошенную страницу (Dashboard)
  return children;
};

export default ProtectedRoute;