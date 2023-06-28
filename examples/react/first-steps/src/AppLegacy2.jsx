import './App.css'
import Gallery from './components/Gallery'
import { useState } from 'react'
  
function App() {
  const [ state, setState ] = useState(1) // Hooks
  const [ count, setCount ] = useState(0)
  const [ like, setLike ] = useState(true)
  // memoria por componentes = estate

  // 1. Que hace la llamada al useState ? -> Crea un estado
  // 2. Que le pasamos como argumento al useState ? // El valor inicial del estado
  // 3. Que devuelve el useState ? // arreglo con dos elementos [estado, funcion]
  
  return (
    <>
      <h1>React + Vite</h1>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>

      <button onClick={() => setLike(!like)}>{like ? 'No me gusta' : 'Me gusta!'}</button>
      <div  className={like ? 'like like--active' : 'like'}/>
      <Gallery/>
    </>
  )
}

export default App