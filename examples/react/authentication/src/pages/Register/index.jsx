import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
  const [ dataRegister, setDataRegister ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: 'cllf829qw000090mu95flje00'
  })
  const [ sendData, setSendData] = useState(false)
  const [ username, setUsername ] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setDataRegister({
      ...dataRegister,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const { data } = await axios.post(
      'http://localhost:8080/api/users',
      dataRegister
    )

    setUsername(data.profile.fullName)
    console.log("🚀 ~ file: index.jsx:20 ~ handleSubmit ~ data:", data)

    setDataRegister({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })

    setSendData(true)
  }

  if(sendData) return (
    <h2>Gracias por registrarte {username}, ahora ve a tu correo electrónico y activa tu cuenta</h2>
  )

  return (
    <>
      <h1> Register Page </h1>
      <form 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label htmlFor='firstName'> Name </label>
        <input
          id='firstName'
          name='firstName'
          type="text"
          value={dataRegister.firstName}
          onChange={handleChange}
        />
        <label htmlFor='lastName'> lastName </label>
        <input
          id='lastName'
          name='lastName'
          type="text"
          value={dataRegister.lastName}
          onChange={handleChange}
        />
        <label htmlFor='email'> Email </label>
        <input 
          id='email'
          name='email'
          type="email"
          value={dataRegister.email}
          onChange={handleChange}
          />
        <label htmlFor='password'> Password </label>
        <input 
          id='password'
          name='password'
          type="password"
          value={dataRegister.password}
          onChange={handleChange}
          />
        <button type='submit'> Login </button>
      </form>
    </>
  )
}

export default RegisterPage