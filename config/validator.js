const yup = require("yup");

function validate(data) {
  const userSchema = yup.object().shape({
    username: yup.string().required("username can't be null").min(3).max(50),
    email: yup.string().required("email can't be null").min(8).max(50),
    password: yup.string().required("password can't be null").min(8).max(50),
  });

  return userSchema.validate(data);
}
module.exports = validate;
