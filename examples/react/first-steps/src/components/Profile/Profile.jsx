import './Profile.css'

const Profile = ({ name, age, image, background, children }) => {

  return (
    <div className={`card ${background}`}>
      <h2>{ name }</h2>
      <p>Edad: { age }</p>
      <img src={ image } />
      { children }
    </div>
  )
}

export default Profile