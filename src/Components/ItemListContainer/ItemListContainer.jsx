import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { videoJuegos } from "../../juegosMock";
import ItemList from "../ItemList/ItemList";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "180px auto"
};


const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [juegos, setJuegos] = useState([]);

  const videoJuegosFiltrados = videoJuegos.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? videoJuegosFiltrados : videoJuegos);
      }, 2000);
    });

    productList
      .then((res) => {
        setJuegos(res);
      })
      .catch((error) => {
        console.log(error);
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
