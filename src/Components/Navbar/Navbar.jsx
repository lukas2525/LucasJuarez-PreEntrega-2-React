
import styles from "./Navbar.module.css"
import {GiConsoleController} from "react-icons/gi";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className= {styles.estilosGral}>
      <div className={styles.tituloPrincipal}>
       <h1>¡VideoJuegos!</h1>
       <GiConsoleController fontSize= "3em" color= "gold" />
      </div>
      <ul className= {styles.estilosUl}>
        <li>Todos</li>
        <li>Novedades</li>
        <li>Favoritos</li>
      </ul>
      <CartWidget/>
    </div>
  );
};

export default Navbar;
