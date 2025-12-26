const express = require("express");
const router = express.Router();

const roomController = require("../controllers/controller");
router
  .route("/room")
  .post(roomController.createRoom)
  .get(roomController.joinRoom);
module.exports = router;
