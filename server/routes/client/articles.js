const { application } = require("express");
const express = require("express");
const router = express.Router();
const sql = require("mssql");
const checkToken = require("../../middleware/auth");

router.get("/category", checkToken, async (_, res) => {
  const sqlRes = await sql.query("SELECT * FROM category");
  const categoryList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: categoryList });
});

router.get("/get", checkToken, async (req, res) => {
  const { type } = req.query || 2;
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
  return res.status(200).send(success);
});

router.get("/singleArticle", checkToken, async (req, res) => {
  const { id } = req.query;
  const sqlRes = await sql.query`SELECT * FROM article WHERE id = ${id}`;
  return res.status(200).send({ success: true, res: sqlRes.recordsets[0][0] });
});

router.get("/latestArticles", checkToken, async (_, res) => {
  // returns last 5 articles
  const sqlRes = await sql.query`SELECT *
    FROM article
    WHERE  id <= IDENT_CURRENT('article')
    AND id >= IDENT_CURRENT('article') - 5
    `;
  return res.status(200).send({ res: sqlRes, success: true });
});

router.get("/getArticelsWithCategory", checkToken, async (req, res) => {
  const id = req.query.category;
  if (!id) return res.status(400).send({ success: false });
  const sqlRes =
    await sql.query`SELECT * FROM article WHERE categoryId = ${id}`;
  const _res = sqlRes.recordset;
  return res.status(200).send({ res: _res, success: true });
});

module.exports = router;
