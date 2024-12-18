// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GigEconomy {
    struct Task {
        uint256 id;
        string description;
        uint256 reward;
        address employer;
        address worker;
        bool completed;
    }

    struct UserProfile {
        string name;
        string role; // "Employer" or "Worker"
        string details; // Skills for Workers or Organization for Employers
    }

    uint256 private taskIdCounter;
    mapping(uint256 => Task) public tasks;
    mapping(address => UserProfile) public userProfiles;
    mapping(address => uint256[]) public userTasks;

    event UserRegistered(address indexed user, string name, string role);
    event TaskCreated(uint256 indexed taskId, address indexed employer, string description, uint256 reward);
    event TaskAssigned(uint256 indexed taskId, address indexed worker);
    event TaskCompleted(uint256 indexed taskId, address indexed worker);
    event PaymentReleased(uint256 indexed taskId, address indexed worker, uint256 amount);

    modifier onlyRegistered() {
        require(bytes(userProfiles[msg.sender].role).length > 0, "User not registered");
        _;
    }

    modifier onlyEmployer(uint256 taskId) {
        require(tasks[taskId].employer == msg.sender, "Not the task's employer");
        _;
    }

    modifier onlyWorker(uint256 taskId) {
        require(tasks[taskId].worker == msg.sender, "Not the assigned worker");
        _;
    }

    function registerUser(string memory name, string memory role, string memory details) external {
        require(bytes(userProfiles[msg.sender].role).length == 0, "User already registered");
        require(keccak256(abi.encodePacked(role)) == keccak256("Employer") || keccak256(abi.encodePacked(role)) == keccak256("Worker"), "Invalid role");

        userProfiles[msg.sender] = UserProfile(name, role, details);
        emit UserRegistered(msg.sender, name, role);
    }

    function createTask(string memory description, uint256 reward) external onlyRegistered {
        require(keccak256(abi.encodePacked(userProfiles[msg.sender].role)) == keccak256("Employer"), "Only employers can create tasks");
        require(reward > 0, "Reward must be greater than zero");

        taskIdCounter++;
        tasks[taskIdCounter] = Task(taskIdCounter, description, reward, msg.sender, address(0), false);
        userTasks[msg.sender].push(taskIdCounter);

        emit TaskCreated(taskIdCounter, msg.sender, description, reward);
    }

    function assignTask(uint256 taskId, address worker) external onlyRegistered onlyEmployer(taskId) {
        require(tasks[taskId].worker == address(0), "Task already assigned");
        require(keccak256(abi.encodePacked(userProfiles[worker].role)) == keccak256("Worker"), "Only workers can be assigned");

        tasks[taskId].worker = worker;
        userTasks[worker].push(taskId);

        emit TaskAssigned(taskId, worker);
    }

    function completeTask(uint256 taskId) external onlyRegistered onlyWorker(taskId) {
        require(!tasks[taskId].completed, "Task already completed");

        tasks[taskId].completed = true;

        emit TaskCompleted(taskId, msg.sender);
    }

    function releasePayment(uint256 taskId) external payable onlyRegistered onlyEmployer(taskId) {
        require(tasks[taskId].completed, "Task not completed");
        require(msg.value == tasks[taskId].reward, "Incorrect payment amount");

        address worker = tasks[taskId].worker;
        require(worker != address(0), "Task not assigned");

        payable(worker).transfer(msg.value);

        emit PaymentReleased(taskId, worker, msg.value);
    }

    function getTasksByUser(address user) external view returns (uint256[] memory) {
        return userTasks[user];
    }

    function getTaskDetails(uint256 taskId) external view returns (Task memory) {
        return tasks[taskId];
    }
}
