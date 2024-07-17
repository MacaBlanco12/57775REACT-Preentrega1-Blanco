
import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../pedirProductos';
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const id = useParams().id;


  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (id) {
          setProductos(res.filter((prod) => prod.categoria === id));

        } else {
          setProductos(res)

        }
      })
  }, [id])


  return (

    <div>
      {productos && <ItemList productos={productos} />}


    </div>



  )
}

export default ItemListContainer

