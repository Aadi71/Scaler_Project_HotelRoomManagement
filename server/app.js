const express = require("express");
const app = express();
const cors = require("cors");

const roomDatabase = require('./models/room.mongo')
const a = Date()



// const userRouter = require("./routes/user.route");
// const orderRouter = require("./routes/order.route");
// const productRouter = require("./routes/product.route");
// const currentUserRouter = require("./routes/currentUser.route");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
	cors()
);

app.get("/hello",async(req,res)=>{
    
    const saved = await roomDatabase.create({
        "room_type":"A",
        "user_email":"efefefef",
        "room_number":100,
        "start_time":a,
        "end_time":a,
        "status":0,
    })
    console.log(saved)
    res.send("hello");
})

// app.use("/user", userRouter);
// app.use("/currentuser", currentUserRouter);
// app.use("/products", productRouter);
// app.use("/orders", validateUser, orderRouter);

module.exports = app;