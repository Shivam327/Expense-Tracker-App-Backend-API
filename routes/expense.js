const express = require("express");
const { verifyToken } = require("../middleware/auth");
const { Expense } = require("../models");
const { ExpenseSchema, validate } = require("../middleware/validation");
const { hasRole } = require("../middleware/role");
const { getUserExpenseByID, getadminExpense } = require("../utils/query");
const { userSummaryObj, adminSummaryObj } = require("../utils/objCreate");
const router = express.Router();

router.post(
  "/expense",
  verifyToken,
  hasRole(["user"]),
  validate(ExpenseSchema),
  async (request, response) => {
    let { title, amount, date } = request.body;

    date = date.split("/").reverse().join("/");
    date = date.replace(/\//g, "-");
    let dateObj = new Date(date);
    let weekDay = dateObj.getDay();
    if (weekDay === 0) weekDay = 7;
    try {
      let expense = await Expense.create({
        title,
        amount,
        date,
        weekDay,
        user_id: request.userDetail.userId,
      });
      return response.status(201).send({
        status: true,
        message: `Expense with id ${expense.id} created successfully`,
      });
    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }
);

router.get("/expense/summary", verifyToken, async (request, response) => {
  const user_id = request.userDetail.userId;
  if (user_id === 1) {
    let result = await getadminExpense();
    let summary = adminSummaryObj(result);
    response.status(200).send(result);
  }

  let result = await getUserExpenseByID(user_id);
  const summary = userSummaryObj(result);
  if (result !== null) {
    response.status(200).send(summary);
  } else {
    return response.status(500);
  }
});

module.exports = router;
