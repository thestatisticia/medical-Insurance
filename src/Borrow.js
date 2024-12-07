import React, { useState } from "react";

const Borrow = () => {
  const [borrowAmount, setBorrowAmount] = useState("");
  const [activeLoan, setActiveLoan] = useState(null);
  const [repaymentAmount, setRepaymentAmount] = useState("");

  const handleBorrow = () => {
    if (borrowAmount) {
      setActiveLoan({ amount: borrowAmount, asset: "ICP", apy: 5 });
      setBorrowAmount("");
      alert("Borrow request successful!");
    }
  };

  const handleRepay = () => {
    if (repaymentAmount && activeLoan) {
      if (parseFloat(repaymentAmount) >= parseFloat(activeLoan.amount)) {
        setActiveLoan(null);
        setRepaymentAmount("");
        alert("Loan fully repaid!");
      } else {
        alert(
          `Partial repayment of ${repaymentAmount} ICP recorded. Remaining: ${
            activeLoan.amount - repaymentAmount
          } ICP`
        );
        setActiveLoan({
          ...activeLoan,
          amount: (activeLoan.amount - repaymentAmount).toFixed(2),
        });
        setRepaymentAmount("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Borrow</h1>

      {/* Borrowing Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Borrow from Insurance Pool</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">Asset to Borrow: ICP</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium">APY: 5%</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="borrowAmount">
            Enter Amount to Borrow
          </label>
          <input
            type="number"
            id="borrowAmount"
            name="borrowAmount"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={borrowAmount}
            onChange={(e) => setBorrowAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleBorrow}
          disabled={!borrowAmount}
        >
          Borrow
        </button>
      </div>

      {/* Active Loans Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Active Loans</h2>
        {activeLoan ? (
          <div>
            <p className="text-lg">
              <span className="font-medium">Asset:</span> {activeLoan.asset}
            </p>
            <p className="text-lg">
              <span className="font-medium">Borrowed Amount:</span>{" "}
              {activeLoan.amount} ICP
            </p>
            <p className="text-lg">
              <span className="font-medium">APY:</span> {activeLoan.apy}%
            </p>
            <div className="mt-4">
              <label className="block text-gray-300 mb-2" htmlFor="repaymentAmount">
                Enter Repayment Amount
              </label>
              <input
                type="number"
                id="repaymentAmount"
                name="repaymentAmount"
                className="w-full p-3 rounded bg-gray-700 text-white"
                value={repaymentAmount}
                onChange={(e) => setRepaymentAmount(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
            <button
              className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700"
              onClick={handleRepay}
              disabled={!repaymentAmount}
            >
              Repay
            </button>
          </div>
        ) : (
          <p className="text-gray-400">No active loans at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Borrow;
