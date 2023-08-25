import { Navigate } from "react-router-dom"
import { useJwt } from "react-jwt";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const { isExpired } = useJwt(token);
  const isAthorization = !isExpired 

  return isAthorization ? children : <Navigate to="/" />
}

export default PrivateRoute