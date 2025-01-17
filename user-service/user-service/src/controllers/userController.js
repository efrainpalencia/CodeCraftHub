const User = require("../models/User");
const { registerUser, loginUser } = require("../services/authService");

/**
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  Public
 */
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const token = await registerUser(name, email, password, role);
    
    // Send success response with token
    res.status(201).json({ message: "User registered", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    
    // Send success response with token
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Get logged-in user profile (Protected Route)
 * @route   GET /api/users/profile
 * @access  Private (Requires JWT Token)
 */
const getUserProfile = async (req, res) => {
  try {
    // Fetch user by ID extracted from JWT token (Stored in `req.user`)
    const user = await User.findById(req.user.userId).select("-password"); // Excludes password from response

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Export the controller functions
module.exports = { register, login, getUserProfile };
