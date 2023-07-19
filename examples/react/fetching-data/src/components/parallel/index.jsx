import {useState, useEffect} from 'react'

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

async function fetchComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  return response.json()
}

const ParallelExample = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  


  useEffect(() => {
    const fetchAll = async () => {
      const usersPromise = fetchUsers() // 1 ms
      const postsPromise = fetchPosts() // 10 ms
      const commentsPromise = fetchComments() // 15ms   = 26ms

      const [commentsData, usersData, postsData] = await Promise.all([commentsPromise, usersPromise, postsPromise]) // 15ms

      setUsers(usersData)
      setPosts(postsData)
      setComments(commentsData)
    }

    fetchAll()
  }, [])



  return(
    <div>
      <h1>Parallel Example</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ParallelExample
