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
    </>
  )
}

export default App
