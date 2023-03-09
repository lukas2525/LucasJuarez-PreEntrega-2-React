
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, initial=1, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    };

    const restar =()=>{
        if(contador > 1){
            setContador(contador - 1)
        }
    };

  return (
    <div>

        <h2>{contador}</h2>

        <button className="stylesItemCount" onClick={sumar}>Sumar</button>
        <button className="stylesItemCount" onClick={restar}>Restar</button>
        <button className="stylesItemCount" onClick={ ()=> onAdd(contador) }>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount