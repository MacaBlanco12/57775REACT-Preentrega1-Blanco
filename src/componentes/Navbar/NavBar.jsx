import React  from 'react'
import '../../../css/style.css'
import CartWidget from '../Cartwidget/CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
  

    return (
        <div className='navbar-container'>
          
            <div className="menu">
                <li><Link className="menu-link" to="/category/hamburguesas"> HAMBURGUESAS</Link> </li>
                <li><Link className="menu-link" to="/category/papas">  PAPAS</Link> </li>
                <li><Link className="menu-link" to="/category/kids">  KIDS</Link> </li>
                <Link to="/"><img  className='imgLogo' src="/assets/logo.jpg" alt="imagen del logo" />
                </Link>
                <li><Link className="menu-link" to="/category/parapicar">  PICOTEO</Link> </li>
                <li><Link className="menu-link" to="/valoraciones">  EXPERIENCIA MOTLEY</Link> </li>

                <CartWidget/>
            </div>
        </div>

    )
}

export default NavBar