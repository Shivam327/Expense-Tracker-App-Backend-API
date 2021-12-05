const express = require("express");
const { Role } = require("../models");
const router = express.Router();

router.post("/role", async (request, response) => {
  const { name } = request.body;
  if (!name)
    return response.send({ Error: "Please Put name of input Field Proper" });
  //Checking if Entry of variable is there or Not
  const userExits = await Role.findOne({ where: { name } });
  //If exits then Object is Returned and (Object is not Equal to null) So True is Returned
  if (userExits !== null) {
    return response.status(400).send({
      success: false,
      message: `Role with ${name} is already present`,
    });
  }

  if (name === "user" || name === "admin") {
    try {
      const { id } = await Role.create({ name: name.toLowerCase() });
      return response.status(201).send({
        success: true,
        message: "Role created successfully",
        id,
      });
    } catch (error) {
      return response.status(500);
    }
  } else {
    return response.send({
      success: false,
      message: `Role ${name} is invalid`,
    });
  }
});

module.exports = router;
