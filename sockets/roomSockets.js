let io;
const { existingRooms } = require("../controllers/controller");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);

    socket.on("join-room", (roomCode) => {
      if (!existingRooms.has(roomCode)) {
        socket.emit("error", "Code doesnt exist");
        return;
      }
      socket.join(roomCode);
      console.log(`${socket.id} joined room ${roomCode}`);
    });
  });
};
