const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String, default: null },
  email: { type: String, unique: true },
  mobileNumber: { type: String, default: "not given" },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("users", userSchema);
