import './App.css'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

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

  return (
    <>
      <h1>Aprendiendo react</h1>
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
      <Footer/>
    </>
  )
}

export default App