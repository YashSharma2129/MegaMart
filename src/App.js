import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategorySection from './components/CategorySection';
import BrandSection from './components/BrandSection';
import DailyEssentials from './components/DailyEssentials';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroBanner />
      <FeaturedProducts />
      <CategorySection />
      <BrandSection />
      <DailyEssentials />
      <Footer />
    </div>
  );
}

export default App;
