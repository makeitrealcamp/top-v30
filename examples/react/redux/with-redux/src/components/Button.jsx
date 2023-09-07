import React from 'react'
import { useDispatch } from 'react-redux'

const Button = () => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={ () => dispatch({ type: 'INCREMENT' }) }
    >
      Incrementar
    </button>
  )
}

export default Button