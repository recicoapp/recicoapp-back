const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let awardSchema = new Schema({
  position: {
    type: Number,
    required: [true, "position is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  description: {
    type: String,
    required: false,
  },
  tournamentId: {
    type: String,
    required: [true, "tournamentId is required"],
  },
  categoryId: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Award", awardSchema);
