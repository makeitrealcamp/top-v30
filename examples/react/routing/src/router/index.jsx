import {createBrowserRouter} from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import NotFound from '../pages/NotFound'
import Article from '../pages/Article'

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
        element: <Posts />
      },
      {
        path: '/posts/:id',
        element: <Article />
      }
    ]
  }
])

export default router

const legacyRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/posts',
    element: <Posts />,
    errorElement: <NotFound />
  }
])