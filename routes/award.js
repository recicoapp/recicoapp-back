const express = require("express");
const Award = require("../models/award");

const app = express();

app.post("/award", (req, res) => {
  let body = req.body;

  let award = new Award({
    position: body.position,
    name: body.name,
    description: body.description,
    tournamentId: body.tournamentId,
    categoryId: body.categoryId,
  });

  award.save((err, awardDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      award: awardDB,
    });
  });
});

module.exports = app;
