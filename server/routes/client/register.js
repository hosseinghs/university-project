const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { createToken } = require("../../utils/jwt");

router.post("/newUser", async (req, res) => {
  const { firstName, lastName, birthDate, phoneNumber, email, password } =
    req.body;
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

  await sql.query`INSERT INTO users ( firstName , lastName , email , phoneNumber , birthDate , joinedAt , password ) VALUES (${firstName},${lastName},${email},${phoneNumber},${birthDate},${new Date().toISOString()},${password})`,
    (err, res) => {
      if (err) res.status(400).send({ success: false, des: err });
      return res
        .status(200)
        .send({ success, des: "ثبت نام با موفقیت انجام شد!" });
    };
});

router.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  const sqlRes =
    await sql.query`SELECT * FROM users WHERE phoneNumber = ${phoneNumber}`;
  const user = sqlRes.recordset[0];
  if (!user)
    return res
      .status(400)
      .send({ success: false, des: "کاربری با این مشخصات یافت نشد!" });
  console.log(user);

  if (user.password !== password)
    return res
      .status(400)
      .send({ success: false, des: "رمزعبور یا شماره تلفن اشتباه است!" });

  const token = createToken(user);
  return res.status(200).send({
    success: true,
    token,
    des: `${user.firstName} خوش آمدی!`,
    user: {
      fullName: user.firstName + " " + user.lastName,
      phoneNumber,
      jonedAt: user.jonedAt,
      email: user.email,
      birthDate: user.birthDate,
    },
  });
});

module.exports = router;
