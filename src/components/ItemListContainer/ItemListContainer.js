import React from 'react';

import '../ItemListContainer/ItemListContainer.css'
import logoSG from '../../images/LogoPpal.svg'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({titleProduct}) => {

    return (
        <div className="App">
            <img className="AppImage" src={logoSG} alt="Logo SG Congelados"/>
            <h1 className="title">{titleProduct}</h1>
            <ItemList />
        </div>
    );
}

export default ItemListContainer;