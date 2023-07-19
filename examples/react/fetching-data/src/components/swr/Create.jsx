import useForm from '../../hooks/useForm'
import useSWRMutation from 'swr/mutation'

const URL = 'https://jsonplaceholder.typicode.com/posts'


async function sendRequest(url, { args }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args) 
  }

  const res = await fetch(url, options)
  const data = await res.json()
  return data
 }

const PostSWRExample = () => {
  const {form, handleChange} = useForm({})
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await trigger(form)
    console.log(res)
  }

  if (isMutating) return <div>Adding post...</div>
  if (error) return <div>Failed to add post</div>

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

export default PostSWRExample
