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
  const { title, categoryId, createdDate, author, text, htmlContent } =
    req.body;

  sql.query(
    `INSERT INTO article (title, categoryId, author, date, text, isPublished, htmlContent, img)
         VALUES ('${title}', '${categoryId}', '${author}', '${createdDate}', '${text}', '${true}' , '${htmlContent}' , '${null}');`,
    (err) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res
        .status(200)
        .send({ success: true, des: "با موفقیت افزوده شد!" });
    }
  );
});

router.get("/get", checkToken, async (req, res) => {
  const { type, start, end } = req.query;
  const allArticlesType = 2;
  let q = "";

  if (start && end) {
    if (type === allArticlesType) q = "SELECT * FROM article";
    else
      q = `SELECT * FROM article WHERE date BETWEEN ${start} AND ${end} isPublished = ${type}`;
  } else {
    if (type === allArticlesType) q = "SELECT * FROM article";
    else q = `SELECT * FROM article WHERE isPublished = ${type}`;
  }

  const sqlRes = await sql.query(q);
  const articlesList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: articlesList });
});

router.get("/changePublishmentState", (req, res) => {
  const { id } = req.query;
  const resSql = sql.query`SELECT * FROM article WHERE id === ${id}`;
  return res.status(200).send(success);
});

router.get("/search", checkToken, async (req, res) => {
  const { query, start, end } = req.query;
  const sqlRes = sql.query`SELECT * FROM article WHERE date BETWEEN '${start}' AND '${end}'`;
  console.log(query, start, end);
  console.log(sqlRes);
  return res.status(200).send({ res: [] });
});

module.exports = router;
