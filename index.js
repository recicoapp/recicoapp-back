var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("GlobHack 2020 - Be4Tech");
});
