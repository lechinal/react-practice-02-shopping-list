import React from 'react';

import AddItem from './components/AddItem/AddItem';
import ItemsList from './components/ItemsList/ItemsList';
import Stats from './components/Stats/Stats';

export const App = () => {
  return (
    <div className="app">
      <div className="appTitleBox">
        <h1 className="appTitle">Shopping List</h1>
      </div>
      <AddItem />
      <ItemsList />
      <Stats />
    </div>
  );
};
