const express = require("express");
const router = express.Router();

router.get("/getArticels", (req, res) => {
  return res.status(200).send("ok");
});

module.exports = router;
