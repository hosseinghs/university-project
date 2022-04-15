const express = require("express");
const app = express();
app.listen(1000);
require("./utils/db")();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const clientRegisterRoutes = require("./routes/client/register");
app.use("/client/register", clientRegisterRoutes);

const clientArticlesRoutes = require("./routes/client/articles");
app.use("/client/articles", clientArticlesRoutes);

const adminArticlesRoutes = require("./routes/admin/articles");
app.use("/admin/articles", adminArticlesRoutes);

const adminLoginRoutes = require("./routes/admin/login");
app.use("/admin/login", adminLoginRoutes);
