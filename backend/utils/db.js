import mongoose from "mongoose";

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.error("Database not Connected", error);
  }
};

export default dbconnect;
