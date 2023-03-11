const express = require("express");
const guestRouter = express.Router();

const {
	recommendRoom,
	addGuest,
	editGuest,
	deleteGuest,
	getAllGuests,
} = require("../controllers/guest.controller");

guestRouter.get("/", getAllGuests);
guestRouter.post("/recommend", recommendRoom);
guestRouter.post("/", addGuest);
guestRouter.put("/:id", editGuest);
guestRouter.delete("/:id", deleteGuest);
module.exports = guestRouter;