const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const enquiryRoutes = require("./routes/enquiry");
app.use("/api", enquiryRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    // Options not needed for latest mongoose versions
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
