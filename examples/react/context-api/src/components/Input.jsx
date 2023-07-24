import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../store/FormContext'

const Input = () => {
  const store = useContext(FormContext)

  return (
    <div>
      <label htmlFor='name'>Nombre:</label>
      <input
        id='name'
        name='name'
        onChange={(event) => store.handleChange(event.target.value)}
        value={store.name}
      />
    </div>
  )
}

export default Input