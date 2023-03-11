const express = require("express");
const app = express();
const cors = require("cors");

const roomRouter = require("./routes/room.route");
const guestRouter = require("./routes/guest.route");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/rooms", roomRouter);
app.use("/guests", guestRouter);

// app.use("/user", userRouter);

module.exports = app;