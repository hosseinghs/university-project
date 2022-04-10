const jwt = require("jsonwebtoken");

module.exports = function checkToken(req, res, next) {
  const token = req.header("authorization");
  if (!token)
    return res
      .status(401)
      .send({ success: false, des: "لطفا دوباره وارد شوید!" });
  try {
    const code = token.split("bearer ")[1];
    if (code) {
      jwt.verify(code, "secret", (err, user) => {
        if (err)
          return res
            .status(403)
            .send({ success: false, des: "مجددا وارد شوید" });
        req.body.userId = user.id;
      });
      next();
    }
  } catch (ex) {
    res.status(401).send({ success: false, des: "Invalid token" });
  }
};
