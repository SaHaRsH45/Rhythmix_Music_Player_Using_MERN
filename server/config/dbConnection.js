import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const connect = await mongoose.connect("mongodb+srv://hrishikeshhaz001:oWi7g2Fnn4QuR8h2@cluster0.o83baxj.mongodb.net/Rhythmix");
		console.log("DATABASE CONNECTED", connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
