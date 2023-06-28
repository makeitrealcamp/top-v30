import { useState } from "react"


const Object = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    city: ''
  })

  const handleInputChange = (event) => {
    const { name, value }= event.target

    const newUser = {...user, [_name]: _value}

    setUser(newUser)
  }

  return (
    <>
      <h1>Componente objetos</h1>
      <div>
        <label htmlFor="firstname">Nombre</label>
        <input 
          type="text" 
          id="firstname" 
          name="firstname" 
          onChange={handleInputChange}
        />
        <label htmlFor="lastname">Apellido</label>
        <input 
          type="text" 
          id="lastname" 
          name="lastname" 
          onChange={handleInputChange}

        />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          onChange={handleInputChange}
        />
        <label htmlFor="city">city:</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          onChange={handleInputChange}
        />
      </div>
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>
    </>
  )
}

export default Object