// src/layouts/AuthLayout.js
import React from 'react';

// Этот компонент просто рендерит дочерние элементы.
// Он нужен для разделения логики в App.js
const AuthLayout = ({ children }) => {
  return <>{children}</>;
};

export default AuthLayout;