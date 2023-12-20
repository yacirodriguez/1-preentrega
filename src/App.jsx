import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CArtWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const mensajeBienvenida= 'Bienvenides a la tienda!'
    return (
    <div>
   <NavBar/>
   <ItemListContainer mensajeBienvenida={mensajeBienvenida}></ItemListContainer>
    </div>
  )
}

export default App
