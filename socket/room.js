const values = require("./enums");
module.exports = (io, socket) => {
  socket.on(values.ROOM, (room, user) => {
    socket.join(room);
    socket.room = room;
    socket.user = user;
    io.to(room).emit(values.NEW_USER, user);
  });

  socket.on(values.NEW_MSG, async (msg, user) => {
    const sendingTime = Date.now();
    io.to(roomId).emit(values.PUBLISH_MSG, {
      msgData: { msg, createdAt: sendingTime },
      user,
    });
  });
};
