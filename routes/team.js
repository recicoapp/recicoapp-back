const express = require("express");
const bcrypt = require("bcrypt");
const Team = require("../models/team");
const Category = require("../models/category");
const User = require("../models/user");
const { verifyToken } = require("../middlewares/authentication");

const app = express();

app.post("/team", [verifyToken], (req, res) => {
  let body = req.body;

  let bitmap = new Buffer.from(body.image, "base64");

  let team = new Team({
    name: body.name,
    nickName: body.nickName,
    description: body.description,
    image: bitmap,
    organizerUserId: body.organizerUserId,
    tournamentId: body.tournamentId,
  });

  let user = new User({
    role: "LEADER",
    nickName: body.leaderNick,
    password: bcrypt.hashSync(body.leaderPassword, 10),
  });

  team.save((err, teamDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    user.save((err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Category.find({ tournamentId: body.tournamentId }).exec(
        (err, categories) => {
          categories.forEach((categoryItem) => {
            console.log(categoryItem);

            let category = new Category({
              name: categoryItem.name,
              label: categoryItem.label,
              description: categoryItem.description,
              color: categoryItem.color,
              tournamentId: categoryItem.tournamentId,
              teamId: teamDB._id,
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
        }
      );

      let base64data = team.image.toString("base64");
      res.json({
        ok: true,
        team: {
          _id: teamDB._id,
          name: teamDB.name,
          description: teamDB.description,
          image: base64data,
          organizerUserId: teamDB.organizerUserId,
          tournamentId: teamDB.tournamentId,
          leaderUserId: userDB._id,
        },
      });
    });
  });
});

module.exports = app;
