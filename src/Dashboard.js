import React from "react";

const Dashboard = ({ walletAddress }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Dashboard</h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        Welcome, {walletAddress ? walletAddress : "User"}! Explore your medical insurance options.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Plan Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <p className="text-gray-300 mb-4">
            <strong>Covers:</strong>
            <ul className="list-disc list-inside">
              <li>Doctor's bills</li>
              <li>Hospital bills</li>
              <li>Simple diseases (e.g., malaria)</li>
              <li>Simple accidents</li>
              <li>Simple injuries</li>
              <li>Simple medical health conditions</li>
            </ul>
          </p>
          <p className="text-blue-500 font-bold">5 ICP / Month</p>
        </div>

        {/* Premium Plan Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
          <p className="text-gray-300 mb-4">
            <strong>Covers:</strong>
            <ul className="list-disc list-inside">
              <li>All diseases</li>
              <li>Scans and X-rays</li>
              <li>Serious accidents</li>
              <li>Critical health conditions</li>
              <li>Extensive hospitalizations</li>
            </ul>
          </p>
          <p className="text-green-500 font-bold">10 ICP / Month</p>
        </div>

        {/* Not Covered Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">What is Not Covered</h2>
          <p className="text-gray-300 mb-4">
            <strong>Exclusions:</strong>
            <ul className="list-disc list-inside">
              <li>Substance abuse-related treatments</li>
              <li>Serious mental health issues</li>
              <li>Chronic health conditions</li>
              <li>Pre-existing conditions</li>
              <li>Elective cosmetic surgeries</li>
            </ul>
          </p>
        </div>

        {/* Benefits Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Benefits of Our Insurance</h2>
          <p className="text-gray-300 mb-4">
            <strong>Why Choose Us:</strong>
            <ul className="list-disc list-inside">
              <li>Comprehensive coverage for all health needs</li>
              <li>Financial protection against medical emergencies</li>
              <li>Access to quality healthcare providers</li>
              <li>Peace of mind for you and your family</li>
              <li>Affordable and transparent pricing</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
