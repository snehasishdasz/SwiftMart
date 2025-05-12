import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-8 pb-6 pl-4 md:pl-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-white text-2xl font-bold mb-2 tracking-tight">
              SwiftMart
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover top-quality products with fast delivery and easy returns.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="text-white text-base font-semibold mb-3">Shop</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white text-base font-semibold mb-3">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white text-base font-semibold mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-3 text-sm">
              Subscribe to get the latest deals and offers.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} SwiftMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
