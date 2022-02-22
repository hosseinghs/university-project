const express = require("express");
const router = express.Router();

router.post("createPost", async (req, res) => {
  //   const post = req.body;
});

router.put("editPost", async (req, res) => {
  return res.status(200);
});

module.exports = router;
