import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([{ items: {}, quantities: 0 }]);

  const addItem = (item, quantity) => {
    if (cartState[0].quantities === 0) {
      setCartState([{ items: item[0], quantities: quantity }]);
    } else {
      if (isInCart(item[0].id) === -1) {
        setCartState([...cartState, { items: item[0], quantities: quantity }]);
      } else {
        const positionCard = isInCart(item[0].id);
        const cartModify = [...cartState];
        cartModify[positionCard].quantities += quantity;
        setCartState(cartModify);
      }
    }
  };

  const removeItem = (itemID) => {
    const cartStateFilter = cartState.filter((x) => x.items.id !== itemID);
    cartStateFilter.length !== 0 ? setCartState(cartStateFilter) : clear();
  };

  const clear = () => {
    setCartState([{ items: {}, quantities: 0 }]);
  };

  const isInCart = (identify) => {
    const cartProductsId = cartState.findIndex((i) => identify === i.items.id);
    return cartProductsId;
  };

  const totalQuantity = () => {
    let cartQuantity = 0;
    cartState.map((c) => (cartQuantity += c.quantities));
    return cartQuantity;
  };

  const totalPrice = () => {
    let cartPrice = 0;
    cartState.map((c) => (cartPrice += c.items.price * c.quantities));
    return cartPrice || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
