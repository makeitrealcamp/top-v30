import { useLocation } from 'react-router-dom';

const ValidateElement = ({ children, validPaths }) => {
  const location = useLocation();
  const isValid = validPaths.some((item) => item === location.pathname)
  return isValid ? children : null
}

export default ValidateElement