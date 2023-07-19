import React, {useState, useEffect} from 'react'
import FormCreate from './FormCreate'

const Example = () => {
  const [post, setPost] = useState(0) 

  handleChange = () => {
    setResponse(response + 1)

  }

  useEffect(() => {
    // la consulta del usuario que queremos actualizar
    //setPost(response)
  }, [])
  return (
    
    <h2><FormCreate post={post}/></h2>
  )
}

export default Example