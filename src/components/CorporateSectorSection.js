import React from 'react';
import styles from './CorporateSectorSection.module.css';

// Datos para las tarjetas de "Problem" y "Solution"
const corporateData = [
  { problem: "Lack of real-time analytics and decision delays", solution: "Stay ahead with live insights" },
  { problem: "Fragmented systems and no single view", solution: "Unified tools, one dashboard, total clarity" },
  { problem: "High manual labor costs on repetitive tasks", solution: "Automate work, cut costs, boost focus" },
  { problem: "Lost leads and gaps in the sales funnel", solution: "Capture every lead, follow up automatically" },
  { problem: "Unclear marketing ROI and wasted ad spend", solution: "Track every dollar, see what converts" },
  { problem: "Difficulty scaling without operational chaos", solution: "Scale smoothly, stay streamlined and in control" },
  { problem: "Slow internal approvals and decision-making layers", solution: "Faster workflows, quicker decisions" },
  { problem: "Lack of personalization at scale", solution: "Personalize at scale, deliver tailored experiences" },
  { problem: "Integration challenges with new technologies", solution: "Plug in seamlessly, adopt tech without disruption" },
  { problem: "Rising costs of compliance and data security", solution: "Stay secure, stay compliant, protect your data" }
];

const CorporateSectorSection = () => {
  return (
    <section className={styles.corporateSection}>
      <div className={`container ${styles.contentContainer}`}>
        <h2 className={styles.mainTitle}>Corporate Sector</h2>
        <div className={styles.columnsWrapper}>
          {/* Columna de Problemas */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Problem</h3>
            {corporateData.map((item, index) => (
              <div key={index} className={styles.card}>
                {item.problem}
              </div>
            ))}
          </div>
          {/* Columna de Soluciones */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Solution</h3>
            {corporateData.map((item, index) => (
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

export default CorporateSectorSection;