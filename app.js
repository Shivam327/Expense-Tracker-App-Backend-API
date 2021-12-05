const express = require("express");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { sequelize, User } = require("./models");
//Routes
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const roleRoute = require("./routes/role");
const expenseRoute = require("./routes/expense");

dotenv.config({ path: "./env" });
const app = express();
const port = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(loginRoute);
app.use(userRoute);
app.use(roleRoute);
app.use(expenseRoute);

app.get("/", (request, response) => {
  response.send("Home Working");
});
app.use((request, response, next) => {
  response.status(404).send("Error 404");
});
// app.listen(port, async () => {
//   sequelize.sync({ alter: true }), console.log("Database Connected");
//   console.log(`App is running on Port ${port}`),
//     console.log("------------App Started--------------");
// });
app.listen(port, async () => {
  sequelize.authenticate(), console.log("Database Connected");
  console.log(`App is running on Port ${port}`),
    console.log("------------App Started--------------");
});
