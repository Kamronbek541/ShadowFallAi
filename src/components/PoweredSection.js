import React from 'react';
import styles from './PoweredSection.module.css';
import handsImage from '../assets/hands.png';

const cardData = [
  {
    title: "Work Smarter, Not Harder",
    text: "Tired of wasting hours on repetitive tasks? Our AI-powered automation tool takes care of the boring stuff—data entry, scheduling, reporting—so your team can focus on what truly drives growth. Imagine cutting down workflows from hours to minutes."
  },
  {
    title: "AI That Thinks Ahead",
    text: "This isn't just automation—it's intelligent automation. Our system learns from your processes, predicts bottlenecks, and suggests the most efficient path forward. You don't just get faster execution—you get smarter decisions that move your business ahead of the curve."
  },
  {
    title: "Scales As You Grow",
    text: "From startups to enterprises, our tool adapts to your evolving needs. Whether you're handling 100 tasks a day or 100,000, the AI continuously learns and adjusts—no need for endless reprogramming. It grows with you, making your operations future-proof."
  }
];

// ---> ИЗМЕНЕНИЕ: Новый SVG для иконки <---
const CardIcon = () => (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
    <mask id="mask0_33_53" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="2" width="35" height="36">
      <path d="M37.1668 23.3333H23.8335V36.6666H37.1668V23.3333ZM11.3335 3.33325L18.8335 16.6666H3.8335L11.3335 3.33325ZM30.5002 16.6666C32.2683 16.6666 33.964 15.9642 35.2142 14.714C36.4644 13.4637 37.1668 11.768 37.1668 9.99992C37.1668 8.23181 36.4644 6.53612 35.2142 5.28587C33.964 4.03563 32.2683 3.33325 30.5002 3.33325C28.7321 3.33325 27.0364 4.03563 25.7861 5.28587C24.5359 6.53612 23.8335 8.23181 23.8335 9.99992C23.8335 11.768 24.5359 13.4637 25.7861 14.714C27.0364 15.9642 28.7321 16.6666 30.5002 16.6666Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3.8335 23.3333L17.1668 36.6666M17.1668 23.3333L3.8335 36.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </mask>
    <g mask="url(#mask0_33_53)">
      <path d="M0.5 0H40.5V40H0.5V0Z" fill="white"/>
    </g>
  </svg>
);

const PoweredSection = () => {
  return (
    <section className={styles.poweredSection}>
      {/* ---> ИЗМЕНЕНИЕ: Картинка теперь не в контейнере, а сама по себе <--- */}
      <img src={handsImage} alt="AI and human hands" className={styles.handsImage} />
      <div className="container">
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>POWERED</h2>
        </div>
        <div className={styles.cardsContainer}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <CardIcon />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomGlow}></div>
    </section>
  );
};

export default PoweredSection;