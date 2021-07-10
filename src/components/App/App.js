import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CartProvider } from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import CheckOut from "../CheckOut/CheckOut";

import "../App/App.css";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/categorias/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/productos/:idP">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
