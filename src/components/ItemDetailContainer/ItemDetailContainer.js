import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import updatedProducts from '../../Products';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);

    const {idP} = useParams();

    useEffect(() => {

        const getItem = new Promise ((resolve,reject) => {
            setTimeout(() => {
                updatedProducts !== [] ?
                resolve(updatedProducts) :
                reject('Error al traer Producto')
            }, 2000);
        });

        getItem
            .then(data => {
                setItemDetail((data.filter(p => p.id == idP)));
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Peticion Finalizada'))

    },[idP]);

    return (
        <div className="detailContainerGrl container-fluid">
            <div className="detail-card">
                <ItemDetail element={itemDetail} />
            </div>
        </div>
    );

}

export default ItemDetailContainer;