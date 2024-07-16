import React from 'react'
import ItemListContainer from './componentes/Itemlistcontainer/ItemListContainer'
import NavBar from './componentes/Navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Foot from './componentes/Foot'
import { CartProvider } from './Context/Context'
import { Carrito } from './componentes/Carrito/Carrito'
const App = () => {
  
  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Foot />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/carrito/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>


  )
}

export default App