import React from 'react'

const ItemCount = ({cantidad, decrementaContador, incrementaContador, Agregar}) => {



    return (
        <div className='contador'>
            <button className='boton-' onClick={decrementaContador} disabled={cantidad === 0} >-</button>
            <p>{cantidad}</p>
            <button className='boton+' onClick={incrementaContador} >+</button>
            <button className="botonAñade" onClick={Agregar}>Agregar al carrito</button>

        </div>
    )
};


export default ItemCount