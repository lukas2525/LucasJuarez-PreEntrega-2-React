
import React from "react";
import { Item } from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({ juegos }) => {
  return (
    <div className={styles.flexBoxCards}>

      {juegos.map((element) => {
        return <Item key={element.id} element={element} />;
      })}

    </div>
  );
};

export default ItemList;
