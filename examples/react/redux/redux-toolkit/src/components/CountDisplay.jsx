import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from '../store/slices/counterSlice'

const CountDisplay = () => {
  const count = useSelector(selectCount)

  return (
    <div>{ count }</div>
  )
}

export default CountDisplay