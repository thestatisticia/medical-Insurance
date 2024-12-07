import React, { useState } from "react";

const PolicyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    policyNumber: "",
    preExistingConditions: "",
    monthlyIncome: "",
    policyTerm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Policy Purchased Successfully!");
    setFormData({
      name: "",
      policyNumber: "",
      preExistingConditions: "",
      monthlyIncome: "",
      policyTerm: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Buy Policy</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Policy Number</label>
            <input
              type="text"
              name="policyNumber"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.policyNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Pre-existing Conditions</label>
            <textarea
              name="preExistingConditions"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.preExistingConditions}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Monthly Income (USD)</label>
            <input
              type="number"
              name="monthlyIncome"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.monthlyIncome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Policy Term (Years)</label>
            <input
              type="number"
              name="policyTerm"
              className="w-full p-3 rounded bg-gray-700 text-white"
              value={formData.policyTerm}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
          >
            Buy Policy
          </button>
        </form>
      </div>
    </div>
  );
};

export default PolicyForm;
