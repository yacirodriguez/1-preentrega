import React from 'react'
import CartWidgets from '../CartWidgets/CartWidgets'

const NavBar = () => {
  return (
    <nav className="navbar">
    <div clasName="logo">
      <a href="/">Logo de tienda</a>
      
    </div>
    <div>
      <a href="/">Inicio</a>
      <a href="/">Productos</a>
      <a href="/contacto">Contacto</a>
    </div>
    <CartWidgets/>
    </nav>
  )
}

export default NavBar