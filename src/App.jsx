import React, { useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import ItemsList from './components/ItemsList/ItemsList';
import Stats from './components/Stats/Stats';

export const App = () => {
  const [items, setItems] = useState([
    { itemName: 'Apples', quantity: 10, purchased: false },
    { itemName: 'Pears', quantity: 10, purchased: false },
    { itemName: 'Oranges', quantity: 7, purchased: false },
    { itemName: 'Grapes', quantity: 5, purchased: false },
    { itemName: 'Bananas', quantity: 15, purchased: false },
    { itemName: 'Peaches', quantity: 5, purchased: false },
  ]);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { itemName: newItem, quantity: 0 }]);
  };

  const handleDeleteItem = index => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleUpdateQuantity = updatedItems => {
    setItems(updatedItems);
  };

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const purchasedCount = items.filter(item => item.purchased).length;
  const remainingCount = items.filter(item => !item.purchased).length;

  return (
    <div className="app">
      <div className="appTitleBox">
        <h1 className="appTitle">Shopping List</h1>
      </div>
      <AddItem onAddItem={handleAddItem} />
      <ItemsList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <Stats
        totalQuantity={totalQuantity}
        purchasedCount={purchasedCount}
        remainingCount={remainingCount}
      />
    </div>
  );
};
