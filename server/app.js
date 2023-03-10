const express = require("express");
const app = express();
const cors = require("cors");


// const userRouter = require("./routes/user.route");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
	cors()
);

app.get("/hello",async(req,res)=>{

    res.send("hello");
})

// app.use("/user", userRouter);

module.exports = app;