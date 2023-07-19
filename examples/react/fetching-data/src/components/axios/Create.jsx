import {useState} from 'react'
import useForm from '../../hooks/useForm'
import axios from './util'

// const URL = '/posts'

const PostAxiosExample = () => {
  const {form, handleChange} = useForm({})
  const [response, setResponse] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.post('/posts', form)

    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }

    // await fetch(URL, options)
    setResponse(resp)

  }

  if (response.status === 201) {
    return (
      <div>
        <h1>Guardado exitosamente</h1>
      </div>
    )
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="body" placeholder="Body" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default PostAxiosExample
