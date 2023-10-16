import React from 'react';
import styles from './Stats.module.css';

function Stats({ totalItems, remainingItems, totalQuantity }) {
  return (
    <div className={styles.statsBox}>
      <p className={styles.statsText}>
        You have {totalItems} items in the list, with a Total quantity of:{' '}
        {totalQuantity}
      </p>
      <p className={styles.statsText}>
        {' '}
        You have {remainingItems} remaining items to be checked
      </p>
    </div>
  );
}

export default Stats;
