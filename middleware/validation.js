const joi = require("joi");

exports.SignupSchema = joi.object({
  username: joi.string().alphanum().min(3).max(10).required(),
  password: joi.string().min(8).max(15).required(),
  role_id: joi.number().optional(),
});

exports.ExpenseSchema = joi.object({
  title: joi.string().min(3).max(10).required(),
  amount: joi.number().min(1).max(1000).required(),
  date: joi.string().required(),
});

exports.validate = (schema) => (request, response, next) => {
  const { error } = schema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    return response.send({
      success: false,
      message: error.details[0].message,
    });
  }
  next();
};
