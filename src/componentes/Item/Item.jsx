import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {

    return (

        <div className='menuDiarioContenedor'>
            <div className='menuDiarioContenido'>
                
                <h4>{producto.nombre}</h4>
                <img className='imgMenu' src={producto.imagen} alt={producto.nombre} />
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio} </p>
                <p>Categoría: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id} `} >Ver mas</Link>
            </div>

        </div>
    );
};

export default Item;