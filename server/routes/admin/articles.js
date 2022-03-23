const express = require("express");
const router = express.Router();
const sql = require("mssql");
const checkToken = require("../../middleware/auth");

router.get("/category", checkToken, async (_, res) => {
  const sqlRes = await sql.query("SELECT * FROM category");
  const categoryList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: categoryList });
});

router.post("/create", checkToken, async (req, res) => {
  const { title, categoryId, createdDate, author, text } = req.body;
  await sql.query`INSERT INTO article ( title , categoryId , author , date , text ) VALUES (${title},${categoryId},${author},${createdDate},${text})`,
    (err, res) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res.send({ success: true, des: "با موفقیت افزوده شد!" });
    };
});

router.get("/get", checkToken, async (req, res) => {
  const { type } = req.query;
  const allArticlesType = 2;
  const findAllArticles = "SELECT * FROM article";
  const findPublishedOrUnPublishedArticles = `SELECT * FROM article WHERE isPublished = ${type}`;
  const sqlRes =
    +type === allArticlesType
      ? await sql.query(findAllArticles)
      : await sql.query(findPublishedOrUnPublishedArticles);
  const articlesList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: articlesList });
});

router.get("/changePublishmentState", (req, res) => {
  const { id } = req.query;
  const resSql = sql.query`SELECT * FROM article WHERE id === ${id}`;
  console.log(resSql);
  return res.status(200).send(success);
});

module.exports = router;
