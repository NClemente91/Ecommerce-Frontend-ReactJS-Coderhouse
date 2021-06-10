import React from 'react';

import ItemCount from '../ItemCount/ItemCount';

import '../Item/Item.css';

const Item = ({product}) => {

    const onAdd = (cant) => {
        alert(`Se han agregado ${cant} productos al carrito con exito. Sigue comprando`);
    }

    return (
        <div className="card product" key={product.id}>
            <img src={product.pictureURL} class="card-img-top" alt="Imagen de producto"/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
                <p className="card-text">$ {product.price}</p>
            </div>
        </div>
    )
}

export default Item;