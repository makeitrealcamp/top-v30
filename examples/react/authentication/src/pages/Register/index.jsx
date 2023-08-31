import React, { useState } from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

import { validateField } from '../../assets/utils/validateField'
import { validators } from '../../assets/validators'

const RegisterPage = () => {
  const { 
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    logout,
    user
  } = useAuth0();

  console.log("🚀 user:", user)

  const [ dataRegister, setDataRegister ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [ errors, setErrors ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [ sendData, setSendData] = useState(false)
  const [ username, setUsername ] = useState('')

  const validateField = (fieldName, value) => {

    let errorMessage = ''
  
    const errorActions = {
      firstName: () => !(validators.name.test(value)) && 'El nombre solo puede contener letras',
      lastName: () => !(validators.name.test(value)) && 'El apellido solo puede contener letras',
      email: () => !(validators.email.test(value)) && 'El email no es válido, ejm: jhon@gmail.com',
      password: () => !(validators.password.test(value)) && 'La contraseña debe tener al menos 8 caracteres, una letra y un número'
    }
    errorMessage = errorActions[fieldName]()
  
    setErrors({
      ...errors,
      [fieldName]: errorMessage
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setDataRegister({
      ...dataRegister,
      [name]: value
    })

    validateField(name, value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const { data } = await axios.post(
      'http://localhost:8080/api/users',
      {
        ...dataRegister,
        roleId: 'cllf829qw000090mu95flje00'
      }
    )

    setUsername(data.profile.fullName)

    setDataRegister({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })

    setSendData(true)
  }

  const handleGoogleLogin = () => {
    const options = {
      authorizationParams: { connection: 'google-oauth2' }
    }

    loginWithRedirect(options)
  }

  const handleDefaultLogin = () => {
    const options = {
      authorizationParams: { connection: 'Username-Password-Authentication' }
    }

    loginWithPopup(options)
  }

  if(sendData) return (
    <h2>Gracias por registrarte {username}, ahora ve a tu correo electrónico y activa tu cuenta</h2>
  )

  if(isAuthenticated) {
    return (
      <>
        <button
          onClick={logout}
          >
          Logout
        </button>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </>
    )
  }

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
        <label htmlFor='firstName'> Nombre: </label>
        <input
          id='firstName'
          name='firstName'
          type="text"
          value={dataRegister.firstName}
          onChange={handleChange}
        />
        { errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span> }
        <label htmlFor='lastName'> Apellido: </label>
        <input
          id='lastName'
          name='lastName'
          type="text"
          value={dataRegister.lastName}
          onChange={handleChange}
        />
        { errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span> }
        <label htmlFor='email'> Email: </label>
        <input 
          id='email'
          name='email'
          type="email"
          value={dataRegister.email}
          onChange={handleChange}
          />
        { errors.email && <span style={{ color: 'red' }}>{errors.email}</span> }
        <label htmlFor='password'> Contraseña: </label>
        <input 
          id='password'
          name='password'
          type="password"
          value={dataRegister.password}
          onChange={handleChange}
          />
        { errors.password && <span style={{ color: 'red' }}>{errors.password}</span> }

        {/* {Object.keys(errors).map((error) => (
          <div key={error} style={{ color: 'red' }}>
            {errors[error]}
          </div>
        ))} */}
        
        <button 
          type='submit'
          style={{ margin: '30px 60px' }}
        > Login </button>
      </form>
      <div>

        {/* Google */}
        <button style = {{
          width: '100%',
          backgroundColor: 'white',
          color: 'blue'
        }}
        onClick={() => handleGoogleLogin()}
        > 
          Google 
        </button>

        {/* Local Auth0 */}
        <button style = {{
          width: '100%',
          backgroundColor: 'green',
          color: 'white',
          margin: '20px 0px'
        }}
        onClick={() => handleDefaultLogin()}
        > 
          Login default Auth0 
        </button>
      </div>
    </>
  )
}

export default RegisterPage