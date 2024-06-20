import React from 'react'
import { useState, useEffect } from 'react';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    const [valor, setValor] = useState();
    var stock = 5
    const incrementaContador = () => {
        if (valor < stock)
            setValor(valor + 1);
    };

    const decrementaContador = () => {
        if (valor >= 1) {
            setValor(valor - 1);
        }
    };

    return (
        <div className='menuDiarioContenedor'>
            <div className='menuDiarioContenido'>
                <img className='imgMenu' src={item.imagen} alt={item.nombre} />
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio} </p>
                <p>Categoria: {item.categoria} </p>
                <div className='contador'>
                    <button className='boton-' onClick={decrementaContador} disabled={valor === 0} >-</button>
                    <strong className='contadorCarrito'>{valor} </strong>
                    <button className='boton+' onClick={incrementaContador} disabled={valor === stock}>+</button>
                    <button className='botonAñade'> Añadir</button>
                </div>
                <a className="ver-mas" href={`/item/${item.id} `} >Ver mas</a>
            </div>
        </div>


    )
}

export default ItemDetail