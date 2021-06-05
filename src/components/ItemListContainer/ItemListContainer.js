import React from 'react';

import '../ItemListContainer/ItemListContainer.css'
import logoSG from '../../images/LogoPpal.svg'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({titleProduct}) => {

    const onAdd = (cant) => {
        alert(`Se han agregado ${cant} productos al carrito`);
    } 

    return (
        <div className="App">
            <img className="AppImage" src={logoSG} alt="Logo SG Congelados"/>
            <h1 className="title">{titleProduct}</h1>
            <ItemCount stock={8} initial={0} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;