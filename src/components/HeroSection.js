import React from 'react';
import styles from './HeroSection.module.css';
import crowImage from '../assets/Ai_crow.png'; // Убедись, что путь к файлу верный
import aipillsVideo from '../assets/AIPills.mp4';


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgText}>AI⠀PILLS</div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1>
            Automate Your Business, Boost Revenue
            & Never Miss Another Lead with
            <span className={styles.aiCrowText}>AI PILLS</span>
          </h1>
          <p>Streamline your sales, marketing, and operations in one intelligent platform.</p>
          <div className={styles.heroButtons}>
            <button className={`btn ${styles.getStartedButton}`}>
  <span>Get Started</span>
  <svg
    className={styles.getStartedBorder}
    width="100%"
    height="100%"
    viewBox="0 0 160 50"
    preserveAspectRatio="none"
  >
    <path d="M1,1 H159 V39 L149,49 H1 V1 Z" />
  </svg>
</button>
            
            {/* ИЗМЕНЕНИЕ: Новый, более точный SVG для рамки "Learn More" */}
<a href="#learn" className={`btn ${styles.learnMoreButton}`}>
  <span>Learn More</span>
  <svg
    className={styles.learnMoreBorder}
    width="100%"
    height="100%"
    viewBox="0 0 160 50"
    preserveAspectRatio="none"
  >
    <path
      d="M1,1 H159 V39 L149,49 H1 V1 Z"   /* ← срез: V39 (высота), L149,49 (глубина) */
      vectorEffect="non-scaling-stroke"
      strokeLinejoin="miter"
      strokeMiterlimit="20"
    />
  </svg>
</a>


          </div>
        </div>
        <div className={styles.heroImageContainer}>
{/* <svg 
  className={styles.hexagonSvg} 
  viewBox="0 0 100 115.47" 
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <clipPath id="hexClip">
      <polygon points="50,0 100,28.86 100,86.6 50,115.47 0,86.6 0,28.86" />
    </clipPath>
  </defs>

  <polygon 
    points="50,0 100,28.86 100,86.6 50,115.47 0,86.6 0,28.86"
    fill="none"
    stroke="var(--primary-color)"
    strokeWidth="12"
    strokeLinejoin="miter"
    strokeMiterlimit="20"
    clipPath="url(#hexClip)" 
  />
</svg> */}

         <video 
            className={styles.hexagonVideo}
            src={aipillsVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;