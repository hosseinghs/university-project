const express = require("express");
const router = express.Router();

router.get("/getArticels", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
