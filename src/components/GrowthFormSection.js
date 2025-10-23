import React, { useState } from 'react';
import styles from './GrowthFormSection.module.css';
import silhouetteImage from '../assets/background_contact.png';
import axios from 'axios'; // 1. Импортируем axios


const GrowthFormSection = ({ withBackground = true }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');

  //   // --- НАСТРОЙКА ---
  //   const formActionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScOxqHvjk5LQDqcQ8FAqwQ4xpPMzC6gDGKM9Ox9XJ02BgRwcw/formResponse';
    
  //   // ВАЖНО: Убедись, что эти ID в точности совпадают с твоей предзаполненной ссылкой
  //   const googleFormFields = {
  //     'entry.618750573': formData.firstName,
  //     'entry.1026656173': formData.lastName,
  //     'entry.1978642465': formData.email,
  //     'entry.1263864905': formData.phone,
  //   };
    
  //   // --- МАГИЯ: СОЗДАЕМ НЕВИДИМЫЙ IFRAME И ФОРМУ ---
  //   const iframe = document.createElement('iframe');
  //   iframe.name = 'hidden_iframe';
  //   iframe.id = 'hidden_iframe';
  //   iframe.style.display = 'none';
  //   document.body.appendChild(iframe);

  //   const form = document.createElement('form');
  //   form.action = formActionUrl;
  //   form.method = 'POST';
  //   form.target = 'hidden_iframe'; // Отправляем через iframe

  //   // Добавляем все наши поля в эту невидимую форму
  //   for (const key in googleFormFields) {
  //     const input = document.createElement('input');
  //     input.type = 'hidden';
  //     input.name = key;
  //     input.value = googleFormFields[key];
  //     form.appendChild(input);
  //   }
    
  //   document.body.appendChild(form);
  //   form.submit(); // Отправляем форму

  //   // Так как отправка идет в iframe, мы не получаем прямого ответа.
  //   // Мы просто ждем секунду и предполагаем, что все прошло успешно.
  //   setTimeout(() => {
  //     setStatus('Success! We will contact you soon.');
  //     setFormData({ firstName: '', lastName: '', email: '', phone: '', businessName: '' });
  //     document.body.removeChild(form);
  //     document.body.removeChild(iframe);
  //   }, 1000); // 1 секунда задержки
  // };

 const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formActionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScOxqHvjk5LQDqcQ8FAqwQ4xpPMzC6gDGKM9Ox9XJ02BgRwcw/formResponse';
    
    const googleFormFields = {
      'entry.618750573': formData.firstName,
      'entry.1026656173': formData.lastName,
      'entry.1978642465': formData.email,
      'entry.1263864905': formData.phone,
    };
    
    // --- Метод с невидимым iframe ---
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.id = 'hidden_iframe';
    iframe.style.display = 'none'; // Iframe остается невидимым
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.action = formActionUrl;
    form.method = 'POST';
    form.target = 'hidden_iframe';

    for (const key in googleFormFields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = googleFormFields[key];
      form.appendChild(input);
    }
    
    document.body.appendChild(form);
    form.submit();

    // --- ИЗМЕНЕНИЕ: Возвращаем setTimeout ---
    // Ждем секунду, чтобы дать форме отправиться, а затем показываем успех и очищаем
    setTimeout(() => {
      setStatus('Success! We will contact you soon.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', businessName: '' });
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      // Через 3 секунды после успеха убираем сообщение
      setTimeout(() => setStatus(''), 3000); 
    }, 1000);
  };
  const sectionStyle = withBackground ? {
    backgroundImage: `url(${silhouetteImage}), linear-gradient(120deg, #5F0A87 0%, #A500E1 100%)`
  } : {};

  return (
    <section 
      className={`${styles.growthSection} ${!withBackground ? styles.noBackground : ''}`} 
      style={sectionStyle}
    >
      <div className={`container ${styles.growthContainer}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2>Ready to craft smoother operations, higher profits, and consistent growth with AI PILLS?</h2>
            <p>
              Please fill in the form below — we'll call you within 24 hours to show how AI PILLS fits
              your business & arrange a <span className={styles.highlight}>free trial/demo</span>
            </p>
          </div>
          <div className={styles.formContainer}>
            <h3>Get your growth formula now</h3>
            {/* 5. Обновляем форму */}
            <form className={styles.growthForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
              </div>
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="businessName" placeholder="Business Name / Website (optional)" value={formData.businessName} onChange={handleChange} />
              <button type="submit" className={`btn ${styles.submitButton}`}>
                {status === 'Sending...' ? 'Sending...' : "Let's automate & scale"}
              </button>
              {status && <p className={styles.statusMessage}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthFormSection;