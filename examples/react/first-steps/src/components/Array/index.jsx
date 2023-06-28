import { useState } from "react"

const Array = () => {
  const [ names, setNames ] = useState(['Jhon'])
  const [ user, setUser ] = useState('')

  console.log(user);

  const handleInputChange = (event) => {
    const { value } = event.target
    setUser(value)
  }

  const handleClick = () => {
    const myUsers = [...names, user]
    setNames(myUsers)
    setUser('')
  }

  return(
    <div>
      <h2>Array</h2>
      <label htmlFor="name">Nombre</label>
      <input 
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        value = {user}
      />
      <button onClick={handleClick} >Agregar</button>
      <ul>
        {names.map((item, index) => {
          return( <li key={index}>{item}</li>)
        })}
      </ul>
    </div>
  )
}

export default Array