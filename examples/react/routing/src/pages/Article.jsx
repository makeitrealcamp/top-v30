import { useNavigate, useLoaderData } from 'react-router-dom'

const Article = () => {
  const { post } = useLoaderData()
  const navigate = useNavigate();
  
  return (
    <>
      <div>Article</div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate('/')}>Ir al home</button>
    </>
  )
}

export default Article

export const loaderArticle = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()

  return { post: data }
}