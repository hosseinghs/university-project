const jwt = require("jsonwebtoken");

function createToken(user) {
  const token = jwt.sign(user, "secret", {
    noTimestamp: false,
    expiresIn: "1h",
  });
  return token;
}

exports.createToken = createToken;
