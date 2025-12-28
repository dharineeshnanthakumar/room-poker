let existingRooms = new Set();
const path = require("path");
const joinRoom = (req, res) => {};

const createRoom = (req, res) => {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  existingRooms.add(code);
  res.json({ roomCode: code });
};

const lobby = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/lobby.html"));
};

module.exports = { joinRoom, createRoom, existingRooms, lobby };
