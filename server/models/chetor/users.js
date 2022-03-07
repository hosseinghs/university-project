// const jwt = require("jsonwebtoken");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => v && v.length > 0,
//       message: "اسم حداقل باید 3 حرف باشد!",
//     },
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => v && v.length === 11,
//       message: "شماره ی تماس باید 11 رقمی باشد!",
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => v && v.length >= 6,
//       message: "رمزعبور باید حداقل 6 کاراکتر باشد!",
//     },
//   },
// });

// function generateToken(user) {
//   const payload = {
//     id: user._id,
//     phoneNumber: user.phoneNumber,
//     password: user.password,
//   };
//   const token = jwt.sign(payload, "secret", {
//     noTimestamp: false,
//     expiresIn: "1h",
//   });
//   return token;
// }
// const User = mongoose.model("User", userSchema);

// function validateUser(user) {
//   return User(user);
// }

// exports.validateUser = validateUser;
// exports.User = User;
// exports.generateToken = generateToken;
