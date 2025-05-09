import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategorySection from './components/CategorySection';
import BrandSection from './components/BrandSection';
import DailyEssentials from './components/DailyEssentials';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import CartPage from './components/Cart/CartPage';
import './App.css';

const HomePage = () => (
  <>
    <HeroBanner />
    <FeaturedProducts />
    <CategorySection />
    <BrandSection />
    <DailyEssentials />
  </>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategorySection />} />
          <Route path="/daily-essentials" element={<DailyEssentials />} />
          <Route path="/brands" element={<BrandSection />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
