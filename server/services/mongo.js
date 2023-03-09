const mongoose = require("mongoose");

const MONGO_URL =
	"mongodb+srv://aadi:aj123456@cluster0.mm0ylw0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
	console.log("mongodb is ready");
});

mongoose.connection.on("error", (err) => {
	console.error(err);
});

async function mongoConnect() {
	await mongoose.connect(process.env.MONGO || MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = {
	mongoConnect,
	mongoDisconnect,
};