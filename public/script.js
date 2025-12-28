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

document.getElementById("createRoom").addEventListener("click", async () => {
  const res = await fetch("/room", { method: "GET" });
  const data = await res.json();

  socket.emit("join-room", data.roomCode);
});
