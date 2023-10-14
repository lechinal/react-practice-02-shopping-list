import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddItem.module.css';

function AddItem() {
  return (
    <div className="addItemBox">
      <input
        className={styles.addInput}
        type="text"
        placeholder="Add an item"
      />
      <span className={styles.addIconContainer}>
        <AddIcon className={styles.addIcon} />
      </span>
    </div>
  );
}

export default AddItem;
