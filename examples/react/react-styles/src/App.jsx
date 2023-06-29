import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Title from './components/Title'
import Head from './components/Head'
import Card from './components/Card'

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
      <Title />
      <Head />
      <Card />
    </>
  )
}

export default App
