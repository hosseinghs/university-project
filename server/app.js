const express = require("express");
const cores = require("cors");
const app = express();

app.use(
  cores({
    origin: "*",
  })
);

const port = process.env.PORT || 1000;

app.use(express.static("public"));
app.use(express.json());

app.listen(port);
