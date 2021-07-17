import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ element }) => {
  const [eventAdd, setEventAdd] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (cant) => {
    addItem(element, cant);
    setEventAdd(true);
  };

  return (
    <>
      {element.length !== 0 ? (
        <div className="product-container" key={element[0].idP}>
          <div className="product-img">
            <img
              src={`/assets/images/products/${element[0].pictureURL}`}
              className="product-card-img"
              alt="Imagen de producto"
            />
          </div>
          <div className="product-body">
            <h5 className="card-title mt-3 product-body-h5">
              {element[0].title}
            </h5>
            <p className="card-text mt-2">{element[0].description}</p>
            {!eventAdd ? (
              <ItemCount stock={element[0].stock} initial={0} onAdd={onAdd} />
            ) : (
              <div className="btn-controller">
                <Link className="btn-controller" to="/categorias/todos">
                  <button className="btn btn-success" id="bg-color-btn">
                    <span>SEGUIR COMPRANDO</span>
                  </button>
                </Link>
                <Link className="btn-controller" to="/cart">
                  <button className="btn btn-success" id="bg-color-btn">
                    <span className="btn-text-color">IR AL CARRITO</span>
                  </button>
                </Link>
              </div>
            )}
            <p className="card-text mt-5">$ {element[0].price}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemDetail;
