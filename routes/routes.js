const express = require("express");
const router = express.Router();

const { createRoom, joinRoom } = require("../controllers/controller");
router.route("/room").get(createRoom);
module.exports = router;
