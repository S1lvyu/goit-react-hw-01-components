import React from 'react';
import styles from './TransactionHistory.module.css';
export default function TransactionHistory({ data }) {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id} className={styles.table__row}>
              <td className={styles.table__data}>{item.type}</td>
              <td className={styles.table__data}>{item.amount}</td>
              <td className={styles.table__data}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
