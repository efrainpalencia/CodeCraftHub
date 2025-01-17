const mongoose = require("mongoose");

/**
 * Connects to MongoDB using the provided connection string
 * @desc Uses environment variable `MONGO_URI` for connection
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {}); // No need for deprecated options
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
