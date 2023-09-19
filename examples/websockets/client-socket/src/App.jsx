import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client'

function App() {
  const ref = useRef()

  const [ messages, setMessages ] = useState('')

  useEffect(() => {
    ref.current = io('http://localhost:8080')

    ref.current.on('welcome', (data) => {
      console.log('WELCOME:', data)
    })

    ref.current.on('broadcast', (data) => {
      console.log('BROADCAST:', data)
    })

    ref.current.on('private', (data) => {
      console.log('PRIVATE', data)
    })


    return () => {
      ref.current.close()
      ref.current.removeAllListeners()
    }
  }, [])

  const handleEmit = () => {
    ref.current.emit('message', { user: 'React', message: messages })
    setMessages('')
  }

  const handleJoin = () => {
    ref.current.emit('join room', { message: 'privado' })
  }

  const handlePrivateMsg = () => {
    ref.current.emit('msgPrivate', { message: messages })
    setMessages('')
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Websockets</h1>
      <input 
        type="text" 
        placeholder='Escribe un mensaje...'
        value={messages}
        onChange={(e) => setMessages(e.target.value)}
      />
      <button onClick={handleEmit}> Enviar </button>
      <button onClick={handleJoin}> Unirme al privado </button>
      <button onClick={handlePrivateMsg}> Enviar mensaje privado </button>
    </>
  )
}

export default App
