const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const app = express();

app.get("/user", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/user", (req, res) => {
  let body = req.body;
  let user = new User({
    role: body.role,
    nickName: body.nickName,
    firstName: body.firstName,
    lastName: body.lastName,
    password: bcrypt.hashSync(body.password, 10),
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
