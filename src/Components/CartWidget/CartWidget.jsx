import { BsCartCheckFill } from "react-icons/bs";
import "./CartWidget.css"
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="estilosCart">
      <div>
        <div>
          <span>0</span>
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
