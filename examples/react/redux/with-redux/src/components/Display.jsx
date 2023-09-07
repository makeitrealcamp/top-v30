import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const { email, password }  = useSelector((state) => state.formReducer)

  return (
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default Display