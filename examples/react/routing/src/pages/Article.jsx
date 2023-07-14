import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [ data, setData ] = useState({})
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])

  return (
    <>
      <div>Article</div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </>
  )
}

export default Article