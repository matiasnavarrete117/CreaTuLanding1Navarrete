import { useState } from 'react'
import './App.css'
import Navbar from '../components/NavBar/Navbar.jsx'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0);

  console.log("se renderizó xdddd");

  return (
    <>
      <h2>Anvara</h2>
      <Navbar />
      <ItemListContainer saludo="esto es un caos" setCount={setCount} />
    </>
  )
}

export default App;

