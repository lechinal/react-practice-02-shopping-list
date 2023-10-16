import React from 'react';
import styles from './ItemsList.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DeleteButton from '../DeleteButton/DeleteButton';

// const initialItems = [
//   { itemName: 'Apples', quantity: 30 },
//   { itemName: 'Pears', quantity: 40 },
//   { itemName: 'Oranges', quantity: 2 },
//   { itemName: 'Grapes', quantity: 5 },
//   { itemName: 'Bananas', quantity: 100 },
//   { itemName: 'Peaches', quantity: 71 },
// ];

function ItemsList(props) {
  const handleDelete = index => {
    console.log('Delete button functioneaza', index);
    props.onDeleteItem(index);
  };
  return (
    <div className={styles.itemsList}>
      {props.items.map((item, index) => (
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
            <DeleteButton onClick={() => handleDelete(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
