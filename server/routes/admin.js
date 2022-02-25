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
  if (!(admin.userName === "hghs" && admin.password === "qazqaz"))
    res.status(400).send({ success: false, des: "با موفقیت وارد شدید!" });
});

module.exports = router;
