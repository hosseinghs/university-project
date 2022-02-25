const express = require("express");
const router = express.Router();

router.get("/createArticle", (req, res) => {
  console.log(req, res);
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  if (!(userName === "hghs" && password === "qazqaz"))
    res.status(400).send({ success: false, des: "با موفقیت وارد شدید!" });
});

module.exports = router;
