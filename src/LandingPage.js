import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to MedInsure</h1>
      <p className="text-lg mb-8 text-center">
        Your trusted partner in health insurance and financial support. Access affordable plans, borrow from our pooled funds, and enjoy peace of mind.
      </p>
      <div className="flex space-x-4">
        <a
          href="/borrow"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg"
        >
          Borrow Now
        </a>
        <a
          href="/dashboard"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded shadow-lg"
        >
          Explore Plans
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
