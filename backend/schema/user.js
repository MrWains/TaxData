const mongoose = require("mongoose");

const User = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String,
  created: Date,
});

module.exports = mongoose.model("User", User);
