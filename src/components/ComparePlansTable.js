import React from 'react';
import styles from './ComparePlansTable.module.css';

// Всю информацию из таблицы выносим в массив для чистоты кода
const tableData = [
  { feature: { name: 'Number of Users' }, launch: '20 Pages', acceleration: '600 Pages', flight: 'Unlimited', subtext: { acceleration: 'Pages Add-ons on Demand', flight: 'Pages Add-ons on Demand' } },
  { feature: { name: 'Users Per Page' }, launch: '5 Pages', acceleration: '50 Pages', flight: 'Unlimited' },
  { feature: { name: 'Includes essential features to get started' }, launch: true, acceleration: true, flight: true },
  { feature: { name: 'More advanced features for increased productivity' }, launch: true, acceleration: true, flight: true },
  { feature: { name: 'Designing & Development' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Customizable options to meet your specific needs' }, launch: true, acceleration: true, flight: true },
  { feature: { name: 'Secure data storage' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Email Support' }, launch: '2 initial mails and follow-ups', acceleration: 'same + rebooking (cancelations)', flight: 'same + bonuses' },
  { feature: { name: '24/7 customer support' }, launch: true, acceleration: true, flight: true },
  { feature: { name: 'Analytics and reporting (market, competitors, prices, strategies, etc.)' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'Account Management' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'SMM' }, launch: '2 posts + 1 reel daily', acceleration: '1 post + 2 reels daily', flight: '2 posts + 2 reels* daily' },
  { feature: { name: 'Digital Avatar' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Veo3* (проверить название) Video' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'SM Sources' }, launch: 'IG + Fb + TT', acceleration: 'IG + Fb + TT + LIn', flight: 'IG + Fb + TT + LIn + YouTube Shorts' },
  { feature: { name: 'Booking' }, launch: true, acceleration: true, flight: true },
  { feature: { name: 'Google Review' }, launch: false, acceleration: 'Notification about Negative', flight: 'Same + autoresponse' },
  { feature: { name: 'Leads Searching' }, launch: '30 per day from Google maps', acceleration: '30 per day from any sourse (from listed)', flight: 'Same' },
  { feature: { name: 'Client Data Base' }, launch: 'Google Sheet OR Air Table', acceleration: 'CRM', flight: 'CRM' },
  { feature: { name: 'Reminders for clients' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Requests for Review' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Upselling? Cross-selling' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Sales, activities, gateways' }, launch: false, acceleration: true, flight: true },
  { feature: { name: 'Marketing Strategies Development' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'CRM Integration' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'Investor Search' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'Voice Assistant' }, launch: false, acceleration: false, flight: true },
  { feature: { name: 'Voice Imitation' }, launch: false, acceleration: false, flight: true },
];

// Компонент для галочки
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#A500E1"/>
    </svg>
);


// const ComparePlansTable = () => {
//   return (
//     <section className={styles.compareSection}>
//       <div className="container">
//         <div className={styles.comparisonTable}>
//           {/* --- HEADER ROW --- */}
//           <div className={`${styles.tableCell} ${styles.featureHeader}`}>
//             <h4>Compare plans</h4>
//             <p>Choose your workspace plan according to your organisational plan</p>
//           </div>
//           <div className={`${styles.tableCell} ${styles.planHeader}`}>
//             <h4>Launch</h4>
//             <button className={styles.planButton}>Choose This Plan</button>
//           </div>
//           <div className={`${styles.tableCell} ${styles.planHeader}`}>
//             <h4>Acceleration</h4>
//             <button className={styles.planButton}>Choose This Plan</button>
//           </div>
//           <div className={`${styles.tableCell} ${styles.planHeader}`}>
//             <h4>Flight</h4>
//             <button className={styles.planButton}>Choose This Plan</button>
//           </div>

//           {/* --- DATA ROWS --- */}
//           {tableData.map((row, index) => (
//             <React.Fragment key={index}>
//               <div className={`${styles.tableCell} ${styles.featureCell}`}>
//                 <h4>{row.feature.name}</h4>
//               </div>
//               {[ 'launch', 'acceleration', 'flight' ].map(plan => (
//                 <div key={plan} className={`${styles.tableCell} ${styles.dataCell}`}>
//                   {row[plan] === true ? <CheckIcon /> : 
//                    row[plan] === false ? <span>-</span> :
//                    <div>
//                      <span>{row[plan]}</span>
//                      {row.subtext && row.subtext[plan] && <small>{row.subtext[plan]}</small>}
//                    </div>
//                   }
//                 </div>
//               ))}
//             </React.Fragment>
//           ))}

//           {/* --- FOOTER ROW --- */}
//           <div className={`${styles.tableCell} ${styles.footerCell}`}>
//             <button className={styles.salesButton}>Talk to Sales</button>
//           </div>
//           <div className={`${styles.tableCell} ${styles.footerCell}`}>
//             <button className={styles.buyButton}>Buy</button>
//           </div>
//           <div className={`${styles.tableCell} ${styles.footerCell}`}>
//             <button className={styles.buyButton}>Buy</button>
//           </div>
//           <div className={`${styles.tableCell} ${styles.footerCell}`}>
//             <button className={styles.buyButton}>Buy</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComparePlansTable;


const ComparePlansTable = () => {
  const plans = [
    { name: 'Launch', key: 'launch' },
    { name: 'Acceleration', key: 'acceleration' },
    { name: 'Flight', key: 'flight' }
  ];

  const renderValue = (value, subtext) => {
    if (value === true) return <CheckIcon />;
    if (value === false) return <span>-</span>;
    return (
      <div>
        <span>{value}</span>
        {subtext && <small>{subtext}</small>}
      </div>
    );
  };

  return (
    <section className={styles.compareSection}>
      <div className="container">
        {/* Десктопная версия таблицы */}
        <div className={styles.comparisonTable}>
          {/* Заголовок */}
          <div className={`${styles.tableCell} ${styles.featureHeader}`}>
            <h4>Compare plans</h4>
            <p>Choose your workspace plan according to your organisational plan</p>
          </div>
          
          {/* Заголовки планов */}
          {plans.map(plan => (
            <div key={plan.key} className={`${styles.tableCell} ${styles.planHeader}`}>
              <h4>{plan.name}</h4>
              <button className={styles.planButton}>Choose This Plan</button>
            </div>
          ))}

          {/* Данные */}
          {tableData.map((row, index) => (
            <React.Fragment key={index}>
              <div className={`${styles.tableCell} ${styles.featureCell}`}>
                <h4>{row.feature.name}</h4>
              </div>
              {plans.map(plan => (
                <div key={plan.key} className={`${styles.tableCell} ${styles.dataCell}`}>
                  {renderValue(row[plan.key], row.subtext && row.subtext[plan.key])}
                </div>
              ))}
            </React.Fragment>
          ))}

          {/* Футер */}
          <div className={`${styles.tableCell} ${styles.footerCell}`}>
            <button className={styles.salesButton}>Talk to Sales</button>
          </div>
          {plans.map(plan => (
            <div key={plan.key} className={`${styles.tableCell} ${styles.footerCell}`}>
              <button className={styles.buyButton}>Buy</button>
            </div>
          ))}
        </div>

        {/* Мобильная версия карточек */}
        {plans.map(plan => (
          <div key={plan.key} className={styles.mobilePlanCard}>
            <div className={styles.mobilePlanHeader}>
              <h4>{plan.name}</h4>
              <button className={styles.mobilePlanButton}>Choose This Plan</button>
            </div>
            
            {tableData.map((row, index) => (
              <div key={index} className={styles.mobileFeatureRow}>
                <div className={styles.mobileFeatureName}>
                  {row.feature.name}
                </div>
                <div className={styles.mobileFeatureValue}>
                  {renderValue(row[plan.key], row.subtext && row.subtext[plan.key])}
                </div>
              </div>
            ))}
            
            <div className={styles.mobilePlanFooter}>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparePlansTable;