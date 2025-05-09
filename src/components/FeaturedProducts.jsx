import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const smartphones = [
  {
    title: "iPhone 13",
    originalPrice: 79999,
    discountedPrice: 69999,
    image: process.env.PUBLIC_URL + "/smartphones/iphone13.jpg",
    discountPercent: "56"
  },
  {
    title: "Samsung S21",
    originalPrice: 69999,
    discountedPrice: 59999,
    image: process.env.PUBLIC_URL + "/smartphones/samsung-s21.jpg",
    discountPercent: "15"
  },
  {
    title: "OnePlus 9",
    originalPrice: 49999,
    discountedPrice: 39999,
    image: process.env.PUBLIC_URL + "/smartphones/oneplus-9.jpg",
    discountPercent: "25"
  },
  {
    title: "Google Pixel 6",
    originalPrice: 59999,
    discountedPrice: 49999,
    image: process.env.PUBLIC_URL + "/smartphones/pixel-6.jpg",
    discountPercent: "18"
  },
  {
    title: "Xiaomi 12",
    originalPrice: 39999,
    discountedPrice: 29999,
    image: process.env.PUBLIC_URL + "/smartphones/xiaomi-12.jpg",
    discountPercent: "30"
  }
];

export default function FeaturedProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      try {
        setProducts(smartphones);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-medium text-gray-800">
            Grab the best deal on Smartphones
          </h3>
          <a 
            href="#" 
            className="text-[#0076CE] hover:underline font-medium flex items-center gap-1 transition-all duration-200"
          >
            View All
            <span className="text-lg">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((phone, index) => (
            <div 
              key={index} 
              className="relative bg-white p-4 rounded-lg cursor-pointer 
                         border-2 border-transparent hover:border-[#0076CE] 
                         transition-all duration-200"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 right-2 bg-[#0076CE] text-white text-xs font-bold px-2 py-1 rounded">
                {phone.discountPercent}% OFF
              </div>
              
              {/* Product Image */}
              <div className="h-32 flex items-center justify-center mb-4">
                <img 
                  src={phone.image} 
                  alt={phone.title}
                  className="max-h-full w-auto object-contain" 
                />
              </div>
              
              {/* Product Info */}
              <div className="space-y-1 text-left">
                <h4 className="text-sm text-[#212121] font-normal leading-tight">
                  {phone.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-black">₹{phone.discountedPrice}</span>
                  <span className="text-sm text-[#878787] line-through">₹{phone.originalPrice}</span>
                </div>
                <div className="text-xs text-[#00A500]">
                  Save - ₹{phone.originalPrice - phone.discountedPrice}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
