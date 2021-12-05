const express = require("express");
const { verifyToken } = require("../middleware/auth");
const { Expense } = require("../models");
const { ExpenseSchema, validateExpense } = require("../middleware/validation");
const router = express.Router();

router.post(
  "/expense",
  verifyToken,
  validateExpense(ExpenseSchema),
  async (request, response) => {
    const { title, amount, date } = request.body;

    try {
      let expense = await Expense.create({ title, amount, date });
      return response.status(201).send({
        status: true,
        message: `Expense with ${expense.id} created successfully`,
      });
    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }
);

router.get("/expense/summary", async (request, response) => {
  const { id } = request.body;
  if (!id)
    return response.send({ Error: "Please Put all of input Field Proper" });
  let summary = await Expense.findOne({ where: { id } });

  if (summary !== null) {
    let { title, amount, date } = summary;
    response.send({ title, amount, date });
  } else {
    return response.status(500);
  }
});
router.get("/expense/adminsummary", async (request, response) => {
  let summary = await Expense.findAll();

  if (summary !== null) {
    response.send(summary);
  } else {
    return response.status(500);
  }
});

module.exports = router;
