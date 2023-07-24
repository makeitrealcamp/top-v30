import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Posts />
    </>
  )
}

export default App
