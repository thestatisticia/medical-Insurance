import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Borrow from "./Borrow";
import PolicyForm from "./PolicyForm";
import Claims from "./Claims";
import Dashboard from "./Dashboard";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Connect Plug Wallet Function
  const connectPlugWallet = async () => {
    try {
      const whitelist = ["your-canister-id"];
      const host = "https://mainnet.dfinity.network";

      const isPlugAvailable = window.ic && window.ic.plug;
      if (!isPlugAvailable) {
        alert("Plug Wallet is not installed. Please install it.");
        return;
      }

      const connected = await window.ic.plug.requestConnect({ whitelist, host });
      if (connected) {
        const principal = await window.ic.plug.agent.getPrincipal();
        setWalletAddress(principal.toText());
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Failed to connect Plug Wallet:", error);
      alert("An error occurred while connecting to Plug Wallet.");
    }
  };

  return (
    <Router>
      <Navbar
        walletAddress={walletAddress}
        isConnected={isConnected}
        connectPlugWallet={connectPlugWallet}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/policy" element={<PolicyForm />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
