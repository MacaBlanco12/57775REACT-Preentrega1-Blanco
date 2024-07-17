import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import { toCapital } from '../toCapital'


const Item = ({ producto }) => {

    return (

        <div className='menuDiarioContenedor'>
            <div className='menuDiarioContenido'>
                <h4>Menu:</h4>
                <h4>{producto.nombre}</h4>
                <img className='imgMenu' src={producto.imagen} alt={producto.nombre} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio} </p>
                <p>Categoría: {toCapital(producto.categoria)}</p>
                <Link className="ver-mas" to={`/item/${producto.id} `} >Ver mas</Link>
            </div>

        </div>
    );
};

export default Item;