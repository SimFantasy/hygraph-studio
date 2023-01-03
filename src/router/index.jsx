import { useRoutes, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'
import Snippets from '@/pages/Snippets'
import Snippet from '@/pages/Snippet'
import Sites from '@/pages/Sites'

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/home', element: <Home /> },
  { path: '/posts', element: <Posts /> },
  { path: '/post/:slug', element: <Post /> },
  { path: '/snippets', element: <Snippets /> },
  { path: '/snippet/:slug', element: <Snippet /> },
  { path: '/sites', element: <Sites /> }
]

const RootRoute = () => {
  const router = useRoutes(routes)
  return router
}

export default RootRoute
