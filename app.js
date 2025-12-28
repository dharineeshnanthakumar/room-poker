const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use(require("./routes/routes"));
require("./sockets/roomSockets")(io);

server.listen(5000, () => {
  console.log("server running on port 5000");
});
