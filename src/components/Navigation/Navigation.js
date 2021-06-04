import React from 'react';

import '../Navigation/Navigation.css'
import logoSG from '../../images/LogoPpal.svg'

const Navigation = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logoSG-img" src={logoSG} alt="Logo SG Congelados"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUCTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTO</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;