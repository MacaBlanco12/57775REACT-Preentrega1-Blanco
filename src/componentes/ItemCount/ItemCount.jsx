import React, { useContext } from 'react'
import { Context } from '../../Context/Context';
const ItemCount = ({  cantidad, decrementaContador, incrementaContador, Agregar }) => {




    return (
        <div className='container-counter'>

            <div className='botones'>
                <button className='boton-item' onClick={decrementaContador}  >-</button>
                <p>{cantidad}</p>
                <button className='boton-item' onClick={incrementaContador} >+</button>
            </div>

            <button className="boton-add" onClick={Agregar} >Agregar al carrito</button>

        </div>
    )

};


export default ItemCount