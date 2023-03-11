const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
	room_type: {
		type: String,
		required: true,
	},

	room_number: {
		type: Number,
		required: true,
	},
});

const room = mongoose.model("Room", roomSchema);

module.exports = room;