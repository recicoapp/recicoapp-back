require("./config/index");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//global config of routes
app.use(require("./routes/index"));

//database connect
mongoose.connect(
  process.env.URLDB,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("Se ha conectado a la BD");
  }
);

//server port start
app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto", process.env.PORT);
});
