const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let tournamentSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  startDate: {
    type: Date,
    required: [true, "start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "end date is required"],
  },
  image: {
    type: Buffer,
    required: false,
  },
  userId: {
    type: String,
    required: [true, "userId is required"],
  },
  units: {
    type: String,
    required: [true, "units is required"],
  },
});

module.exports = mongoose.model("Tournament", tournamentSchema);
