import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from 'sweetalert2'

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);


  const clear = () =>{

    Swal.fire({
      title: 'Esta seguro de eliminar su carrito de juegos?',
      showDenyButton: true,
      denyButtonColor: "gold",
      showCancelButton: true,
      cancelButtonColor:"blue",
      confirmButtonText: 'Si, eliminar!',
      confirmButtonColor:"blue",
      denyButtonText: `No, no eliminar!`,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Los juegos han sido eliminados exitosamente!', '', 'success')
        clearCart()
      } else if (result.isDenied) {
        Swal.fire('No se pudieron eliminar los juegos del carrito', '', 'info')
      }
    });
  };


  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img
                  src={item.img}
                  title={item.title}
                  alt="ilustracion del video juego"
                />
                <div className="cart-item-info">
                  <h2 className="color2">{item.seccion}</h2>
                  <h2>${item.price}</h2>
                  <h2>Juegos: {item.quantity}</h2>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={() => deleteProductById(item.id)}
                  >
                    Eliminar Juego
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h3>Precio total: ${getTotalPrice()}</h3>

          {cart.length > 0 && (
            <div className="btn-cart">
              <Button color="warning" variant="contained">
                Finalizar compra
              </Button>
              <Button color="warning" variant="contained" onClick={clear}>
                Vaciar carrito
              </Button>
            </div>
          )}

          <h1>El total del carrito es: ${getTotalPrice()}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;