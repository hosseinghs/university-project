const express = require("express");
const router = express.Router();
const sql = require("mssql");

router.post("/", async (req, res) => {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password)
    return res
      .status(400)
      .send({ success: false, des: "رمزعبور و یا شماره تلفن اشتباه است!" });
  console.log(phoneNumber, password);
  const user = await sql.query(
    `SELECT * FROM admin where phoneNumber=${phoneNumber}`
  );
  console.log(user.recordsets);
  return res.status(200).send({ success: true, res: user });
});

module.exports = router;
