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
        <div>
          <div className="card product" key={element[0].idP}>
            <img
              src={`/assets/images/products/${element[0].pictureURL}`}
              className="card-img-top"
              alt="Imagen de producto"
            />
            <div className="card-body">
              <h5 className="card-title">{element[0].title}</h5>
              <p className="card-text">{element[0].description}</p>
              {!eventAdd ? (
                <ItemCount stock={element[0].stock} initial={0} onAdd={onAdd} />
              ) : (
                <Link to="/card">
                  <button className="btn btn-primary">Terminar Compra</button>
                </Link>
              )}
              <p className="card-text">$ {element[0].price}</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ItemDetail;
