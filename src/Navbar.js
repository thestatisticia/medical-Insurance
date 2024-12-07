import React from "react";
import { Link } from "react-router-dom";
import {ConnectWallet} from "@nfid/identitykit/react"

const Navbar = ({ walletAddress, isConnected, connectPlugWallet }) => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MedInsure</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/borrow" className="hover:text-blue-400">
              Borrow
            </Link>
          </li>
          <li>
            <Link to="/policy" className="hover:text-blue-400">
              Buy Policy
            </Link>
          </li>
          <li>
            <Link to="/claims" className="hover:text-blue-400">
              Claims
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          {isConnected ? (
            <span className="text-sm bg-gray-700 px-4 py-2 rounded-lg">
              Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-6)}
            </span>
          ) : (
            
            <ConnectWallet/>


            // <button
            //   onClick={connectPlugWallet}
            //   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            // >
            //   Connect Wallet
            // </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
