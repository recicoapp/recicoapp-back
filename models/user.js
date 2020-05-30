const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let validRoles = {
  values: ["ORGANIZER", "LEADER"],
  message: "{VALUE} there is not valid role",
};

let Schema = mongoose.Schema;

let userSchema = new Schema({
  role: {
    type: String,
    required: [true, "role is required"],
    enum: validRoles,
  },
  status: {
    type: Boolean,
    required: [true, "status is required"],
  },
  nickName: {
    type: String,
    unique: true,
    required: [true, "nick is required"],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, {
  message: "{PATH} must be unique",
});

module.exports = mongoose.model("User", userSchema);
