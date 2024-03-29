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
  const { title, categoryId, author, text, htmlContent } = req.body;
  sql.query(
    `INSERT INTO article (title, categoryId, author, text, isPublished, htmlContent, img)
         VALUES ('${title}', '${categoryId}', '${author}', '${text}', '${true}' , '${htmlContent}' , '${null}');`,
    (err) => {
      console.log(err);
      if (err) return res.status(400).send({ success: false, des: err });
      return res
        .status(200)
        .send({ success: true, des: "با موفقیت افزوده شد!" });
    }
  );
});

router.post("/new-category", checkToken, async (req, res) => {
  const { cat } = req.body;
  sql.query(`INSERT INTO category (name) VALUES ('${cat}')`, (err) => {
    if (err)
      return res.status(400).send({ success: false, des: " عملیات ناموفق" });

    return res.status(200).send({ success: true, des: "با موفقیت اضافه شد!" });
  });
});

router.put("/edit", checkToken, async (req, res) => {
  const { id, title, categoryId, author, text, htmlContent } = req.body;
  sql.query(
    `UPDATE article SET title='${title}', categoryId = '${categoryId}', author = '${author}', text = '${text}', isPublished = '${true}' , htmlContent = '${htmlContent}' WHERE id = '${id}'`,
    (err) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res
        .status(200)
        .send({ success: true, des: "با موفقیت ویرایش شد!" });
    }
  );
});

router.get("/get", checkToken, async (req, res) => {
  const { type, start, end } = req.query;
  const allArticlesType = "2";
  let q = "";

  if (start && end) {
    if (type === allArticlesType)
      q = `SELECT * FROM article WHERE date BETWEEN '${start}' AND '${end}'`;
    else
      q = `SELECT * FROM article WHERE date BETWEEN '${start}' AND '${end}' isPublished = '${type}'`;
  } else {
    if (type === allArticlesType) q = "SELECT * FROM article";
    else q = `SELECT * FROM article WHERE isPublished = '${type}'`;
  }

  const sqlRes = await sql.query(q);
  const articlesList = sqlRes.recordsets[0];
  res.status(200).send({ success: true, res: articlesList });
});

router.delete("/delete", async (req, res) => {
  const { id } = req.query;
  sql.query(`DELETE FROM article WHERE id = '${id}'`, (err) => {
    if (err)
      res
        .status(400)
        .send({ success: false, des: "عملیات امکان پذیر نمی باشد!" });
    return res.status(200).send({ success: true, des: "با موفقیت حذف شد!" });
  });
});

router.get("/search", checkToken, async (req, res) => {
  const { query, start, end } = req.query;
  const sqlRes = sql.query`SELECT * FROM article WHERE date BETWEEN '${start}' AND '${end}'`;
  console.log(query, start, end);
  console.log(sqlRes);
  return res.status(200).send({ res: [] });
});

router.put("/changePublishmentState", checkToken, async (req, res) => {
  const { id, isPublished } = req.query;
  sql.query(
    `UPDATE article SET isPublished = '${!isPublished}' WHERE id = '${id}'`,
    (err) => {
      if (err)
        return res.status(400).send({ success: false, des: "عملیات ناموفق!" });
      return res.status(200).send({
        success: true,
        des: isPublished
          ? "مقاله با موفقیت از سایت خارج شد!"
          : "مقاله با موفقیت منتشر شد!",
      });
    }
  );
});

module.exports = router;
