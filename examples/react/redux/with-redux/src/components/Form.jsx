import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
  const dispatch = useDispatch()
  const { email, password }  = useSelector((state) => state.formReducer)

  const handleChange = (event) => {
    const { name, value }  = event.target

    dispatch({ type: 'CHANGE_FORM', payload: { name, value } })
  }

  return (
    <form>
      <div>
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default Form