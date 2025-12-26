const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const roomController = require("./controllers/controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(require("./routes/routes"));
roomController.initSocket(io);

server.listen(5000, () => {
  console.log("server running on port 5000");
});
