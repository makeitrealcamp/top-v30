import React from 'react'

const Profile = () => {
  // const [name, setName] = useState(localStorage.getItem('fullName'))
  // const [email, setEmail] = useState(localStorage.getItem('fullName'))

  return (
    <>
      <h2>Es es tu perfil</h2>
      <h3>nombre: {localStorage.getItem('fullName')}</h3>
      <p>email: {localStorage.getItem('email')}</p>
    </>
  )
}

export default Profile