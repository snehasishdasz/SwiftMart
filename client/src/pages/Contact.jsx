import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  // Separate states for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus("Message sent successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Layout title={"Contact Us - SwiftMart"}>
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-4 px-2">
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
          {/* Left Side */}
          <div className="md:w-1/2 bg-indigo-600 text-white flex flex-col justify-center p-4">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-3 text-indigo-100 text-sm">
              Have a question or want to work together? Fill out the form and
              we’ll get back to you soon.
            </p>
            <div className="space-y-1 text-sm">
              <div>
                <span className="font-semibold">Email:</span> hello@example.com
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +91 98765 43210
              </div>
              <div>
                <span className="font-semibold">Location:</span> Mumbai, India
              </div>
            </div>
            <div className="flex space-x-3 mt-4 text-sm">
              <a href="#" className="hover:text-indigo-200">
                LinkedIn
              </a>
              <a href="#" className="hover:text-indigo-200">
                Twitter
              </a>
              <a href="#" className="hover:text-indigo-200">
                Instagram
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2 p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1 text-sm">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition text-sm"
              >
                Send Message
              </button>
              {status && (
                <div className="text-center text-green-600 mt-2 text-sm">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
