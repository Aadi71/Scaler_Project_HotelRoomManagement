const express = require("express");
const guestRouter = express.Router();

const { recommendRoom, addGuest } = require("../controllers/guest.controller");

guestRouter.post("/recommend", recommendRoom);
guestRouter.post("/", addGuest);

module.exports = guestRouter;