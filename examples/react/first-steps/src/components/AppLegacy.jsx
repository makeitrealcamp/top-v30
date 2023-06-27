import './App.css'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'
import { handleClick } from './utils/eventHandlers'

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    image: '/img/photo_1.png',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 28,
    image: '/img/photo_2.png',
  },
  {
    id: 3,
    name: 'John Smith',
    age: 45,
    image: '/img/photo_3.png',
  },
  {
    id: 4,
    name: 'Jane Smith',
    age: 32,
    image: '/img/photo_4.png',
  },
  {
    id: 5,
    name: 'John Stone',
    age: 32,
    image: '/img/photo_5.png',
  },
  {
    id: 6,
    name: 'Jane Stone',
    age: 32,
    image: '/img/photo_6.png',
  },
]

  /*   // En camelCase

  const state = true


  // Lista de eventos
  // - Los que escuchan el ratón
  // 1. onClick --
  // 2. onMouseOver
  // 3. onMouseOut

  // - Los que escuchan el teclado
  // 1. onKeyPress

  // Los que escuchan sobre el elemento
  // 1. onFocus
  // 2. onBlur
  // 3. onChange --

  // Los que escuchan sobre el formulario
  // 1. onSubmit --
  // 2. onReset */
  
function AppLegacy()  {

  const handleChange = (event) => {
    console.log('change:', event.target.value)
  }
  
  return (
    <>
      <h1>Aprendiendo react</h1>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input
        className={'input'}
        name='inputName'
        onChange={handleChange}
      />
      <input
        className={'input'}
        name='inputLastname'
        onChange={handleChange}
      />
{/*       <div>
        { profiles.map((item) => {
          const { id, name, age, image, background } = item
            return(
              <Profile 
                key={id}
                name={name}
                age={age}
                image={image}
                background={ id % 2 === 0 ? 'backGroundCard-green' : 'backGroundCard-red' }
              />
          )}
        )}
      </div> */}
      <Footer/>
    </>
  )
}

export default App