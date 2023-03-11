const express = require("express");
const roomRouter = express.Router();

const { getRooms, allotRoom } = require("../controllers/room.controller");

roomRouter.get("/", getRooms);
// roomRouter.post("/", allotRoom);

module.exports = roomRouter;