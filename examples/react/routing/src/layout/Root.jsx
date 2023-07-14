import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Esto es un footer</footer>
    </>
  )
}

export default Root