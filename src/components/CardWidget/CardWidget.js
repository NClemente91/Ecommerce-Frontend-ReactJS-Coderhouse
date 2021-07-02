import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import logoCarrito from '../../images/Carrito.svg'
import '../CardWidget/CardWidget.css'

const CardWidget = () => {

    const { totalQuantity } = useContext(CartContext);
    
    return (
        <div className={totalQuantity() === 0 ? "logoCarrito opacityCard" : "logoCarrito"}>
            <Link to='/card'>
                <span>({totalQuantity()})</span>
                <img className="logoCarrito-img" src={logoCarrito} alt="Carrito" />
            </Link>
        </div>
    );
}

export default CardWidget;