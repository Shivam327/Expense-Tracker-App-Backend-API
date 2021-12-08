exports.getUserDetails = (user) => {
  let userDetail = {
    role_id: user.role_id,
    userId: user.id,
    role: user.role_name,
  };
  return userDetail;
};
