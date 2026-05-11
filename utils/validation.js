const AppError = require("./appError");
// const Joi = require("joi");

exports.postCheck = (schema) => {
  return (req, res, next) => {
    let postdata = { ...req.body };
    // console.log({ postdata: req.body })
    // const { error, value } = schema.validate(postdata, { abortEarly: false });
    const { error, value } = schema.validate(postdata);

    if (error == undefined) {
      next();
    } else {
      //next(error);
      const message = error.details[0].message;

      // Return clean response
      return res.status(200).json({
        status: false,
        message: message,
      });
    }
  };
};
