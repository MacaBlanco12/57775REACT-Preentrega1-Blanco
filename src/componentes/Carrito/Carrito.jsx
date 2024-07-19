import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context'; // Ajusta la ruta según tu estructura de archivos
export const Carrito = () => {
    const {cart, precioTotal, vaciar,eliminarItem } = useContext(Context);
   
    const vaciarCarrito = () => {
        vaciar();
    }

    const eliminaUnItem=(id)=>{
        eliminarItem(id);
    }

    return (
        <div className='container'>
                          
            {cart.items.length > 0 ? (
                cart.items.map((item) => (
                    
                    <div className='productos' key={item.id}>
                        <h1>Productos agregados</h1>
                        <p>{item.nombre}</p>
                        <p>Precio unitario: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.cantidad * item.precio}</p>
                        <button className='boton-item' onClick={ ()=>{eliminaUnItem(item.id)}}>X</button>
                    </div>
                ))
            ) : (
                <div className='carritoVacio'>
                <h2>El carrito está vacío</h2>

                </div>
            )}

            {cart.items.length > 0 && (
                <>
                    <div className='productos' >
                        <h2>Precio total: ${precioTotal()}</h2>
                    </div>

                    <div className='botonesCarrito'>
                        <Link to="/checkout" className='boton-item'  >Finalizar compra</Link>
                        <Link to="/" className='boton-item' onClick={vaciarCarrito}>Vaciar carrito</Link>
                    </div>
                </>
            )}

            {cart.items.length === 0 && (
                <Link to="/" className='boton-item '>Agregar productos</Link>
            )}
        </div>
    );
}

export default Carrito;

