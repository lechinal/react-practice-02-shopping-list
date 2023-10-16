import React from 'react';
import styles from './Stats.module.css';

function Stats(props) {
  return (
    <div className={styles.statsBox}>
      <p className={styles.statsText}>Total: {props.totalQuantity}</p>
    </div>
  );
}

export default Stats;
