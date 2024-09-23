import React, { useContext, useState } from 'react'
import { Heart } from "lucide-react";
import { CartContext } from '../../../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({_id,name,image,price,description}) => {
  const [isLiked, setIsLiked] = useState(false);
  const {handleAddToCart}=useContext(CartContext);

  const handleClick = () => {
    setIsLiked(!isLiked)
  };

  const handleAddProductToCart = () => {
    const product = {
      _id,
      name,
      price,
      image,
      description,
    };
    handleAddToCart(product); 
    toast.success('Added Item');
  };



  return (
    <div className="h-[432px] relative">
      {isLiked ? (
        <Heart
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500 fill-red-500"
          onClick={handleClick}
        />
      ) : (
        <Heart
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500 "
          onClick={handleClick}
        />
      )}
      <div className={`h-64 rounded-xl bg-[#f4f8f9] relative`}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
     
      <div className="mt-4">
        <div className=" flex items-center justify-between">
          <span className="block text-2xl font-semibold">{name}</span>
          <span className="block font-semibold">${price}</span>
        </div>
        <p className="text-sm">{description}</p>
        <div className="mt-2">
          <button
            onClick={handleAddProductToCart}
            type="button"
            className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard