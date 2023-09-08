import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CountDisplay from './components/CountDisplay'
import Buttons from './components/Buttons'

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
      <h1>Redux toolkit</h1>
      <CountDisplay />
      <Buttons />
    </>
  )
}

export default App
