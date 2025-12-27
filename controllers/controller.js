let io;
let existingRooms = new Set();

const initSocket = (_io) => {
  io = _io;
  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);

    socket.on("create-room", () => {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      existingRooms.add(code);
      socket.join(code);
      console.log(`${socket.id} joined room ${code}`);
      socket.emit("room-created", code);
    });

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

const joinRoom = (req, res) => {
  // res.send(req.query.roomNumber);
  // console.log(req.query.roomNumber);
};

const createRoom = (req, res) => {
  // res.send(req.body.roomNumber);
  // console.log(req.body.roomNumber);
};

module.exports = { initSocket, joinRoom, createRoom, existingRooms };
