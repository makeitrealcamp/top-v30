import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'S3CR3ET0'

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams()

  const handleClick = async () => {
    const { data } = await axios.get(`http://localhost:8080/auth/local/active-account/${token}`)

    const tokenCrypted = CryptoJS.AES.encrypt(data.token, SECRET_KEY).toString()
    const fullNameCrypted = CryptoJS.AES.encrypt(data.profile.fullName, SECRET_KEY).toString()
    const emailCrypted = CryptoJS.AES.encrypt(data.profile.email, SECRET_KEY).toString()
    const avatarCrypted = CryptoJS.AES.encrypt(data.profile.avatar, SECRET_KEY).toString()

    localStorage.setItem('token', tokenCrypted)
    localStorage.setItem('fullName', fullNameCrypted)
    localStorage.setItem('email', emailCrypted)
    localStorage.setItem('avatar', avatarCrypted)

    navigate("/profile")
  }

  return (
    <>
      <div>Gracias por registrarte en nuestra App</div>
      <button onClick={handleClick}>Dale click para activar tu cuenta</button>
    </>

  )
}

export default Verify