require("dotenv").config();

const express = require("express");
const cors = require("cors");

const candidateRoutes = require("./routes/candidateRoutes");
const jobRoutes = require("./routes/jobRoutes");
const aiRoutes = require("./routes/aiRoutes");
const matchingRoutes = require("./routes/matchingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// ===============================
// GLOBAL MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// ===============================
// STATIC FILES
// ===============================

app.use("/uploads", express.static("uploads"));

// ===============================
// HEALTH CHECK
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,

    project: "HR Pilot",

    status: "Backend Running",
  });
});

// ===============================
// API ROUTES
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/candidates", candidateRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/matching", matchingRoutes);

app.use("/api/dashboard", dashboardRoutes);

// ===============================
// ERROR HANDLER
// ===============================

app.use(errorHandler);

// ===============================
// Notification
// ===============================

app.use("/api/notifications", notificationRoutes);

// ===============================
// SERVER START
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 HR Pilot Backend running on port ${PORT}`);
});
