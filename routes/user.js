const express = require("express");
const User = require("../models/user");

const app = express();

app.get("/user", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/user", (req, res) => {
  let user = new User({
    role: "ORGANIZER",
    status: true,
    nickName: "leo",
    firstName: "leonardo",
    lastName: "gonzalez",
    password: "12345678",
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      user: userDB,
    });
  });
});

module.exports = app;
