import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartState, setCartState] = useState([{'items':{}, 'quantities':0}]);

    //PARA AGREGAR UN ITEM AL CARRITO
    const addItem = (item, quantity) => {
        if(cartState[0].quantities === 0) {
            //NO HAY PRODUCTOS EN EL CARRITO
            setCartState([{'items':item[0], 'quantities':quantity}]);
        } else {
            // YA HAY ALGUN PRODUCTO EN EL CARRITO
            if(isInCart(item[0].id) === -1) {
                //ES UN PRODUCTO NUEVO
                setCartState([...cartState, {'items':item[0], 'quantities':quantity}]);
            } else {
                //YA ESTABA EN EL CARRITO
                const positionCard = isInCart(item[0].id);
                const cartModify = [...cartState];
                cartModify[positionCard].quantities += quantity;
                setCartState(cartModify);
            }
        }
    }

    //PARA REMOVER UN ITEM SEGUN SU ID DEL CARRITO
    const removeItem = (itemID) => {
        const cartStateFilter = cartState.filter(x => x.items.id !== itemID);
        cartStateFilter.length !== 0 ? setCartState(cartStateFilter) : clear();
    }

    //PARA REMOVER TODOS LOS ITEM DEL CARRITO
    const clear = () => {
        setCartState([{'items':{}, 'quantities':0}]);
    }

    // DETERMINA SI EL NUEVO PRODUCTO YA ESTA EN EL CARRITO O NO
    const isInCart = (identify) => {
        const cartProductsId = cartState.findIndex(i => identify === i.items.id);
        return cartProductsId;
    }

    // DETERMINA LA CANTIDAD TOTAL DE PRODUCTOS EN EL CARRITO
    const totalQuantity = () => {
        let cartQuantity = 0;
        cartState.map(c => cartQuantity += c.quantities);
        return cartQuantity;
    }

    // DETERMINA EL PRECIO TOTAL DEL CARRITO
    const totalPrice = () => {
        let cartPrice = 0;
        cartState.map(c => cartPrice += (c.items.price * c.quantities));
        return cartPrice || 0;
    }

    return(
        <CartContext.Provider value={{cartState, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}