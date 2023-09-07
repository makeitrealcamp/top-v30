import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {
  const countStore = useSelector((state) => state.countReducer.count)

  return (
    <div>{countStore}</div>
  )
}

export default Count