import { useEffect, useState } from "react"

const Modal = () => {
  const [ count, setCount ] = useState(0)
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    console.log('Montaje');
    console.log('Actualización');

    return () => {
      console.log('Desmontaje');
    }
  }, [count])
  
  return (
    <>
      <h1>Este es un modal </h1>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
      <button onClick={() => setUsers([...users, 'Jhon Doe'])}>Agregar usuario</button>
    </>
  )
}

export default Modal