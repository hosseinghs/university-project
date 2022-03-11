const express = require("express");
const app = express();
app.listen(1000);
require("./utils/db")();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const adminArticelsRoutes = require("./routes/admin/articels");
app.use("/admin/category", adminArticelsRoutes);

const adminLoginRoutes = require("./routes/admin/login");
app.use("/admin/login", adminLoginRoutes);