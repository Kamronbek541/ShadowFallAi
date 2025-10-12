// import React from 'react';
// import styles from './SignInPage.module.css';
// import { useNavigate } from 'react-router-dom'; 

// const SignInPage = () => {
//     const navigate = useNavigate(); // 2. Инициализируем хук

//   const handleSignIn = (event) => {
//     event.preventDefault(); // Предотвращаем перезагрузку страницы
//     // Здесь в будущем будет логика отправки данных на сервер
//     console.log('Signing in...');
//     // 3. Перенаправляем пользователя в дашборд
//     navigate('/dashboard');
//   };
//   return (
//     <div className={styles.signInPage}>
//       <div className={styles.formContainer}>
//         <h1>Welcome Back</h1>
//         <p className={styles.subheading}>Enter your email and password to sign in</p>
//         <form onSubmit={handleSignIn}>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Your email" />
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Your password" />
//             <div className={styles.rememberMe}>
//               <label className={styles.switch}>
//                 <input type="checkbox" />
//                 <span className={styles.slider}></span>
//               </label>
//               <span>Remember me</span>
//             </div>
//             <button type="submit" className={styles.submitButton}>SIGN IN</button>
//           </form>

import React, { useState } from 'react';
import styles from './SignInPage.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSubscription } from '../context/SubscriptionContext'; // 1. Импортируем контекст

const SignInPage = () => {
  const navigate = useNavigate();
  const { login } = useSubscription(); // 2. Получаем функцию login
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5252/api/auth/login', formData);
      
      // 3. Вызываем функцию login из контекста
      login(response.data.user, response.data.token);
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign in failed.');
    }
  };

  return (
    <div className={styles.signInPage}>
      <div className={styles.formContainer}>
        <h1>Welcome Back</h1>
        <p className={styles.subheading}>Enter your email and password to sign in</p>
        <form onSubmit={handleSignIn}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password" value={formData.password} onChange={handleChange} required />
            {/* ... remember me ... */}
            <button type="submit" className={styles.submitButton}>SIGN IN</button>
            {error && <p className={styles.errorText}>{error}</p>}
        </form>
          <p className={styles.signUpLink}>
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
      </div>
      <div className={styles.imageContainer}>
          <div className={styles.imageOverlay}>
              <h2>AI PILLS</h2>
          </div>
      </div>
    </div>
  );
};

export default SignInPage;