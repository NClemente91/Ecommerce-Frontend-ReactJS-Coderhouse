import React from 'react';

import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({products}) => {

    return (
        <div className="productContainer">
            {products.map((product) => {
                return (
                    <div className="productContainer-ind">
                        <Item product={product} key={product.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;