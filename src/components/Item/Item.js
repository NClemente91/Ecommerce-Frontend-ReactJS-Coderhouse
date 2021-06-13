import React from 'react';

import '../Item/Item.css';

const Item = ({product}) => {

    return (
        <div className="card product">
            <img src={product.pictureURL} class="card-img-top" alt="Imagen de producto"/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
            </div>
        </div>
    )
}

export default Item;