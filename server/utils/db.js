const sql = require("mssql");

const sqlConfig = {
  user: "sa",
  password: "qazqaz",
  database: "chetor",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

module.exports = async function connectToDb() {
  try {
    await sql.connect(sqlConfig);
    console.log("Connected to DB");
  } catch (err) {
    console.log("DATABASE ERROR : ", err);
  }
};
