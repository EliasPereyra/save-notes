import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGODB_URI || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);

    console.log("Database connected");
  } catch (e) {
    console.error("Error connecting to database", e);
  }
};
