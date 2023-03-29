import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { videoJuegos } from "../../juegosMock";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const {agregarAlCarrito, getQuantityById} = useContext( CartContext )

  const videoJuegosSelected = videoJuegos.find(
    (element) => element.id === Number(id)
  );

  const onAdd = (cantidad) => {

    let producto = {
      ...videoJuegosSelected,
      quantity: cantidad
    }


    agregarAlCarrito(producto)
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Juego agregado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  let quantity = getQuantityById(Number(id))
  console.log(quantity);

  return (
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={videoJuegosSelected.img} alt="" />
        </div>
  
        <div className={"containerDetail"}>
          <h1 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "20px"}} className="color">Nombre:</span>{" "}
            {videoJuegosSelected.title}
          </h1>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "20px" }} className="color">Descripcion:</span>{" "}
            {videoJuegosSelected.description}
          </h2>
          <h3 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "20px" }} className="color">Precio:</span><span className="color1"> $
            {videoJuegosSelected.price}</span>
          </h3>
  
          <ItemCount
            onAdd={onAdd}
            stock={videoJuegosSelected.stock}
            initial={quantity}
          />
        </div>
      </div>
    );
};

export default ItemDetailContainer;
