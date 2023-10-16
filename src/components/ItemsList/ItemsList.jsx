import React, { useState } from 'react';
import styles from './ItemsList.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DeleteButton from '../DeleteButton/DeleteButton';
// import PurchasedButton from '../PurchasedButton/PurchasedButton';

function ItemsList(props) {
  const [itemsState, setItemsState] = useState(props.items.map(() => false));

  const handleDelete = index => {
    console.log('Delete button functioneaza', index);
    props.onDeleteItem(index);
  };

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

  function handleTogglePurchased(index) {
    const updatedItemsState = [...itemsState];
    updatedItemsState[index] = !updatedItemsState[index];
    setItemsState(updatedItemsState);
  }

  return (
    <div className={styles.itemsList}>
      {props.items.map((item, index) => (
        <div
          key={item.itemName}
          className={`${styles.item} ${
            itemsState[index] ? styles.itemPurchased : ''
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

            <button
              className={styles.btn}
              onClick={() => handleTogglePurchased(index)}
            >
              {itemsState[index] ? 'Not Checked' : 'CHECKED'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
