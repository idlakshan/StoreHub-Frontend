import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home/home.page.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/cart",
    element: <div>Cart</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
