import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddItem.module.css';

function AddItem(props) {
  const [inputValue, setInputValue] = useState('');

  const handleAddButtonClick = () => {
    props.onAddItem(inputValue);
    alert(`You added ${inputValue}`);
    setInputValue('');
  };

  return (
    <div className="addItemBox">
      <input
        className={styles.addInput}
        type="text"
        placeholder="Add an item"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <span className={styles.addIconContainer}>
        <AddIcon
          className={styles.addIcon}
          onClick={() => handleAddButtonClick()}
        />
      </span>
    </div>
  );
}

export default AddItem;
