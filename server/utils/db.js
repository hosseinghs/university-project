const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/chetor")
    .then((res) => console.log("connected !"))
    .catch((err) => console.log("ERROR : ", err));
};
