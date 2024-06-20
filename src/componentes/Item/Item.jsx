import React from 'react';
import { useState } from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    const [valor, setValor] = useState(0);
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
                <h4>Menu:{producto.nombre}</h4>
                <img className='imgMenu' src={producto.imagen} alt={producto.nombre} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio} </p>
                <p>Categoria: {producto.categoria} </p>
                <div className='contador'>
                    <button className='boton-' onClick={decrementaContador} disabled={valor === 0} >-</button>
                    <strong className='contadorCarrito'>{valor} </strong>
                    <button className='boton+' onClick={incrementaContador} disabled={valor === stock}>+</button>
                    <button className='botonAñade'> Añadir</button>
                </div>
                <Link className="ver-mas" to={`/item/${producto.id} `} >Ver mas</Link>
            </div>
        </div>
    );
};

export default Item;