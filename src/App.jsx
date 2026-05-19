import React from 'react'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import Comments from './Pages/Comments'
import Todos from './Pages/Todos'
import User from './Pages/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/posts",
    element: <Posts />
  },
  {
    path: "/comments",
    element: <Comments />
  },
  {
    path: "/todos",
    element: <Todos />
  },
  {
    path: "/users",
    element: <User />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
