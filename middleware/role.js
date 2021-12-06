exports.hasRole = (list) => {
  return function (req, res, next) {
    const userRole = req.userDetail.role;
    console.log("das", userRole);
    if (!list.includes(userRole)) {
      return res.status(403).json({
        error: "You are not capable of doing this,Sorry!",
      });
    }
    next();
  };
};
