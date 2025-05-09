import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ title, originalPrice, discountedPrice, image, badge }) {
  const [isAdding, setIsAdding] = useState(false);
  const savings = originalPrice - discountedPrice;

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center transition-all duration-300
                    hover:shadow-xl hover:scale-105 relative">
      {badge && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 
                      rounded-full text-xs animate-pulse">
          {badge}
        </span>
      )}
      <div className="aspect-w-1 aspect-h-1 mb-2 overflow-hidden rounded-lg">
        <img
          src={image || "https://via.placeholder.com/100"}
          alt={`Product: ${title}`}
          className="mx-auto object-contain w-full h-full transform transition-transform
                   duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      <h4 className="font-medium truncate">{title}</h4>
      <p className="text-sm text-gray-500 line-through">₹{originalPrice}</p>
      <p className="text-lg font-semibold text-green-600">₹{discountedPrice}</p>
      <p className="text-sm text-red-500">Save ₹{savings}</p>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`mt-2 w-full py-2 px-4 rounded-full flex items-center justify-center space-x-2
                   ${isAdding ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
                   text-white transition-colors duration-300`}
      >
        <FaShoppingCart />
        <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
      </button>
    </div>
  );
}
