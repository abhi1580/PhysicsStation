const express = require("express");
const dotenv = require("dotenv").config();
const connectTODb = require("./DbConfig");
const authRouter = require("./routes/auth/auth-routes");
const cors = require("cors");

connectTODb();
const app = express();

// Apply CORS middleware **before** defining routes
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // Allows cookies & auth headers
  })
);

app.use(express.json());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
