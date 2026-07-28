const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// ============================
// REGISTER
// POST /api/auth/register
// ============================

router.post(
  "/register",
  authController.register
);

// ============================
// LOGIN
// POST /api/auth/login
// ============================

router.post(
  "/login",
  authController.login
);

// ============================
// PROFILE
// GET /api/auth/profile
// Protected
// ============================

router.get(
  "/profile",
  authMiddleware,
  authController.profile
);

module.exports = router;