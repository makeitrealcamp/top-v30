import { useEffect } from "react";  

const Home = () => {
  useEffect(() => {

    const interval = setInterval(() => {
      console.log('Hello')
    }, 2000);

    return () => clearInterval(interval);
  }, [])


  return (
    <div>
      <h1>Home</h1>
      
    </div>
  )
}

export default Home