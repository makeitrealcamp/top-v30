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
        <ul style={{ display: 'flex' }}>
          <li style={{ margin: '0 30px' }}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li style={{ margin: '0 30px' }}>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li style={{ margin: '0 30px' }}>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          { !localStorage.getItem('token') ? (
            <>
            <li style={{ margin: '0 30px' }}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li style={{ margin: '0 30px' }}>
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