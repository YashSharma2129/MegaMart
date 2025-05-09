import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="object-cover object-center w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-xl text-gray-500 line-through">
                ₹{product.originalPrice}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>
            
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full
                         flex items-center justify-center space-x-2 hover:bg-blue-700
                         transition duration-300"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
              
              <button
                className="px-6 py-3 rounded-full border-2 border-gray-300
                         flex items-center justify-center hover:border-red-500
                         hover:text-red-500 transition duration-300"
              >
                <FaHeart />
              </button>
            </div>
          </div>

          {/* Product Features */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <h3 className="text-lg font-medium">Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
