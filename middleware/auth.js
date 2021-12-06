var jwt = require("jsonwebtoken");
const JWT_TOKEN = "mykey@1234";
const { getUserById } = require("../utils/query");

const verifyToken = async (request, response, next) => {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"] ||
    request.headers.authorization.split(" ")[1];

  if (!token) {
    return response.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    let userId = jwt.verify(token, JWT_TOKEN);

    let user = await getUserById(userId);
    console.log(user);
    if (!user) {
      return response.status(401).send({
        success: false,
        message: "Unauthorized",
      });
    }
    let userDetail = {
      role_id: user.role_id,
      userId: user.id,
      role: user.role_name,
    };
    console.log("User Detial is:", userDetail);

    request.userDetail = userDetail;
  } catch (err) {
    console.log(err);
    return response.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }

  return next();
};

module.exports = { verifyToken, JWT_TOKEN };
// let [user, metaData] = sequelize.query(
//   "SELECT u.*, r.name AS role_name FROM users u INNER JOIN roles r ON(r.id = u.role_id)"
// );
// // let user  = userservice.findbyid(userId);
// let userDetail = {
//   user_id: userId,
//   role_id: 2,
//   role: "user",
// };
