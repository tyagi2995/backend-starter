const Joi = require("joi");

exports.dummy = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  // auth: Joi.string().required(),
});
