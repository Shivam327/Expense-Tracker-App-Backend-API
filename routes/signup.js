const express = require("express");
const { sequelize, User } = require("../models");
const { SignupSchema, validate } = require("../middleware/validation");
const router = express.Router();

router.post("/signup", validate(SignupSchema), async (request, response) => {
  const { username, password, role_id } = request.body;

  const userExits = await User.findOne({ where: { username } });
  //If exits then Object is Returned and (Object is not Equal to null) So True is Returned
  if (userExits !== null) {
    return response.status(400).send({
      success: false,
      message: `Username ${username} is already present`,
    });
  } else {
    try {
      await User.create({
        username: username.toLowerCase(),
        password: password.toLowerCase(),
        role_id,
      });
      return response.status(201).send({
        success: true,
      });
    } catch (error) {
      return response.status(500);
    }
  }
});
module.exports = router;
