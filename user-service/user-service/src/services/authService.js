const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Registers a new user
 * @param {string} name - User's full name
 * @param {string} email - User's email address (unique)
 * @param {string} password - Plain text password (will be hashed)
 * @param {string} role - User role (default: "student")
 * @returns {string} JWT token
 * @throws {Error} If the email is already registered
 */
const registerUser = async (name, email, password, role) => {
  // Check if user with email already exists
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");

  // Hash password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();

  // Generate JWT token for the new user
  return generateToken(user._id);
};

/**
 * Authenticates user by checking credentials and returns JWT token
 * @param {string} email - User's email address
 * @param {string} password - User's password (plain text)
 * @returns {string} JWT token
 * @throws {Error} If credentials are invalid
 */
const loginUser = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  // Compare provided password with stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // Generate JWT token for authenticated user
  return generateToken(user._id);
};

/**
 * Generates a JWT token for authentication
 * @param {string} userId - User's unique ID
 * @returns {string} JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = { registerUser, loginUser };
