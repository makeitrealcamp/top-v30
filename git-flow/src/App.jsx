import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel/>
      <Form />
      <h1>Segundo cambio</h1>
    </>
  )
}

export default App
