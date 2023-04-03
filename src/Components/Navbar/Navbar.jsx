import styles from "./Navbar.module.css";
import { GiConsoleController } from "react-icons/gi";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";


const Navbar = () => {

  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {

    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);


  return (
    <div className={styles.estilosGral}>
      <Link to="/" className={styles.tituloPrincipal}>
        <h1>¡VideoJuegos!</h1>
        <GiConsoleController fontSize="3em" color="gold" />
      </Link>
      <ul className={styles.estilosUl}>
        {categoryList.map((category) => {
          return (
            <Link
              key={category.id}
              to={category.path}
              className={styles.navbarItems}
            >
              {category.title}
            </Link>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
