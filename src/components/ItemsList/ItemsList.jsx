import React, { useState } from 'react';
import styles from './ItemsList.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddItem from '../AddItem/AddItem';
const initialItems = [
  { itemName: 'Apples', quantity: 30 },
  { itemName: 'Pears', quantity: 40 },
  { itemName: 'Oranges', quantity: 2 },
  { itemName: 'Grapes', quantity: 5 },
  { itemName: 'Bananas', quantity: 100 },
  { itemName: 'Peaches', quantity: 71 },
];

function ItemsList() {
  return (
    <div className={styles.itemsList}>
      {initialItems.map(item => (
        <div key={item.itemName} className={styles.item}>
          <div className={styles.itemBox}>
            <div className={styles.itemName}>{item.itemName}</div>
            <div className={styles.quantity}>
              <ArrowBackIosNewOutlinedIcon className={styles.arrowLeft} />
              {item.quantity}
              <ArrowForwardIosOutlinedIcon className={styles.arrowRight} />
            </div>
          </div>
          <div className={styles.btnBox}>
            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
