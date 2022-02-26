const express = require("express");
const router = express.Router();

router.post("/createArticle", (req, res) => {
  return res.status(200).send("ok");
});



module.exports = router;
