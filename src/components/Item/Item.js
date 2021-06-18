import React from 'react';
import { Link } from 'react-router-dom';

import '../Item/Item.css';

const Item = ({product}) => {

    return (
        <div className="card product">
            <Link className="linkProduct" to={`/productos/${product.title}`}>
                <img src={product.pictureURL} class="card-img-top" alt="Imagen de producto"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">$ {product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;