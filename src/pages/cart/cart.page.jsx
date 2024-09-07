
import React from 'react'
import { Link } from 'react-router-dom'


const CartPage = () => {
  return (
    <div>
      <section className="py-8 px-16">
      <h1 class="text-4xl font-semibold">Your Shopping Cart</h1>
      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4  border-black py-4">
      
      </div>
      <div>
        <Link
          className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
          to="/checkout"
        >
          Proceed to Checkout
        </Link>
      </div>
      </section>
    </div>
  )
}

export default CartPage