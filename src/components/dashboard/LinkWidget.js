import React from 'react';
import styles from './Widget.module.css';

const LinkWidget = ({ title, description, link, image }) => {
  return (
    <a href={link} className={`${styles.widget} ${styles.linkWidget}`}>
      <img src={image} alt={title} className={styles.linkBg} />
      <div className={styles.linkOverlay}>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>Read more &rarr;</span>
      </div>
    </a>
  );
};
export default LinkWidget;