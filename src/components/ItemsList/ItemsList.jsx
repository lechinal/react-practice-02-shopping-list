import React from 'react';

const initialItems = [
  { itemName: 'Apples', quantity: 3 },
  { itemName: 'Pears', quantity: 4 },
  { itemName: 'Oranges', quantity: 2 },
  { itemName: 'Grapes', quantity: 5 },
  { itemName: 'Bananas', quantity: 1 },
  { itemName: 'Peaches', quantity: 7 },
];

function ItemsList() {
  return (
    <div className="itemsList">
      {initialItems.map(item => (
        <div className="itemBox">
          <div className="itemName">{item.itemName}</div>
          <div className="quantity">{item.quantity}</div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
