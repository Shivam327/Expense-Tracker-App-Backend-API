const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../middleware/auth");
const { User } = require("../models");
const router = express.Router();

router.post("/login", async (request, response) => {
  const { username, password: user_pass } = request.body;
  const { id, password } = await User.findOne({ where: { username } });

  if (user_pass === password) {
    const authtoken = jwt.sign(id, JWT_TOKEN);

    response.send({
      success: true,
      token: authtoken,
    });
  } else {
    response.send({ success: false, message: "Username/Password is invalid" });
  }
});

module.exports = router;
