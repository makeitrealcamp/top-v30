import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const isAthorization = true
  return isAthorization ? children : <Navigate to="/" />
}

export default PrivateRoute