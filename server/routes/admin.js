const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/createArticle", (req, res) => {
  console.log(req, res);
});

router.post("/login", async (req, res) => {
  const admin = {
    userName: "hghs",
    password: "qazqaz",
  };
  const { userName, password } = req.body;
  if (!(userName === admin.userName && password === admin.password))
    res
      .status(400)
      .send({ success: false, des: "رمزعبور یا نام کاربری اشتباه است" });
  const token = jwt.sign({ userName, password }, "secret", {
    noTimestamp: false,
    expiresIn: "1h",
  });
  res
    .status(200)
    .send({ res: token, success: true, des: "با موفیقت وارد شدید" });
});

module.exports = router;
