const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

// =====================================
// DASHBOARD ROUTE
// =====================================

// GET DASHBOARD DATA

router.get("/", dashboardController.getDashboard);

module.exports = router;
