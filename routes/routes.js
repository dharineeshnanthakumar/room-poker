const express = require("express");
const router = express.Router();

const roomController = require("../controllers/controller");
router.route("/room").get(roomController.createRoom);
router.route("/room/:roomCode").get(roomController.lobby);

module.exports = router;
