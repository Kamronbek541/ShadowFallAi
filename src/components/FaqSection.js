import React, { useState } from 'react';
import styles from './FaqSection.module.css';

// Данные для FAQ
const faqData = [
  {
    question: "What is AI Crow and how can it help my business?",
    answer: "AI Crow is an all-in-one platform that automates your sales, marketing, and operations. It helps you discover leads, automate outreach, and gain insights to boost revenue and efficiency."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial for all our new users. You can explore all the features without any commitment. Just sign up and get started."
  },
  {
    question: "Which industries do you primarily serve?",
    answer: "Our platform is versatile and serves a wide range of industries, including e-commerce, real estate, tech startups, and marketing agencies. It's customizable to fit your specific needs."
  },
  {
    question: "How secure is my data with Shadowfall?",
    answer: "Data security is our top priority. We use end-to-end encryption, secure cloud infrastructure, and comply with all major data protection regulations to ensure your information is always safe."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Первый вопрос открыт по умолчанию

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className={styles.title}>Frequently Asked Questions (FAQ)</h2>
        <div className={styles.faqGrid}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className={styles.question}>
                  <span>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <div className={styles.answer}>
                    <div className={styles.answerContent}>{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;