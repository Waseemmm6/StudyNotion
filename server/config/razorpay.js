const Razorpay = require("razorpay");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Initialize Razorpay instance with the keys from the environment variables
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,     // Public key from Razorpay
  key_secret: process.env.RAZORPAY_SECRET,  // Secret key from Razorpay
});

module.exports = { instance };
