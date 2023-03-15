const express = require("express");
const roomRouter = express.Router();

const { getRooms, allotRoom,getRoomTypes } = require("../controllers/room.controller");


roomRouter.get("/", getRooms);
// roomRouter.get("/a/:k",(req,res)=>{
//     const a = req.params;

//     res.send({msg:a})
// })
// roomRouter.post("/", allotRoom);

roomRouter.get("/roomtypes", getRoomTypes);
module.exports = roomRouter;