import React, { useContext } from 'react'
import { Context } from '../../Context/Context';
const ItemCount = ({stock, cantidad, decrementaContador, incrementaContador, Agregar}) => {

    const {cart} =useContext(Context)
    const { qty } = cart;
    const a=qty+cantidad

    return (
        <div className='container-counter'>
            
            <div className='botones'>
            <button className='boton-item' onClick={decrementaContador} disabled={cantidad === 0} >-</button>
            <p>{cantidad}</p>
            <button className='boton-item' onClick={incrementaContador}disabled={cantidad >= stock}>+</button>
            </div>
            
            {a < stock ? (
                <button 
                    className="boton-add" 
                    onClick={Agregar}
                >
                    Agregar al carrito
                </button>
            ) : (
                <p>No hay stock de esa cantidad</p>
            )}
        </div>
    )
    
};


export default ItemCount