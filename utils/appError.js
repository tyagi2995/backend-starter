class AppError extends Error {
  constructor(message, statusCode = 500, errorData = null) {
    super(message);

    this.statusCode = statusCode;
    // this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.success = false;
    this.errorData = errorData;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
