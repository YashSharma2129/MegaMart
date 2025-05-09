import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const brands = [
  {
    name: "Apple",
    description: "Premium devices",
    logo: "/brands/apple-logo.png",
    productImage: "/products/iphone-14.png",
    discount: "Up to 20% OFF",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-700",
    textColor: "text-white"
  },
  {
    name: "Realme",
    description: "Smart tech for youth",
    logo: "/brands/realme-logo.png",
    productImage: "/products/realme-gt.png",
    discount: "Up to 40% OFF",
    bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    textColor: "text-gray-900"
  },
  {
    name: "Xiaomi",
    description: "Innovation for all",
    logo: "/brands/xiaomi-logo.png",
    productImage: "/products/mi-12.png",
    discount: "Up to 50% OFF",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-700",
    textColor: "text-white"
  },
  {
    name: "Samsung",
    description: "Next-gen technology",
    logo: "/brands/samsung-logo.png",
    productImage: "/products/galaxy-s23.png",
    discount: "Up to 35% OFF",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    textColor: "text-white"
  }
];

export default function BrandSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top Electronics Brands</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            View All
            <span>→</span>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="brand-swiper !pb-12"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.name}>
              <div className={`
                ${brand.bgColor} ${brand.textColor}
                rounded-[2rem] p-6 h-[400px]
                transform transition-all duration-300
                hover:scale-[1.02] hover:shadow-xl
                flex flex-col justify-between
                cursor-pointer
              `}>
                {/* Brand Header */}
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 bg-white rounded-xl p-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {brand.name.toUpperCase()}
                  </span>
                </div>

                {/* Product Image */}
                <div className="flex-1 flex items-center justify-center my-6">
                  <img
                    src={brand.productImage}
                    alt={brand.name}
                    className="max-h-48 w-auto object-contain
                             transform transition-all duration-500
                             hover:scale-110 hover:rotate-3"
                  />
                </div>

                {/* Brand Info */}
                <div>
                  <p className="text-lg mb-2">{brand.description}</p>
                  <div className="text-2xl font-bold animate-pulse">
                    {brand.discount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
