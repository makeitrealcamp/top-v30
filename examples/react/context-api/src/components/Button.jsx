import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../store/CountContext'

const Button = () => {
  const store = useContext(CountContext)

  return (
    <button onClick={store.handleIncrement}>Incrementar</button>
  )
}

export default Button