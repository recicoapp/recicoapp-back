var express = require("express");
var app = express();
const { config } = require("./config");

app.get("/", function (req, res) {
  res.send("GlobHack 2020 - home");
});

app.get("/test", function (req, res) {
  res.send("GlobHack 2020 - get");
});
app.post("/post", function (req, res) {
  res.send("GlobHack 2020 - post");
});

app.listen(config.port, function () {
  console.log(`happy code :D`);
});
