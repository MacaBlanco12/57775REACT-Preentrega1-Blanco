import React  from 'react'
import './NavBar.css';
import CartWidget from '../Cartwidget/CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
  

    return (
        <div className='navbar-container'>
            <Link to="/"><img  className='imgLogo' src="/assets/logo.jpg" alt="imagen del logo" />
             </Link>
            <div className="menu">
                <li><Link className="menu-link" to="/category/hamburguesas"> Hamburguesas</Link> </li>
                <li><Link className="menu-link" to="/category/papas">  Papas</Link> </li>
                <li><Link className="menu-link" to="/category/kids">  Kids</Link> </li>
                <li><Link className="menu-link" to="/category/parapicar">  Para picar</Link> </li>
                <CartWidget/>
            </div>
        </div>

    )
}

export default NavBar