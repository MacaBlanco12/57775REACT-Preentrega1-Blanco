import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export const Carrito = () => {
    const { carrito, precioTotal, vaciar } = useContext(Context)

    const vaciarCarrito = () => {
        vaciar()
    }
    return (
        <div className='container'>
            <h1>Productos agregados</h1>

            {
                carrito.map((producto) => (
                    <div key={producto.id}>
                            {producto.nombre}
                            Precio unit: ${producto.precio}
                            Cantidad: {producto.cantidad}
                            Precio total: ${producto.cantidad * producto.precio}
                        
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <Link to="/checkout">Finalizar compra</Link>
                        <button onClick={vaciarCarrito} > Vaciar</button>

                    </> :
                    <h2>El carrito está vacío :</h2>
            }

        </div>
    )
}

export default Carrito
