import React, { useState, useEffect } from 'react';

import Item from '../Item/Item';
import Arandanos from '../../images/products/Arandanos.svg';
import Frutillas from '../../images/products/Frutillas.svg';
import Duraznos from '../../images/products/Duraznos.svg';

import '../ItemList/ItemList.css';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const updatedProducts = [
            {
                id : 1,
                title : "Arandanos",
                description: "Arandanos enteros congelados - Envase de 1Kg",
                price: 385,
                stock: 12,
                pictureURL: Arandanos
            },
            {
                id : 2,
                title : "Frutillas",
                description: "Frutillas enteros congelados - Envase de 500gr",
                price: 220,
                stock: 8,
                pictureURL: Frutillas
            },
            {
                id : 3,
                title : "Duraznos",
                description: "Duraznos en cubos congelados - Envase de 1Kg",
                price: 385,
                stock: 15,
                pictureURL: Duraznos
            },
        ];

        const update = new Promise ((resolve) => {
            resolve(updatedProducts)
        });

        update.then(setTimeout(() => {
            setProducts(updatedProducts);
        }, 2000));
    });

    return (
        <div className="productContainer">
            {products.map((product) => {
                return (
                    <div>
                        <Item product={product} />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;