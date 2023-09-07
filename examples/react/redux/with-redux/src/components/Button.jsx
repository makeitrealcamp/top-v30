import React from 'react'
import { useDispatch } from 'react-redux'

import { COUNT_INCREMENT } from '../store/reducers/count.reducer'

const Button = () => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={ () => dispatch({ type: COUNT_INCREMENT }) }
    >
      Incrementar
    </button>
  )
}

export default Button