import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import CustomButton from './components/Button'
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
      <h1>React typescript</h1>
      <Card 
        title='Card title'
        description='Card description'
        price={100}
      />
      <CustomButton>
        <span>Click me</span>
      </CustomButton>
      <Form/>
    </>
  )
}

export default App
