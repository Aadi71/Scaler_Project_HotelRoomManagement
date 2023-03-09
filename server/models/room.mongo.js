const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
	room_type: {
		type: String,
		required: true,
	},
	user_email: {
		type: String,
		required: true,
	},
	room_number: {
		type: Number,
		required: true,
	},
	start_time: {
		type: Date,
		required: true,
	},
	end_time: {
		type: Date,
		required: true,
	},
    status: {
		type: Boolean,
		required: true,
	},
});

const room = mongoose.model("Room", roomSchema);

module.exports = room;