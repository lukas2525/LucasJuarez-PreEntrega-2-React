
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { videoJuegos } from "../../juegosMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const {categoryName} = useParams();
  
  const [juegos, setJuegos] = useState ([])

  const videoJuegosFiltrados = videoJuegos.filter((elemento)=> elemento.category === categoryName)


  useEffect(()=>{
      const productList = new Promise((resolve, reject) => {
        resolve( categoryName ? videoJuegosFiltrados : videoJuegos )
      })

      productList
      .then( (res)=>{ setJuegos(res)} )
      .catch( (error)=>{ console.log(error)} )
    }, [categoryName])

    console.log(juegos);



  return (
    <div>

      <ItemList juegos={juegos} />
      
    </div>
  )
}

export default ItemListContainer