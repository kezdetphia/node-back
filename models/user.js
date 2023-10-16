const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    surName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);







const User = mongoose.model("User", userSchema);

module.exports = User;
