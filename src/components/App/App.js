import React from 'react';

import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import '../App/App.css';

const App = () => {
  return (
    <div className="general-container">
      <NavBar/>
      <ItemListContainer titleProduct="Productos"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;