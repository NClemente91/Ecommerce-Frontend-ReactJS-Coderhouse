import React from 'react';
import { Link } from 'react-router-dom';

import logoCarrito from '../../images/Carrito.svg'
import '../CardWidget/CardWidget.css'

const CardWidget = () => {
    return (
        <div className="logoCarrito">
            <Link to='/card'>
                <img className="logoCarrito-img" src={logoCarrito} alt="Carrito" />
            </Link>
        </div>
    );
}

export default CardWidget;