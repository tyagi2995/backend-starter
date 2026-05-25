exports.postCheck = (schema) => {
  return (req, res, next) => {
    const postdata = { ...req.body };

    const { error, value } = schema.validate(postdata, {
      abortEarly: false,
      stripUnknown: true,
    });

    // Validation Passed
    if (!error) {
      req.body = value;
      return next();
    }

    // Format Errors
    const errors = {};

    error.details.forEach((detail) => {
      const field = detail.path[0];

      errors[field] = detail.message
        .replace(/"/g, "")
        .replace(/^./, (str) => str.toUpperCase());
    });

    return res.status(422).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  };
};
