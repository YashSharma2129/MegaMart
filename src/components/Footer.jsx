import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">MegaMart</h4>
            <p className="text-gray-300">Contact Us: +1 202-918-2132</p>
            <p className="text-gray-300">Email: support@megamart.com</p>
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <Icon key={index} className="text-white hover:text-primary-300 transition-colors cursor-pointer h-6 w-6" />
              ))}
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              {/* Fixed image styling with specific dimensions and object-contain */}
              <a href="#" className="inline-block w-[140px] h-[42px]">
                <img 
                  src={process.env.PUBLIC_URL + '/images/app-store.png'} 
                  alt="App Store" 
                  className="w-full h-full object-contain hover:opacity-80 transition-opacity" 
                />
              </a>
              <a href="#" className="inline-block w-[140px] h-[42px]">
                <img 
                  src={process.env.PUBLIC_URL + '/images/google-play.png'} 
                  alt="Google Play" 
                  className="w-full h-full object-contain hover:opacity-80 transition-opacity" 
                />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Most Popular Categories</h4>
            <ul className="space-y-2">
              {["Staples", "Beverages", "Vegetables & Fruits", "Dairy & Bakery", "Snacks & Food"]
                .map(item => (
                  <li key={item} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Customer Services</h4>
            <ul className="space-y-2">
              {["About Us", "Terms & Conditions", "Privacy Policy", "Shipping Policy", "Cancellation & Return Policy"]
                .map(item => (
                  <li key={item} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 transition-colors rounded-md font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} MegaMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
