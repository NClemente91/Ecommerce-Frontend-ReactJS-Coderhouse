import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card product">
      <Link className="linkProduct" to={`/productos/${product.id}`}>
        <img
          src={`/assets/images/products/${product.pictureURL}`}
          className="card-img-top"
          alt="Imagen de producto"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">$ {product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
