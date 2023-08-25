import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('fullName')
    localStorage.removeItem('email')
    localStorage.removeItem('avatar')

    navigate("/")
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          { !localStorage.getItem('token') ? (
            <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            </>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header