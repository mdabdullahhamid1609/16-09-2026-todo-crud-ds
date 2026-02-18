import mongoose from "mongoose";
const url = "mongodb+srv://abdullahhamid1609_db_user:Hamid123@cluster16-02.gb0kz6e.mongodb.net/?appName=Cluster16-02"

export async function dbConnect() {
    try {
        await mongoose.connect(url)
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("mongo db not connected", error)
    }
    
}