import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!formData.username || !formData.email || !formData.password) {
        setError("All fields are required.");
        return;
    }
    if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/auth/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setMessage(response.data.message);
      
      setTimeout(() => {
        // navigate('/verify-email', { state: { email: formData.email } });
        navigate(`/verify-email?email=${formData.email}`);
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        {/* --- HEADER --- */}
        <header className={styles.header}>
          <a href="/" className={styles.logo}>AI PILLS</a>
          <nav>
            <a href="/dashboard"><span className={styles.icon}></span>DASHBOARD</a>
            <a href="/dashboard/profile"><span className={styles.icon}></span>PROFILE</a>
            <a href="/sign-up" className={styles.active}><span className={styles.icon}></span>SIGN UP</a>
            <a href="/sign-in"><span className={styles.icon}></span>SIGN IN</a>
          </nav>
          <button className={styles.headerButton}>Free Download</button>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className={styles.mainContent}>
          <div className={styles.welcomeText}>
            <h1>Welcome!</h1>
            <p>Use these awesome forms to login or create new account in your project for free.</p>
          </div>
          <div className={styles.formCard}>
            <h4>Register with</h4>
            <div className={styles.socialButtons}>
              <button><FaFacebook /> </button>
              <button><FaApple /></button>
              <button><FaGoogle /></button>
            </div>
            <div className={styles.divider}>OR</div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Name</label>
              <input type="text" id="username" placeholder="Your full name" value={formData.username} onChange={handleChange} />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email address" value={formData.email} onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Your password" value={formData.password} onChange={handleChange} />
              <div className={styles.rememberMe}>
                <label className={styles.switch}><input type="checkbox" /><span className={styles.slider}></span></label>
                <span>Remember me</span>
              </div>
              <button type="submit" className={styles.submitButton}>SIGN UP</button>
            </form>
            {message && <p className={styles.messageSuccess}>{message}</p>}
            {error && <p className={styles.messageError}>{error}</p>}
            <p className={styles.signInLink}>Already have an account? <a href="/sign-in">Sign in</a></p>
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className={styles.footer}>
          <p>&copy; 2021, Made with ♥ by Creative Tim & Simmmple for a better web.</p>
          <nav>
            <a href="#">Creative Tim</a>
            <a href="#">Simmmple</a>
            <a href="#">Blog</a>
            <a href="#">License</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default SignUpPage;