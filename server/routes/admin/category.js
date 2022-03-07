const express = require("express");
const router = express.Router();
const sql = require("mssql");

router.get("/get", async (_, res) => {
  const categoryList = await sql.query("SELECT * FROM category");
  res.status(200).send({ success: true, res: categoryList });
});

router.post("/create", async (req, res) => {
  const { categoryName } = req.body;
  console.log(categoryName);
  return "";
  // const categoryList = await sql.query("SELECT * FROM category");
  // res.status(200).send({ success: true, res: categoryList });
});

module.exports = router;