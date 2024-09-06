import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 px-32">
        <div className="flex items-center gap-x-16">
          <Link className="font-semibold text-3xl" to="/">StoreHub</Link>
          <div className="flex items-center gap-x-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <div>
            <Link to="/cart"  className="flex items-center gap-x-4 relative">
              <p className="text-lg">{0}</p>
              <div className="flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                Cart
              </div>
            </Link>
          </div>
          <p>Hi, Dimuthu</p>
        </div>
      </nav>
  )
}

export default Navbar