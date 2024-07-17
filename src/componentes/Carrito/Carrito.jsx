import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context'; // Ajusta la ruta según tu estructura de archivos

export const Carrito = () => {
    const { cart, precioTotal, vaciar } = useContext(Context);

    const vaciarCarrito = () => {
        vaciar();
    }

    return (
        <div className='container'>
            <h1>Productos agregados</h1>

            {cart.items.length > 0 ? (
                cart.items.map((item) => (
                    <div key={item.id}>
                        <p>{item.nombre}</p>
                        <p>Precio unit: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio total: ${item.cantidad * item.precio}</p>
                    </div>
                ))
            ) : (
                <h2>El carrito está vacío</h2>
            )}

            {cart.items.length > 0 && (
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <Link to="/checkout">Finalizar compra</Link>
                    <button onClick={vaciarCarrito}>Vaciar</button>
                </>
            )}
            
            {cart.items.length === 0 && (
                <Link to="/">Agregar productos</Link>
            )}
        </div>
    );
}

export default Carrito;

