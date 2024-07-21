import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const CartWidget = () => {
  const {cart} =useContext(Context)
  const { qty } = (cart);
  

  return (
    <div className='cart-widget'>
      <Link className="menu-link" to="/carrito">  
    
      <img className='imgCarrito' src="/assets/carrito.png" alt="imagen de carrito" />
      <h5>{qty}</h5>

      </Link> 

    </div>

  )
}

export default CartWidget