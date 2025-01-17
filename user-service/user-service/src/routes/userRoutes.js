const express = require("express");
const { register, login, getUserProfile, updateUserProfile } = require("../controllers/userController");
const protect = require("../middleware/auth"); // Import authentication middleware

const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/register", register);

/**
 * @route   POST /api/users/login
 * @desc    Authenticate user & get token
 * @access  Public
 */
router.post("/login", login);

/**
 * @route   GET /api/users/profile
 * @desc    Get the authenticated user's profile
 * @access  Private (Requires JWT Token)
 */
router.get("/profile", protect, getUserProfile); // Protected route, requires authentication

/**
 * @route   PUT /api/users/profile
 * @desc    Update user profile
 * @access  Private (Requires JWT Token)
 */
router.put("/profile", protect, updateUserProfile);

module.exports = router;
