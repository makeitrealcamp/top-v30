import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Count from './components/Count'
import Button from './components/Button'
import Display from './components/Display'
import Form from './components/Form'

function App() {

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
      <h1>Redux en react</h1>
      <Count />
      <Button />
      <Display />
      <Form />
    </>
  )
}

export default App
