import React from "react";
import { Link } from "react-router-dom";

import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage-container">
      <section className="HomePage-container-info">
        <img src="/assets/images/LogoPpal.svg" alt="Logo SG Congelados" />
        <span>COCINAR SANO, RICO y RÁPIDO ES POSIBLE</span>
        <Link to="/categorias/todos" className="btnVerProductos">
          <button type="button" className="btn btn-light">
            VER PRODUCTOS
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
