import {createBrowserRouter} from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import Posts, { loaderPost } from '../pages/Posts'
import NotFound from '../pages/NotFound'
import Article, { loaderArticle } from '../pages/Article'
import Profile from '../pages/Profile'
import PrivateRoute from '../components/PrivateRoute'



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
        path: '/posts',
        element: <Posts />,
        loader: loaderPost
      },
      {
        path: '/posts/:id',
        element: <Article />,
        loader: loaderArticle
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      }
    ]
  },
])

export default router