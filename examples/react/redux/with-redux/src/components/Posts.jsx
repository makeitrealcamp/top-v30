import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPosts } from '../store/actions/posts.actions'

const Posts = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state.postsReducer)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (error) return <div>Error</div>

  return (
    <>
      <div>Posts</div>
      {loading && <div>Loading...</div>}
      {posts.map((item) => {
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