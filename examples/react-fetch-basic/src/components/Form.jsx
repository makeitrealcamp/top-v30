import { useState } from 'react'

const Form = ({ user }) => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    const newUser = {
      ...form,
      [name]: value,
    }

    setForm(newUser)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try { 
      const url = 'https://jsonplaceholder.typicode.com/users'
      const config = {
        method: 'POST',
        body: JSON.stringify(form),
      }
      const response = await fetch(url, config)

      const data = await response.json()

      alert('Usuario creado satisfactoriamente', data)
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder='Name'
          onChange={handleChange}
          defaultValue={user.name}
        />
      </div>
      <div>
        <input
            type="email"
            name="email"
            placeholder='Email'
            onChange={handleChange}
            defaultValue={user.email}
          />
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder='Username'
          onChange={handleChange}
          defaultValue={user.username}
        />
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
