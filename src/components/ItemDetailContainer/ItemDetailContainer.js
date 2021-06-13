import React, { useState, useEffect } from 'react';

import updatedProducts from '../../Products';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);

    useEffect(() => {
        
        const getItem = new Promise ((resolve,reject) => {
            setTimeout(() => {
                updatedProducts !== [] ? resolve(updatedProducts[0]) : reject('Error al traer Producto')
            }, 2000);
        });

        getItem
            .then(data => {
                setItemDetail(data)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Peticion Finalizada'))
        
    },[]);

    return (
        <div className="container-fluid mt-2">
            <h1 className="title-detail">DETALLE DEL PRODUCTO</h1>
            <div className="detail-card">
                <ItemDetail element={itemDetail}/>
            </div>
        </div>
    );

}

export default ItemDetailContainer;