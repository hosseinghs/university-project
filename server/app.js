var express = require("express");
require("./utils/db")();
var indexRouter = require("./routes/index");

var app = express();

app.use(express.json());

app.use("/", indexRouter);

module.exports = app;
