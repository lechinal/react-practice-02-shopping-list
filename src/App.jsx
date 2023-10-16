import React, { useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import ItemsList from './components/ItemsList/ItemsList';
import Stats from './components/Stats/Stats';

export const App = () => {
  const [items, setItems] = useState([
    { itemName: 'Apples', quantity: 30 },
    { itemName: 'Pears', quantity: 40 },
    { itemName: 'Oranges', quantity: 2 },
    { itemName: 'Grapes', quantity: 5 },
    { itemName: 'Bananas', quantity: 100 },
    { itemName: 'Peaches', quantity: 71 },
  ]);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { itemName: newItem, quantity: 0 }]);
  };

  const handleDeleteItem = index => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="app">
      <div className="appTitleBox">
        <h1 className="appTitle">Shopping List</h1>
      </div>
      <AddItem onAddItem={handleAddItem} />
      <ItemsList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
};
