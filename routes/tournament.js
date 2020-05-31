const express = require("express");
const Tournament = require("../models/tournament");
const Category = require("../models/category");

const app = express();

app.post("/tournament", (req, res) => {
  let body = req.body;

  let bitmap = new Buffer.from(body.image, "base64");

  let tournament = new Tournament({
    name: body.name,
    startDate: body.startDate,
    endDate: body.endDate,
    image: bitmap,
    userId: body.userId,
    units: body.units,
  });

  tournament.save((err, tournamentDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    body.categories.forEach((categoryItem) => {
      let category = new Category({
        name: categoryItem.name,
        label: categoryItem.label,
        description: categoryItem.description,
        color: categoryItem.color,
        tournamentId: tournamentDB.id,
      });

      category.save((err) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }
      });
    });

    let base64data = tournamentDB.image.toString("base64");
    res.json({
      ok: true,
      tournament: {
        _id: tournamentDB._id,
        name: tournamentDB.name,
        startDate: tournamentDB.startDate,
        endDate: tournamentDB.endDate,
        units: tournamentDB.units,
        image: base64data,
      },
    });
  });
});

module.exports = app;
