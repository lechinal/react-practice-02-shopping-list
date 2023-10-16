import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddItem.module.css';

function AddItem(props) {
  const [inputValue, setInputValue] = useState('');

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== '') {
      // Verifică dacă valoarea inputului nu este golă sau conține doar spații albe
      props.onAddItem(inputValue);
      alert(`You added ${inputValue}`);
      setInputValue('');
    } else {
      alert('Please enter an item before adding.');
    }
  };

  // const handleAddButtonClick = () => {
  //   props.onAddItem(inputValue);
  //   alert(`You added ${inputValue}`);
  //   setInputValue('');
  // };

  const handleAddItem = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      // Verifică dacă valoarea inputului nu este golă sau conține doar spații albe
      props.onAddItem(inputValue);
      alert(`You added ${inputValue}`);
      setInputValue('');
    } else {
      alert('Please enter an item before adding.');
    }
  };

  // const handleAddItem = event => {
  //   event.preventDefault();
  //   props.onAddItem(inputValue);
  //   alert(`You added ${inputValue}`);
  //   setInputValue('');
  // };

  return (
    <form onSubmit={handleAddItem} className="addItemBox">
      <input
        className={styles.addInput}
        type="text"
        placeholder="Add an item "
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <span className={styles.addIconContainer}>
        <AddIcon
          className={styles.addIcon}
          onClick={() => handleAddButtonClick()}
        />
      </span>
    </form>
  );
}

export default AddItem;
