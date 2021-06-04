import React from 'react';

import logoCarrito from '../../images/Carrito.svg'
import '../CardWidget/CardWidget.css'

const CardWidget = () => {
    return (
        <div className="logoCarrito">
            <a href="#">
                <img className="logoCarrito-img" src={logoCarrito} alt="Carrito" />
            </a>
        </div>
    );
}

export default CardWidget;