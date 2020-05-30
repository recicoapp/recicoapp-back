var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("GlobHack 2020 - Be4Tech");
});

app.get("/test", function (req, res) {
  res.send("GlobHack 2020 - Be4Tech");
});

app.listen(3000, function () {
  console.log(`Run :)`);
});
