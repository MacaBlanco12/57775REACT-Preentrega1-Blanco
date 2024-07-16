import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { Context } from '../../Context/Context'

const CartWidget = () => {
  const {cantidadEnCarrito} =useContext(Context)
  return (
    <div className='contieneCarrito'>
      <Link className="menu-link" to="/carrito">  
      <img className='imgCarrito' src="/assets/carrito.ico" alt="imagen de carrito rosa" />
      
      <div><span> {}</span></div>
      </Link> 

    </div>

  )
}

export default CartWidget