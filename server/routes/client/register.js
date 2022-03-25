const express = require("express");
const router = express.Router();
const sql = require("mssql");

router.post("/newUser", async (req, res) => {
  const { firstName, lastName, birthDate, phoneNumber, email } = req.body;
  const alreadyExistingPhoneNumSqlRes =
    await sql.query`SELECT * FROM users WHERE phoneNumber = ${phoneNumber}`;
  if (alreadyExistingPhoneNumSqlRes.recordset[0])
    return res
      .status(400)
      .send({ success: false, des: "شماره ی تلفن تکراری است! وارد شوید!" });
  const alreadyExistingPhoneEmailSqlRes =
    await sql.query`SELECT * FROM users users WHERE email = ${email}`;
  if (alreadyExistingPhoneEmailSqlRes.recordset[0])
    return res
      .status(400)
      .send({ success: false, des: "ایمیل تکراری است! وارد شوید!" });

  await sql.query`INSERT INTO users ( firstName , lastName , email , phoneNumber , birthDate , joinedAt ) VALUES (${firstName},${lastName},${email},${phoneNumber},${birthDate},${new Date().toISOString()})`,
    (err, res) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res
        .status(200)
        .send({ success, des: "ثبت نام با موفقیت انجام شد!" });
    };
});

module.exports = router;
