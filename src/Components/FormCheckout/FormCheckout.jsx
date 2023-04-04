import React, { useState } from "react";
import "./FormCheckout.css";

import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData.name.length < 4){
      setError(true);
      setErrorMessage("El nombre no puede ser menor a 4 caracteres")
      return;
  }

  const incluye = userData.email.includes("@")

    if(!incluye){
        setError(true);
        setErrorMessage("El email debe contener un arroba(@)")
        return;
    }

    if(userData.phone.length < 8){
      setError(true);
      setErrorMessage("Su numero de telefono debe contener al menos 8 digitos")
      return;
  }

    if(userData.document.length < 8){
      setError(true);
      setErrorMessage("Documento incorrecto, debe contener al menos 8 digitos")
      return;
  }

    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "videoJuegos", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "whitesmoke",
    border: "2px solid #000",
    boxShadow: 30,
    p: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="imputXs">
      <Button onClick={handleOpen} color="warning" variant="contained">
        Ir a formulario
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" color="blue" textAlign="center" fontWeight="bold">
            Completar formulario
          </Typography>
          <form onSubmit={handleSubmit} className="containerForm">
          <input
                type="text"
                placeholder="Nombre:"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="imputS"
              />
              <input
                type="text"
                placeholder="Apellido:"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
                className="imputS"
              />
              <input
                type="text"
                placeholder="Email:"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="imputS"
              />
              <input
                type="text"
                placeholder="Telefono:"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                className="imputS"
              />
              <input
                type="text"
                placeholder="DNI:"
                value={userData.document}
                onChange={(e) =>
                  setUserData({ ...userData, document: e.target.value })
                }
                className="imputS"
              />
              <Button type="submit" color="warning" variant="contained">
                Comprar
              </Button>
          </form>
        </Box>
      </Modal>
      {error && <Alert severity="error">{errorMessage}</Alert>}
    </div>
  );
};

export default FormCheckout;
