import React from 'react';
import styles from './Widget.module.css';

const SalesOverviewWidget = () => {
  return (
    <div className={`${styles.widget} ${styles.salesWidget}`}>
      <h4>Sales overview</h4>
      <p><span className={styles.highlight}>(+5) more</span> in 2021</p>
      <div className={styles.chartPlaceholder}>
        {/* Здесь в будущем будет компонент графика */}
        <p>Chart Component</p>
      </div>
    </div>
  );
};
export default SalesOverviewWidget;