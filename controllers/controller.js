let io;

const initSocket = (_io) => {
  io = _io;
  io.on("connection", (socket) => {
    console.log("a user is connected");
    const count = io.engine.clientsCount;
    console.log(count);
  });
};

const joinRoom = (req, res) => {
  res.send(req.query.roomNumber);
  console.log(req.query.roomNumber);
};

const createRoom = (req, res) => {
  res.send(req.body.roomNumber);
  console.log(req.body.roomNumber);
};

module.exports = { initSocket, joinRoom, createRoom };
