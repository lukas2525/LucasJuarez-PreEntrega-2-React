import { createContext, useState } from "react"
import Swal from "sweetalert2";

export const CartContext = createContext()


const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);
    

//Funcion para agregar al carrito    
    const agregarAlCarrito = (producto)=> {

        let exite = isInCart(producto.id);

        if(exite) {
            let newCart = cart.map( (elemento)=> {
                if(elemento.id ===producto.id) {
                    return {
                        ...elemento,
                        quantity: producto.quantity
                    }
                }else {
                    return elemento
                }
            })
            setCart(newCart)
        }else {

            setCart( [ ...cart, producto] )
        }

    };

    //Funcion para saber si un producto ya esta en el carrito
    const isInCart = (id) => {
        return cart.some( (elemento)=> elemento.id === id);
    };

    //Funcion para limpiar el carrito
    const clearCart = () => {
        setCart([])
    }

    //Obtener el total de las cantidades de los elementos del carrito
    const getTotalQuantity = () => {
       const total = cart.reduce( (acc, elemento) =>{
        return acc + elemento.quantity
       }, 0)

       return total 
    }

    //Se obtiene el precio total del carrito
    const getTotalPrice = ()=> {
        let precioTotal = cart.reduce( (acc, elemento) => {
            return acc + (elemento.quantity * elemento.price)
        }, 0)

        return precioTotal;
    }

    //Eliminar un producto del carrito
    const deleteProductById = ( id )=> {
        const newCart = cart.filter( (element)=> element.id !== id)
        setCart(newCart)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Video juego eliminado exitosamente!',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const getQuantityById = (id)=> {

       const videoJuegoSelected = cart.find((element)=> element.id === id)
       return videoJuegoSelected?.quantity
    }


    let data = {
        cart,
        agregarAlCarrito,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        deleteProductById,
        getQuantityById
    }

  return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>       
    )
}

export default CartContextProvider