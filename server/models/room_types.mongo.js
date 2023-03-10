const mongoose = require("mongoose");

const typeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required: true,
    },
    total_rooms:{
        type: Number,
        required: true,
    },
})
// const room_typeSchema = new mongoose.Schema({
// 	room_type:{
//         type:typeSchema,
//         required:true,
//     }
// });

const room_type = mongoose.model("RoomType", typeSchema);

module.exports = room_type;