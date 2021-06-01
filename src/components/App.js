import React from 'react';

import NavBar from './NavBar';

import './styles/App.css';
import logoSG from '../images/LogoPpal.svg'

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <img src={logoSG} alt="Logo SG Congelados"/>
        <h1>¡Hacer platos ricos, sanos y y en poco tiempo es posible. Animate a comprobarlo!</h1>
      </div>
    </div>
  );
}

export default App;