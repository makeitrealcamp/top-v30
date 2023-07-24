import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../store/CountContext'

const Count = () => {
  const store = useContext(CountContext)

  return (
    <div>Count: {store.count}</div>
  )
}

export default Count