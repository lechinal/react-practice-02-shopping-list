import React, { useState } from 'react';
import styles from './ItemsList.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DeleteButton from '../DeleteButton/DeleteButton';
import CheckedButton from '../CheckedButton/CheckedButton';

function ItemsList(props) {
  const [itemsState, setItemsState] = useState(props.items.map(() => false));

  function handleDecreaseQuantity(index) {
    const updatedItems = [...props.items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity--;
      props.onUpdateQuantity(updatedItems);
    }
  }

  function handleIncreaseQuantity(index) {
    const updatedItems = [...props.items];
    updatedItems[index].quantity++;
    props.onUpdateQuantity(updatedItems);
  }
  const handleDelete = index => {
    const itemToDelete = props.items[index].itemName;
    const confimation = window.confirm(
      `Are you sure you want to delete ${itemToDelete}?`
    );

    if (confimation) {
      props.onDeleteItem(index);
    }
  };

  // const handleDelete = index => {
  //   console.log('Delete button functioneaza', index);
  //   alert(`Are you sure you want to delete ${props.items[index].itemName}?`);
  //   props.onDeleteItem(index);
  // };

  function handleToggleChecked(index) {
    const updatedItemsState = [...itemsState];
    updatedItemsState[index] = !updatedItemsState[index];

    const updatedItems = [...props.items];
    updatedItems[index].checked = !updatedItems[index].checked;

    setItemsState(updatedItemsState);
    props.onUpdateQuantity(updatedItems);
  }

  return (
    <div className={styles.itemsList}>
      {props.items.map((item, index) => (
        <div
          key={item.itemName}
          className={`${styles.item} ${
            itemsState[index] ? styles.itemChecked : ''
          }`}
        >
          <div className={styles.itemBox}>
            <div className={styles.itemName}>{item.itemName}</div>
            <div className={styles.quantity}>
              <ArrowBackIosNewOutlinedIcon
                className={styles.arrowLeft}
                onClick={() => handleDecreaseQuantity(index)}
              />
              {item.quantity}
              <ArrowForwardIosOutlinedIcon
                className={styles.arrowRight}
                onClick={() => handleIncreaseQuantity(index)}
              />
            </div>
          </div>

          <div className={styles.btnBox}>
            <DeleteButton onClick={() => handleDelete(index)} />

            <CheckedButton
              onToggleChecked={() => handleToggleChecked(index)}
              checked={itemsState[index]}
              onClick={() => handleToggleChecked(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
