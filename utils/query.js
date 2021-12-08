const { sequelize } = require("../models");

const getUserById = async (id) => {
  try {
    const results = await sequelize.query(
      `SELECT u.*, r.name AS role_name FROM users u INNER JOIN roles r ON(r.id = u.role_id) where u.id = ${id}`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results[0];
  } catch (error) {
    console.log(error);
  }
};

const getUserExpenseByID = async (id) => {
  try {
    console.log("parameter id is ", id);
    const results = await sequelize.query(
      "SELECT weekDay, SUM(amount) as Sum FROM `expenses` WHERE user_id = " +
        id +
        " GROUP BY WEEKDAY",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};
const getadminExpense = async () => {
  try {
    const results = await sequelize.query(
      "SELECT user_id, `weekDay`, SUM(amount) as Sum FROM `expenses` GROUP BY WEEKDAY, user_id",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getUserById, getUserExpenseByID, getadminExpense };
