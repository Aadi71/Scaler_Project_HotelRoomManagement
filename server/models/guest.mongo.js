const mongoose = require("mongoose");
const guestSchema = new mongoose.Schema({
	user_email: {
		type: String,
		required: true,
	},
	room_number: {
		type: Number,
		required: true,
	},
	room_type: {
		type: String,
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
	booking_time: {
		type: Date,
		required: true,
	},
});

const guest = mongoose.model("Guest", guestSchema);

module.exports = guest;