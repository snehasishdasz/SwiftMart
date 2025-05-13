import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PagenotFound = () => {
  return (
    <Layout title={"Page Not Found - SwiftMart"}>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-indigo-100 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden fade-in">
          {/* Left: Icon Block */}
          <div className="md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 via-blue-50 to-white py-12 px-6 relative">
            <div className="flex items-center justify-center mb-4">
              <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-indigo-100 animate-bounce-slow">
                <span className="text-7xl">🛍️</span>
              </div>
            </div>
            <div className="text-indigo-600 font-bold text-lg mt-2 tracking-wide">
              SwiftMart
            </div>

            {/* Divider for desktop */}
            <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-200 via-indigo-100 to-white opacity-70"></div>
          </div>
          {/* Right: Message Card */}
          <div className="md:w-2/3 flex flex-col items-center justify-center py-12 px-8">
            <h1 className="text-6xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3 text-center">
              Oops! This page is missing.
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              The page you’re looking for isn’t here.
              <br />
              But you can always find something amazing at SwiftMart!
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-10 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition transform hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"
                />
              </svg>
              Back to Shopping
            </Link>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .fade-in {
            animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </Layout>
  );
};

export default PagenotFound;
