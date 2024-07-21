import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div className='container-item'>
            <div className='content-item'>
                <img className='imgMenu' src={producto.imagen} alt={producto.nombre} />
                <h4>{producto.nombre}</h4>
                <p>{producto.descripcion}</p>
                
                {producto.stock > 0 ? (
                    <p>Precio: ${producto.precio} </p>
                ) : (
                    <p>"Sin stock"</p>
                )}
                
                <p>Categoría: {producto.categoria}</p>
                <Link className="boton-item" to={`/item/${producto.id} `} >Ver mas</Link>
            </div>
        </div>
    );
};

export default Item;