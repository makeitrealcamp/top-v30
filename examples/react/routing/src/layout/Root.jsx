import { Outlet, useNavigation } from "react-router-dom"
import Header from "../components/Header"
import ValidateElement from "../components/ValidateElement"


const Root = () => {
  const navigation = useNavigation()
  const validPathsHeader = ['/', '/posts']

  return (
    <>
      <ValidateElement 
        validPaths={validPathsHeader}> 
        <Header /> 
      </ValidateElement>
      <main>
        {
          navigation.state === 'loading' 
            ? 'Loading...'      
            : <Outlet />
        }
      </main>
      <footer>Esto es un footer</footer>
    </>
  )
}

export default Root