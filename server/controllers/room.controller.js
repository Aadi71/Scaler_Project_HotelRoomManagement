const roomDatabase = require("../models/room.mongo");

const getRooms = async (req, res) => {
    const { type } = req.query;
    const room = await roomDatabase.find({
        room_type: type,
    });

    res.send(room);
};

const allotRoom = async (req, res) => {
    const { room_type, user_email, room_number, start_time, end_time } = req.body;
    const room = await roomDatabase.findOne({
        room_number: room_number,
    });

    console.log(room);

    // const room = await roomDatabase.create({
    //     room_type,
    //     user_email,
    //     room_number,
    //     start_time,
    //     end_time,
    //     status: true,
    // });
    res.send(room);
};

module.exports = { allotRoom, getRooms };