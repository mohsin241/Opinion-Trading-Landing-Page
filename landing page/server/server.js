const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;  // Default port if not provided in environment variables

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema and Model
const FormSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  // Validate email format
  },
  walletAddress: {
    type: String,
    required: true,
    // unique: true,  // Uncomment if you want to enforce unique wallet addresses
  },
});

const FormData = mongoose.model("FormData", FormSchema);

// API Endpoints
app.post("/submit", async (req, res) => {
  const { email, walletAddress } = req.body;

  // Basic validation
  if (!email || !walletAddress) {
    return res.status(400).json({ message: "Email and Wallet Address are required." });
  }

  try {
    const newFormData = new FormData({ email, walletAddress });
    await newFormData.save();
    res.status(200).json({ message: "Data saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while saving data." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
