import React, { useState, useEffect } from 'react';

import updatedProducts from '../../Products';
import '../ItemListContainer/ItemListContainer.css'
import logoSG from '../../images/LogoPpal.svg'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titleProduct}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        const getProducts = new Promise ((resolve,reject) => {
            setTimeout(() => {
                updatedProducts !== [] ? resolve(updatedProducts) : reject('Error al traer Productos')
            }, 2000);
        });

        getProducts
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Peticion Finalizada'))
        
    },[]);

    return (
        <div className="App">
            <img className="AppImage" src={logoSG} alt="Logo SG Congelados"/>
            <h1 className="title">{titleProduct}</h1>
            <div className="container-fluid">
                <ItemList products={products}/>
            </div>
        </div>
    );
}

export default ItemListContainer;