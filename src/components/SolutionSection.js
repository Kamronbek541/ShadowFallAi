import React from 'react';
import styles from './SolutionSection.module.css';
import allInOneImage from '../assets/all_in_one1.png'; 

const SolutionSection = () => {
  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>The solution is <span>here</span></h2>
          <p>no more lost leads, wasted time in CRMS, or missed sales.</p>
        </div>

        {/* ИЗМЕНЕНИЕ: Новый контейнер для позиционирования */}
        <div className={styles.gridWrapper}>
          
          {/* Сетка теперь содержит ТОЛЬКО карточки */}
          <div className={styles.solutionGrid}>
            <div className={`${styles.cardWrapper} ${styles.cardTopLeft}`}>
              <div className={styles.solutionCard}>
                <h3>Lead Discovery</h3>
                <p>Identify, qualify, and capture leads instantly</p>
                <ul>
                  <li>Al-driven lead identification</li>
                  <li>Targeted prospecting</li>
                  <li>Smart filtering</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.cardWrapper} ${styles.cardTopRight}`}>
              <div className={styles.solutionCard}>
                <h3>Insights</h3>
                <p>Know what resonates with your audience</p>
                <ul>
                  <li>Al-powered content recommendations</li>
                  <li>Campaign optimization</li>
                  <li>Engagement tracking</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.cardWrapper} ${styles.cardBottomLeft}`}>
              <div className={styles.solutionCard}>
                <h3>Outreach Automation</h3>
                <p>Never miss another opportunity to connect.</p>
                <ul>
                  <li>Automated first contact</li>
                  <li>Sequenced follow-ups</li>
                  <li>Personalized engagement at scale</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.cardWrapper} ${styles.cardBottomRight}`}>
              <div className={styles.solutionCard}>
                <h3>Sales Flow</h3>
                <p>Close more deals, faster</p>
                <ul>
                  <li>Pipeline automation</li>
                  <li>Task management</li>
                  <li>Conversion-focused workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* АБСОЛЮТНО спозиционированный центральный блок */}
          <div className={styles.allInOne}>
            <div className={styles.glow}></div>
            <img src={allInOneImage} alt="All in one platform" className={styles.allInOneImage} />
            {/* <div className={styles.allInOneContent}>
              ALL IN ONE <span>PLATFORM</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;