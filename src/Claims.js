import React, { useState } from "react";

const Claims = () => {
  const [formData, setFormData] = useState({
    name: "",
    policyNumber: "",
    medicalReports: null,
    description: "",
    receipts: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the claim submission
    console.log("Claim submitted:", formData);
    alert("Your claim has been submitted successfully!");
    setFormData({
      name: "",
      policyNumber: "",
      medicalReports: null,
      description: "",
      receipts: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Submit a Claim</h1>
      <form
        className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Policy Number */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="policyNumber">
            Policy Number
          </label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={formData.policyNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Medical Reports */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="medicalReports">
            Upload Medical Reports (PDF)
          </label>
          <input
            type="file"
            id="medicalReports"
            name="medicalReports"
            accept="application/pdf"
            className="w-full p-3 bg-gray-700 text-white rounded"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Receipts */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="receipts">
            Upload Receipts (PDF)
          </label>
          <input
            type="file"
            id="receipts"
            name="receipts"
            accept="application/pdf"
            className="w-full p-3 bg-gray-700 text-white rounded"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Description of Incident */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="description">
            Description of the Incident
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
};

export default Claims;
