const guestDatabase = require("../models/guest.mongo");
const roomDatabase = require("../models/room.mongo");

const recommendRoom = async (req, res) => {
    let { room_type, start_time, end_time } = req.body;
    if (typeof start_time === "string" || typeof end_time === "string") {
        start_time = new Date(start_time);
        end_time = new Date(end_time);
    }
    console.log(req.body);
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
    const { room_type, user_email, room_number, start_time, end_time } = req.body;

    const guest = await guestDatabase.create({
        room_type,
        user_email,
        room_number,
        room_type,
        start_time,
        end_time,
        booking_time: new Date(),
    });

    res.send(guest);
};

module.exports = { recommendRoom, addGuest };