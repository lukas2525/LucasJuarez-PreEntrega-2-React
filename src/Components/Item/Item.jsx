
import React from "react";
import styles from "./Item.module.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export const Item = ( {element}) => {
  return (
    <Card sx={{ width: 290 } } className={styles.cardGral} >
      <CardMedia
        sx={{ height: 370 }}
        image={element.img} alt="Imagenes ilustrativas del Juego"
        title= {element.title}
      />
      <CardContent className= {styles.typographyCards} >
        <Typography gutterBottom variant="h6" component="div" color="black" textAlign="center" fontWeight="bold" >
          {element.title}
        </Typography>
        <Typography variant="body2" color="blue" textAlign="center" fontWeight="bold">
          {element.seccion}
        </Typography>
      </CardContent>
      <CardActions className= {styles.typographyCards}>
        <Link to={`/ItemDetail/${element.id}`} className={styles.button}>
        <Button size="small" variant="contained" color="warning">
          Más Detalles
        </Button>     
        </Link>
      </CardActions>
    </Card>
  );
};
