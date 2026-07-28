const dashboardService = require("../services/dashboardService");

// =====================================
// GET DASHBOARD DATA
// =====================================

exports.getDashboard = async (req, res, next) => {
  try {
    const data = await dashboardService.getDashboardStats();

    res.status(200).json({
      success: true,

      message: "Dashboard data loaded successfully",

      data,
    });
  } catch (error) {
    next(error);
  }
};
