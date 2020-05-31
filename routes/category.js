const express = require("express");
const Category = require("../models/category");
const { verifyToken } = require("../middlewares/authentication");

const app = express();

app.put("/category/:id", [verifyToken], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Category.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, categoryDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        category: categoryDB,
      });
    }
  );
});

module.exports = app;
