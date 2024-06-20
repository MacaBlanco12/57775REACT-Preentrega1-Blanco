import React from 'react'
import './NavBar.css';
import CartWidget from '../Cartwidget/CartWidget';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <Link to="/"><img  className='imgLogo' src="/assets/logos.png" alt="imagen del logo" />
             </Link>

            <CartWidget />
            <div className="menu">
                <li><Link className="menu-link" to="/category/menu-diario">  Menu Diario</Link> </li>
                <li><Link className="menu-link" to="/category/congelados">  Congelados</Link> </li>
                <li><Link className="menu-link" to="/category/pasteleria">  Pasteleria</Link> </li>
                <li><Link className="menu-link" to="/category/menu-ejecutivo">  Menu Ejecutivo</Link> </li>

            </div>
        </div>

    )
}

export default NavBar