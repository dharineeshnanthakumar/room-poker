let existingRooms = new Set();

const joinRoom = (req, res) => {};

const createRoom = (req, res) => {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  existingRooms.add(code);
  res.json({ roomCode: code });
};

module.exports = { joinRoom, createRoom, existingRooms };
