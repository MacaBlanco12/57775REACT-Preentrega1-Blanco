import React, {  useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Context } from '../../Context/Context'


const ItemDetail = ({ item }) => {

    const {Agregar} = useContext(Context);

    const [cantidad,setCantidad] = useState(1);

    const decrementaContador = () => {
        if (cantidad >= 1){   setCantidad(cantidad - 1)}

     

    }
    const incrementaContador = () => {
        if (cantidad < item.stock ) {setCantidad(cantidad + 1)}else{
            
        }

    };


    return (
        <div className='container-item'>
            <div className="content">
            <img className='imgMenu' src={item.imagen}  />
            <ItemCount 
                stock={item.stock}
                cantidad={cantidad} 
                incrementaContador={incrementaContador} 
                decrementaContador={decrementaContador} 
                Agregar= {()=>{Agregar(item.cantidad)}}
            />
            </div>
            <div className='content-detail'>
                <h1>{item.nombre}</h1>
                <h2>¿Que contiene?<br/>
                {item.descripcion}</h2>
                <p>Precio: ${item.precio} </p>

            </div>
        </div>


    )
}

export default ItemDetail