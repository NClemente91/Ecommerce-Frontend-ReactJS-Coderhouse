import React from 'react';

import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({element}) => {

    const onAdd = (cant) => {
        alert(`Se han agregado ${cant} productos al carrito con exito. Sigue comprando`);
    }
    
    if (element!==null) {
        return (
            <div>
                <div className="card product" key={element.id}>
                    <img src={element.pictureURL} class="card-img-top" alt="Imagen de producto"/>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.description}</p>
                        <ItemCount stock={element.stock} initial={0} onAdd={onAdd} />
                        <p className="card-text">$ {element.price}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default ItemDetail;