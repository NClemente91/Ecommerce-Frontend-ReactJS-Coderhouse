import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "../Cart/Cart.css";

const Cart = () => {
  const { cartState, removeItem, clear, totalQuantity, totalPrice } =
    useContext(CartContext);

  const clearCart = () => {
    clear();
  };

  const clearPartialCart = (ident) => {
    removeItem(ident);
  };

  return (
    <div className="container-fluid">
      <h1> Carrito de compras</h1>
      <div>
        {cartState[0].quantities === 0 ? (
          <div>
            <h3> Carrito de Compras Vacío</h3>
            <Link to="/categorias/todos">
              <button className="btn btn-primary">Buscar Productos</button>
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-8">
              <h3>Descripción de tu pedido</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartState.map((pC) => {
                    return (
                      <tr key={pC.items.id}>
                        <td>
                          <img
                            src={`/assets/images/products/${pC.items.pictureURL}`}
                            className="card-img-prod"
                            alt="Imagen de producto"
                          />
                        </td>
                        <td>{pC.items.title}</td>
                        <td>{pC.quantities} un.</td>
                        <td>${pC.items.price}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => clearPartialCart(pC.items.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => clearCart()}
                      >
                        VACIAR CARRITO
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4">
              <h3>Resumen de tu pedido</h3>
              <div className="mb-5">
                <h4>Cant. Prod: {totalQuantity()} un.</h4>
                <h4>SubTotal : $ {totalPrice()}</h4>
                <h4>Envío: Gratis</h4>
                <h4>TOTAL: $ {totalPrice()}</h4>
              </div>
              <Link to="/checkout">
                <button className="btn btn-primary">FINALIZAR COMPRA</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
