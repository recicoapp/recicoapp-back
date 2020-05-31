const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let teamSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  nickName: {
    type: String,
    required: [true, "nick is required"],
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: Buffer,
    required: false,
  },
  organizerUserId: {
    type: String,
    required: [true, "userId is required"],
  },
  tournamentId: {
    type: String,
    required: [true, "tournamentId is required"],
  },
  leaderUserId: {
    type: String,
    required: false,
  },
  leaderNick: {
    type: String,
    required: false,
  },
  leaderPassword: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Team", teamSchema);
