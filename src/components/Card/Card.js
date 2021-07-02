import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import '../Card/Card.css'

const Card = () => {

    const { cartState, removeItem, clear, totalQuantity, totalPrice } = useContext(CartContext);

    const clearCart = () => {
        clear();
    }

    const clearPartialCart = (ident) => {
        removeItem(ident);
    }

    return (
        <div className="container-fluid">
            <h1> Carrito de compras</h1>
            <div>
                {cartState[0].quantities === 0 ?
                    (<div>
                        <h3> Carrito de Compras Vacío</h3>
                        <Link to='/categorias/todos'>
                            <button className="btn btn-primary">
                                Buscar Productos
                            </button>
                        </Link>
                    </div>) :
                    (<div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartState.map((pC) => {
                                    console.log(pC.items.pictureURL);
                                        return (
                                            <tr>
                                                <td>
                                                    <img src={pC.items.pictureURL} class="card-img-prod" alt="Imagen de producto"/>
                                                    
                                                </td>
                                                <td>{pC.items.title}</td>
                                                <td>{pC.quantities} un.</td>
                                                <td>${pC.items.price}</td>
                                                <td><button 
                                                        className="btn btn-primary"
                                                        onClick={() => clearPartialCart(pC.items.id)}
                                                    >
                                                    X
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td></td>
                                    <td>TOTAL</td>
                                    <td>{totalQuantity()} un.</td>
                                    <td>$ {totalPrice()}</td>
                                    <td><button 
                                            className="btn btn-danger"
                                            onClick={() => clearCart()}
                                        >
                                        BORRAR CARRITO
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Card;