
import React from 'react'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import Foot from './componentes/Foot'
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>
      <Foot></Foot>  
</div>
  )
}

export default App