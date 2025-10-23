import React from 'react';
import styles from './ProblemSolutionSection.module.css';


// Данные для карточек
const data = [
  { problem: "Leads slipping away after first contact", solution: "Automated first-touch + reminders + optimized messaging templates." },
  { problem: "Inconsistent brand presence & content across platforms", solution: "Centralized campaign management + content planning + automated posts." },
  { problem: "Don't know which channel/content type drives most sales", solution: "Analytics, Content Performance Scanner, that tracks where leads came from." },
  { problem: "Inventory or operational data delayed or incorrect (stock, orders, licenses)", solution: "Chatbots, intelligent follow-ups, Automations integrated with CRM." },
  { problem: "Inventory or operational data delayed or incorrect (stock, orders, licenses)", solution: "Real-time status, auto updates, alerts built-in." }
];

const ProblemSolutionSection = () => {
  return (
    <section className={styles.benefitsSection}>
    <div className={styles.animationWrapper}>
            <div className={styles.ball1}></div>
            <div className={styles.ball2}></div>
            <div className={styles.ball3}></div>
          </div>
      
      
      <div className={`container ${styles.contentContainer}`}>
        <h2 className={styles.mainTitle}>Small and Medium Business</h2>
        <div className={styles.columnsWrapper}>
          {/* Колонка Проблем */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Problem</h3>
            {data.map((item, index) => (
              <div key={index} className={styles.card}>
                {item.problem}
              </div>
            ))}
          </div>
          {/* Колонка Решений */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Solution</h3>
            {data.map((item, index) => (
              <div key={index} className={styles.card}>
                {item.solution}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;