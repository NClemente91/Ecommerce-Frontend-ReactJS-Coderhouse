import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("items");
    const filterItems =
      category !== "todos"
        ? itemCollection.where("categoryProduct", "==", category)
        : itemCollection;
    filterItems
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
          return;
        }
        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="productContainerGrl">
      <section className="productContainer-navGral">
        <div className="productContainer-nav">
          <Link className="itemCategory" to="/categorias/todos">
            TODOS
          </Link>
          <Link className="itemCategory" to="/categorias/frutas">
            FRUTAS
          </Link>
          <Link className="itemCategory" to="/categorias/verduras">
            VERDURAS
          </Link>
          <Link className="itemCategory" to="/categorias/mix">
            MIX
          </Link>
        </div>
      </section>
      {loading && <div className="loader center-spin" />}
      {!loading && <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
