import React from 'react';
import styles from './Stats.module.css';

function Stats({ totalItems, checkedItems, remainingItems, totalQuantity }) {
  return (
    <div className={styles.statsBox}>
      <p className={styles.statsText}>
        You have{' '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>{totalItems}</span>{' '}
        items in the list, with a Total quantity of:{' '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {totalQuantity}
        </span>
      </p>
      <p className={styles.statsText}>
        You have{' '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {checkedItems}
        </span>{' '}
        items checked.
      </p>
      <p className={styles.statsText}>
        {' '}
        You have{' '}
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {remainingItems}
        </span>{' '}
        remaining items to be checked.
      </p>
    </div>
  );
}

export default Stats;
