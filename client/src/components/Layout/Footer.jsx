import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-2 pb-2 pl-2 md:pt-4 md:pb-4 md:pl-10">
      <div className="max-w-7xl mx-auto px-2 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
          {/* Brand */}
          <div>
            <h1 className="text-white text-base md:text-xl font-bold mb-1 tracking-tight">
              SwiftMart
            </h1>
            <p className="text-gray-400 text-xs md:text-sm leading-snug">
              Discover top-quality products with fast delivery and easy returns.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h2 className="text-white text-xs md:text-base font-semibold mb-1">
              Shop
            </h2>
            <ul className="space-y-0.5 md:space-y-1 text-xs md:text-base">
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

          {/* Support - hidden on small screens */}
          <div className="hidden md:block">
            <h2 className="text-white text-xs md:text-base font-semibold mb-1">
              Support
            </h2>
            <ul className="space-y-0.5 md:space-y-1 text-xs md:text-base">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/policy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white text-xs md:text-base font-semibold mb-1">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-1 text-xs md:text-sm">
              Subscribe for deals.
            </p>
            <form className="flex gap-1 md:flex-col md:gap-1">
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-0.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs w-full"
              />
              <button
                type="submit"
                className="px-2 py-0.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-2 md:mt-4 text-center text-[10px] md:text-xs text-gray-500 border-t border-gray-700 pt-1 md:pt-2">
          &copy; {new Date().getFullYear()} SwiftMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
