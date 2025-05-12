import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart, HiMenu, HiX } from "react-icons/hi";

const navLinkClass =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
const activeClass = "text-blue-500 bg-gray-100 dark:bg-gray-800";
const inactiveClass = "text-gray-700 dark:text-gray-200 hover:text-blue-500";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#111827] shadow-sm fixed w-full z-20 top-0 left-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            SwiftMart
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Category
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${navLinkClass} flex items-center gap-1 ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              <HiOutlineShoppingCart className="text-lg" />
              Cart
              <span className="ml-1 text-xs font-semibold bg-blue-500 text-white rounded px-1">
                0
              </span>
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white dark:bg-[#111827] rounded shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block ${navLinkClass} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `block ${navLinkClass} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Category
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block ${navLinkClass} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block ${navLinkClass} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `block ${navLinkClass} flex items-center gap-1 ${
                  isActive ? activeClass : inactiveClass
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineShoppingCart className="text-lg" />
              Cart
              <span className="ml-1 text-xs font-semibold bg-blue-500 text-white rounded px-1">
                0
              </span>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
