// Import necessary modules
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Web3 from 'web3';
import MyGroup from "./MyGroup.jsx";
import walletConnectFcn from "./walletConnect.js";


const App = () => {

  return (
    
    <Router>
      <div className="bg-gray-100 text-gray-900">
      {/* <MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"} text={connectTextSt} link={connectLinkSt} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
};


const Navbar = () => {
  const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();
	const [contractAddress, setContractAddress] = useState();

  const [connectTextSt, setConnectTextSt] = useState("");
	const [contractTextSt, setContractTextSt] = useState();
	const [executeTextSt, setExecuteTextSt] = useState();

	const [connectLinkSt, setConnectLinkSt] = useState("");
	const [contractLinkSt, setContractLinkSt] = useState();
	const [executeLinkSt, setExecuteLinkSt] = useState();

  const connectWallet = async function () {
		if (account !== undefined) {
			setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
				setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
				setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

				setWalletData(wData);
				setAccount(newAccount);
				setNetwork(newNetwork);
				setContractTextSt();
			}
		}
	}


  return (
  <nav className="px-6 py-4 flex justify-between items-center border-b bg-white shadow">
    <h1 className="text-2xl font-bold">Decentralized Gig Economy</h1>
    <ul className="flex space-x-4">
      <li>
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
      </li>
      <li>
        <Link to="/tasks" className="hover:text-blue-500">Tasks</Link>
      </li>
      <li>
        <Link to="/profile" className="hover:text-blue-500">Profile</Link>
      </li>
      <li>
  
        <Link to="/payment" className="hover:text-blue-500">Payments</Link>
      </li>
      <li>
{/* 

<button

onClick={connectWallet}
className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
>
{account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
</button> */}
      </li>
    </ul>
    
<MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"} text={connectTextSt} link={connectLinkSt} />
  </nav>
  )
};




const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-20 min-h-screen bg-gray-100">
      <h2 className="text-5xl font-bold mb-6 text-gray-900">
        Welcome to the Decentralized Gig Economy
      </h2>
      <p className="text-lg mb-10 max-w-3xl text-gray-700 text-center">
        Our platform empowers freelancers and employers through blockchain technology, enabling secure, transparent, and efficient work collaborations. Explore opportunities, showcase your skills, and grow with the decentralized future of work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-10">
        <div className="p-8 bg-white rounded-lg shadow-lg text-left">
          <h3 className="text-3xl font-semibold mb-4 text-blue-600">
            For Freelancers
          </h3>
          <p className="text-gray-700 text-lg">
            Freelancers can showcase their skills to a global audience and connect with employers in need of their expertise. Secure payments are made directly to your wallet via blockchain, ensuring transparency and no middleman fees. Take control of your career and join a community of professionals embracing decentralized solutions.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-lg text-left">
          <h3 className="text-3xl font-semibold mb-4 text-green-600">
            For Employers
          </h3>
          <p className="text-gray-700 text-lg">
            Employers can post gigs, find top-tier talent, and manage work agreements with ease. Our platform provides a transparent and secure environment for hiring, eliminating fraud risks and ensuring seamless transactions. Build your dream team while leveraging the power of decentralized technology.
          </p>
        </div>
      </div>

      <Link
        to="/dashboard"
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
      >
        Get Started
      </Link>
    </div>
  );
};


const DashboardPage = () => {
  const profiles = [
    { role: "Frontend Engineer", name: "Alice Johnson", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { role: "Content Writer", name: "Bob Smith", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { role: "Fullstack Engineer", name: "Charlie Brown", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { role: "UI/UX Designer", name: "Diana Prince", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    { role: "Blockchain Developer", name: "Eve Adams", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { role: "Smart Contract Auditor", name: "Frank Green", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
    { role: "DevOps Engineer", name: "Grace Lee", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
    { role: "Project Manager", name: "Harry White", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
    { role: "Marketing Specialist", name: "Ivy Black", avatar: "https://randomuser.me/api/portraits/women/9.jpg" },
    { role: "Backend Developer", name: "Jack Davis", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
    { role: "Data Scientist", name: "Karen Moore", avatar: "https://randomuser.me/api/portraits/women/11.jpg" },
    { role: "SEO Expert", name: "Larry Wilson", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    { role: "Community Manager", name: "Mona Taylor", avatar: "https://randomuser.me/api/portraits/women/13.jpg" },
    { role: "Technical Writer", name: "Nathan Brown", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
    { role: "Product Owner", name: "Olivia Clark", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
    { role: "Quality Assurance Engineer", name: "Paul Harris", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
    { role: "Security Specialist", name: "Quinn Hall", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
    { role: "Data Analyst", name: "Rachel Scott", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
    { role: "AI Engineer", name: "Steve Young", avatar: "https://randomuser.me/api/portraits/men/19.jpg" },
    { role: "Game Developer", name: "Tina Walker", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
  ];

  return (
    <div className="p-6 min-h-screen">
      <Navbar />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for specialists..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow hover:shadow-md"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{profile.name}</h3>
            <p className="text-sm text-center text-gray-600">{profile.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TasksPage = () => {
  const gigs = [
    { title: "Build a React DApp", description: "Create a decentralized app with React.", requirements: "React, Web3", budget: "500 USDT", client: "Alice Johnson" },
    { title: "Write Smart Contracts", description: "Develop smart contracts on Solidity.", requirements: "Solidity, Ethereum", budget: "700 USDT", client: "Bob Smith" },
    { title: "UI/UX Design", description: "Design a clean UI for a DApp.", requirements: "Figma, Prototyping", budget: "400 USDT", client: "Charlie Brown" },
    { title: "Blockchain Research", description: "Research on Layer 2 solutions.", requirements: "Blockchain expertise", budget: "300 USDT", client: "Diana Prince" },
    { title: "Test DApp Security", description: "Perform penetration testing.", requirements: "Security Testing", budget: "600 USDT", client: "Eve Adams" },
    // Add more gigs as needed
  ];

  return (
    <div className="p-6 min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <input
            type="text"
            placeholder="Search for gigs..."
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gigs.map((gig, index) => (
              <div key={index} className="p-4 border rounded-lg bg-white shadow hover:shadow-md">
                <h3 className="text-lg font-semibold">{gig.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{gig.description}</p>
                <p className="text-sm text-gray-600 mb-2">Requirements: {gig.requirements}</p>
                <p className="text-sm text-gray-600 mb-2">Budget: {gig.budget}</p>
                <p className="text-sm text-gray-600">Client: {gig.client}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="p-4 border rounded-lg bg-white shadow">
            <h3 className="text-lg font-semibold mb-4">Create a Task</h3>
            <input
              type="text"
              placeholder="Task Description"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Requirements"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Budget (e.g., 500 USDT or HBAR)"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProfilePage = () => {
  const [userType, setUserType] = useState(null); // To track registration type
  const [profileInfo, setProfileInfo] = useState(null); // To display registered profile

  const handleSubmit = (type, data) => {
    setUserType(type);
    setProfileInfo(data);
  };

  if (profileInfo) {
    return (
      <div className="p-6 min-h-screen bg-gray-100">
        <Navbar />
        <h2 className="text-2xl font-bold mb-4">Your Profile Information</h2>
        <div className="p-6 bg-white border rounded-lg shadow">
          {userType === "worker" ? (
            <>
              <p><strong>Name:</strong> {profileInfo.name}</p>
              <p><strong>Skills:</strong> {profileInfo.skills}</p>
              <p><strong>Wallet Address:</strong> {profileInfo.wallet}</p>
            </>
          ) : (
            <>
              <p><strong>Organization Name:</strong> {profileInfo.organizationName}</p>
              <p><strong>Wallet Address:</strong> {profileInfo.wallet}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex gap-6">
        <div className="w-1/2 p-4 bg-white border rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Register as a freelancer</h3>
          <WorkerRegistrationForm onSubmit={(data) => handleSubmit("worker", data)} />
        </div>
        <div className="w-1/2 p-4 bg-white border rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Register as an employer</h3>
          <EmployerRegistrationForm onSubmit={(data) => handleSubmit("employer", data)} />
        </div>
      </div>
    </div>
  );
};

const WorkerRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    wallet: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Wallet Address</label>
        <input
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
        Register
      </button>
    </form>
  );
};

const EmployerRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    organizationName: "",
    wallet: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Organization Name</label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Wallet Address</label>
        <input
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
        Register
      </button>
    </form>
  );
};
const PaymentPage = () => {
  const [taskStatus, setTaskStatus] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleApproveTask = () => {
    setTaskStatus(true);
  };

  const handleTriggerPayment = () => {
    if (taskStatus) {
      setPaymentSuccess(true);
    } else {
      alert("Task must be completed and approved before payment.");
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Task Payment</h2>
        <p className="text-gray-600 mb-4">
          Ensure the task is completed and approved before processing the payment.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Task Details</h3>
          <p className="text-gray-600">Title: Build a responsive homepage</p>
          <p className="text-gray-600">Assigned to: John Doe</p>
          <p className="text-gray-600">Amount: 2 ETH</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleApproveTask}
            className={`px-4 py-2 rounded-lg ${
              taskStatus ? "bg-green-500" : "bg-blue-500"
            } text-white`}
          >
            {taskStatus ? "Task Approved" : "Approve Task"}
          </button>
          <button
            onClick={handleTriggerPayment}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Trigger Payment
          </button>
        </div>

        {paymentSuccess && (
          <div className="p-4 bg-green-100 border border-green-300 rounded mb-6">
            <h3 className="text-lg font-semibold text-green-800">Payment Successful</h3>
            <p className="text-gray-700">2 ETH has been sent to John Doe's wallet.</p>
          </div>
        )}

        {/* Chat Box */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Employer-Employee Chat</h3>
          <div className="border rounded-lg p-4 h-64 overflow-y-scroll bg-gray-50">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{message.sender}:</span>{" "}
                  <span>{message.text}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No messages yet. Start the conversation!</p>
            )}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;