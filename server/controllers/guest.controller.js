const guestDatabase = require("../models/guest.mongo");
const roomDatabase = require("../models/room.mongo");
const room_type = require("../models/room_types.mongo");

const recommendRoom = async (req, res) => {
	let { room_type, start_time, end_time } = req.body;
	if (typeof start_time === "string" || typeof end_time === "string") {
		start_time = new Date(start_time);
		end_time = new Date(end_time);
	}
	// console.log(req.body);
	const guestRooms = await guestDatabase.find({
		room_type: room_type,
	});



	if (guestRooms.length === 0) {
		//all rooms available basically room was never alloted

		const availableRooms = await roomDatabase.find({
			room_type: room_type,
		});

		res.send(availableRooms);
	} else {
		const cancelledRooms = [];
		// console.log("in else");

		for (let i = 0; i < guestRooms.length; i++) {
			const room = guestRooms[i];
			//>= room.start_time && start_time
			console.log(
				typeof room.start_time,
				typeof start_time,
				start_time.getTime()
			);
			console.log(room.end_time.getTime(), start_time.getTime());
			if (start_time <= room.end_time) {
				console.log("less than");
			}
			if (room.start_time <= end_time) {
				console.log("true than");
			}

			if (start_time <= room.end_time && room.start_time <= end_time) {
				console.log("collide");
				if (!cancelledRooms.includes(room.room_number)) {
					console.log("pushed");
					cancelledRooms.push(room.room_number);
				}
			}
		}

		console.log(cancelledRooms);

		const allRooms = await roomDatabase.find({
			room_type: room_type,
		});

		const availableRooms = allRooms.filter(
			(room) => !cancelledRooms.includes(room.room_number)
		);





		res.send(availableRooms);
	}
};

const addGuest = async (req, res) => {
	const { room_type, user_email, room_number, start_time, end_time,payment } = req.body;
	const guestRooms = await guestDatabase.find({
		room_type: room_type,
	});

	if(guestRooms === 0){
		const guest = await guestDatabase.create({
			room_type,
			user_email,
			room_number,
			start_time,
			end_time,
			payment,
			booking_time: new Date(),
	
		});
	
		res.send(guest);
	}

	else {
		const cancelledRooms = [];
		// console.log("in else");
		const st = new Date(start_time);
		const et = new Date(end_time);

		for (let i = 0; i < guestRooms.length; i++) {
			const room = guestRooms[i];
			//>= room.start_time && start_time
			console.log(
				typeof room.start_time,
				typeof start_time,
				st.getTime(),	
			);
			console.log(room.end_time.getTime(), st.getTime());
			if (st <= room.end_time) {
				console.log("less than");
			}
			if (room.start_time <= et) {
				console.log("true than");
			}

			if (st <= room.end_time && room.start_time <= et) {
				console.log("collide");
				if (!cancelledRooms.includes(room.room_number)) {
					console.log("pushed");
					cancelledRooms.push(room.room_number);
				}
			}
		}

		if(cancelledRooms.length !== 0) console.log("Collided");
		else{
			const guest = await guestDatabase.create({
				room_type,
				user_email,
				room_number,
				start_time,
				end_time,
				payment,
				booking_time: new Date(),
		
			});
		
			res.send(guest);
		}

	}
	res.send("Done");
};

const editGuest = async (req, res) => {
	const { room_type, user_email, room_number, start_time, end_time,payment } = req.body;

	try {
		const guest = await guestDatabase.updateOne(
			{
				_id: req.params.id,
			},
			{
				room_type,
				user_email,
				room_number,
				start_time,
				end_time,
				payment,
			}
		);

		res.send(guest);
	} catch (err) {
		console.log(err);
	}
};

const deleteGuest = async (req, res) => {
	try {
		console.log(req.params.id)
		const guest = await guestDatabase.deleteOne({
			_id: req.params.id,
		});

		res.send(guest);
	} catch (err) {
		console.log(err);
		res.status(501).send({ message: "Internal server error" });
	}
};

const getAllGuests = async (req, res) => {
	try {
		const guests = await guestDatabase.find({});
		res.send(guests);
	} catch (err) {
		console.log(err);
		res.status(501).send({ message: "Internal server error" });
	}
};

const checkDup = async (room_type, room_number, start_time, end_time) => {
	const guestRooms = await guestDatabase.find({
		room_type: room_type,
	});

	if (guestRooms.length === 0) {
		//all rooms available basically room was never alloted

		return false;
		// const availableRooms = await roomDatabase.find({
		// 	room_type: room_type,
		// });

		// res.send(availableRooms);
	} else {
		const cancelledRooms = [];
		// console.log("in else");

		for (let i = 0; i < guestRooms.length; i++) {
			const room = guestRooms[i];
			//>= room.start_time && start_time
			console.log(
				typeof room.start_time,
				typeof start_time,
				start_time.getTime()
			);
			console.log(room.end_time.getTime(), start_time.getTime());
			if (start_time <= room.end_time) {
				console.log("less than");
			}
			if (room.start_time <= end_time) {
				console.log("true than");
			}

			if (start_time <= room.end_time && room.start_time <= end_time) {
				console.log("collide");
				return true;
			}
		}

		return false;

		// const allRooms = await roomDatabase.find({
		// 	room_type: room_type,
		// });

		// const availableRooms = allRooms.filter(
		// 	(room) => !cancelledRooms.includes(room.room_number)
		// );





		// res.send(availableRooms);
	}
}

module.exports = { recommendRoom, addGuest, editGuest, deleteGuest ,getAllGuests};