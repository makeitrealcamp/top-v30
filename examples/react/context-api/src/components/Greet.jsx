import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../store/FormContext'

const Greet = () => {
  const store = useContext(FormContext)

  return (
    <div>Hola {store.name} bienvenido !!!</div>
  )
}

export default Greet