import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)

  const [image, setImage] = useState(null) // estado para mostrar imagen

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target.result);
    //reader.onload = (e) => console.log(e.target.result);
    reader.readAsDataURL(file)
  }

  const handleChange = (e) => {
    //console.log(e.target.files)
    readFile(e.target.files[0])
    setFile(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    /* 
      const data = {
        name: 'John',
        file: 'cñaoenño3in4ñfvpineadvipndfvpindfvip'
      }
    */

    const data = new FormData()

    data.append('name', name)
    for(let i = 0; i < file.length; i++) {
      data.append(`file_${i}`, file[i], file[i].name)
    }

    const response = await axios.post('http://localhost:8080/test-formdata', 
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

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
      <h1>Carga de archivos desde el front</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Nombre:</label>
        <input
          type= 'text'
          name= 'name'
          id= 'name'
          placeholder= 'Nombre'
          value= {name}
          onChange= {e => setName(e.target.value)}
        />
        <label htmlFor='file'>Archivo:</label>
        <input 
          type='file' 
          name='file' 
          id='file' 
          multiple={true}
          accept='image/jpg'
          onChange={ handleChange }
        />
        <button type='submit'> Enviar </button>
      </form>
      {image && <img src={image} alt='imagen' />}
    </>
  )
}

export default App
