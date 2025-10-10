import React from 'react';
import styles from './PackageComparisonTable.module.css';
import { useSubscription } from '../../context/SubscriptionContext';
import { FaEllipsisV } from 'react-icons/fa'; // Иконка трех точек

const PackageComparisonTable = () => {
  // Получаем динамические данные из нашего глобального состояния
  const { packageStats } = useSubscription();

  // Собираем данные в удобный массив для рендеринга
  const tableRows = [
    {
      initial: 'L',
      name: 'Launch',
      color: '#4CAF50', // Просто для примера, можно убрать
      members: packageStats.launch.users,
      leadGrowth: packageStats.launch.leadGrowth,
      revenueIncrease: packageStats.launch.revenueIncrease,
    },
    {
      initial: 'A',
      name: 'Acceleration',
      color: '#FFC107',
      members: packageStats.acceleration.users,
      leadGrowth: packageStats.acceleration.leadGrowth,
      revenueIncrease: packageStats.acceleration.revenueIncrease,
    },
    {
      initial: 'F',
      name: 'Flight',
      color: '#F44336',
      members: packageStats.flight.users,
      leadGrowth: packageStats.flight.leadGrowth,
      revenueIncrease: packageStats.flight.revenueIncrease,
    },
  ];


  return (
    <div className={styles.tableCard}>
      <div className={styles.cardHeader}>
        <div>
          <h4>Package Comparison</h4>
          <p><span>30 done</span> this month</p>
        </div>
        <button className={styles.menuButton}>
          <FaEllipsisV />
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>PACKAGE NAME</th>
            <th>MEMBERS</th>
            <th>AVG. LEAD GROWTH</th>
            <th>AVG. REVENUE INCREASE</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(row => (
            <tr key={row.name}>
              <td>
                <div className={styles.packageName}>
                  <span className={styles.initialIcon}>{row.initial}</span>
                  {row.name}
                </div>
              </td>
              <td>
                <div className={styles.members}>
                  {/* Здесь можно добавить аватарки пользователей, если нужно */}
                  {row.members}
                </div>
              </td>
              <td>
                <div className={styles.progressCell}>
                  <span>{row.leadGrowth}%</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${row.leadGrowth}%` }}></div>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.progressCell}>
                  <span>{row.revenueIncrease}%</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${row.revenueIncrease}%` }}></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageComparisonTable;