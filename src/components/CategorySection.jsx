import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { name: 'Mobiles', image: '/categories/mobile.png' },
  { name: 'Fashion', image: '/categories/fashion.png' },
  { name: 'Electronics', image: '/categories/electronics.png' },
  { name: 'Home', image: '/categories/home.png' },
  { name: 'Travel', image: '/categories/travel.png' },
  { name: 'Appliances', image: '/categories/appliances.png' },
  { name: 'Furniture', image: '/categories/furniture.png' },
  { name: 'Beauty', image: '/categories/beauty.png' }
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">Shop From Top Categories</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            View All
            <span className="text-lg">→</span>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={2.5}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 }
          }}
          className="category-swiper !px-1"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.name}>
              <div className="text-center cursor-pointer group">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-white 
                              shadow-sm border border-gray-100 overflow-hidden
                              transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  {category.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
