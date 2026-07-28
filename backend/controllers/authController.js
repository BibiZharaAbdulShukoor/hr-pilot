const authService = require("../services/authService");

// ===========================
// REGISTER
// ===========================

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Password are required",
      });
    }

    const result = await authService.register({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    next(error);
  }
};

// ===========================
// LOGIN
// ===========================

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const result = await authService.login({
      email,
      password,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    next(error);
  }
};

// ===========================
// PROFILE
// ===========================

exports.profile = async (req, res, next) => {
  try {
    const user = await authService.profile(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};