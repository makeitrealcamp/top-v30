import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllPosts, selectPosts } from '../store/slices/postsSlice'

const Posts = () => {
  const dispatch = useDispatch()
  const { posts, status, error } = useSelector(selectPosts)

  useEffect(() => {
    dispatch(getAllPosts(10))
  }, [])

  if(status === 'loading') return  <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  return (
    <>
      <div>Posts</div>
      {posts.length > 0 && posts.map((item) => {
        return(
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        )
      })}
    </>
  )
}

export default Posts