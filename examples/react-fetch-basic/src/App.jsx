import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from './components/Item'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  const handleRead = () => {
    const config = {
      method: 'GET',
    }
    fetch('https://jsonplaceholder.typicode.com/users', config)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }

/*   const handleReadOne = () => {
    const random = Math.floor(Math.random() * 10) + 1
    fetch(`https://jsonplaceholder.typicode.com/users/${random}`)
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]))
      .catch((error) => console.log(error))
  } */

  // async - await 
  const handleReadOne = async () => {
    try {
      const random = Math.floor(Math.random() * 10) + 1
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${random}`)
      const data = await response.json()
      setUsers([...users, data])

    } catch (error) {
      console.log('Entramos al catch')
    }
    
  }


  const handleCreate = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const fakeUser = {
        name: 'Jhon Doe',
        nickname: 'JhonDoee'
      }
      const config = {
        method: 'POST',
        body: JSON.stringify(fakeUser), // Javascript - json
        headers: {
          'Content-type': 'application/json',
        }
      }

      
      const response = await fetch(url, config)

      const data = await response.json() // json - javascript
      
      alert('Usuario creado satisfactoriamente', data)


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h1>React fetch</h1> 
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={handleRead}>Leer</button>
      <button onClick={handleReadOne}>Leer usuario</button>
      <button onClick={handleCreate}>Crear</button>
      <div>
        {users.map((user) => (
          <Item key={user.id} user={user} onSelectUser={setUser} />
        ))}
    </div>
    </>
  )
}

export default App
