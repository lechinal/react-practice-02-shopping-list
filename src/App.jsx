import React, { useState } from 'react';
import AddItem from './components/AddItem/AddItem';
import ItemsList from './components/ItemsList/ItemsList';
import Stats from './components/Stats/Stats';

export const App = () => {
  const [items, setItems] = useState([
    { itemName: 'Apples', quantity: 10, checked: false },
    { itemName: 'Pears', quantity: 10, checked: false },
    { itemName: 'Oranges', quantity: 7, checked: false },
    { itemName: 'Grapes', quantity: 5, checked: false },
    { itemName: 'Bananas', quantity: 15, checked: false },
    { itemName: 'Peaches', quantity: 5, checked: false },
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
  const totalItems = items.length;

  const checkedItems = items.filter(item => item.checked).length;
  const remainingItems = totalItems - checkedItems;

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
        totalItems={totalItems}
        checkedItems={checkedItems}
        remainingItems={remainingItems}
      />
    </div>
  );
};
