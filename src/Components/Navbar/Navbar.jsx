import styles from "./Navbar.module.css";
import { GiConsoleController } from "react-icons/gi";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.estilosGral}>
      <Link to="/" className={styles.tituloPrincipal}> 
          <h1>¡VideoJuegos!</h1>
          <GiConsoleController fontSize="3em" color="gold" />
      </Link>
      <ul className={styles.estilosUl}>
        <Link to="/" className={styles.navbarItems}>Todos</Link>
        <Link to="/category/Novedades" className={styles.navbarItems}>Novedades</Link>
        <Link to="/category/Favoritos" className={styles.navbarItems}>Favoritos</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
