import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-100 to-white px-4 py-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-indigo-100 p-4 rounded-full mb-3 shadow">
            <svg
              className="w-10 h-10 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0c0 2.21-1.79 4-4 4H4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4zm8 0c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0c0 2.21-1.79 4-4 4h-2v-4c0-2.21 1.79-4 4-4s4 1.79 4 4z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 text-center">
            Our Privacy Policy
          </h1>
          <p className="text-gray-600 text-center max-w-xl">
            Your privacy is important to us. Below you’ll find a clear summary
            of how SwiftMart collects, uses, and protects your information,
            following the latest privacy standards and trends[6].
          </p>
          <div className="text-xs text-gray-400 mt-2">
            Last updated: May 13, 2025
          </div>
        </div>

        {/* Timeline/Steps Section */}
        <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8">
          <ol className="relative border-l-2 border-indigo-100">
            {/* Step 1 */}
            <li className="mb-8 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-full ring-4 ring-indigo-100 text-white font-bold">
                1
              </span>
              <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                What We Collect
              </h2>
              <p className="text-gray-700">
                We collect your name, email, contact details, order information,
                and site usage data to provide and improve our services.
              </p>
            </li>
            {/* Step 2 */}
            <li className="mb-8 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-full ring-4 ring-indigo-100 text-white font-bold">
                2
              </span>
              <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                How We Use Data
              </h2>
              <p className="text-gray-700">
                Your data helps us process orders, personalize your experience,
                and send important updates or offers.
              </p>
            </li>
            {/* Step 3 */}
            <li className="mb-8 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-full ring-4 ring-indigo-100 text-white font-bold">
                3
              </span>
              <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                Your Rights & Choices
              </h2>
              <p className="text-gray-700">
                You can access, update, or delete your information anytime. We
                honor your privacy preferences and consent choices[6].
              </p>
            </li>
            {/* Step 4 */}
            <li className="ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-full ring-4 ring-indigo-100 text-white font-bold">
                4
              </span>
              <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                Contact Us
              </h2>
              <p className="text-gray-700">
                Have questions or requests? Reach us at{" "}
                <a
                  href="mailto:privacy@swiftmart.com"
                  className="text-indigo-500 underline"
                >
                  privacy@swiftmart.com
                </a>
                .
              </p>
            </li>
          </ol>
          <div className="mt-10 text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SwiftMart. All rights reserved.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
