import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navgroup">
          <a className="navbar-brand" to="/">StoreHub</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
        <div className="cart-section">
          <div>
            <a href="/cart" className="cart-link">
              <p className="cart-count">{0}</p>
              <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                Cart
              </div>
            </a>
          </div>
          <p>Hi, Dimuthu</p>
        </div>
      </nav>
  )
}

export default Navbar