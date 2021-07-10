import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";
import firebase from "firebase/app";

import "../CheckOut/CheckOut.css";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);

  //NUMERO DE ORDEN
  const [orderID, setOrderID] = useState([]);

  //DATOS DE LA COMPRA
  const { cartState, clear, totalQuantity, totalPrice } =
    useContext(CartContext);

  //DATOS DEL COMPRADOR
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const saveOrder = () => {
    const db = getFireStore();

    const cartFinal = [];

    //ACTUALIZACION DE STOCK
    cartState.forEach((pCm) => {
      cartFinal.push({
        id: pCm.items.id,
        title: pCm.items.title,
        price: pCm.items.price,
      });

      const itemStockUpdate = db.collection("items").doc(pCm.items.id);
      const stockUpdated = pCm.items.stock - pCm.quantities;

      itemStockUpdate
        .update({
          stock: stockUpdated,
        })
        .then(() => {
          console.log("Elemento actualizado");
        });
    });

    //GENERACION DE ORDEN
    const order = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice(),
      items: cartFinal,
    };
    order
      .add(newOrder)
      .then(({ id }) => {
        console.log(`Elemen to creado. ID: ${id}`);
        setOrderID(id);
        clear();
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("Envío de datos Finalizado"));
  };

  return (
    <div className="container-fluid row">
      {!loading && (
        <>
          <div className="col-6">
            <h2>Resumen de compra</h2>
            <p>Estas llevando {totalQuantity()} productos en el carrito</p>
            <div>
              {cartState?.map((pC) => {
                return (
                  <div key={pC.items.id}>
                    <img
                      src={`/assets/images/products/${pC.items.pictureURL}`}
                      className="card-img-prod"
                      alt="Imagen de producto"
                    />
                    <p> {pC.items.title} </p>
                    <p>Cantidad: {pC.quantities} </p>
                  </div>
                );
              })}
            </div>
            <p>Precio total:$ {totalPrice()}</p>
          </div>
          <div className="col-6">
            <h2>Completa el siguiente formulario para finalizar su pedido</h2>
            <form>
              <div className="col-md-3">
                <div>
                  <label>Nombre Completo</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Teléfono</label>
                  <input
                    className="form-control"
                    type="phone"
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>E-mail: </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-important"
                  onClick={() => saveOrder()}
                >
                  Confirmar Compra
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {loading && (
        <>
          <div>
            <h2>Muchas gracias por tu compra</h2>
            <p>
              Tu nro de orden es: {orderID} Recirás un email cuando tu pedido
              esté listo para ser retirado.
            </p>
            <Link to="/">
              <button className="btn btn-important">Volver al inicio</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default CheckOut;
