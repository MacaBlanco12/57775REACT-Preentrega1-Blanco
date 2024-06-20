import React from 'react'
import ItemListContainer from './componentes/Itemlistcontainer/ItemListContainer'
import NavBar from './componentes/Navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Foot from './componentes/Foot'

const App = () => {
  return (

    <BrowserRouter>
   
      <NavBar />
      <Foot/> 
      
      <Routes>
       <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
      </Routes>


    </BrowserRouter>



  )
}

export default App