import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [ dataLogin, setDataLogin ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setDataLogin({
      ...dataLogin,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    try {

      event.preventDefault()
      
      const { data } = await axios.post(
        'http://localhost:8080/auth/local/login',
        dataLogin
      )
      
      localStorage.setItem('token', data.token)
      localStorage.setItem('fullName', data.profile.fullName)
      localStorage.setItem('email', data.profile.email)
      localStorage.setItem('avatar', data.profile.avatar)
      
      setDataLogin({
        email: '',
        password: ''
      })
      
      
      navigate("/profile")
     
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1> Login Page </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'> Email </label>
        <input 
          id='email'
          name='email'
          type="email"
          value={dataLogin.email}
          onChange={handleChange}
          />
        <label htmlFor='password'> Password </label>
        <input 
          id='password'
          name='password'
          type="password"
          value={dataLogin.password}
          onChange={handleChange}
          />
        <button type='submit'> Login </button>
      </form>
    </>
  )
}

export default LoginPage