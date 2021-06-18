import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import updatedProducts from '../../Products';
import '../ItemListContainer/ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        
        const getProducts = new Promise ((resolve,reject) => {
            setTimeout(() => {
                updatedProducts !== [] ? resolve(updatedProducts) : reject('Error al traer Productos')
            }, 2000);
        });

        getProducts
            .then(data => {
                (category === 'todos') ? 
                setProducts(data) : 
                setProducts(data.filter(p=>p.categoryProduct === category));
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Peticion Finalizada'))
    
    },[category]);

    return (
        <div className="productContainerGrl container-fluid">
            <section className="productContainer-nav">
                <h2>PRODUCTOS</h2>
                <div>
                    <Link className='itemCategory' to='/categorias/todos'>TODOS</Link>
                    <Link className='itemCategory' to='/categorias/frutas'>FRUTAS</Link>
                    <Link className='itemCategory' to='/categorias/verduras'>VERDURAS</Link>
                    <Link className='itemCategory' to='/categorias/mix'>MIX</Link>
                </div>
            </section>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;