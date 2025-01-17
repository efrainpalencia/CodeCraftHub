const jwt = require("jsonwebtoken");

/**
 * Middleware to protect private routes by verifying JWT token
 * @desc    Validates the token from the Authorization header and attaches user data to request
 * @access  Private (Applied to protected routes)
 */
const protect = (req, res, next) => {
  try {
    // Extract token from Authorization header (Bearer <TOKEN>)
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach decoded user data (userId) to request object
    req.user = decoded;

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = protect;
