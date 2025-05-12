import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PagenotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-[#0f172a] px-4">
        <div className="w-full max-w-xl mx-auto flex flex-col items-center">
          {/* Modern flat illustration */}
          <div className="mb-6">
            <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
              <ellipse cx="90" cy="110" rx="70" ry="8" fill="#e0e7ef" />
              <rect
                x="50"
                y="30"
                width="80"
                height="50"
                rx="12"
                fill="#e0e7ff"
              />
              <rect x="60" y="40" width="60" height="30" rx="6" fill="#fff" />
              <circle cx="75" cy="55" r="8" fill="#2563eb" />
              <rect x="87" y="52" width="25" height="6" rx="3" fill="#a5b4fc" />
              <rect x="87" y="62" width="18" height="4" rx="2" fill="#c7d2fe" />
              {/* Magnifier */}
              <circle cx="125" cy="75" r="10" fill="#2563eb" />
              <rect
                x="133"
                y="83"
                width="10"
                height="3"
                rx="1.5"
                fill="#2563eb"
                transform="rotate(45 133 83)"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-extrabold text-blue-700 dark:text-blue-400 mb-2">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Product Not Found
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mb-8 text-center">
            We couldn't find the page or product you were looking for.
            <br />
            Try searching again or return to our homepage to discover great
            deals!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PagenotFound;
