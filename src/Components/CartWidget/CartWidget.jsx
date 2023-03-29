import { BsCartCheckFill } from "react-icons/bs";
import "./CartWidget.css"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity()
  
  return (
    <Link to="/cart" className="estilosCart">
      <div>
        <div>
          <span>{total}</span>
        </div>
        <BsCartCheckFill
          title="Carrito de Compras"
          fontSize="1.6em"
          color="gold"
        />
      </div>
    </Link>
  );
};

export default CartWidget;
