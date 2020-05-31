const express = require("express");
var app = express();

app.use(require("./user"));
app.use(require("./login"));
app.use(require("./tournament"));
app.use(require("./team"));
app.use(require("./category"));
app.use(require("./award"));

module.exports = app;
