const notificationService = require("../services/notificationService");

exports.getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getLatest(10);

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};