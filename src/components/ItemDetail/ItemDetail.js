import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({element}) => {

    const [buyQuantity, setbuyQuantity] = useState(0);

    const onAdd = (cant) => {
        setbuyQuantity(cant);
    }
    
    if (element!==null) {
        return (
            <div className="card product" key={element.id}>
                <img src={element.pictureURL} class="card-img-top" alt="Imagen de producto"/>
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    {buyQuantity===0 ?
                        (<ItemCount stock={element.stock} initial={0} onAdd={onAdd} />):
                        (<Link to='/card'><button className="btn btn-primary">Terminar Compra</button></Link>)
                    }
                    <p className="card-text">$ {element.price}</p>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default ItemDetail;