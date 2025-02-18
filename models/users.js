const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  name: String,
  address: String,
  phone: String,
  role: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model("User", userSchema);
