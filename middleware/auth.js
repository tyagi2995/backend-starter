const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer "))
    return next(new AppError("Unauthorized", 401));

  try {
    req.admin = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    next(new AppError("Invalid or expired token", 401));
  }
};
