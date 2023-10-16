import React from 'react';
import styles from './Stats.module.css';

function Stats(props) {
  return (
    <>
      <div className={styles.statsBox}>
        <p className={styles.statsText}>
          Total quantity: {props.totalQuantity}
        </p>
      </div>
      <div>
        <p>
          You have purchased {props.purchasedCount} items from your list, you
          need to purchase {props.remainingCount} more!
        </p>
      </div>
    </>
  );
}

export default Stats;
