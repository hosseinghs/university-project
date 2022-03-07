const express = require("express");
const app = express();
app.listen(1000);
require("./utils/db")();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const adminCategoryRoutes = require("./routes/admin/category");
app.use("/admin/category", adminCategoryRoutes);