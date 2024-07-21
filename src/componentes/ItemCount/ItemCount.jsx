import React from 'react'
const ItemCount = ({cantidad, decrementaContador, incrementaContador, Agregar}) => {



    return (
        <div className='container-counter'>
            
            <div className='botones'>
            <button className='boton-item' onClick={decrementaContador} disabled={cantidad === 0} >-</button>
            <p>{cantidad}</p>
            <button className='boton-item' onClick={incrementaContador} >+</button>
            </div>
        <button className="boton-add" onClick={Agregar}>Agregar al carrito</button>

        </div>
    )
};


export default ItemCount