import mongoose from "mongoose";

export async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("mongo db not connected", error)
    }
    
} 