const express = require("express");
const router = express.Router();
const sql = require("mssql");
const checkToken = require("../../middleware/auth");

router.get("/", checkToken, async (_, res) => {
  const sqlRes = await sql.query("SELECT * FROM category");
  const categoryList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: categoryList });
});

router.post("/create", checkToken, async (req, res) => {
  const { title, categoryId, createdDate, author, text } = req.body;

  sql.query`INSERT INTO article ( title , categoryId , author , date , text ) VALUES (${title},${categoryId},${author},${createdDate},${text})`,
    (err, res) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res.send({ success: true, des: "با موفقیت افزوده شد!" });
    };
});

module.exports = router;
