import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { CartProvider } from '../../context/CartContext';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Contact from '../Contact/Contact'
import Card from '../Card/Card';

import '../App/App.css';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
              <NavBar />
              <Switch>
                  <Route exact path='/'><HomePage /></Route>
                  <Route exact path='/categorias/:category'><ItemListContainer /></Route>
                  <Route exact path='/productos/:idP'><ItemDetailContainer /></Route>
                  <Route exact path='/contacto'><Contact /></Route>
                  <Route exact path='/card'><Card /></Route>
              </Switch>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;