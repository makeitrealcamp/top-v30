import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      <Form/>
    </>
  )
}

export default App
