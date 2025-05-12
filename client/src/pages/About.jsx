import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - SwiftMart"}>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4 py-10">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
            About SwiftMart
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SwiftMart makes online shopping easy, fast, and reliable.
          </p>
        </div>
        {/* Card Section */}
        <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 flex flex-col items-center">
          <img
            src="/public/images/CEO.png"
            alt="Founder"
            className="w-32 h-32 rounded-full border-4 border-indigo-100 shadow mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-indigo-700 mb-1">
            Snehasish Das
          </h2>
          <div className="text-indigo-400 text-sm mb-4">
            Founder & Visionary
          </div>
          <p className="text-gray-600 text-center mb-3">
            We offer top brands, great deals, and quick delivery to your door.
          </p>
          <p className="text-gray-600 text-center mb-6">
            Our mission is to make every shopping experience smooth and
            satisfying.
          </p>
          {/* Highlights */}
          <div className="flex w-full justify-around mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600">8+</div>
              <div className="text-xs text-gray-500">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600">300K+</div>
              <div className="text-xs text-gray-500">Orders Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600">99%</div>
              <div className="text-xs text-gray-500">Customer Satisfaction</div>
            </div>
          </div>
          {/* Call to Action */}
          <a
            href="/contact"
            className="mt-2 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
          >
            Get in Touch
          </a>
        </div>
        <div className="mt-8 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} SwiftMart. All rights reserved.
        </div>
      </div>
    </Layout>
  );
};

export default About;
