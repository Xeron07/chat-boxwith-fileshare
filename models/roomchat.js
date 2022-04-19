const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  roomId: { type: String, unique: true },
  name: { type: String, default: "" },
  user: { type: Array },
  chat: [
    {
      timeStamp: { type: Date, default: "" },
      msg: { type: String },
      userId: { type: String },
      file: { type: String },
    },
  ],
  token: { type: String },
});

module.exports = mongoose.model("chats", chatSchema);
