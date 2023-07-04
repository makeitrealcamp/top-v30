import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Item from './components/Item'

function App() {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

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
      <div>
      <Form user={user} />
        {users.map((user) => (
          <Item key={user.id} user={user} onSelectUser={setUser} />
        ))}
    </div>
    </>
  )
}

export default App
