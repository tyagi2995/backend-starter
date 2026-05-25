const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CatchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const { dummy: Dummy } = require("../models");

exports.getDummy = CatchAsync(async (req, res) => {
  const users = await Dummy.findAll({
    attributes: ["id", "first_name", "email", "status"],
    order: [["id", "DESC"]],
  });

  return res.status(200).json({
    success: true,
    message: "Dummy API working successfully",
    total: users.length,
    data: users,
  });
});

exports.createDummy = CatchAsync(async (req, res) => {
  const { username, password } = req.body;

  /**
   * Find User
   */
  const user = await Dummy.findOne({
    where: { username },
  });

  // User Not Found
  if (!user) {
    return next(new AppError("Invalid credentials", 401));
  }

  /**
   * Check Password
   */
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return next(new AppError("Invalid credentials", 401));
  }

  /**
   * Check User Status
   */
  if (user.status !== 1) {
    return next(new AppError("Account is inactive", 403));
  }

  /**
   * Generate JWT Token
   */
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    },
  );

  /**
   * Success Response
   */
  return res.status(200).json({
    success: true,
    message: "Login successful",

    token,

    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  });
});
