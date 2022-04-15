const express = require("express");
const app = express();
const session = require("express-session");
app.listen(1000);
require("./utils/db")();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
  })
);

const clientRegisterRoutes = require("./routes/client/register");
app.use("/client/register", clientRegisterRoutes);

const adminArticlesRoutes = require("./routes/admin/articles");
app.use("/admin/articles", adminArticlesRoutes);

const adminLoginRoutes = require("./routes/admin/login");
app.use("/admin/login", adminLoginRoutes);
