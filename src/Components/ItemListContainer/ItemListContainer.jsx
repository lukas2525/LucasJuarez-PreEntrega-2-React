
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import PacmanLoader from "react-spinners/PacmanLoader";

import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "180px auto",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "videoJuegos");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let videoJuegos = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setJuegos(videoJuegos);
    });
  }, [categoryName]);


  return (
    <div>
      {/* juegos.length > 0 && <ItemList juegos={juegos} /> */}

      {juegos.length > 0 ? (
        <ItemList juegos={juegos} />
      ) : (
        <PacmanLoader
          color={"gold"}
          //loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default ItemListContainer;
