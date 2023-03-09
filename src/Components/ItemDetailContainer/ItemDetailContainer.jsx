import React from "react";
import { useParams } from "react-router-dom";
import { videoJuegos } from "../../juegosMock";
import "./ItemDetailContainer.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const videoJuegosSelected = videoJuegos.find(
    (element) => element.id === Number(id)
  );

  const onAdd = (cantidad) => {
    console.log(`Se agrego al Carrito ${cantidad} productos`);
  };

  return (
    <div className="bgColor">
      <Card sx={{ width: 300 }} className="cardGral">
        <CardMedia
          sx={{ height: 350 }}
          image={videoJuegosSelected.img}
          alt="Imagen ilustrativa del Juego"
          title={videoJuegosSelected.title}
        />
        <CardContent className="typographyCards">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="bold"
            textAlign="center"
          >
            {videoJuegosSelected.title}
          </Typography>
          <Typography
            variant="body2"
            color="blue"
            fontWeight="bold"
            textAlign="center"
          >
            {videoJuegosSelected.description}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            fontWeight="bold"
            padding="5px"
          >
            {videoJuegosSelected.seccion}
          </Typography>
          <Typography
            variant="body2"
            color="grey"
            fontWeight="bold"
            textAlign="center"
            fontSize="25px"
          >
            ${videoJuegosSelected.price}
          </Typography>
          <ItemCount stock={videoJuegosSelected.stock} onAdd={onAdd} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
