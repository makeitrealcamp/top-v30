import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return(
    <div>
      <h1>Posts</h1>
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