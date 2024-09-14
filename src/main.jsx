import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/home.page.jsx'
import CartPage from './pages/cart/cart.page.jsx'
import RootLayout from './layouts/root.layout.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import CheckOut from './pages/checkout/checkout.page.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './pages/auth/sign-in/sign-in.page.jsx'
import SignUpPage from './pages/auth/sign-up/sign-up.page.jsx'
import PaymentPage from './pages/payment/payment.page.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/checkout',
        element: <CheckOut />
      },
      {
        path:'/payment',
        element:<PaymentPage/>
      }
    ]
  },
  {
    path:'/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/sign-up',
    element:<SignUpPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <CartContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </CartContextProvider>
  </ClerkProvider>
)
