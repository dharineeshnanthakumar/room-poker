var socket = io();

socket.on("room-created", (code) => {
  console.log(code);
});

socket.on("error", (msg) => {
  console.log(msg);
});

document.getElementById("joinRoom").addEventListener("click", () => {
  const roomCode = document.getElementById("roomID").value;
  socket.emit("join-room", roomCode);
});

document.getElementById("createRoom").addEventListener("click", () => {
  socket.emit("create-room");
});
