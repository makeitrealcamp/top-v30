import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { 
  incremenent, 
  decremenent, 
  incremenentByAmount 
} from '../store/slices/counterSlice'

const Buttons = () => {
  const dispatch = useDispatch()
  const [ amount,setAmount ] = useState(0)
  
  const handleIncrement = () => {
    dispatch(incremenent())
  }

  const handleDecrement = () => {
    dispatch(decremenent())
  }

  const handleIncremenetByAmount = () => {
    const value = Number(amount)
    dispatch(incremenentByAmount(value))
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={ handleChange }
      />
      <button
        onClick={ handleIncrement }
      >Incrementar</button>
      <button
        onClick={ handleDecrement}
      >Decrementar</button>
      <button
        onClick={ handleIncremenetByAmount }
      > Incrementar por valor </button>
    </div>
  )
}

export default Buttons