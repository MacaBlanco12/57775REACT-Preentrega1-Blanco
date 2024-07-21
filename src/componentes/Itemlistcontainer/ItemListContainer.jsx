
import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import {  collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const id = useParams().id;



  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = id ? query (productosRef, where ("categoria","==", id)) : productosRef

    getDocs(q)
      .then((resp) => {
    
       setProductos(
          resp.docs.map((doc)=>{
            return { ...doc.data(), id: doc.id}
          })
        )
      })
  }, [id])


  return (

    <div className='container-item-list'>
      
      {productos && <ItemList productos={productos} />}


    </div>



  )
}

export default ItemListContainer

