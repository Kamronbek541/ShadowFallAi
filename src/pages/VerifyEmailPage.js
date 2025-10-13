import React, { useState } from 'react';
import styles from './VerifyEmailPage.module.css';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom'; // 1. useSearchParams вместо useLocation

const VerifyEmailPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); // 2. Используем хук для чтения URL

    // 3. Получаем email из параметра в URL
    const email = searchParams.get('email');

    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    if (!email) {
        return (
            <div className={styles.verifyPage}>
                <div className={styles.card}>
                    <h2>Error</h2>
                    <p>No email address provided. Please go back to the registration page and try again.</p>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.post(`${apiUrl}/auth/verify`, { // Убедись, что порт 5252
                email,
                code,
            });

            setMessage(response.data.message);

            setTimeout(() => {
                navigate('/sign-in');
            }, 2000);

        } catch (err) {
            setError(err.response?.data?.message || 'Verification failed.');
        }
    };

    return (
        <div className={styles.verifyPage}>
            <div className={styles.card}>
                <h2>Check your email</h2>
                <p>We've sent a 6-digit verification code to <strong>{email}</strong>. Please enter it below.</p>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="code">Verification Code</label>
                    <input
                        type="text"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        maxLength="6"
                        placeholder="_ _ _ _ _ _"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Verify Account</button>
                </form>

                {message && <p className={styles.messageSuccess}>{message}</p>}
                {error && <p className={styles.messageError}>{error}</p>}
            </div>
        </div>
    );
};

export default VerifyEmailPage;