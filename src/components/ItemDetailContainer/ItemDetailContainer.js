import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase/firebase";

import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idP } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFireStore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(idP);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item inexistente");
          return;
        }
        setItemDetail([{ id: doc.id, ...doc.data() }]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [idP]);

  return (
    <div className="detailContainerGrl">
      {loading && <div className="loader center-spin" />}
      {!loading && <ItemDetail element={itemDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
