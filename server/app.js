const express = require("express");
const cores = require("cors");
const app = express();
const adminRoutes = require("./routes/admin");
app.use(
  cores({
    origin: "*",
  })
);

const port = process.env.PORT || 1000;

app.use(express.json());
app.use("/admin", adminRoutes);


app.listen(port);
