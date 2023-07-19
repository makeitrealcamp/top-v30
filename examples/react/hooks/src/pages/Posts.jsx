import { Link, useLoaderData } from "react-router-dom"
import { ShowMessage } from "../components/ShowMessage"



const Posts = () => {
  const { posts } = useLoaderData()
  
  return(
    <div>
      <h1>Posts</h1>
      {posts.status == 200 && <ShowMessage message="Todo bien" />}
      {posts.map(item => {
        return(
          <div key={item.id}>
            <Link to={`/posts/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.body}</p>
          </div>
        )}
      )}
    </div>
  )
}

export default Posts

export const loaderPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return { posts: data }
}