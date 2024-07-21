import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context'; // Ajusta la ruta según tu estructura de archivos
export const Carrito = () => {
    const { cart, precioTotal, vaciar, eliminarItem } = useContext(Context);

    const vaciarCarrito = () => {
        vaciar();
    }

    const eliminaUnItem = (id) => {
        eliminarItem(id);
    }

    return (
        <div className='container-cart'>

            {cart.items.length > 0 ? (

               
                cart.items.map((item) => (

            <div className='product' key={item.id}>

                <p>{item.nombre}</p>
                <p> ${item.precio}</p>
                <p>X {item.cantidad}</p>
                <p>Sub total: ${item.cantidad * item.precio}</p>
                <button className='boton-item' onClick={() => { eliminaUnItem(item.id) }}>X</button>
            </div>
            ))
            ) : (
            <div className='empty-cart'>
                <h2>El carrito está vacío</h2>

            </div>
            )}

            {cart.items.length > 0 && (
                <>
                    <div className='product' >
                        <h2>Total: ${precioTotal()}</h2>
                    </div>

                    <div className='boton-cart'>
                        <Link to="/checkout" className='boton-item'  >Finalizar compra</Link>
                        <Link to="/" className='boton-item' onClick={vaciarCarrito}>Vaciar carrito</Link>
                    </div>
                </>
            )}

            {cart.items.length === 0 && (
                <Link to="/" className='add-cart '>Agregar productos</Link>
            )}
        </div>
    );
}

export default Carrito;

