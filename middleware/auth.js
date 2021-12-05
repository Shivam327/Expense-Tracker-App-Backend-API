var jwt = require("jsonwebtoken");
const JWT_TOKEN = "mykey@1234";

const verifyToken = (request, response, next) => {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"];
  console.log(token);

  if (!token) {
    return response.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    jwt.verify(token, JWT_TOKEN);
  } catch (err) {
    return response.status(401).send({
      success: false,
      message: "Unauthorized",
    });
  }
  return next();
};

module.exports = { verifyToken, JWT_TOKEN };
