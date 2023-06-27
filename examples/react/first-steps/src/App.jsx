import './App.css'
import Gallery from './components/Gallery'
  
function App()  {

  const handleChange = (event) => {
    console.log('change:', event.target.value)
  }
  
  return (
    <>
      <h1>React + Vite</h1>
      <Gallery/>
    </>
  )
}

export default App