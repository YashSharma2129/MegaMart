import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h4 className="text-lg font-bold mb-2">MegaMart</h4>
          <p>Contact Us: +1 202-918-2132</p>
          <div className="mt-2 space-y-2">
            <img 
              src={process.env.PUBLIC_URL + '/images/app-store.png'} 
              alt="App Store" 
              className="h-8" 
            />
            <img 
              src={process.env.PUBLIC_URL + '/images/google-play.png'} 
              alt="Google Play" 
              className="h-8" 
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Most Popular Categories</h4>
          <ul className="text-sm space-y-1">
            {["Staple", "Beverage", "Vegetables & Fruit", "Dairy & Bakery", "Snacks & Food"]
              .map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Customer Services</h4>
          <ul className="text-sm space-y-1">
            {["About Us", "Privacy Policy", "Cancellation & Return Policy"]
              .map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        © 2022 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
}
