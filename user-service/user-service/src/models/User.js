const mongoose = require("mongoose");

/**
 * User Schema - Defines structure of user documents in MongoDB
 * @property {string} name - Full name of the user (Required)
 * @property {string} email - Unique email address (Required)
 * @property {string} password - Hashed password (Required)
 * @property {string} role - User role (student, instructor, admin) (Default: "student")
 * @property {Date} createdAt - Timestamp of account creation (Default: current time)
 */
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's full name
  email: { type: String, required: true, unique: true }, // Unique email for authentication
  password: { type: String, required: true }, // Hashed password for security
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" }, // User role management
  createdAt: { type: Date, default: Date.now } // Auto-generates creation timestamp
});

module.exports = mongoose.model("User", UserSchema);
