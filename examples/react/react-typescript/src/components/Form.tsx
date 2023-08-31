import { ChangeEvent, FC } from 'react'

const Form: FC = () => {

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  return (
    <form>
      <input type="text" name='fullname' onChange={handleChange}/>
      <textarea onChange={handleChange}/>
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </form>
  )
}

export default Form