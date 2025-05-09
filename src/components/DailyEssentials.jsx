import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const essentials = [
  { name: "Fresh Fruits", image: "fruits.png", discount: "50" },
  { name: "Vegetables", image: "vegetables.png", discount: "40" },
  { name: "Fresh Cherries", image: "cherries.png", discount: "30" },
  { name: "Sweet Mango", image: "mango.png", discount: "45" },
  { name: "Strawberries", image: "strawberries.png", discount: "35" },
  { name: "Fresh Basket", image: "basket.png", discount: "25" },
  { name: "Organic Foods", image: "fruits.png", discount: "50" },
  { name: "Green Veggies", image: "vegetables.png", discount: "40" }
];

export default function DailyEssentials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Daily <span className="text-blue-600">Essentials</span>
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors">
            View All
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 }
          }}
          className="!py-4"
        >
          {essentials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-4 transition-transform 
                            duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    className="w-full h-full object-contain transform transition-transform 
                             duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-blue-600 text-sm font-medium">
                    Up to {item.discount}% OFF
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
