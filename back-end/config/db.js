import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://manoj:manoj@testdatabase.e058spu.mongodb.net/?retryWrites=true&w=majority&appName=testDatabase").then(()=>console.log("DB connected"));
}