const express = require("express");
const router = express.Router();
const sql = require("mssql");

router.post("/", async (req, res) => {
  const { phoneNumber, password } = req.body;
  console.log(phoneNumber, password);
  //   const categoryList = await sql.query("SELECT * FROM category");
  return res.status(200).send({ success: true, res: "" });
});

module.exports = router;
