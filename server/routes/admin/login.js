const express = require("express");
const router = express.Router();
const sql = require("mssql");
const { createToken } = require("../../utils/jwt");

router.post("/", async (req, res) => {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password)
    return res
      .status(400)
      .send({ success: false, des: "رمزعبور و یا شماره تلفن اشتباه است!" });
  const sqlRes = await sql.query(
    `SELECT * FROM admin where phoneNumber=${phoneNumber}`
  );
  const admin = sqlRes.recordsets[0][0];
  if (admin.password !== password)
    return res
      .status(400)
      .send({ success: false, des: "رمزعبور و یا شماره تلفن اشتباه است!" });
  const token = createToken(admin);
  return res.status(200).send({
    success: true,
    res: { admin, token },
    des: `${admin.firstName} ${admin.lastName} خوش آمدید`,
  });
});

module.exports = router;
