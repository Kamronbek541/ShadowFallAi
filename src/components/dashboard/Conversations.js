// src/components/dashboard/Conversations.js
import React from 'react';
import styles from './Conversations.module.css';
// Здесь должны быть реальные аватарки, пока используем плейсхолдеры
const conversations = [
  { name: 'Esthera Jackson', msg: 'Hi! I need more information...' },
  { name: 'Esthera Jackson', msg: 'Awesome work, can you change...' },
  { name: 'Esthera Jackson', msg: 'Have a great afternoon...' },
  { name: 'Esthera Jackson', msg: 'About files I can...' },
];
const Conversations = () => (
  <div className={styles.card}>
    <h4>Conversations</h4>
    <div className={styles.list}>
      {conversations.map((c, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.avatar}></div>
          <div className={styles.text}>
            <strong>{c.name}</strong>
            <p>{c.msg}</p>
          </div>
          <a href="#" className={styles.reply}>REPLY</a>
        </div>
      ))}
    </div>
  </div>
);
export default Conversations;