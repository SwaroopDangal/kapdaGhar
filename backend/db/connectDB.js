import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected");
  } catch (error) {
    console.log("Error connecting mongo db", error.message);
  }
};

export default connectDB;
