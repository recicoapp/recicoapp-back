const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  label: {
    type: String,
    required: [true, "label is required"],
  },
  description: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: [true, "color is required"],
  },
  tournamentId: {
    type: String,
    required: [true, "competitionId is required"],
  },
  quantity: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("Category", categorySchema);
