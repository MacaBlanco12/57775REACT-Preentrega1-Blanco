import React from 'react'

import './ItemCount.css'
const ItemCount = ({cantidad, decrementaContador, incrementaContador, Agregar}) => {



    return (
        <div className='contador'>
            <div className='botones'>
            <button className='botonR' onClick={decrementaContador} disabled={cantidad === 0} >-</button>
            <p>{cantidad}</p>
            <button className='botonS' onClick={incrementaContador} >+</button>
            </div>
            <button className="botonAñade" onClick={Agregar}>Agregar al carrito</button>

        </div>
    )
};


export default ItemCount