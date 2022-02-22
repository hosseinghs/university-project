const express = require("express");
const router = express.Router();

router.get("/getArticles", async (req, res) => {
  return res.status(200).send("okaye");
});

module.exports = router;
