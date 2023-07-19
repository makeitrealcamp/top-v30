import { useEffect } from "react"

const ShowMessage = ({ message }) => {

  useEffect(() => {
    console.log('Hello')

  }, [])
  
  return (
    <>
      {message}
    </>
  )
}