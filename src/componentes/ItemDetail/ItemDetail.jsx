import React, {  useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Context } from '../../Context/Context'


const ItemDetail = ({ item }) => {

    const {carrito,cart,Agregar} = useContext(Context);

    const [cantidad,setCantidad] = useState(1);

    const decrementaContador = () => {
        if (cantidad >= 1){   setCantidad(cantidad - 1)}

     

    }
    const incrementaContador = () => {
        if (cantidad < item.stock ) {setCantidad(cantidad + 1)}

    };


    return (
        <div className='menuDiarioContenedor'>
            <img className='imgMenu' src={item.imagen}  />
            <div className='menuDiarioContenido'>
                
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio} </p>
                <p>Categoria: {item.categoria} </p>
                <ItemCount 
                cantidad={cantidad} 
                incrementaContador={incrementaContador} 
                decrementaContador={decrementaContador} 
                Agregar= {()=>{Agregar(item,cantidad)}}
                />
            
            </div>
        </div>


    )
}

export default ItemDetail