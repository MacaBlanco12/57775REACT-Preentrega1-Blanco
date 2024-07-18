import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { Context } from '../../Context/Context'

const CartWidget = () => {
  const {cart} =useContext(Context)
  const { qty } = cart;
  

  return (
    <div className='contieneCarrito'>
      <Link className="menu-link" to="/carrito">  
    
      <img className='imgCarrito' src="/assets/carrito.ico" alt="imagen de carrito rosa" />
      <h5>Cantidad: {qty}</h5>

      </Link> 

    </div>

  )
}

export default CartWidget