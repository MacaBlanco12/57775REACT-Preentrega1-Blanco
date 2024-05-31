import React from 'react'
import './NavBar.css';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <img className='imgLogo' src="/assets/logos.png" alt="imagen del logo" />
            <CartWidget />
            <div className="navbar-links">
                <a href="#section1">Menú diario </a>
                <a href="#section2">Congelados</a>
                <a href="#section3">Pasteleria</a>
                <a href="#section4">Sin TACC</a>
            </div>
        </div>

    )
}

export default NavBar