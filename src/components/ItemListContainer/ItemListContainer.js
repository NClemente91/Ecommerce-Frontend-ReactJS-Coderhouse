import React from 'react';

import '../ItemListContainer/ItemListContainer.css'
import logoSG from '../../images/LogoPpal.svg'

const ItemListContainer = () => {
    return (
        <div className="App">
            <img src={logoSG} alt="Logo SG Congelados"/>
            <h1>¡Hacer platos ricos, sanos y y en poco tiempo es posible. Animate a comprobarlo!</h1>
        </div>
    );
}

export default ItemListContainer;