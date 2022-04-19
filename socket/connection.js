const values = require("./enums");
module.exports = (io) => {
  io.on(values.CONNECTION, (socket) => {
    console.log("new user connected");
    require("./room")(io, socket);
  });

  io.on(values.DISCONNECTION, (res) => {
    console.log(res);
    console.log("new user connected");
  });
};
