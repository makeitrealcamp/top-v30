import {createBrowserRouter} from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import PrivateRoute from '../components/PrivateRoute'
import LoginPage from '../pages/Login'
import Verify from '../pages/Verify'
import RegisterPage from '../pages/Register'
import ProductList from '../pages/Products'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <ProductList />
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      },
      {
        path: '/register',
        element: <RegisterPage/>
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/verify-account/:token',
        element: <Verify />
      }
    ]
  },
])

export default router